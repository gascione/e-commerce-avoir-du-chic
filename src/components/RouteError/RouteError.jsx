import React from "react";
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();
  return <div>RouteError</div>;
};

export default RouteError;
