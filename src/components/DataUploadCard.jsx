import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { Upload } from "lucide-react";

export default function DataUploadCard() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) setFile(e.target.files[0]);
  };

  const clearFile = () => setFile(null);

  return (
    <>
      {/* Upload Section */}
      {!file && (
        <Card className="mb-4 shadow-sm border-0">
          <Card.Body>
            <h5 className="mb-1 d-flex align-items-center">
              <Upload size={18} className="me-2 text-primary" />
              Upload Data Inventory
            </h5>
            <p className="text-muted small mb-4">
              Upload a CSV or JSON file containing your data inventory for automated analysis.
            </p>

            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`border border-2 border-dashed rounded-3 p-5 text-center ${
                dragActive ? "bg-light border-primary" : "border-secondary"
              }`}
              style={{ cursor: "pointer" }}
            >
              <div className="mb-3">
                <Upload size={48} className="text-muted" />
              </div>
              <h6 className="mb-1">Drag and drop your file here</h6>
              <p className="text-muted small mb-2">or</p>
              <div className="mb-3">
                <input
                  id="fileUpload"
                  type="file"
                  accept=".csv,.json"
                  onChange={handleChange}
                  hidden
                />
                <Button
                  variant="outline-primary"
                  onClick={() => document.getElementById("fileUpload").click()}
                >
                  Browse Files
                </Button>
              </div>
              <p className="text-muted small">
                Supported formats: CSV, JSON (Max 100MB)
              </p>
            </div>

            {/* Expected File Structure */}
            <div className="mt-4">
              <h6>Expected File Structure:</h6>
              <Alert variant="light" className="border mt-2">
                <p className="mb-2 small text-muted">
                  Your file should contain columns representing data fields.
                  Common examples:
                </p>
                <ul className="small text-muted mb-0">
                  <li>Field Name, Data Type, Purpose, Retention Period</li>
                  <li>user_id, email, name, phone, address, etc.</li>
                  <li>Any structured data with column headers</li>
                </ul>
              </Alert>
            </div>
          </Card.Body>
        </Card>
      )}

      {/* Uploaded File Info */}
      {file && (
        <Card className="shadow-sm border-0 mb-4">
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">
                  Analyzing: <span className="text-primary">{file.name}</span>
                </h5>
                <p className="text-muted small mb-0">
                  File type: {file.type || "Unknown"} | Size:{" "}
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <Button variant="outline-secondary" size="sm" onClick={clearFile}>
                Clear Upload
              </Button>
            </div>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
