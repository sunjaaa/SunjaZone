import React from "react";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const Button = ({ onClick, children }: Props) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
