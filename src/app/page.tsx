"use client"
import { useState } from "react";
import { ComponentProps } from "react";

let title : string = "Hello World"

type Color = "red" | "blue" | "green"

type Button1Props = {
  title?: string;
  subtitle?: string;
  style?: React.CSSProperties;
  padding?: [number, number?];
  onClick?: () => void;
  children?: React.ReactNode;
}

function Button1(props: Button1Props) {
  return <button style={props.style} onClick={props.onClick}>{props.title}</button>;
}

type Button2Props = {

}

type LinkProps = ComponentProps<"a">;

function Button2({}: Button2Props) {
  const [count, setCount] = useState<number>(0);
  return <button onClick={() => setCount(count + 1)}>Click me {count}</button>;
}
function Link(props: LinkProps) {
  return <a {...props}>{props.children}</a>;
}

function Page() {
  return (
    <div>
      <Button1 onClick={() => {
        alert("Funciona!");
      }} title={title} style={{ backgroundColor: "gold", color: "black" }}><span>Click me</span></Button1>
      <Button2/>
      {/* <Link href="https://www.google.com">Google</Link> */}
    </div>
  )
}

export default Page