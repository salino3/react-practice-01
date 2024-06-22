import React from "react";
import { WorkersTable } from "./components";
import "./second-page.styles.scss";

export const SecondPage: React.FC = () => {
  return (
    <div className="rootSecondPage">
      <h1>Second Page</h1>
      <WorkersTable />
    </div>
  );
};
