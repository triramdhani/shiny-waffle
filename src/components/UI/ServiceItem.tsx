import React from "react";
import classes from "@/styles/service-item.module.css";


interface ServiceItemProps {
    title:string
    icon: string
}
const ServiceItem = ({ title, icon }:ServiceItemProps) => {
  return (
    <div className={`${classes.service__item}`}>
      <span>
        <i className={icon}></i>
      </span>

      <h5>{title}</h5>
    </div>
  );
};

export default ServiceItem;
