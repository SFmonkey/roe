import program from 'commander';

program
    .version('0.0.1')
    .usage('[command]')
    .description('roe')
    .command('init', 'init a project')
    .alias('i')
    .command('compiler', 'compiler a project')
    .alias('c')
    .parse(process.argv)