"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherLocation = exports.Name = void 0;
/*
The index.ts file contains export statements for the features defined in each code file. This allows
these features to be imported by specifying the name of the containing folder, without specifying
individual files
*/
//  Listing 3.62 Consolidate module folders in a single statement.
var name_1 = require("./name");
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return name_1.Name; } });
var weather_1 = require("./weather");
Object.defineProperty(exports, "WeatherLocation", { enumerable: true, get: function () { return weather_1.WeatherLocation; } });
