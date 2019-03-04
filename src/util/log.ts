import chalk from 'chalk';

const prefix = (): string => {
    return chalk.magenta(`[${getTime()}]`) + chalk.blue('[roe] ');
};

/**
 * 获取当前时间 hh:mm:ss
 */
const getTime = (): string => {
    const now = new Date();
    let hour: number | string = now.getHours(),
        minute: number | string = now.getMinutes(),
        second: number | string = now.getSeconds();

    if (hour < 10) {
        hour = '0' + '' + hour;
    }
    if (minute < 10) {
        minute = '0' + '' + minute;
    }
    if (second < 10) {
        second = '0' + '' + second;
    }
    return `${hour}:${minute}:${second}`;
};

const log = {
    info(text: string): void {
        console.log(prefix() + chalk.cyan(text));
    },
    success(text: string): void {
        console.log(prefix() + chalk.greenBright(text));
    },
    warn(text: string): void {
        console.log(prefix() + chalk.yellow(text));
    },
    error(text: string): void {
        console.log(prefix() + chalk.red(text));
    },
};

export default log;
