"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SetupPage = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      redirect("/chat");
    } else {
      redirect("/sign-in");
    }
  }, []);

  return null;
};

export default SetupPage;
