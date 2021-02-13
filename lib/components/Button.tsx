import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        background: "#16A34A",
        fontWeight: "bold",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      {...props}
    />
  );
};

export default Button;
