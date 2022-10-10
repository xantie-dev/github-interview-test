/**
 *  @file UserDetailPage
 */
import UserInfoItem from "../components/UserInfoItem";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

/**
 *  Renders the user detail page.
 */
const UserDetailPage = () => {
  const { userLogin } = useParams();

  const [user, setUser] = useState(undefined);

  /**
   *  Fetch user details.
   */
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://api.github.com/users/${userLogin}`);
        setUser(response.data);
      }
      catch(err) {
        console.error(`Error fetching user details from ${userLogin}`)
      }
    }
    fetchUserDetails();

  }, [userLogin])

  return (
    <div>
      {user ? 
        <UserInfoItem user={user}  />
        :
        <div>Loading user information</div>
      }

    </div>
  )
};

export default UserDetailPage;