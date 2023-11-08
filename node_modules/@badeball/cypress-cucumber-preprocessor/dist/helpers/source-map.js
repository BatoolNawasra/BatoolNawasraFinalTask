"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeRetrievePositionFromSourceMap = exports.retrievePositionFromSourceMap = void 0;
const error_stack_parser_1 = __importDefault(require("error-stack-parser"));
const assertions_1 = require("./assertions");
function retrievePositionFromSourceMap() {
    const stack = error_stack_parser_1.default.parse(new Error());
    const relevantFrame = stack[4];
    return {
        line: (0, assertions_1.assertAndReturn)(relevantFrame.getLineNumber(), "Expected to find a line number"),
        column: (0, assertions_1.assertAndReturn)(relevantFrame.getColumnNumber(), "Expected to find a column number"),
        source: (0, assertions_1.assertAndReturn)(relevantFrame.fileName, "Expected to find a filename"),
    };
}
exports.retrievePositionFromSourceMap = retrievePositionFromSourceMap;
function maybeRetrievePositionFromSourceMap(experimentalSourceMap) {
    if (experimentalSourceMap) {
        return retrievePositionFromSourceMap();
    }
}
exports.maybeRetrievePositionFromSourceMap = maybeRetrievePositionFromSourceMap;
