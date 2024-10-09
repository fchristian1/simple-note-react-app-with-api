export class NoteService {
    constructor(dataService) {
        this.dataService = dataService;
        this.init();
    }
    notes = [];
    async init() {
        this.notes = await this.dataService.getNotes_Data();
    }
    async getAllNotes() {
        return this.notes ?? [];
    }

    async getNoteById(id) {
        return this.notes.find((note) => note.id === id) ?? {};
    }

    async createNote(newNote) {
        newNote.id = crypto.randomUUID();
        this.notes.push(newNote);
        this.dataService.saveNotes_Data(this.notes);
        return newNote;
    }

    async updateNote(id, updatedNote) {
        const index = this.notes.findIndex((note) => note.id === id);
        if (index !== -1) {
            this.notes[index] = updatedNote;
            this.dataService.saveNotes_Data(this.notes);
            return updatedNote;
        }
    }

    async deleteNote(id) {
        this.notes = this.notes.filter((note) => note.id !== id);
        await this.dataService.saveNotes_Data(this.notes);
        return { noteId: id, deleted: true };
    }
}
