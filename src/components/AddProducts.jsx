import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Form,
  FormControl,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import Service from "./Service";
import Error from "./Error";
import { useState } from "react";

const AddProducts = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [product, setProduct] = useState({
    productName: "",
    productImage: "",
    productManufacturer: "",
    productManDate: "",
    productExpDate: "",
    productCategory: "",
    productPrice: "",
    productQuantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((product) => ({
      ...product,
      [name]: value,
    }));
  };

  async function addProducts(event) {
    event.preventDefault();
    const response = await Service.addProduct(product);
    if (response.status === 201) {
      alert("Product added succesfully!");
      setProduct({
        productName: "",
        productImage: "",
        productManufacturer: "",
        productManDate: "",
        productExpDate: "",
        productCategory: "",
        productPrice: "",
        productQuantity: "",
      });
    }
  }

  return location?.state === null ? (
    <Error />
  ) : (
    <>
      <Container
        className="w-75 d-flex justify-content-center align-items-center"
        style={{ height: "90vh" }}
      >
        <Card className="w-100">
          <CardHeader className="d-flex align-items-center">
            <Button
              className="bi bi-arrow-left me-2"
              onClick={() =>
                navigate("/h", {
                  state: {
                    cashierDetails: location?.state?.cashierDetails,
                  },
                })
              }
            ></Button>
            <h1>Add Products Here</h1>
          </CardHeader>
          <Form onSubmit={addProducts} autoComplete="on">
            <CardBody>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product manufacturer name :{" "}
                </FormLabel>
                <FormControl
                  type="text"
                  required
                  name="productManufacturer"
                  placeholder="Enter product manufacturer name"
                  value={product.productManufacturer}
                  onChange={handleChange}
                  autoFocus
                />
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product name :{" "}
                </FormLabel>
                <FormControl
                  type="text"
                  required
                  name="productName"
                  placeholder="Enter product name"
                  value={product.productName}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product image :{" "}
                </FormLabel>
                <FormControl
                  type="url"
                  required
                  name="productImage"
                  placeholder="Enter product image"
                  value={product.productImage}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product manufacturing date :{" "}
                </FormLabel>
                <FormControl
                  type="date"
                  required
                  name="productManDate"
                  value={product.productManDate}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product expiry date :{" "}
                </FormLabel>
                <FormControl
                  type="date"
                  required
                  name="productExpDate"
                  value={product.productExpDate}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product category :{" "}
                </FormLabel>
                <FormSelect
                  required
                  name="productCategory"
                  value={product.productCategory}
                  onChange={handleChange}
                >
                  <option value="">-- Select Category --</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Stationary">Stationary</option>
                  <option value="Beverages">Beverages</option>
                  <option value="Groceries">Groceries</option>
                  <option value="Snacks">Snacks</option>
                  <option value="Meat">Meat</option>
                  <option value="Jewelery">Jewelery</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Other">Other</option>
                </FormSelect>
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product price :{" "}
                </FormLabel>
                <FormControl
                  type="number"
                  required
                  name="productPrice"
                  placeholder="Enter product price"
                  value={product.productPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex align-items-center mb-1">
                <FormLabel style={{ width: "350px" }}>
                  Product quantity :{" "}
                </FormLabel>
                <FormControl
                  type="number"
                  required
                  name="productQuantity"
                  placeholder="Enter product quantity"
                  value={product.productQuantity}
                  onChange={handleChange}
                />
              </div>
            </CardBody>
            <CardFooter>
              <Button variant="success" type="submit">
                Add Product
              </Button>
            </CardFooter>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default AddProducts;
