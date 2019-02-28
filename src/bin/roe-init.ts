import initProject from '../lib/init/index';
import program from 'commander';
import inquirer from 'inquirer';

program
  .version('0.0.1')
  .description('初始化项目')
  .usage('init/i')
  .action(() => {
    console.log('in action')
    let promps: Array <Object> = [];
    promps.push(
        {
            type: 'input',
            name: 'init',
            message: 'please input project name:'
        }
    );
    inquirer.prompt(promps).then((answers: any) => {
        new initProject(answers.init);
    });
  })
  .on('--help', () => {
      console.log(`\n  说明:\n`);
      console.log(`    初始化项目`);
      console.log(`    node init/i 项目名\n`);
  })
  .parse(process.argv);