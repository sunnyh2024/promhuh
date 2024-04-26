import { useEffect, useState } from "react";
import Function from "./components/Function";
import Terminal from "./components/Terminal";
import Celebrate from "./components/Celebrate";

function App() {
  const [enterPressed, setEnterPressed] = useState(false);
  const [yesClicked, setYesClicked] = useState(false);

  useEffect(() => {
    function handleInput(e: KeyboardEvent) {
      if (e.key === "Enter") {
        setEnterPressed(true);
      }
    }

    document.addEventListener("keydown", handleInput);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleInput);
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-black">
      {yesClicked ? (
        <Celebrate />
      ) : (
        <div className="h-screen">
          <Function />
          <Terminal
            enterPressed={enterPressed}
            callback={() => setYesClicked(true)}
          />
          
        </div>
      )}
    </div>
  );
}

export default App;
