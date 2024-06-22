import React from "react";
import { Header } from "@/common-app";
import { SecondPage } from "@/pods";
export * from "./second-page.styles.scss";

export const SecondPageLayout: React.FC = () => {
  return (
    <main className="rootSecondPageLayout">
      <Header />
      <SecondPage />
    </main>
  );
};
