import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthLoginBasic from "../pages/AuthLoginBasic";
import HomePage from "../pages/HomePage";
import AuthRegisterBasic from "../pages/AuthRegisterBasic";
import AuthForgotPasswordBasic from "../pages/AuthForgotPasswordBasic";





export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<AuthLoginBasic />}>
        <Route index element={<AuthLoginBasic/>} />
      </Route>
      <Route path="/dashboard" element={<HomePage />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="/signup" element={<AuthRegisterBasic />}>
        <Route index element={<AuthRegisterBasic />} />
      </Route>

      <Route path="/forgot-password" element={<AuthForgotPasswordBasic />}>
        <Route index element={<AuthForgotPasswordBasic />} />
      </Route>
      
    </>
  )
);
