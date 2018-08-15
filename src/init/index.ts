import initProject from './initProject';
import program from 'commander';

program
  .version('0.0.1')
  .description('初始化项目')
  .usage('<project>')
  .action((option) => {

  })
  .on('--help', () => {
      console.log(`\n  说明:\n`);
      console.log(`    初始化项目`);
      console.log(`    node init 项目名\n`);
  })
  .parse(process.argv);

