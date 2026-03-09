
// Applying the export keyword makes the code accessible to other parts of the app.
// Listing 3.59 - Using modules, contents of module/name.ts file.

export class Name {
    constructor(public first: string, public second: string) {}

    get nameMessage() {
        return `Hello ${this.first} ${this.second}`;
    }
}

