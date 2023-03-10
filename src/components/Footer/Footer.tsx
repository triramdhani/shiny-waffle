// import classes from '@/components/Footer/Footer.module.css'
import { Container, Row, Col } from "reactstrap";
import classes from "@/components/Footer/Footer.module.css";
import Link from "next/link";
import SosmedBtn from "../UI/SosmedBtn";

const NAV__LINK = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "#about",
    display: "About",
  },
  {
    path: "#Skills",
    display: "Skills",
  },
  {
    path: "#portfolio",
    display: "Portfolio",
  },
];

function Footer() {
    const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          {/* ========= footer top =========== */}
          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}
            </div>
          </Col>

          <Col lg="6" className={`${classes.footer__top}`}>
            <div className={`${classes.footer__creator}`}>
              {/* <h6>Created by Tri</h6> */}
            </div>
          </Col>

          {/* ========= footer bottom ========= */}
          <Col lg="12">
            <div className={`${classes.footer__copyright}`}>
              <p>
                &copy; Copyright {year} - Developed by Tri Ramdhani . All right
                reserved.{" "}
              </p>
            </div>
          </Col>
          <Col lg="2">
                
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
