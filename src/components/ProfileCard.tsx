import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProfileInfo } from '../types/ProfileInfo';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 2px solid black;

  width: 400px;
  margin-bottom: 10px;

  h2 {
    margin: 0;
    padding: 0;

    margin-left: 10px;
  }

  img {
    max-width: 100px;
  }
`

interface ProfileCardProps {
  profile: ProfileInfo
}

const ProfileCard = ({profile} : ProfileCardProps) => {
  return (
    <ProfileContainer>
      <div>
        <img src={profile.profileImageLink}></img>
      </div>
      <div>
        <Link to={`/${profile.login}`}>
          <h2>{profile.name ? profile.name : profile.login}</h2>
        </Link>
      </div>
    </ProfileContainer>
  )
}

export default ProfileCard;