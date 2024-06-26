import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeLayout, SecondPageLayout } from "@/layouts";
import { appRoutes } from ".";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={appRoutes?.root} element={<HomeLayout />} />
      <Route path={appRoutes?.table} element={<SecondPageLayout />} />
    </Routes>
  );
};
