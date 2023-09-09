import { useState } from "react";
import "./PropsTestingComponent.css";

export function PropsFunction(props) {
  const { title, description } = props;

  return (
    <>
      <h1 className="title">{title}</h1>
      <p>{description}</p>
    </>
  );
}

export function PropsComponent() {
  return (
    <>
      <PropsFunction title="Title" description="Description" />
    </>
  );
}
