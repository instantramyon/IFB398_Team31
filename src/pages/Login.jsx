import React, { useState } from 'react';
import {Container, Row, Col, Card, Button, Form, Tabs, Tab, Alert} from 'react-bootstrap';
import { Shield, Mail, Lock, User, Building2} from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupOrganization, setSignupOrganization] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirmPassword, setSignupConfirmPassword] = useState('');

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    setTimeout(() => {
      if (loginEmail && loginPassword) {
        const user = {
          email: loginEmail,
          name: 'John Doe',
          organization: 'DataCorp Inc.'
        };
        localStorage.setItem('data_user', JSON.stringify(user));
        onLogin(user);
        navigate("/dashboard");
      } else {
        setError('Please enter both email and password');
      }
      setIsLoading(false);
    }, 1000);
  };

  // Handle Signup
  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    if (!signupName || !signupEmail || !signupOrganization || !signupPassword || !signupConfirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (signupPassword !== signupConfirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (signupPassword.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      const user = {
        email: signupEmail,
        name: signupName,
        organization: signupOrganization
      };
      localStorage.setItem('data_user', JSON.stringify(user));
      onLogin(user);
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  const handleDemoLogin = () => {
    const demoUser = {
      email: 'demo@dataguard.com',
      name: 'Demo User',
      organization: 'Flame Tree Cyber'
    };
    localStorage.setItem('data_user', JSON.stringify(demoUser));
    onLogin(demoUser);
  };

  return (
    <Container fluid className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
      <Row className="w-100" style={{ maxWidth: '1100px' }}>
        {/* Left Side */}
        <Col md={6} className="d-flex flex-column justify-content-center mb-5 mb-md-0">
          <div className="d-flex align-items-center mb-4">
            <Shield size={48} className="text-primary me-3" />
            <div>
              <h2 className="fw-bold mb-0">Flame Tree Cyber</h2>
              <p className="text-muted mb-0">Data Minimisation Platform</p>
            </div>
          </div>

          <h3 className="fw-semibold mb-3">
            Tailored Data Privacy & Minimisation for Your Organisation
          </h3>
          <p className="text-muted mb-4">
            At Flame Tree Cyber, we build custom strategies aligned to your data risks and industry context — combining best-practice governance, privacy controls and AI-powered insights.
          </p>

          <div className="mb-3 d-flex">
            <div className="bg-primary bg-opacity-10 p-2 rounded me-3 d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <Shield size={20} className="text-primary" />
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Strategic Assessments</h6>
              <p className="text-muted small mb-0">Evaluate your collection, logging, storage and retention practices.</p>
            </div>
          </div>

          <div className="mb-3 d-flex">
            <div className="bg-primary bg-opacity-10 p-2 rounded me-3 d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <Building2 size={20} className="text-primary" />
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Governance & AI Readiness</h6>
              <p className="text-muted small mb-0">Deploy frameworks for responsible AI, data usage and regulatory compliance.</p>
            </div>
          </div>

          <div className="d-flex">
            <div className="bg-primary bg-opacity-10 p-2 rounded me-3 d-flex align-items-center justify-content-center" style={{ width: 40, height: 40 }}>
              <Lock size={20} className="text-primary" />
            </div>
            <div>
              <h6 className="fw-semibold mb-1">Enterprise-Grade Security</h6>
              <p className="text-muted small mb-0">Build resilience with custom controls, incident readiness and long-term protection.</p>
            </div>
          </div>
        </Col>

        {/* Right Side (Card)*/}
        <Col md={6}>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <h4 className="fw-semibold mb-1">Welcome</h4>
              <p className="text-muted mb-4">Sign in to your account or create a new one to get started</p>

              <Tabs
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className="mb-3"
              >
                <Tab eventKey="login" title="Login">
                  <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <div className="position-relative">
                        <Mail size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="email"
                          placeholder="your.email@company.com"
                          className="ps-5"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Lock size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="password"
                          placeholder="Enter your password"
                          className="ps-5"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    {error && activeTab === 'login' && (
                      <Alert variant="danger" className="py-2">{error}</Alert>
                    )}

                    <Button type="submit" className="w-100 mb-3" disabled={isLoading}>
                      {isLoading ? 'Signing in...' : 'Sign In'}
                    </Button>

                    <div className="text-center position-relative mb-3">
                      <hr />
                      <span className="bg-white px-2 text-muted small position-absolute top-50 start-50 translate-middle">OR</span>
                    </div>

                    <Button
                      type="button"
                      variant="outline-secondary"
                      className="w-100"
                      onClick={handleDemoLogin}
                      disabled={isLoading}
                    >
                      Try Demo Account
                    </Button>
                  </Form>
                </Tab>

                <Tab eventKey="signup" title="Sign Up">
                  <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <div className="position-relative">
                        <User size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="text"
                          placeholder="John Doe"
                          className="ps-5"
                          value={signupName}
                          onChange={(e) => setSignupName(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <div className="position-relative">
                        <Mail size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="email"
                          placeholder="your.email@company.com"
                          className="ps-5"
                          value={signupEmail}
                          onChange={(e) => setSignupEmail(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Organization</Form.Label>
                      <div className="position-relative">
                        <Building2 size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="text"
                          placeholder="Your Company Name"
                          className="ps-5"
                          value={signupOrganization}
                          onChange={(e) => setSignupOrganization(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <div className="position-relative">
                        <Lock size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="password"
                          placeholder="Create a password (min. 8 characters)"
                          className="ps-5"
                          value={signupPassword}
                          onChange={(e) => setSignupPassword(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Lock size={16} className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
                        <Form.Control
                          type="password"
                          placeholder="Confirm your password"
                          className="ps-5"
                          value={signupConfirmPassword}
                          onChange={(e) => setSignupConfirmPassword(e.target.value)}
                          required
                        />
                      </div>
                    </Form.Group>

                    {error && activeTab === 'signup' && (
                      <Alert variant="danger" className="py-2">{error}</Alert>
                    )}

                    <Button type="submit" className="w-100 mb-2" disabled={isLoading}>
                      {isLoading ? 'Creating account...' : 'Create Account'}
                    </Button>

                    <p className="text-center text-muted small mb-0">
                      By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                  </Form>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
