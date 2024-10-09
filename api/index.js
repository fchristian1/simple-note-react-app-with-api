import "./options.js";
import express from "express";
import cors from "cors";
import { DataService } from "./data.js";
import { NoteService } from "./service.js";
import { RouterService } from "./router.js";

const dataService = new DataService();
const noteService = new NoteService(dataService);
const routerService = new RouterService(noteService);

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/notes", routerService.getRouter());
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
