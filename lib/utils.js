import fs from "fs";
import {join} from "path";

const pagesDir = `${process.cwd()}/pages`;

const isDirectory = source => fs.lstatSync(source).isDirectory();
export const getDirectories = source =>
    fs.readdirSync(source).map(name => join(source, name)).filter(isDirectory);

export const isPathExist = path => fs.existsSync(`${pagesDir}${path}`);