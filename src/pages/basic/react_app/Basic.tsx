import React, { useRef, useState } from "react";

export default function (props: { foo: string; children: any }) {
  const style = useRef({
    background: "#91e7fc",
    width: 500,
    margin: "auto",
    padding: 10,
  });

  const [counter, setCounter] = useState(0);

  return (
    <div style={style.current}>
      这是react组件
      <h3>props.foo参数: {props.foo}</h3>
      {props.children}
      <div>
        <p>
          <span>当前 counter: {counter}</span>
        </p>
        <button
          onClick={() => {
            setCounter((prev) => ++prev);
          }}
        >
          点我
        </button>
      </div>
    </div>
  );
}
