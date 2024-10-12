import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Button from "./components/Button";
import Notes from "./components/notes/Notes";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center mt-8">
            <Notes />
        </div>
    );
}

export default App;
