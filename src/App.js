import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Alert, Breadcrumb, BreadcrumbItem } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumb>
          <BreadcrumbItem>Test</BreadcrumbItem>
          <BreadcrumbItem>Test 2</BreadcrumbItem>
          <BreadcrumbItem active>Test 3</BreadcrumbItem>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <Button color="danger">Test Button</Button>
      </header>
    </div>
  );
}

export default App;
