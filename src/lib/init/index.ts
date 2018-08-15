import download from 'download-git-repo';
import chalk from 'chalk';
import fs from 'fs';

class init {
    constructor (projectRoot: String) {
        let path = `${process.cwd()}/${projectRoot}`;

        if (fs.existsSync(path)) {
            console.log(chalk.red(`${projectRoot} 已经存在了`));
            return ;
        }

        download('SFmonkey/roe-template', path, (err:any) => {
            console.log(chalk.blue(err ? '项目创建失败' : '项目创建成功'));
        })
    }
}

export default init ;