import Dashboard from './pages/Dashboard'
import Login from './pages/Login.jsx';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Dropdown, Badge, Spinner, Nav, Navbar} from "react-bootstrap";
import { Shield, FileText, BarChart3, Settings, LogOut, User,} from "lucide-react";
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate, useNavigate} from "react-router-dom";
import './App.css'

function App() {
  const [assessmentData, setAssessmentData] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("data_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem("data_user");
      }
    }
    setIsLoading(false);

    // Auto detect dark mode
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.classList.toggle("dark", prefersDark);
  }, []);

  const handleLogin = (userData) => setUser(userData);

  const handleLogout = () => {
    localStorage.removeItem("data_user");
    setUser(null);
    setAssessmentData(null);
  };

  if (isLoading) {
    return (
      <div className="d-flex vh-100 justify-content-center align-items-center text-center">
        <div>
          <Shield size={48} className="text-primary mb-3" />
          <p className="text-muted">Loading...</p>
          <Spinner animation="border" variant="primary" />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>        
        {!user ? (
          <>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        ) : (
          <>
            <Route
              path="/*"
              element={
                <MainLayout
                  user={user}
                  onLogout={handleLogout}
                  assessmentData={assessmentData}
                  setAssessmentData={setAssessmentData}
                />
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}


/* Layout Component with Navbar and Routes */
function MainLayout({ user, onLogout, assessmentData, setAssessmentData }) {
  const navigate = useNavigate();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: <BarChart3 size={16} /> },
    { path: "/assessment", label: "Assessment", icon: <Shield size={16} /> },
    {
      path: "/data-practices",
      label: "Data Practices",
      icon: <Settings size={16} />,
    },
    {
      path: "/policy-templates",
      label: "Policy Templates",
      icon: <FileText size={16} />,
    },
    {
      path: "/risk-analysis",
      label: "Risk Analysis",
      icon: <BarChart3 size={16} />,
    },
  ];

  const getUserInitials = (name) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <div className="bg-light min-vh-100">
      {/* Header */}
      <header className="border-bottom bg-white shadow-sm py-3 mb-4">
        <Container>
          <Row className="align-items-center justify-content-between">
            <Col xs="auto" className="d-flex align-items-center gap-3">
              <Shield size={32} className="text-primary" />
              <div>
                <h5 className="mb-0 fw-medium">Flame Tree Cyber</h5>
                <small className="text-muted">
                  Data Minimisation Platform
                </small>
              </div>
            </Col>

            <Col xs="auto" className="d-flex align-items-center gap-3">
              {user.email === "demo@dataguard.com" && (
                <>
                  <Badge bg="primary" className="d-none d-sm-inline">
                    Demo Mode
                  </Badge>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={onLogout}
                    className="d-flex align-items-center gap-1"
                  >
                    <LogOut size={16} />
                    Exit Demo
                  </Button>
                </>
              )}

              <Dropdown align="end">
                <Dropdown.Toggle
                  variant="light"
                  className="rounded-circle border p-2 fw-bold"
                >
                  {getUserInitials(user.name)}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Header>
                    <div>
                      <strong>{user.name}</strong>
                      <br />
                      <small className="text-muted">{user.email}</small>
                      <br />
                      <small className="text-muted">{user.organization}</small>
                    </div>
                  </Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <User size={16} className="me-2" /> Profile
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Settings size={16} className="me-2" /> Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={onLogout}>
                    <LogOut size={16} className="me-2" /> Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Navigation Bar */}
      <Navbar bg="light" expand="md" className="border-bottom">
        <Container>
          <Nav className="w-100 justify-content-around">
            {navItems.map((item) => (
              <Nav.Link
                key={item.path}
                as={NavLink}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary fw-semibold border-bottom border-primary"
                    : "text-muted"
                }
              >
                {item.icon} <span className="ms-1">{item.label}</span>
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>

      {/* Page Content */}
      <Container className="py-4">
        <Routes>
          <Route
            path="/dashboard"
            element={<Dashboard assessmentData={assessmentData} />}
          />
          {/* <Route
            path="/assessment"
            element={
              <AssessmentWizard
                onAssessmentComplete={setAssessmentData}
                onNavigateToResults={() => navigate("/data-practices")}
              />
            }
          />
          <Route
            path="/data-practices"
            element={<DataPracticesOverview assessmentData={assessmentData} />}
          />
          <Route
            path="/policy-templates"
            element={<PolicyTemplates assessmentData={assessmentData} />}
          />
          <Route
            path="/risk-analysis"
            element={<RiskAssessment assessmentData={assessmentData} />}
          /> */}
          {/* Default redirect for logged-in users */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App
