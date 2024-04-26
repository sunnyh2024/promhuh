import { useState } from "react";
import Buttons from "./Buttons";
import useInterval from "./hooks/useInterval";

export default function Terminal({
  enterPressed,
  callback,
}: {
  enterPressed: boolean;
  callback: () => void;
}) {
  const [cursor, setCursor] = useState(true);

  useInterval(
    () => {
      setCursor(!cursor);
    },
    enterPressed ? null : 500
  );

  return (
    <div className="mx-6 rounded-xl bg-slate-900 text-slate-50 font-mono h-64 p-4">
      <div className="flex flex-row">
        <div>{"my-mac ~ % python3 promposal.py"}</div>
        <div
          className={`${cursor ? "bg-white" : "bg-transparent"} h-6 w-3`}
        ></div>
      </div>
      {enterPressed ? <Buttons callback={callback} /> : <div />}
    </div>
  );
}
