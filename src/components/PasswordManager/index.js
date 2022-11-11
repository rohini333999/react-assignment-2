import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import YourPasswords from '../YourPasswords'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
    searchInput: '',
    isChecked: false,
  }

  addNewPassword = event => {
    event.preventDefault()
    const {websiteInput, usernameInput, passwordInput} = this.state
    const generatePassword = {
      id: v4(),
      website: websiteInput,
      username: usernameInput,
      password: passwordInput,
    }

    this.setState(prev => ({
      passwordsList: [...prev.passwordsList, generatePassword],
      websiteInput: '',
      usernameInput: '',
      passwordInput: '',
    }))
  }

  handleWebsite = event => {
    this.setState({websiteInput: event.target.value})
  }

  handleUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  handlePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  handleSearch = event => {
    // this.setState({searchInput: event.target.value})
    const {passwordsList, searchInput} = this.state
    const filterPasswordsList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(event.target.value.toLowerCase()),
    )
    return filterPasswordsList
  }

  handleCheckbox = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  renderNoPasswordImage = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
      />
      <p>No Passwords</p>
    </div>
  )

  deletePasswordItem = deleteId => {
    const {passwordsList} = this.state
    const filterdPasswordList = passwordsList.filter(
      each => each.id !== deleteId,
    )
    this.setState({passwordsList: filterdPasswordList})
  }

  renderPasswordList = filterPasswordsList => {
    const {isChecked} = this.state

    return (
      <ul className="passwords-list">
        {filterPasswordsList.map(each => (
          <YourPasswords
            passwordDetails={each}
            key={each.id}
            checkBoxClicked={isChecked}
            deletePasswordItem={this.deletePasswordItem}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {
      websiteInput,
      usernameInput,
      passwordInput,
      searchInput,
      passwordsList,
    } = this.state

    return (
      <div className="app-container">
        <img
          className="app-image"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
        />
        <div className="add-password-container">
          <div className="add-password-image-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="add-password-image"
            />
          </div>
          <form className="create-password" onSubmit={this.addNewPassword}>
            <h1>Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.handleWebsite}
                value={websiteInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.handleUsername}
                value={usernameInput}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.handlePassword}
                value={passwordInput}
              />
            </div>
            <button className="add-button" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="show-password-container">
          <div className="search-password-container">
            <h1>Your Passwords</h1>
            <p>{passwordsList.length}</p>
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                className="search-image"
                alt="search"
              />
              <input
                type="search"
                placeholder="search"
                onChange={this.handleSearch}
                value={searchInput}
              />
            </div>
          </div>
          <hr />
          <div>
            <label>
              <input type="checkbox" onClick={this.handleCheckbox} /> Show
              Passwords
            </label>
          </div>
        </div>
        {passwordsList.length === 0
          ? this.renderNoPasswordImage()
          : this.renderPasswordList(passwordsList)}
      </div>
    )
  }
}

export default PasswordManager
