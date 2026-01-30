import { Button, Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return location?.state === null ? (
    <Error />
  ) : (
    <div className="container mt-5 pt-5">
      <div className="d-flex align-items-center justify-content-between">
        <div>
          <h2>
            Hi{" "}
            <u className="text-primary">
              {location?.state?.cashierDetails?.cashierName}
            </u>
            , Welcome to the <span className="text-success">Billing</span>
            <span className="text-warning">Suite</span>
          </h2>
          <p>
            Let's go through the options you have in this application. Below are
            the mentioned options.
          </p>
        </div>
        <Button
          className="btn-lg bi bi-person-circle btn-secondary"
          onClick={() =>
            navigate("/e", {
              state: {
                cashierDetails: location?.state?.cashierDetails,
              },
            })
          }
        >
          {" "}
          View & Edit Profile
        </Button>
      </div>
      <Container
        style={{ height: "65vh" }}
        className="d-flex align-items-center justify-content-between"
      >
        <Button
          className="btn btn-lg btn-success bi-database-add"
          onClick={() =>
            navigate("/a", {
              state: {
                cashierDetails: location?.state?.cashierDetails,
              },
            })
          }
        >
          {" "}
          Add Products
        </Button>
        <Button
          className="btn btn-lg btn-primary bi-pencil-square"
          onClick={() =>
            navigate("/v", {
              state: {
                cashierDetails: location?.state?.cashierDetails,
              },
            })
          }
        >
          {" "}
          View/Edit Products
        </Button>
        <Button
          className="btn btn-lg btn-info bi-receipt"
          onClick={() =>
            navigate("/b", {
              state: {
                cashierDetails: location?.state?.cashierDetails,
              },
            })
          }
        >
          {" "}
          Billing
        </Button>
        <Button
          className="btn btn-lg btn-warning bi-list-ol"
          onClick={() =>
            navigate("/vb", {
              state: {
                cashierDetails: location?.state?.cashierDetails,
              },
            })
          }
        >
          {" "}
          View Bills
        </Button>
        <Link className="btn btn-lg btn-danger bi-box-arrow-left" to="/">
          {" "}
          Logout
        </Link>
      </Container>
    </div>
  );
};

export default HomePage;
