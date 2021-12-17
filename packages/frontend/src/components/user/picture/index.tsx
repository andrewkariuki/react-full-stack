import React from "react";
import { UserPictureEl, UserPictureImg } from "./elements";

interface UserPictureProps {
  withBubble?: boolean;
  width?: string;
}

export const UserPicture: React.FC<UserPictureProps> = ({ width, withBubble }) => {
  return (
    <UserPictureEl>
      <UserPictureImg width={width} src={require("../../../images/albert.png")} />
      {withBubble ? <span className="bubble"></span> : null}
    </UserPictureEl>
  );
};
