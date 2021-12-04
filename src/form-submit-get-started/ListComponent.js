import React from "react";
import "../style/style.css";

function ListComponent(props) {
  return (
    <div>
      <a href="/register">Register</a>
      <a href="/apply-validation">Apply Validation</a>
      <a href="/existing-form">Existing form</a>
      <a href="/UI-libraries">UI libraries</a>
      <a href="/handle-errors">Handle Errors</a>
      <a href="/schema-validate">Schema Validate</a>
      <a href="/form-validate-demo">Validate form demo</a>
      <a href="/form-criteriaMode">Criteria Mode</a>
      <a href="/form-register">User Form Register</a>
    </div>
  );
}

export default ListComponent;
