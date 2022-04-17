import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Alert, Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardTitle, CardText, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Form>
            <Row>
              <Col md>
                <FormGroup controlID="formEmail">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="Example@email.com" />
                  <FormText className="text-muted">
                    We'll never share your email address, trust us!
                  </FormText>
                </FormGroup>
              </Col>
              <Col md>
                <FormGroup controlId="formPassword">
                  <Label>Password</Label>
                  <Input type="password" placeholder="Password" />
                </FormGroup>
              </Col>
            </Row>
            <Button variant="secondary" type="submit">Login</Button>
          </Form>
          <Card className="mb-3" style={{ color: "#000" }}>
            <CardImg src="https://picsum.photos/id/1025/200/100" />
            <CardBody>
              <CardTitle>Card Example</CardTitle>
              <CardText>
                This is an example of ReactStrap Card
              </CardText>
              <Button variant="primary">Read More</Button>
            </CardBody>
          </Card>
          <Breadcrumb>
            <BreadcrumbItem>Test</BreadcrumbItem>
            <BreadcrumbItem>Test 2</BreadcrumbItem>
            <BreadcrumbItem active>Test 3</BreadcrumbItem>
          </Breadcrumb>
          <Alert variant="success">This is a button</Alert>
          <Button color="danger">Test Button</Button>
        </Container>
      </header>
    </div>
  );
}

export default App;
