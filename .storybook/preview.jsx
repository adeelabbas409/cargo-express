import React, { Suspense, useEffect, useState } from "react";
import "../src/index.css";

const DIRECTIONS = {
  RTL: "rtl",
  LTR: "ltr",
};

const useDirections = () => {
  const [direction, setDirection] = useState(DIRECTIONS.LTR);

  useEffect(() => {
    document.documentElement.setAttribute("dir", direction);
  }, [direction]);

  useEffect(() => {
    // Check url and find
    const urlParams = new URLSearchParams(window.location.search);
    const globals = urlParams.get("globals");
    if (!globals) return;
    const [dir] = globals
      .split(";")
      .map((params) => {
        return params.indexOf("rtlDirection:") === 0 && params.split(":")[1];
      })
      .filter(Boolean);
    if (dir === "true") setDirection(DIRECTIONS.RTL);
  }, []);

  return {
    direction,
    toggleDirection: () =>
      setDirection(
        direction === DIRECTIONS.LTR ? DIRECTIONS.RTL : DIRECTIONS.LTR
      ),
  };
};

export const decorators = [

  (Story) => {
    const { direction, toggleDirection } = useDirections();
    return (
      <>
        <div
          className="bg-white"
          style={{ position: "relative", width: "100%" }}
        >
          <button
            onClick={toggleDirection}
            style={{
              margin: "6px",
              position: "absolute",
              padding: "6px",
              right: "0px",
              top: "0px",
              border: "1px solid black",
              borderRadius: "3px",
            }}
          >
            {direction.toUpperCase()}
          </button>
        </div>
        <div
          style={{
            backgroundColor: "white",
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Story />
        </div>
      </>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
