import initProject from 'download-git-repo';
import chalk from 'chalk';

class init {
    constructor () {
        initProject('flipxfx/download-git-repo-fixture', './test/tmp', (err:any) => {
            console.log(chalk.blue(err ? 'Error' : 'Success'));
        })
    }
}

export default new init() ;