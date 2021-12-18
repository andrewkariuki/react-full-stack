import {
  faChevronDown,
  faChevronUp,
  faHeart,
  faTint,
  faWaveSquare,
  faWeight,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { COLORS } from "../../../constants";
import { DetailsMiddleEl } from "../elements";
import { Diagnostic } from "./Diagnostic";

interface DetailsMiddleProps {}

export const DetailsMiddle: React.FC<DetailsMiddleProps> = () => {
  return (
    <DetailsMiddleEl>
      <Row>
        <Col md={6} sm={6} xs={6}>
          <Diagnostic
            icon={faHeart}
            unitColor={COLORS.green}
            unit="120/80"
            chevronIcon={faChevronUp}
            date="May 23 09:00 AM"
            hours="5 hours ago"
          />
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Diagnostic
            icon={faWaveSquare}
            unitColor={COLORS.danger}
            unit="72"
            hours="4 days ago"
            chevronIcon={faChevronDown}
          />
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Diagnostic icon={faWeight} />
        </Col>
        <Col md={6} sm={6} xs={6}>
          <Diagnostic icon={faTint} />
        </Col>
      </Row>
    </DetailsMiddleEl>
  );
};
