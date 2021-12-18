import React from "react";
import { Filter, PatientsFullDetails, PatientsList, PatientSummaryCard } from "../components";
import { Layout } from "../layout";

interface PatientsProps {}

export const Patients: React.FC<PatientsProps> = () => {
  return (
    <Layout>
      <PatientsList>
        <Filter />
        <PatientSummaryCard />
        <PatientSummaryCard />
      </PatientsList>
      <PatientsFullDetails></PatientsFullDetails>
    </Layout>
  );
};
