import React from "react";
import classes from "@/styles/portofolio-item.module.css";
import Image from "next/image";
import Link from "next/link";
import { portfolioDetail } from "./data";

const PortfolioItem = (prop:portfolioDetail) => {
  const { title, img, liveUrl, keyword } = prop;
  return (
    <div className={`${classes.portfolio__item}`}>
      <div className="bg-transparent">
        <h6>{title}</h6>
        {keyword.map((item, index) => (
          <span className={`${classes.portfolio__keyword}`} key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className={`${classes.portfolio__img}`}>
        <Image alt="portfolio-img" src={img} width={"260"} height={"200"}/>
      </div>

      <div className={`${classes.portfolio__live} bg-transparent`}>
        <button className="primary__btn">
          <Link href={liveUrl}>Launch</Link>
        </button>
      </div>
    </div>
  );
};

export default PortfolioItem;
