import React from "react";
import "./container.css";

type ContainerProps = {
  children: React.ReactNode;
};
export const Container = (props: ContainerProps) => {
  return (
    <div className="card flex justify-center items-center">
      {props.children}
    </div>
  );
};
