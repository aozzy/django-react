import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SpinnerComponent from "../components/SpinnerComponent";
import Title from "../components/Title";
import { register, reset } from "../features/auth/authSlice";
import { Link,useNavigate } from "react-router-dom";


export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
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
      toast.success("An activation email has been sent to you, please click the link to activate your account")
    }
    dispatch(reset());
  }, [isError, IsSuccess, message, dispatch, navigate, user]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please provide a valid email address");
    }
    if (password !== re_password) {
      toast.error("Your passwords don not match");
    }else{

      const userData = {
        username,
        first_name,
        last_name,
        re_password,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };

  return <React.Fragment>
     <Title title="Register" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaUser /> Login
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <SpinnerComponent />}
        <Row className="mt-3">
          <Col className="justify-content-center">
            <Form onSubmit={submitHandler}>
            <Form.Group controlled="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Please enter a username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            <Form.Group controlled="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
            <Form.Group controlled="first_name">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Please enter your name"
                  value={first_name}
                  onChange={(e) => setFirstName(e.target.value)}
                />
            <Form.Group controlled="last_name">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Please enter your last name"
                  value={last_name}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Form.Group>
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
            <Form.Group controlled="re_password">
                <Form.Label> Re-Enter Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Please re-enter your password"
                  value={re_password}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="mt-3">Sign Up</Button>
            </Form>
          </Col>

        </Row>
        <Row className="py-3">
          <Col>
          Already have an account?
          <Link to="/login"> Login here</Link>
          </Col>

        </Row>
        </Container>
  </React.Fragment>
  
}
