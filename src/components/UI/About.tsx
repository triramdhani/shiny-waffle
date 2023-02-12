import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from '@/../public/Hero.jpg'
import img02 from'@/../public/Hero.jpg';
import img03 from'@/../public/Hero.jpg';
import img04 from'@/../public/Hero.jpg';

import classes from "@/styles/about.module.css";

const About = () => {
  return (
    <section id="about" className="">
      <Container>
        <Row>
          <Col lg={8} className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <div className={`${classes.content__padding}`}>
              <p>
                I&apos;m 21 years old, I started interested in the web when I was in the 3rd year of high school. at that time I learned to code using Android. After graduating from High Schooll I worked at a snack and food factory in my city. Thanks to this job I was able to buy a laptop and start seriously learning web programming. 
              </p>
              <p>
                 I have interest in <span className="text-light">Front-End Development</span> and enjoy working on the web. The front end is like a rich forest and we can choose and combine many tech/libraries to build engaging and user-friendly websites and applications.
              </p>
              <p>
                I like watching anime because anime always presents lots of amazing characters and stories. from bad to good, from stupid to smart, from poor to rich, <span className="text-light">from Zero to Hero</span> . As a person I want to have my own story about my personal development. I don&apos;t want to be undeveloped person or stuck in the status quo. <span className="text-light">I always try to improve myself,</span>  and <span className="text-light">become a better person</span>.
              </p>
            </div>
            {/* <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div> */}
            {/* <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="#">Download CV</Link>
              </button>
            </div> */}
          </Col>
          <Col className="align-self-center">
            <div className="mr-auto">
              <h3 className="mt-4">I&apos;m </h3>
              <h3 className="mb-4">Open for part-time or fulltime work</h3>
            </div>
          </Col>
          {/* <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
