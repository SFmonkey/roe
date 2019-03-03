#!/usr/bin/env node

import * as program from 'commander';
import * as path from 'path';
import chalk from 'chalk';

program
    .usage('[project] [option]')
    .option('-e, --env [env]', '设置 NODE_ENV 环境变量')
    .description('部署前端静态文件')
    .action((project: string, option?: any): void => {
        switch (program.env) {
            case 'd':
            case 'development':
                process.env.NODE_ENV = 'development';
                break;
            case 't':
            case 'testing':
                process.env.NODE_ENV = 'testing';
                break;
            case 'p':
            case 'production':
                process.env.NODE_ENV = 'production';
                break;
            default:
                process.env.NODE_ENV = 'development';
                break;
        }
    });
