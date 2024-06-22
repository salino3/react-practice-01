import React from "react";
import { WorkersTable } from "./components";
import "./second-page.styles.scss";

export const SecondPage: React.FC = () => {
  return (
    <div className="rootSecondPage">
      <h1>Table Component</h1>
      <WorkersTable />
    </div>
  );
};
