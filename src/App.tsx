import React, { useRef, useEffect } from "react";

import Scrollspy from "./components/Scrollspy";
import Item from "./components/Item";

function App() {
  const screen1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const app = document.querySelector("body");
    console.log(app);
    window.addEventListener("scroll", console.log);
  }, []);

  return (
    <div className="App" ref={screen1Ref}>
      <h1 style={{ height: 1000 }}>HELLO</h1>
      <Scrollspy>
        <Item id="screen-1" ref={null} />
      </Scrollspy>
    </div>
  );
}

export default App;
