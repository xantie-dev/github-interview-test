import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers';
import styled from 'styled-components';
import { ProfileInfo } from '../types/ProfileInfo';
import PageContainer from './PageContainer';
import ProfileCard from './ProfileCard';

const Home = () => {
  const [profiles, setProfiles] = useState<ProfileInfo[]>([]);

  useEffect(() => {
    const getProfiles = async () => {
      const profiles: ProfileInfo[] = []
      const profilesToQuery = ["almadireddy", "joshatxantie", "joeatxantie"];

      const baseUrl = "https://api.github.com/users"

      for (const profile of profilesToQuery) {
        let r = await fetch(`${baseUrl}/${profile}`);
        let jsonProfile = await r.json();

        profiles.push({
          name: jsonProfile.name ? jsonProfile.name : null,
          login: jsonProfile.login,
          profileImageLink: jsonProfile.avatar_url,
        })
      }

      setProfiles(profiles)
    } 

    getProfiles();
  }, [setProfiles])

  return (
    <PageContainer>
      <h1>
        Github Profiles
      </h1>

      <div>
        {profiles.length > 0 && profiles.map((profile) => (
          <ProfileCard key={profile.login} profile={profile} ></ProfileCard>
        ))}
      </div>
    </PageContainer>
  )
}

export default Home;