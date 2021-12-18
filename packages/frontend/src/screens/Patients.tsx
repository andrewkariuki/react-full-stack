import React from "react";
import { Filter, PatientsList } from "../components";
import { Layout } from "../layout";

interface PatientsProps {}

export const Patients: React.FC<PatientsProps> = () => {
  return (
    <Layout>
      <PatientsList>
        <Filter />
      </PatientsList>
    </Layout>
  );
};
