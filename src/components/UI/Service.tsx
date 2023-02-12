import React from "react";
import Image from "next/image";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/service.module.css";
import ServiceItem from "./ServiceItem";
import {logoData, logoDataTypes} from "@/components/UI/data"
import react from '../../../public/skills/react.svg'

const Service = () => {
  return (
    <section id="Skills">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServiceItem title="Web3 Front end Development" icon="ri-stack-fill" />

                <ServiceItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServiceItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Tech I Used" />
            {/* <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3> */}
            <div className="mt-4 d-flex flex-wrap gap-2">
              {logoData.map((item: logoDataTypes)=>{
                return (
                  <div key={item.name} className="p-1 text-light d-flex gap-1 p-1 border rounded">
                    <Image priority src={`/skills/${item.img}`} width={20} height={20} alt={item.name}/>
                    <span className="text-light">{item.name}</span>
                  </div>
                )
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Service;
