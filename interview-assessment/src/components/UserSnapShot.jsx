/**
 *  UserSnapShot
 */

/**
 *  Displays a users profile image and name
 */
const UserSnapShot = ({user}) => {
  return (
    <div>
      <img className="user-item-profile-img" src={user.avatar_url} />
      {/** Display the users name. If not provided user the login property value */}
      <span>{user.name ? user.name : user.login}</span>
    </div>
  )
};

export default UserSnapShot;