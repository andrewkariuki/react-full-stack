import styled from "@emotion/styled";

export const HamburgerEl = styled.a`
  display: block;
  margin-right: 20px;
`;

export const HamburgerMenu = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-block;
  user-select: none;
  width: 25px;
  z-index: 12;
  height: 20px;
  float: left;
`;

export const HamburgerBunEl = styled.div`
  position: relative;
  background: #53565a;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);

  &.b-bun--top {
    height: 3px;
    top: 0;
    width: 18px;
  }

  &.b-bun--mid {
    height: 3px;
    top: 3px;
    width: 18px;
  }

  &.b-bun--bottom {
    height: 3px;
    top: 6px;
    width: 18px;
  }
`;
