import React from "react";
import { Col } from "react-bootstrap";
import { Filter, PatientsFullDetails, PatientsList, PatientSummaryCard } from "../components";
import { Layout } from "../layout";

interface PatientsProps {}

export const Patients: React.FC<PatientsProps> = () => {
  return (
    <Layout>
      <Col md={6} sm={12}>
        <PatientsList>
          <Filter />
          <PatientSummaryCard />
          <PatientSummaryCard />
          <PatientSummaryCard />
          <PatientSummaryCard />
          <PatientSummaryCard />
          <PatientSummaryCard />
          <PatientSummaryCard />
        </PatientsList>
      </Col>
      <Col md={6} sm={12}>
        <PatientsFullDetails />
      </Col>
    </Layout>
  );
};
