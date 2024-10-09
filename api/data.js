import fs from "fs";

export class DataService {
    constructor() {}
    async getNotes_Data() {
        try {
            if (!fs.existsSync(global.options.dataPath)) {
                fs.writeFileSync(global.options.dataPath, JSON.stringify([]));
            }
            const data = fs.readFileSync(global.options.dataPath);
            return JSON.parse(data.byteLength != 0 ? data : "[]");
        } catch (error) {
            console.error("Error reading data: ", error);
            return [];
        }
    }
    async saveNotes_Data(data) {
        try {
            fs.writeFileSync(global.options.dataPath, JSON.stringify(data));
        } catch (error) {
            console.error("Error saving data: ", error);
        }
    }
}
