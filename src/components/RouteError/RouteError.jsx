import React from "react";
import { useRouteError } from "react-router-dom";

const RouteError = () => {
  const error = useRouteError();
  return (
    <>
      <div>RouteError</div>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
};

export default RouteError;
