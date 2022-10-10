/**
 *  @file HomePage
 */
import {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UserInfoItem from '../components/UserInfoItem';
import UserSnapShot from '../components/UserSnapShot';
 
/**
 *  Renders the homepage.
 */
const HomePage = () => {
  const usersToSearch = ['joshatxantie', 'joeatxantie', 'nategurian'];

  const [userInfo, setUserInfo] = useState([]);

  /**
   *  Fetch information about specified users
   */
  useEffect(() => {
    const fetchUserInfo = async () => {
      const users = [];
      await Promise.all(usersToSearch.map(async (user) => {
        try {
          const response = await axios.get(`https://api.github.com/users/${user}`);
          users.push(response.data);
        }
        catch(err) {
          console.error(`Error fetching user information.`, err);
        }
      }));
      setUserInfo(users);
    };

    fetchUserInfo();
  }, []); // We could add the usersToSearch array here if it was dynamic so the function would run again.

  return (
    <div>
      Users List
      <div>
        {userInfo.length ? userInfo.map((user, index) => {
          return (
            <Link key={index} to={`/user-details/${user.login}`}>
              <UserSnapShot user={user} />
            </Link>
          ) 
        })
        :
        <div>Loading users...</div>
      }
      </div>
    </div>
  )
};

export default HomePage;