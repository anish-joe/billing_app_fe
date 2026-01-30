import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Form,
  FormControl,
} from "react-bootstrap";
import Service from "./Service";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [cashierDetails, setCashierDetails] = useState({
    cashierEmail: "",
    cashierPassword: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    // form is prevented from submitting the data
    const response = await Service.loginCashier(cashierDetails);
    if (cashierDetails.cashierEmail === response.data.cashierEmail) {
      navigate("/h", {
        state: {
          cashierDetails: response.data,
        },
      });
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <Card className="w-50">
        <CardHeader>
          <h1>Login Here</h1>
        </CardHeader>
        <Form onSubmit={handleSubmit}>
          <CardBody>
            <FormControl
              type="email"
              className="mb-1"
              name="cashierEmail"
              value={cashierDetails.cashierEmail}
              onChange={(e) => {
                setCashierDetails({
                  ...cashierDetails,
                  [e.target.name]: e.target.value,
                });
              }}
              required
              placeholder="Enter your email example: something@example.com"
            />
            <FormControl
              type="password"
              required
              name="cashierPassword"
              value={cashierDetails.cashierPassword}
              onChange={(e) => {
                setCashierDetails({
                  ...cashierDetails,
                  [e.target.name]: e.target.value,
                });
              }}
              placeholder="Enter your password"
            />
          </CardBody>
          <CardFooter>
            <Button variant="success" type="submit">
              Login
            </Button>
          </CardFooter>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
