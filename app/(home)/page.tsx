"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SetupPage = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const user = JSON.parse(localStorage.getItem("user")??"")

    if (accessToken) {
      redirect(`/chat/${user.id}`);
    } else {
      redirect("/sign-in");
    }
  }, []);

  return null;
};

export default SetupPage;
