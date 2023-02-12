import React, { ReactNode } from "react";
import classes from "@/styles/subtitle.module.css";

interface SectionSubtitleProps {
    subtitle: string
}

const SectionSubtitle = (props:SectionSubtitleProps) => {
  return <h5 className={`${classes.section__subtitle}`}>{props.subtitle}</h5>;
};

export default SectionSubtitle;
