import {compileInter} from './compile';

class compile implements compileInter.compileClass{
    constructor () {
    }

    config = {
        projectDir: '',
        inputDir: '',
        outputDir: ''
    }
}

export default compile;