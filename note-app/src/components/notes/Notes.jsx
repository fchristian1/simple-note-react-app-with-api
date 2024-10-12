import React from "react";
import NotesMenu from "./NotesMenu";
import NotesList from "./NotesList";
import NotesNew from "./NotesNew";
import { NotesService } from "./service";

function Notes() {
    const notesService = new NotesService();
    const [menu, setMenu] = React.useState("list");
    const [notes, setNotes] = React.useState([]);
    React.useEffect(() => {
        let notesFromApi = notesService.getAllNotesFromApi();
        notesFromApi.then((data) => {
            setNotes(data);
        });
    }, []);
    React.useEffect(() => {
        setMenu("list");
    }, [notes]);
    return (
        <div className="w-full p-3">
            {notes.length > 0 && (
                <NotesMenu menu={menu} setMenu={setMenu}></NotesMenu>
            )}
            {notes.length < 1 && (
                <svg className="flex w-full h-8">
                    <text
                        x="50%"
                        y="50%"
                        dominant-baseline="middle"
                        text-anchor="middle"
                        fill="orange"
                        stroke="black"
                        stroke-width="0.5px"
                        font-size="24px"
                    >
                        No notes found, create one!
                    </text>
                </svg>
            )}
            {menu === "list" && notes.length > 0 && (
                <NotesList notes={notes} setNotes={setNotes} />
            )}
            {(menu === "new" || notes.length == 0) && (
                <NotesNew setMenu={setMenu} notes={notes} setNotes={setNotes} />
            )}
        </div>
    );
}

export default Notes;
