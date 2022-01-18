import React from "react";
import "./CompHead.css";

function CompHead({ comp_name, comp_description }) {
  return (
    <div class="comp-header-container">
      <div className="comp-head-body">
        <div className="comp-head-1">
          <span className="comp-head-title">{comp_name}</span>
        </div>
        <div className="comp-head-2">
          <span className="comp-head-description">{comp_description}</span>
        </div>
      </div>
    </div>
  );
}
export default CompHead;
