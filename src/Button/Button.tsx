import React, { FC, MouseEventHandler } from "react";
import "./style/index";

type ButtonType = "default" | "primary" | "success" | "warning" | "danger";

const Button: FC<{
  children?: React.ReactNode;
  type?: ButtonType;
  onClick?: MouseEventHandler;
  link?: boolean;
  plain?: boolean;
  disabled?: boolean;
}> = (props) => {
  const {
    children = "Button",
    type = "default",
    onClick,
    link,
    plain,
    disabled,
  } = props;
  let buttonClassNameList = [
    "w-button",
    `${type !== "default" ? `w-button-${type}` : ""}`,
    `${link ? `w-button-link` : ""}`,
    `${plain ? "is-plain" : ""}`,
    `${disabled ? "is-disabled" : ""}`,
  ];

  if (disabled) {
    buttonClassNameList = ["w-button", "is-disabled"];
  }

  const buttonClassName = buttonClassNameList.join(" ");

  return (
    <button disabled={disabled} className={buttonClassName} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
};

export default Button;
