import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { COLORS } from "../../../constants";

export const NavItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 576px) {
    display: flex;
    margin-bottom: 10px;
    overflow: scroll;
  }
`;

export const NavItem = styled.li`
  margin-bottom: 5px;
`;

export const NavLinkEl = styled(NavLink)`
  text-decoration: none;
  padding: 10px 25px;

  display: flex;
  align-items: center;

  color: ${COLORS.black};

  &.active {
    background-color: ${COLORS.primaryColor};
    color: ${COLORS.white};
    border-radius: 0px 4px 4px 0px;

    @media (max-width: 576px) {
      border-radius: 4px;
    }

    & .bubble {
      display: block;
    }
  }

  & .svg-inline--fa {
    height: 1.02rem;
    width: auto;
  }

  & .bubble {
    display: none;
    border-radius: 50%;
    background-color: #ff5959;
    width: 6px;
    height: 6px;
    margin-left: 3px;
  }

  & .label {
    margin-left: 15px;
    letter-spacing: 1;
  }
`;
