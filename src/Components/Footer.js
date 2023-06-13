import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="bg-white border-top border-3 shadow-sm fixed-bottom">
      <Container>
        <div className="d-flex justify-content-center">
          <p className="fw-bold fs-6 mt-3">© CopyRight Ahmed Fadaly ©2023</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
