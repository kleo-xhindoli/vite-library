import React from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  backgroundColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  backgroundColor = "#16A34A",
  textColor = "white",
  ...props
}) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        fontWeight: "bold",
        backgroundColor,
        color: textColor,
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
      {...props}
    />
  );
};

export default Button;
