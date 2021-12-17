import styled from "@emotion/styled";
import { COLORS } from "../../../constants";

export const HeaderEl = styled.header`
  border-bottom: 1px solid ${COLORS.bgHeavy};
  top: 0;
  width: 100%;
  background: ${COLORS.white};
  z-index: 1000000;
  position: relative;
  height: 55px;
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  position: relative;
  justify-content: end;
`;

export const HeaderMid = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 2;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  border-right: 1px solid ${COLORS.bgHeavy};
`;

export const HeaderIconSet = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  border-left: 1px solid #d8d8d8;
`;

export const HeaderUserName = styled.div`
  padding-left: 8px;
  display: flex;
  align-items: center;
  color: ${COLORS.textSecondary};

  & span {
    margin-right: 5px;
    font-size: 0.9rem;
    font-weight: 500;
  }
`;
