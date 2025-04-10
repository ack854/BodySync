import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type propsType = { children: any, className: string}

export const Card = ({ children, className = "" }: propsType) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }: propsType) => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};
