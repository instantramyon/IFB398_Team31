import Dashboard from './pages/Dashboard'
import Login from './pages/Login.jsx';
import { useState, useEffect } from 'react';
import {Container,Row,Col,Tab,Nav,Button,Dropdown,Badge,Spinner} from 'react-bootstrap';
import {Shield,FileText,BarChart3,Settings,LogOut,User} from 'lucide-react';
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [assessmentData, setAssessmentData] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Check session
  useEffect(() => {
    const storedUser = localStorage.getItem('data_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {
        localStorage.removeItem('data_user');
      }
    }
    setIsLoading(false);

    // Auto detect dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark', prefersDark);
  }, []);

  const handleLogin = (userData) => setUser(userData);

  const handleLogout = () => {
    localStorage.removeItem('data_user');
    setUser(null);
    setActiveTab('dashboard');
    setAssessmentData(null);
  };

  const getUserInitials = (name) =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

  // Loading Screen
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

  // Auth Screen
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

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
                <small className="text-muted">Data Minimisation Platform</small>
              </div>
            </Col>

            <Col xs="auto" className="d-flex align-items-center gap-3">
              {user.email === 'demo@dataguard.com' && (
                <>
                  <Badge bg="secondary" className="d-none d-sm-inline">
                    Demo Mode
                  </Badge>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={handleLogout}
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
                  <Dropdown.Item onClick={handleLogout}>
                    <LogOut size={16} className="me-2" /> Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Main Content */}
      <Container>
        <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
          <Nav variant="tabs" className="justify-content-around mb-4">
            <Nav.Item>
              <Nav.Link eventKey="dashboard">
                <BarChart3 size={16} className="me-2" /> Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="assessment">
                <Shield size={16} className="me-2" /> Assessment
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="practices">
                <Settings size={16} className="me-2" /> Data Practices
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="policies">
                <FileText size={16} className="me-2" /> Policy Templates
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="risks">
                <BarChart3 size={16} className="me-2" /> Risk Analysis
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <Tab.Pane eventKey="dashboard">
              <Dashboard assessmentData={assessmentData} />
             </Tab.Pane>
            {/* change these for navigating to different tabs  */}
            {/*<Tab.Pane eventKey="assessment">
              <AssessmentWizard
                onAssessmentComplete={setAssessmentData}
                onNavigateToResults={() => setActiveTab('practices')}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="practices">
              <DataPracticesOverview assessmentData={assessmentData} /> 
            <Tab.Pane eventKey="policies">
              <PolicyTemplates assessmentData={assessmentData} />
            </Tab.Pane>
            <Tab.Pane eventKey="risks">
              <RiskAssessment assessmentData={assessmentData} />
            </Tab.Pane> */}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
}

export default App
