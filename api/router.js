import { Router } from "express";

export class RouterService {
    constructor(noteService) {
        this.router = Router();

        this.router.get("/", async (req, res) => {
            res.json(await noteService.getAllNotes());
        });
        this.router.get("/:id", async (req, res) => {
            res.json(await noteService.getNoteById(req.params.id));
        });
        this.router.post("/", async (req, res) => {
            res.json(await noteService.createNote(req.body));
        });
        this.router.put("/:id", async (req, res) => {
            res.json(await noteService.updateNote(req.params.id, req.body));
        });
        this.router.delete("/:id", async (req, res) => {
            res.json(await noteService.deleteNote(req.params.id));
        });
    }

    getRouter() {
        return this.router;
    }
}
