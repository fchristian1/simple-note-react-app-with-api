import React, { useEffect } from "react";
import NotesListElement from "./NotesListElement";
import Button from "../Button";
import { NotesService } from "./service";

function NotesList({ notes, setNotes }) {
    const notesService = new NotesService();

    const [category, setCategory] = React.useState([]);

    const [selectCategory, setSelectCategory] = React.useState("All");

    useEffect(() => {
        setCategory([]);
        notes.filter((note) => {
            return note.category === selectCategory;
        }) < 1 && setSelectCategory("All");
    }, [notes]);
    return (
        <div className="w-full">
            <div>Notes</div>
            <div>
                {category.length > 1 && (
                    <Button
                        key="All"
                        active={selectCategory === "All"}
                        onClick={() => setSelectCategory("All")}
                    >
                        All
                    </Button>
                )}
                {category.length > 1 &&
                    category.map((cat, idx) => {
                        return (
                            <Button
                                key={idx}
                                active={selectCategory === cat}
                                onClick={() => setSelectCategory(cat)}
                            >
                                {cat}
                            </Button>
                        );
                    })}
            </div>
            <div>
                {notes.map((note) => {
                    !category.includes(note.category) &&
                        setCategory(
                            [...category, note.category].sort((a, b) =>
                                a.localeCompare(b)
                            )
                        );
                    if (
                        selectCategory === "All" ||
                        selectCategory === note.category
                    ) {
                        return (
                            <div
                                key={note.id}
                                className="flex items-center justify-between border border-black rounded-md px-2 py-1 my-1"
                            >
                                <NotesListElement note={note} />
                                <Button
                                    onClick={() => {
                                        notesService.deleteNoteOnApi(note.id);
                                        setNotes(
                                            notes.filter(
                                                (n) => n.id !== note.id
                                            )
                                        );
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}

export default NotesList;
