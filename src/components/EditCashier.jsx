import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Form,
  FormControl,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Service from "./Service";
import Error from "./Error";

const EditCashier = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cashierDetails, setCashierDetails] = useState(
    location?.state?.cashierDetails,
  );

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await Service.editCashier(cashierDetails);
    if (response.status === 202) {
      navigate("/e", {
        state: {
          cashierDetails: response.data,
        },
      });
    }
  }

  return location?.state === null ? (
    <Error />
  ) : (
    <>
      <Container
        className="w-50 d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <Card className="w-100">
          <CardHeader className="d-flex align-items-center">
            <Button
              className="bi bi-arrow-left me-2"
              onClick={() =>
                navigate("/h", {
                  state: {
                    cashierDetails: cashierDetails,
                  },
                })
              }
            ></Button>
            <h1>
              Hi {location?.state?.cashierDetails?.cashierName}, Update your
              details here
            </h1>
          </CardHeader>
          <Form onSubmit={handleSubmit}>
            <CardBody>
              <FormControl
                type="text"
                className="mb-1"
                name="cashierName"
                value={cashierDetails.cashierName}
                onChange={(e) => {
                  setCashierDetails({
                    ...cashierDetails,
                    [e.target.name]: e.target.value,
                  });
                }}
                required
                placeholder="Enter your name"
              />
              <FormControl
                type="email"
                className="mb-1"
                name="cashierEmail"
                readOnly
                onChange={(e) => {
                  setCashierDetails({
                    ...cashierDetails,
                    [e.target.name]: e.target.value,
                  });
                }}
                required
                value={location?.state?.cashierDetails?.cashierEmail}
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
              <Button type="submit" variant="success">
                Update
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default EditCashier;
