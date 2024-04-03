"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const SetupPage = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const userDetails = localStorage.getItem("user");
    const user = userDetails && JSON?.parse(userDetails);

    if (accessToken && user) {
      redirect(`/chat/${user._id}`);
    } else {
      redirect("/sign-up");
    }
  }, []);

  return null;
};

export default SetupPage;
