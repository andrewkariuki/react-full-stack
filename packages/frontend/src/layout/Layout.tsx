import React from "react";
import { Header, SideNav } from "../components";
import { Main, MainContent, MainNav } from "./elements";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <MainNav>
          <SideNav />
        </MainNav>
        <MainContent>{children}</MainContent>
      </Main>
    </>
  );
};
