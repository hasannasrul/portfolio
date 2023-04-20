import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={12} xl={5}>
              <h3>Subscribe to our Newsletter<br></br> & Never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={12} xl={7}>
              <Row>
                <Col xs={8} sm={9} md={9}>
                  <form onSubmit={handleSubmit}>
                    <div className="new-email-bx">
                      <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    </div>
                  </form>
                </Col>
                <Col xs={4} sm={3} md={3}>
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
