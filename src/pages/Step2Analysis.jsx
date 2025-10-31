import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Database, Shield, TrendingDown, FileText } from "lucide-react";
import DataUploadCard from "../components/DataUploadCard";

export default function Step2Analysis() {
  return (
    <Container className="py-4">
      {/* Header */}
      <div className="mb-4">
        <h3>Data Practices Analysis</h3>
        <p className="text-muted">
          Upload your data inventory file to automatically analyze data practices
          and identify minimization opportunities.
        </p>
      </div>

      {/* Upload Section */}
      <DataUploadCard />

      {/* Analysis Section */}
      <Card className="shadow-sm border-0">
        <Card.Body>
          <h5>What will be analyzed?</h5>
          <Row className="mt-3 gy-3">
            <Col md={6}>
              <div className="d-flex align-items-start">
                <Database size={20} className="text-primary flex-shrink-0 me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Personal Data Detection</h6>
                  <p className="small text-muted mb-0">
                    Automatic identification of personal and sensitive data fields.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="d-flex align-items-start">
                <Shield size={20} className="text-primary flex-shrink-0 me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Risk Assessment</h6>
                  <p className="small text-muted mb-0">
                    Categorization of fields by privacy risk level.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="d-flex align-items-start">
                <TrendingDown size={20} className="text-primary flex-shrink-0 me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Minimization Opportunities</h6>
                  <p className="small text-muted mb-0">
                    Identification of unnecessary or redundant data collection.
                  </p>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="d-flex align-items-start">
                <FileText size={20} className="text-primary flex-shrink-0 me-3 mt-1" />
                <div>
                  <h6 className="fw-semibold mb-1">Compliance Recommendations</h6>
                  <p className="small text-muted mb-0">
                    Tailored suggestions for GDPR, CCPA, and other regulations.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}
