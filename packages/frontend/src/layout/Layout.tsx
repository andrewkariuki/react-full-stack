import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Header, SideNav } from "../components";
import { Main, MainContent, MainNav } from "./elements";

interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Container fluid>
          <Row>
            <Col sm={12} md={2}>
              <MainNav>
                <SideNav />
              </MainNav>
            </Col>
            <Col sm={12} md={10}>
              <MainContent>
                <Container fluid>
                  <Row>{children}</Row>
                </Container>
              </MainContent>
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};
