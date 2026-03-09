"use strict";
// Applying the export keyword makes the code accessible to other parts of the app.
// Listing 3.59 - Using modules, contents of module/name.ts file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
class Name {
    first;
    second;
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}
exports.Name = Name;
