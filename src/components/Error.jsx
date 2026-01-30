import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <div
      className=" w-100 d-flex justify-content-center align-items-center"
      style={{ height: "90vh" }}
    >
      <Card className="w-50">
        <CardHeader>
          <h1 className="text-start text-danger fw-bold">Error 404!!</h1>
        </CardHeader>
        <CardBody>
          <h4 className="fw-bold">
            Please <span className="text-success">Login</span> to the
            application to continue!!
          </h4>
          <p>
            ***It seems as is you have not logged in. Please go back and login
            to continue.
          </p>
        </CardBody>
        <CardFooter>
          <Button
            className="btn-warning bi-arrow-left"
            onClick={() => navigate("/")}
          >
            {" "}
            Back to Login
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
