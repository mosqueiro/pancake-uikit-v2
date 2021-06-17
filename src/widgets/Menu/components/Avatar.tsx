import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Profile } from "../types";
import NoProfileAvatar from "../../../components/Svg/Icons/NoProfileAvatar";

interface AvatarProps {
  profile: Profile;
}

const StyledAvatar = styled.div`
  margin-left: 8px;
  position: relative;

  img {
    border-radius: 50%;
  }
`;

const Pip = styled.div`
  background-color: ${({ theme }) => theme.colors.failure};
  border-radius: 50%;
  pointer-events: none;
  height: 8px;
  position: absolute;
  right: 0;
  top: 0;
  width: 8px;
`;

const Avatar: React.FC<AvatarProps> = ({ profile }) => {
  const { username = "Bunny", image, profileLink, noProfileLink, showPip = false } = profile;
  const link = profile.username ? profileLink : noProfileLink;
  const isExternal = link.startsWith("http");
  const ariaLabel = "Link to profile";
  const icon = (
    <img src="/images/certik.png" alt="profile avatar" height="129px" width="32px" />
  );

    return (
      <StyledAvatar title={username}>
          {icon}
      </StyledAvatar>
    );
};

export default Avatar;
