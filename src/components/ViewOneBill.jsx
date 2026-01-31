import { Button, Card, CardBody, CardHeader } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Error from "./Error";

const ViewOneBill = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bill = location?.state?.bill;

  return location?.state === null ? (
    <Error />
  ) : (
    <Card className="m-1">
      <CardHeader className="d-flex align-items-center">
        <Button
          className="bi bi-arrow-left me-3"
          onClick={() =>
            navigate("/vb", {
              state: {
                cashierDetails: location?.state?.cashierDetails,
              },
            })
          }
        ></Button>
        <h2>View & Print Bill</h2>
      </CardHeader>
      <CardBody>
        <div className="mb-4 border p-3 rounded bg-light">
          <div className="d-flex justify-content-between">
            <div>
              <img
                src="https://cdn.bitrefill.com/content/cn/b_rgb%3AFFFFFF%2Cc_pad%2Ch_600%2Cw_1200/v1642539487/lulu.webp"
                style={{ borderRadius: "15px", width: "20vw" }}
              />
            </div>
            <div>
              <h5 className="d-flex justify-content-between">
                <span>Customer ID: {bill.customerId}</span>{" "}
                <Button
                  className="bi bi-printer"
                  onClick={() => {
                    window.print();
                  }}
                ></Button>
              </h5>
              <p>
                Date: {bill.billDate} | Time: {bill.billTime}
              </p>
              <p>Cashier: {bill.cashierName}</p>
            </div>
          </div>
          <table className="table table-bordered table-striped mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Product Image</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Price Per Item (₹)</th>
                <th>Quantity</th>
                <th>Price (₹)</th>
              </tr>
            </thead>
            <tbody>
              {bill.products.map((product, pIndex) => (
                <tr key={pIndex}>
                  <td>{product.productId}</td>
                  <td>
                    <img src={product.productImage} style={{ width: "70px" }} />
                  </td>
                  <td>{product.productName}</td>
                  <td>{product.productManufacturer}</td>
                  <td>{"₹" + product.productPrice + "/-"}</td>
                  <td>{product.productPurchaseQuantity}</td>
                  <td>{"₹" + product.total + "/-"}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="6" className="text-end fw-bold text-success">
                  Total :
                </td>
                <td className="fw-bold text-success">₹{bill.totalAmount}/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ViewOneBill;
