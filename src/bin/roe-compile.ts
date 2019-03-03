import program from 'commander';

program
    .version('0.0.1')
    .usage('[project]')
    .option('-e, --env [env]', 'NODE_ENV 环境变量')
    .description('编译前端静态文件')
    .action((project: string, option?: any): void => {

    })
    .parse(process.argv);
