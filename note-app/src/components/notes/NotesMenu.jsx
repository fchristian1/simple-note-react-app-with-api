import React from "react";
import Button from "../Button";

function NotesMenu({ menu, setMenu }) {
    return (
        <div className="flex justify-center">
            <Button active={menu === "list"} onClick={() => setMenu("list")}>
                List
            </Button>
            <Button active={menu === "new"} onClick={() => setMenu("new")}>
                New Note
            </Button>
        </div>
    );
}

export default NotesMenu;
