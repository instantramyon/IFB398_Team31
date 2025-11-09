import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  ProgressBar,
  Badge,
} from 'react-bootstrap';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle
} from 'lucide-react';

export default function Step1Questions({ onAssessmentComplete, onNavigateToResults }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    organization: { name: '', industry: '', size: '', location: '' },
    dataCollection: { personalDataTypes: [], dataMinimisation: '', consentMechanism: '' },
    logging: { logTypes: [], retentionPeriod: '', anonymization: '' },
    storage: { storageLocations: [], encryptionStatus: '', accessControls: '' },
    retention: { retentionPolicies: '', deletionProcesses: '', complianceRequirements: [] }
  });

  const steps = [
    { title: 'Organization Details', description: 'Basic information about your organization' },
    { title: 'Data Collection', description: 'How your organization collects and handles data' },
    { title: 'Logging Practices', description: 'Your logging and monitoring approaches' },
    { title: 'Data Storage', description: 'Where and how data is stored' },
    { title: 'Data Retention', description: 'Policies for keeping and disposing of data' }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const updateFormData = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const toggleArrayValue = (section, field, value) => {
    const current = formData[section][field];
    if (current.includes(value)) {
      updateFormData(section, field, current.filter((v) => v !== value));
    } else {
      updateFormData(section, field, [...current, value]);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
    else {
      onAssessmentComplete(formData);
      onNavigateToResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // Step 1: Organization Details ===
  const renderOrganizationStep = () => (
    <>
      <Row className="mb-3">
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Organization Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter organization name"
              value={formData.organization.name}
              onChange={(e) => updateFormData('organization', 'name', e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Industry</Form.Label>
            <Form.Select
              value={formData.organization.industry}
              onChange={(e) => updateFormData('organization', 'industry', e.target.value)}
            >
              <option value="">Select industry</option>
              <option>Healthcare</option>
              <option>Financial Services</option>
              <option>Technology</option>
              <option>Retail</option>
              <option>Education</option>
              <option>Government</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Organization Size</Form.Label>
            <Form.Select
              value={formData.organization.size}
              onChange={(e) => updateFormData('organization', 'size', e.target.value)}
            >
              <option value="">Select size</option>
              <option>Small (1–50 employees)</option>
              <option>Medium (51–250 employees)</option>
              <option>Large (251–1000 employees)</option>
              <option>Enterprise (1000+ employees)</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label>Primary Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="e.g., United States, European Union"
              value={formData.organization.location}
              onChange={(e) => updateFormData('organization', 'location', e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
    </>
  );

  // Step 2: Data Collection ===
  const personalDataTypes = [
    'Names and contact information',
    'Financial information',
    'Health records',
    'Biometric data',
    'Location data',
    'Online identifiers',
    'Employment records',
    'Educational records'
  ];

  const renderDataCollectionStep = () => (
    <>
      <Form.Group className="mb-4">
        <Form.Label>Types of Personal Data Collected</Form.Label>
        <Row>
          {personalDataTypes.map((type, idx) => (
            <Col xs={12} md={6} key={idx}>
              <Form.Check
                type="checkbox"
                label={type}
                checked={formData.dataCollection.personalDataTypes.includes(type)}
                onChange={() => toggleArrayValue('dataCollection', 'personalDataTypes', type)}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Data Minimisation Approach</Form.Label>
        {['Strict - Only collect essential data', 'Moderate - Collect relevant data with clear purpose', 'Comprehensive - Collect all potentially useful data', 'Unclear - No formal data minimisation policy'].map((opt, i) => (
          <Form.Check
            key={i}
            type="radio"
            name="dataMinimisation"
            label={opt}
            checked={formData.dataCollection.dataMinimisation === opt}
            onChange={() => updateFormData('dataCollection', 'dataMinimisation', opt)}
          />
        ))}
      </Form.Group>

      <Form.Group>
        <Form.Label>Consent Mechanism</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe how you obtain and manage user consent..."
          value={formData.dataCollection.consentMechanism}
          onChange={(e) => updateFormData('dataCollection', 'consentMechanism', e.target.value)}
        />
      </Form.Group>
    </>
  );

  // Step 3: Logging Practices ===
  const renderLoggingStep = () => (
    <>
      <Form.Group className="mb-4">
        <Form.Label>Types of Logs Maintained</Form.Label>
        <Row>
          {['Access logs', 'Error logs', 'Security logs', 'Audit trails', 'Application logs', 'System logs'].map((log, idx) => (
            <Col xs={12} md={6} key={idx}>
              <Form.Check
                type="checkbox"
                label={log}
                checked={formData.logging.logTypes.includes(log)}
                onChange={() => toggleArrayValue('logging', 'logTypes', log)}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Log Retention Period</Form.Label>
        <Form.Select
          value={formData.logging.retentionPeriod}
          onChange={(e) => updateFormData('logging', 'retentionPeriod', e.target.value)}
        >
          <option value="">Select retention period</option>
          <option>30 days</option>
          <option>90 days</option>
          <option>6 months</option>
          <option>1 year</option>
          <option>2+ years</option>
          <option>Indefinite</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Log Anonymization</Form.Label>
        {['Full anonymization implemented', 'Partial anonymization (some PII removed)', 'No anonymization'].map((opt, i) => (
          <Form.Check
            key={i}
            type="radio"
            name="anonymization"
            label={opt}
            checked={formData.logging.anonymization === opt}
            onChange={() => updateFormData('logging', 'anonymization', opt)}
          />
        ))}
      </Form.Group>
    </>
  );

  // Step 4: Data Storage 
  const renderStorageStep = () => (
    <>
      <Form.Group className="mb-4">
        <Form.Label>Storage Locations</Form.Label>
        <Row>
          {['On-premises servers', 'Cloud (AWS/Azure/GCP)', 'Hybrid cloud', 'Third-party services', 'Mobile devices', 'Backup facilities'].map((loc, idx) => (
            <Col xs={12} md={6} key={idx}>
              <Form.Check
                type="checkbox"
                label={loc}
                checked={formData.storage.storageLocations.includes(loc)}
                onChange={() => toggleArrayValue('storage', 'storageLocations', loc)}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Encryption Status</Form.Label>
        <Form.Select
          value={formData.storage.encryptionStatus}
          onChange={(e) => updateFormData('storage', 'encryptionStatus', e.target.value)}
        >
          <option value="">Select encryption level</option>
          <option>Full encryption (at rest and in transit)</option>
          <option>Partial encryption</option>
          <option>Encryption in transit only</option>
          <option>Encryption at rest only</option>
          <option>No encryption</option>
        </Form.Select>
      </Form.Group>

      <Form.Group>
        <Form.Label>Access Controls</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe your access control mechanisms (RBAC, MFA, etc.)..."
          value={formData.storage.accessControls}
          onChange={(e) => updateFormData('storage', 'accessControls', e.target.value)}
        />
      </Form.Group>
    </>
  );

  // Step 5: Data Retention ===
  const complianceOptions = [
    'Privacy Act 1988',
    'APPs',
    'NDB Scheme',
    'APRA CPS 234',
    'PCI DSS',
    'ISO 27001',
    'NIST',
    'Industry-specific'
  ];

  const renderRetentionStep = () => (
    <>
      <Form.Group className="mb-4">
        <Form.Label>Data Retention Policies</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Describe your data retention policies and timeframes..."
          value={formData.retention.retentionPolicies}
          onChange={(e) => updateFormData('retention', 'retentionPolicies', e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Data Deletion Processes</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="How do you securely delete data when retention periods expire?"
          value={formData.retention.deletionProcesses}
          onChange={(e) => updateFormData('retention', 'deletionProcesses', e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Compliance Requirements</Form.Label>
        <Row>
          {complianceOptions.map((option, idx) => (
            <Col xs={12} md={6} key={idx}>
              <Form.Check
                type="checkbox"
                label={option}
                checked={formData.retention.complianceRequirements.includes(option)}
                onChange={() => toggleArrayValue('retention', 'complianceRequirements', option)}
              />
            </Col>
          ))}
        </Row>
      </Form.Group>
    </>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0: return renderOrganizationStep();
      case 1: return renderDataCollectionStep();
      case 2: return renderLoggingStep();
      case 3: return renderStorageStep();
      case 4: return renderRetentionStep();
      default: return null;
    }
  };

  return (
    <Container className="py-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4 className="mb-1">Data Practices Assessment</h4>
          <small className="text-muted">
            Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
          </small>
        </div>
        <Badge bg="light" text="dark" className="border">
          {Math.round(progress)}% Complete
        </Badge>
      </div>

      {/* Progress */}
      <ProgressBar now={progress} className="mb-4" style={{ height: '6px' }} />

      {/* Step Tabs */}
      <div className="d-flex flex-wrap gap-2 mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`d-flex align-items-center px-3 py-1 rounded-pill small ${
              index === currentStep
                ? 'bg-primary text-white'
                : index < currentStep
                ? 'bg-success bg-opacity-10 text-success fw-semibold'
                : 'bg-light text-muted'
            }`}
            style={{ cursor: 'pointer' }}
            onClick={() => setCurrentStep(index)}
          >
            {index < currentStep ? (
              <CheckCircle size={14} className="me-1" />
            ) : (
              <span className="me-1">{index + 1}</span>
            )}
            <span>{step.title}</span>
          </div>
        ))}
      </div>

      {/* Main Card */}
      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <h5 className="fw-semibold mb-1">{steps[currentStep].title}</h5>
          <p className="text-muted small mb-4">{steps[currentStep].description}</p>
          {renderCurrentStep()}
        </Card.Body>
      </Card>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-between">
        <Button
          variant="outline-secondary"
          onClick={handlePrevious}
          disabled={currentStep === 0}
        >
          <ChevronLeft size={16} className="me-1" />
          Previous
        </Button>

        <Button variant="primary" onClick={handleNext}>
          {currentStep === steps.length - 1 ? 'Complete Assessment' : 'Next'}
          {currentStep < steps.length - 1 && <ChevronRight size={16} className="ms-1" />}
        </Button>
      </div>
    </Container>
  );
}
