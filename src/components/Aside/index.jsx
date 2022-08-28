import React from "react";
import "./style.scss";
import { v4 as uuid } from "uuid";

const asideItemData = ["Photos"];

function Aside() {
  return (
    <div className="aside-wrapper">
      {asideItemData.map((item) => {
        return (
          <div className="aside-item" key={uuid()}>
            <p>{item}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Aside;
