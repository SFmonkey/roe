"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var download_git_repo_1 = __importDefault(require("download-git-repo"));
var chalk_1 = __importDefault(require("chalk"));
var init = /** @class */ (function () {
    function init() {
        download_git_repo_1.default('flipxfx/download-git-repo-fixture', './test/tmp', function (err) {
            console.log(chalk_1.default.blue(err ? 'Error' : 'Success'));
        });
    }
    return init;
}());
exports.default = new init();
