"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TicketStatusPopup: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const success = searchParams.get("success");
    const canceled = searchParams.get("canceled");

    if (success === "true") {
      toast.success(
        "JazakAllahu khairan for purchasing your ticket(s)! We look forward to hosting you! Please check your email for your receipt in a few minutes.",
        {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
    } else if (canceled === "true") {
      toast.error(
        "Your ticket purchase did not go through and was canceled. Please try again. If issue persists, please contact us via email.",
        {
          position: "top-center",
          autoClose: 10000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
    }

    // Clear query parameters
    if (success || canceled) {
      router.replace("/", { shallow: true });
    }
  }, [searchParams, router]);

  return <ToastContainer />;
};

export default TicketStatusPopup;
