export class NotesService {
    constructor() {
        if (NotesService.instance) {
            return NotesService.instance;
        } else {
            NotesService.instance = this;
        }
    }
    async getAllNotesFromApi() {
        const data = await fetch("http://localhost:3000/api/v1/notes");
        const res = data;
        return await res.json();
    }
    async createNoteOnApi(note) {
        const data = await fetch("http://localhost:3000/api/v1/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(note),
        });
        const res = data;
        return await res.json();
    }
    async deleteNoteOnApi(id) {
        const data = await fetch(`http://localhost:3000/api/v1/notes/${id}`, {
            method: "DELETE",
        });
        const res = data;
        return await res.json();
    }
}
