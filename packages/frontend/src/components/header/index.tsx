import React from "react";
import { ContainerEl } from "..";
import { Hamburger, Logo } from "./components";
import {
  HeaderEl,
  HeaderIcon,
  HeaderIconSet,
  HeaderInner,
  HeaderLeft,
  HeaderMid,
  HeaderRight,
  HeaderUser,
  HeaderUserName,
  SearchInput,
  SearchWrapper,
} from "./elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faEnvelopeOpenText,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { UserPicture } from "../user";

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <HeaderEl>
      <ContainerEl className="fluid">
        <HeaderInner>
          <HeaderLeft>
            <Hamburger />
            <Logo />
          </HeaderLeft>
          <HeaderMid>
            <SearchWrapper>
              <FontAwesomeIcon icon={faSearch} />
              <SearchInput type="text" placeholder="Search for patient" />
            </SearchWrapper>
          </HeaderMid>
          <HeaderRight>
            <HeaderIconSet>
              <HeaderIcon>
                <span className="notification"></span>
                <FontAwesomeIcon icon={faBell} />
              </HeaderIcon>
              <HeaderIcon>
                <FontAwesomeIcon icon={faEnvelopeOpenText} />
              </HeaderIcon>
            </HeaderIconSet>
            <HeaderUser>
              <UserPicture width="30px" withBubble />
              <HeaderUserName>
                <span>Dr. Einstein</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </HeaderUserName>
            </HeaderUser>
          </HeaderRight>
        </HeaderInner>
      </ContainerEl>
    </HeaderEl>
  );
};
