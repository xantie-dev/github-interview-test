import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import ExtendedProfileInfo  from '../types/ExtendedProfileInfo';
import PageContainer from './PageContainer';
import styled from 'styled-components';
import RepoInfo from '../types/RepoInfo';

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
  const [topRepos, setTopRepos] = useState<RepoInfo[]>([]);

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
  
  useEffect(() => {
    const getTopRepos = async () => {
      let baseUrl = `https://api.github.com/users/${params.login}/repos`
      let req = await fetch(baseUrl);

      if (req.status != 200) {
        return;
      }

      let reqResult = await req.json();

      if (reqResult.length == 0) {
        return;
      }

      let repoArray: RepoInfo[] = [];

      for (const repo of reqResult) {
        repoArray.push({
          name: repo.name,
          link: repo.html_url
        })
      }
      setTopRepos(repoArray);
    }

    getTopRepos();
  }, [setTopRepos])

  return (
    <PageContainer>
      {profileData == null && (
        <h1>{params.login}</h1>
      )}

      {profileData && (
        <>
          <Pageheader>
            <img src={profileData.profileImageLink}></img>
            <div>
              <h1>{profileData.name ? profileData.name : profileData.login}</h1>
              <h3>@{profileData.login}</h3>
              <p>{profileData.bio}</p>
              <a href={profileData.link}>View profile</a>
            </div>
          </Pageheader>

          <h2>Repos</h2>
          {topRepos !== null && topRepos.length !== undefined && topRepos.length > 0 && topRepos.map((repo) => (
            <div>
                <a href={repo.link}>{repo.name}</a>
            </div>
          ))}
        </>
      )}
    </PageContainer>
  )
}

export default ProfileDetail;