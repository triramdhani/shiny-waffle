import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
// import classes from "@/components/Header/Header.module.css";
import classes from '@/components/Header/Header.module.css'
import Link from "next/link";

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


const Header = () => {
    const headerRef = useRef<HTMLLinkElement>(null);

    const menuRef = useRef<HTMLDivElement>(null);
    
    
    const headerFunc = () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        // headerRef.current?.focus()
        headerRef.current?.classList.add(`${classes.header__shrink}`);
      } else {
        headerRef.current?.classList.remove(`${classes.header__shrink}`);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", headerFunc);
  
      return () => window.removeEventListener("scroll", headerFunc);
    }, []);
  
    const toggleMenu = () =>
    menuRef.current?.classList.toggle(`${classes.menu__active}`);

  return (
    <header className={`${classes.header}`} ref={headerRef}>
      <Container>
        <div className={`${classes.nav__wrapper}`}>
          {/* ======== navigation logo ======== */}
          <div className={`${classes.logo}`}>
            <h1>
              <span>T</span>ri
            </h1>
          </div>

          {/* ========= nav menu =========== */}
          <div
            className={`${classes.navigation}`}
            ref={menuRef}
            onClick={toggleMenu}
          >
            <div className={`${classes.nav__menu}`}>
              {NAV__LINK.map((item, index) => (
                <Link href={item.path} key={index}>
                  {item.display}
                </Link>
              ))}

              {/* <div className={`${classes.nav__right}`}>
                <p className=" d-flex align-items-center gap-2 mb-0">
                  {" "}
                  <i className="ri-phone-line"></i> +088123456789{" "}
                </p>
              </div> */}
            </div>
          </div>

          <span className={`${classes.mobile__menu}`}>
            <i className="ri-menu-line" onClick={toggleMenu}></i>
          </span>
        </div>
      </Container>
    </header>
  )
}

export default Header