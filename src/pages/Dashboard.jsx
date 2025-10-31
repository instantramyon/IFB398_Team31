import React from 'react';
import {Card,Row,Col,Button,ProgressBar,Alert,ListGroup,Container} from 'react-bootstrap';
import {AlertTriangle, CheckCircle, Clock, Database, Shield, TrendingDown, FileText} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

export default function Dashboard ({ assessmentData }) {
  // Mock data
  const stats = {
    totalDataSources: 45,
    minimisationOpportunities: 12,
    riskScore: 65,
    pendingActions: 8
  };

  const recentActivity = [
    { action: 'Completed data collection assessment', time: '2 hours ago', type: 'success' },
    { action: 'Identified unnecessary log retention', time: '1 day ago', type: 'warning' },
    { action: 'Generated privacy policy template', time: '2 days ago', type: 'info' },
    { action: 'Risk assessment flagged high-risk data', time: '3 days ago', type: 'error' }
  ];

  const dataTypesByCategory = [
    { category: 'Personal', necessary: 18, unnecessary: 6 },
    { category: 'Financial', necessary: 10, unnecessary: 2 },
    { category: 'Technical', necessary: 28, unnecessary: 4 },
    { category: 'Behavioral', necessary: 12, unnecessary: 6 },
    { category: 'Location', necessary: 5, unnecessary: 3 }
  ];

  const riskTrendData = [
    { month: 'Jan', riskScore: 82, dataVolume: 450 },
    { month: 'Feb', riskScore: 78, dataVolume: 420 },
    { month: 'Mar', riskScore: 75, dataVolume: 380 },
    { month: 'Apr', riskScore: 71, dataVolume: 350 },
    { month: 'May', riskScore: 68, dataVolume: 320 },
    { month: 'Jun', riskScore: 65, dataVolume: 290 }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <CheckCircle size={18} className="text-success" />;
      case 'warning': return <AlertTriangle size={18} className="text-warning" />;
      case 'error': return <AlertTriangle size={18} className="text-danger" />;
      default: return <Clock size={18} className="text-primary" />;
    }
  };

  return (
    <Container className="py-4">
      {/* Title */}
      <div className="mb-4">
        <h2>Data Minimisation Dashboard</h2>
        <p className="text-muted">
          Monitor your organization's data practices and track minimisation progress.
        </p>
      </div>

      {/* Metrics Cards  */}
      <Row className="g-4 mb-4">
        <Col md={3}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title as="h6">Data Sources</Card.Title>
                <Database size={18} className="text-muted" />
              </div>
              <h3>{stats.totalDataSources}</h3>
              <small className="text-muted">Across all systems</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title as="h6">Minimisation Opportunities</Card.Title>
                <TrendingDown size={18} className="text-muted" />
              </div>
              <h3>{stats.minimisationOpportunities}</h3>
              <small className="text-muted">Potential data reductions identified</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title as="h6">Risk Score</Card.Title>
                <Shield size={18} className="text-muted" />
              </div>
              <h3>{stats.riskScore}/100</h3>
              <small className="text-muted">Overall privacy risk level</small>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <Card.Title as="h6">Pending Actions</Card.Title>
                <AlertTriangle size={18} className="text-muted" />
              </div>
              <h3>{stats.pendingActions}</h3>
              <small className="text-muted">Recommendations to implement</small>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*Charts Section */}
      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Data Collection Analysis</Card.Title>
              <small className="text-muted">
                Collected vs necessary data across categories
              </small>
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dataTypesByCategory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="necessary" fill="#0d6efd" name="Necessary" />
                    <Bar dataKey="unnecessary" fill="#dc3545" name="Unnecessary" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Risk & Data Volume Trend</Card.Title>
              <small className="text-muted">
                6-month privacy risk reduction progress
              </small>
              <div style={{ height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={riskTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line dataKey="riskScore" stroke="#dc3545" strokeWidth={2} name="Risk Score" />
                    <Line dataKey="dataVolume" stroke="#0d6efd" strokeWidth={2} name="Data Volume (GB)" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Progress + Activity */}
      <Row className="g-4 mb-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Assessment Progress</Card.Title>
              <small className="text-muted">
                Complete assessments across all data practice areas
              </small>
              <div className="mt-3">
                <div className="mb-3">
                  <div className="d-flex justify-content-between small">
                    <span>Data Collection</span><span>75%</span>
                  </div>
                  <ProgressBar now={75} />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between small">
                    <span>Logging Practices</span><span>60%</span>
                  </div>
                  <ProgressBar now={60} />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between small">
                    <span>Data Storage</span><span>40%</span>
                  </div>
                  <ProgressBar now={40} />
                </div>
                <div>
                  <div className="d-flex justify-content-between small">
                    <span>Data Retention</span><span>85%</span>
                  </div>
                  <ProgressBar now={85} />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Recent Activity</Card.Title>
              <small className="text-muted">
                Latest actions and system updates
              </small>
              <ListGroup variant="flush" className="mt-3">
                {recentActivity.map((activity, i) => (
                  <ListGroup.Item key={i} className="d-flex align-items-start">
                    <div className="me-2 mt-1">{getIcon(activity.type)}</div>
                    <div>
                      <div className="small fw-semibold">{activity.action}</div>
                      <div className="small text-muted">{activity.time}</div>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Quick Actions */}
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Quick Actions</Card.Title>
          <small className="text-muted">
            Get started with key data minimisation activities
          </small>
          <Row className="mt-3 g-3">
            <Col md={3}>
              <Button variant="outline-secondary" className="w-100 py-3">
                <Shield className="me-2" /> Start Assessment
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="outline-secondary" className="w-100 py-3">
                <FileText className="me-2" /> Generate Policy
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="outline-secondary" className="w-100 py-3">
                <Database className="me-2" /> Audit Data
              </Button>
            </Col>
            <Col md={3}>
              <Button variant="outline-secondary" className="w-100 py-3">
                <TrendingDown className="me-2" /> View Recommendations
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Alert for Missing Data */}
      {!assessmentData && (
        <Alert variant="warning" className="d-flex align-items-center">
          <AlertTriangle className="me-2" />
          <div>
            <strong>No Assessment Data</strong> — Complete the data practices assessment to see personalised insights and recommendations.
          </div>
        </Alert>
      )}
    </Container>
  );
}
