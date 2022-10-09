import React, { useEffect} from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import SpinnerComponent from "../components/SpinnerComponent";
import Title from "../components/Title";
import { activate, reset } from "../features/auth/authSlice";
import { Link,useNavigate,useParams } from "react-router-dom";


export default function Activation() {
  const {uid,token} = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {  isLoading, isError, IsSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (IsSuccess) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, IsSuccess, message, dispatch, navigate]);

  const submitHandler = () => {
    const userData = {
      uid,
      token
    }
dispatch(activate(userData))
toast.success("Your account has been successfully activate!")

  }
  return (
    <React.Fragment>
       <Title title="Activate User" />
      <Container>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>
                <FaCheckCircle /> Activate your account
              </h1>
              <hr className="hr-text" />
            </section>
          </Col>
        </Row>
        {isLoading && <SpinnerComponent/>}
        <Row className="mt-3">
          <Col className="text-center">
            <Button type="submit" varient="primary" size="large" className="mt-3 large-btn" onClick={submitHandler}>
             Activate
            </Button>

          </Col>

        </Row>
        </Container>
    </React.Fragment>
  )
}
