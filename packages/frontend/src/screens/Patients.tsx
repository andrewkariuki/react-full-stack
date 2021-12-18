import React from "react";
import { Col } from "react-bootstrap";
import { Filter, PatientsFullDetails, PatientsList, PatientSummaryCard } from "../components";
import { COLORS } from "../constants";
import { Layout } from "../layout";

interface PatientsProps {}

export const Patients: React.FC<PatientsProps> = () => {
  return (
    <Layout>
      <Col md={6} sm={12}>
        <PatientsList>
          <Filter />
          <PatientSummaryCard isActive heartColor={COLORS.danger} />
          <PatientSummaryCard heartColor={COLORS.primaryColor} />
          <PatientSummaryCard heartColor={COLORS.primaryColor} dropColor={COLORS.danger} />
          <PatientSummaryCard bubbleColor="#d8d8d8" heartColor={COLORS.primaryColor} />
          <PatientSummaryCard
            bubbleColor={COLORS.green}
            heartColor={COLORS.primaryColor}
            dropColor={COLORS.green}
            pulseColor={COLORS.primaryColor}
          />
          <div
            style={{
              color: "#d8d8d8",
              padding: "10px 0px",
              fontSize: "0.8rem",
              fontWeight: "bold",
            }}
          >
            Yesterday
          </div>
          <PatientSummaryCard heartColor={COLORS.danger} />
          <PatientSummaryCard
            weightColor={COLORS.danger}
            heartColor={COLORS.primaryColor}
            dropColor={COLORS.primaryColor}
          />
          <PatientSummaryCard bubbleColor="#d8d8d8" heartColor={COLORS.primaryColor} />
        </PatientsList>
      </Col>
      <Col md={6} sm={12}>
        <PatientsFullDetails />
      </Col>
    </Layout>
  );
};
