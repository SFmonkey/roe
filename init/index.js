"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
commander_1.default
    .version('0.0.1')
    .description('初始化项目')
    .usage('<project>')
    .action(function (option) {
})
    .on('--help', function () {
    console.log("\n  \u8BF4\u660E:\n");
    console.log("    \u521D\u59CB\u5316\u9879\u76EE");
    console.log("    node init \u9879\u76EE\u540D\n");
})
    .parse(process.argv);
