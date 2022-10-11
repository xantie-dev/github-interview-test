import React from "react";
import styled from "styled-components";
import RepoInfo from "../types/RepoInfo";

interface RepoCardProps  {
  repo: RepoInfo 
}

const RepoCard = ({ repo } : RepoCardProps) => {
  return (
    <div>
      <a href={repo.link}>{repo.name}</a>
    </div>
  )
}

export default RepoCard;