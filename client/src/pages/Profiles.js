import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../features/profiles/profileSlice";
import { Container, Col, Row, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import SpinnerComponent from "../components/SpinnerComponent";
export default function Profiles() {
  const { profile, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.profile
  );

  const dispatch = useDispatch();
  useEffect(() => {
    //  toast.error(message)
    //  console.log(message);
    if (isError) {
      toast.error("You need to be logged in ");
    } else {
      dispatch(getProfile());
      // console.log(profile);
    }
  }, [dispatch, isError, message]);
  console.log(profile);

  return (
    <div>
      <Container>
        {isLoading && <SpinnerComponent />}

        <Row className="mt-5">
          <h1 className="mt-5">General Information</h1>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label className="mt-3">First Name</Form.Label>
              <Form.Control placeholder={`${profile.first_name}`} disabled />
              <Form.Label className="mt-3">Last Name</Form.Label>
              <Form.Control placeholder={`${profile.last_name}`} disabled />
              <Form.Label className="mt-3">Email</Form.Label>
              <Form.Control placeholder={`${profile.email}`} disabled />
            </Form.Group>
            {/* <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
        <option>Disabled select</option>
        </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group> */}
          </Col>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label className="mt-3">Username</Form.Label>
              <Form.Control placeholder={`${profile.username}`} disabled />
              <Form.Label className="mt-3">Gender</Form.Label>
              <Form.Control placeholder={`${profile.gender}`} disabled />
              <Form.Label className="mt-3">Phone Number</Form.Label>
              <Form.Control placeholder={`${profile.phone_number}`} disabled />
            </Form.Group>
          </Col>
        </Row>
        <Container>
          <h1>Address</h1>
          <Row>
            <Col sm={8}>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control placeholder={`${profile.country}`} disabled />
              </Form.Group>
            </Col>
            <Col sm={4}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder={`${profile.city}`} disabled />
              </Form.Group>
            </Col>
          </Row>
        </Container>
        <Row>
          <Col><Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder={`${profile.city}`} disabled />
              </Form.Group></Col>
          <Col><Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder={`${profile.city}`} disabled />
              </Form.Group></Col>
          <Col><Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder={`${profile.city}`} disabled />
              </Form.Group></Col>
        </Row>
      </Container>
    </div>
  );
}
