import * as path from 'path';
import log from '../../../util/log';

const run = () => {
    const config = getConfig();

    const project = global.__PROJECT__;
    if (!project) {
        log.error('CompilerClass 未定义子项目名称');
        return false;
    }
};

const getConfig = () => {
    const config = require(path.resolve(global.__PROJECT__, 'config.js'));

    return config;
};

const beforeTaskRun () => {

}

export default run;
