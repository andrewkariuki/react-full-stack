import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layout";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Layout>
      <div>
        UI test case is under the{" "}
        <Link style={{ fontSize: "1rem" }} to="/patients">
          Patients
        </Link>{" "}
        route
      </div>
    </Layout>
  );
};
