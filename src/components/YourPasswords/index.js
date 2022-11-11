import './index.css'

const YourPasswords = props => {
  const {passwordDetails, checkBoxClicked, deletePasswordItem} = props
  const {id, website, username, password} = passwordDetails

  const handleDelete = () => {
    deletePasswordItem(id)
  }

  const renderStarImage = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    </div>
  )

  return (
    <li>
      <div className="password-details-container">
        <div className="initial-container">
          <p>{website.slice(0, 1)}</p>
        </div>
        <div className="user-details">
          <p>{website}</p>
          <p>{username}</p>

          <p>{checkBoxClicked ? `${password}` : renderStarImage()}</p>
        </div>
        <button
          className="delete-button"
          type="button"
          onClick={handleDelete}
          testid="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default YourPasswords
