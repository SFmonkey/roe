import download from 'download-git-repo';
import chalk from 'chalk';

class init {
    constructor (projectRoot: String) {
        download('flipxfx/download-git-repo-fixture', projectRoot, (err:any) => {
            console.log(chalk.blue(err ? 'Error' : 'Success'));
        })
    }
}

export default init ;