import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SpinnerComponent from "../components/SpinnerComponent";
import Title from "../components/Title";
import { login, reset } from "../features/auth/authSlice";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isError, IsSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (IsSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, IsSuccess, message, dispatch, navigate, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please provide a valid email address");
    }
    if (!password) {
      toast.error("Please provide a valid password");
    }
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };
  return (
    <React.Fragment>
      <Title title="login" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaSignInAlt /> Login
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <SpinnerComponent />}
        <Row className="mt-3">
          <Col className="justify-content-center">
            <Form onSubmit={submitHandler}>
              <Form.Group controlled="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlled="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Please enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="mt-3">
                Sign In
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
          New Customer?
          <Link to="/register"> Register here</Link>
          </Col>

        </Row>
      </Container>
    </React.Fragment>
  );
}
