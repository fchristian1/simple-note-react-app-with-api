import React from "react";

function NotesListElement({ note }) {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className="flex row justify-between">
                <div>{note.title}</div>
                <div>{note.category}</div>
            </div>
            <div>{note.body}</div>
        </div>
    );
}

export default NotesListElement;
