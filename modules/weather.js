"use strict";
// Listing 3.60 - Using modules, contents of the modules/weather.ts file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherLocation = void 0;
class WeatherLocation {
    weather;
    city;
    constructor(weather, city) {
        this.weather = weather;
        this.city = city;
    }
    get weatherMessage() {
        return `It is ${this.weather} in ${this.city}`;
    }
}
exports.WeatherLocation = WeatherLocation;
