import React from "react";
import InputText from "../InputText";
import Button from "../Button";
import { NotesService } from "./service";

function NotesNew({ notes, setNotes }) {
    const notesService = new NotesService();
    const [title, setTitle] = React.useState("");
    const [body, setBody] = React.useState("");
    const [category, setCategory] = React.useState("");
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-col gap-1">
                <label htmlFor="title">Title:</label>
                <InputText
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></InputText>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="body">Body:</label>
                <InputText
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></InputText>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="category">Category:</label>
                {/* <InputText
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                ></InputText> */}
                <InputText
                    type="text"
                    list="categorys"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                <datalist id="categorys">
                    {[...new Set(notes.map((note) => note.category))].map(
                        (i) => {
                            return <option key={i} value={i}></option>;
                        }
                    )}
                </datalist>
            </div>
            <Button
                onClick={async () => {
                    if (
                        title.trim() === "" ||
                        body.trim() === "" ||
                        category.trim() === ""
                    ) {
                        console.log(title.trim(), body, category);
                        return;
                    }
                    let newNote = { title, body, category };
                    let newNoteResponse = await notesService.createNoteOnApi(
                        newNote
                    );
                    setNotes([...notes, newNoteResponse]);
                }}
            >
                Save
            </Button>
        </div>
    );
}

export default NotesNew;
