import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ExtendedProfileInfo  from '../types/ExtendedProfileInfo';
import PageContainer from './PageContainer';
import styled from 'styled-components';

const Pageheader = styled.div`
  display: flex;
  padding-bottom: 50px;

  > img {
    max-width: 200px;
    margin-right: 25px;
  }

  h1 {
    margin: 0;
    font-size: 35px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    font-weight: 300;
    margin-bottom:25px;
  }

  p {
    font-size: 18px;
  }
`

const ProfileDetail = () => {
  const params = useParams();
  const [profileData, setProfileData] = useState<ExtendedProfileInfo>();

  useEffect(() => {
    const getProfileDetails = async () => {
      let baseUrl = `https://api.github.com/users/${params.login}`
      let req = await fetch(baseUrl)
      let reqResult = await req.json();
      
      setProfileData({
        login: reqResult.login,
        name: reqResult.name,
        bio: reqResult.bio,
        link: reqResult.html_url,
        profileImageLink: reqResult.avatar_url,
      })
    }

    getProfileDetails();
  }, [setProfileData])

  return (
    <PageContainer>
      {profileData == null && (
        <h1>{params.login}</h1>
      )}

      {profileData && (
        <Pageheader>
          <img src={profileData.profileImageLink}></img>
          <div>
            <h1>{profileData.name ? profileData.name : profileData.login}</h1>
            <h3>@{profileData.login}</h3>
            <p>{profileData.bio}</p>
            <a href={profileData.link}>View profile</a>
          </div>
        </Pageheader>
      )}
    </PageContainer>
  )
}

export default ProfileDetail;