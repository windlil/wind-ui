import { FC, PropsWithChildren } from "react";
import './style/index'

const ButtonGroup: FC<PropsWithChildren> = ({ children }) => {
  return <div className="button-group">{children}</div>;
};

export default ButtonGroup;
