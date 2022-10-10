/**
 *  @file UserInfoItem
 */

/**
 *  Displays detail information of a user.
 */
const UserInfoItem = ({user}) => {

  return (
    <div>
      <div className="user-info-item-header">
        <img className="user-item-profile-img" src={user.avatar_url} />
        {/** Display the users name. If not provided user the login property value */}
        <span>{user.name ? user.name : user.login}</span>
      </div>
      <div className="user-info-item-details">
        {user.bio &&        
          <div>
            Bio: {user.bio}
          </div>
        }
        <div>
          <a href={user.html_url} target="blank">GitHub</a>
        </div>
      </div>
    </div>
  )
};

export default UserInfoItem;