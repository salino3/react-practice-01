import React from "react";
import { Header } from "@/common-app";
import { HomePage } from "@/pods";
import "./home.styles.scss";

export const HomeLayout: React.FC = () => {
  return (
    <main className="rootHomeLayout">
      <Header />
      <HomePage />
    </main>
  );
};
