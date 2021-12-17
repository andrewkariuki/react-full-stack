import styled from "@emotion/styled";
import { COLORS } from "../../../../constants";

export const UserPictureEl = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & .bubble {
    position: absolute;
    width: 7px;
    height: 7px;
    left: 21px;
    z-index: 22;
    top: 23px;
    border-radius: 50%;
    background-color: ${COLORS.green};
  }
`;

export const UserPictureImg = styled.img`
  height: ${(props) => (props.width ? props.width : "40px")};
  border-radius: 50%;
  vertical-align: middle;
  position: relative;
`;
