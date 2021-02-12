import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {}

const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} />;
};

export default Button;
