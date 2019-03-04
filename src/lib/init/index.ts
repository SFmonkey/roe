import download from 'download-git-repo';
import chalk from 'chalk';
import fs from 'fs';
import log from '../../util/log';

class Init {
    constructor (projectRoot: string) {
        const path = `${process.cwd()}/${projectRoot}`;

        if (fs.existsSync(path)) {
            log.error(`${projectRoot} 已经存在了`);
            return ;
        }

        download('SFmonkey/roe-template', path, (err: any) => {
            if (err) {
                log.error('项目创建失败 （￣ε（#￣）');
            } else {
                log.success('项目创建成功 []~（￣▽￣）~*');
            }
        });
    }
}

export default Init;
