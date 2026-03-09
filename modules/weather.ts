// Listing 3.60 - Using modules, contents of the modules/weather.ts file.

export class WeatherLocation {
    constructor(public weather: string, public city: string) {}

    get weatherMessage() {
        return `It is ${this.weather} in ${this.city}`
    }
}
