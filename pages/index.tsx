import { useEffect } from "react";

import router from "next/router";
import React from "react";

export default function index() {
  useEffect(() => {
    router.push("/home");
  });
  return <></>;
}
