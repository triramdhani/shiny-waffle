import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "@/styles/portofolio.module.css";
import  {portfolio ,portfolioDetail } from './data';
import PortfolioItem from "./PortofolioItem";

const Portfolio = () => {
  const [filter, setFilter] = useState("Web");
  const [data, setData] = useState([] as portfolioDetail[]);

  useEffect(() => {
    if (filter === "Mobile App") {
      const filteredData:portfolioDetail[] = portfolio.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }

    if (filter === "Web") {
      const filteredData = portfolio.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle=" My portfolio" />
            <h4 className="mt-4">Some of my distinguished works</h4>
          </Col>

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={` ${
                  filter === "Mobile App" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Mobile App")}
              >
                Mobile App
              </button>
              <button
                className={`${
                  filter === "Web" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Web")}
              >
                Web
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
