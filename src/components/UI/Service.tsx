import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/service.module.css";
import ServiceItem from "./ServiceItem";

const Service = () => {
  return (
    <section id="Skills">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServiceItem title="Web3 Front end Development" icon="ri-apps-line" />

                <ServiceItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServiceItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non amet
              culpa nobis corporis officiis, numquam cupiditate, enim expedita
              eveniet dolorum, aliquid nesciunt sapiente illo voluptatum!
              Dolores fuga mollitia atque, placeat minima quibusdam accusantium!
              Veniam, non distinctio dolorem rerum laboriosam deleniti.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
