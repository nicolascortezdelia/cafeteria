import React from "react";
import { Container, Form } from "react-bootstrap";
import { useState } from "react";
import {
  validateProductName,
  validateCategory,
  validatePrice,
  validateUrl,
} from "../../helpers/ValidateFields";

const ProductCreate = () => {
  //State
  const [productName, setProductName] = useState("");
  const [price, setProductPrice] = useState(0);
  const [urlImg, seturlImg] = useState("");
  const [category, setCategory] = useState("");

  //funcion para crear Producto
  const handleSubmit = (e) => {
    e.preventDefault();

    //VALIDO LOS CAMPOS
    if (
      !validateProductName(productName) ||
      !validatePrice(price) ||
      !validateUrl(urlImg) ||
      !validateCategory(category)
    ) {
      alert("Validación errónea");
    }
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Add Product</h1>
        <hr />
        {/* Form Product */}
        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product name*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Café"
              onChange={(e) => setProductName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Price*</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 50"
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image URL*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: https://media.istockphoto.com/photos/two-freshly-baked-french-id1277579771?k=20"
              onChange={(e) => seturlImg(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Category*</Form.Label>
            <Form.Select onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select an option</option>
              <option value="bebida-caliente">Bebida Caliente</option>
              <option value="bebida-fria">Bebida Fria</option>
              <option value="sandwitch">Sandwich</option>
              <option value="dulce">Dulce</option>
              <option value="salado">Salado</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn-yellow">Save</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ProductCreate;
