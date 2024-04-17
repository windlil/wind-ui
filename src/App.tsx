import { MouseEventHandler } from "react";
import Button from "./Button/Button";
import ButtonGroup from "./Button/ButtonGroup";

const App = () => {
  const click: MouseEventHandler = (e) => console.log(e);
  return (
    <>
      <ButtonGroup>
        <Button onClick={click}></Button>
        <Button type="primary"></Button>
        <Button type="success"></Button>
        <Button type="warning"></Button>
        <Button type="danger"></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button link></Button>
        <Button type="primary" link></Button>
        <Button type="success" link></Button>
        <Button type="warning" link></Button>
        <Button type="danger" link></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button plain></Button>
        <Button type="primary" plain></Button>
        <Button type="success" plain></Button>
        <Button type="warning" plain></Button>
        <Button type="danger" plain></Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button disabled></Button>
        <Button type="primary" disabled></Button>
        <Button type="success" disabled></Button>
        <Button type="warning" disabled></Button>
        <Button type="danger" disabled></Button>
      </ButtonGroup>
    </>
  );
};

export default App;
