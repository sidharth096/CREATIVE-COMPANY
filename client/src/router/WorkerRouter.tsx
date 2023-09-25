import React from "react";
import { Routes, Route } from "react-router-dom";
import WorkerLoginPage from "../pages/worker/WorkerLoginPage";
import WorkerSignupPage from "../pages/worker/WorkerSignupPage";

const WorkerRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/workerRegister" element={<WorkerSignupPage />} />
        <Route path="/workerLogin" element={<WorkerLoginPage />} />
      </Routes>
    </>
  );
};

export default WorkerRouter;
