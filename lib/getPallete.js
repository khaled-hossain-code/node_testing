const fs = require("fs");
const configFile = `${process.cwd()}/config.json`;
const Promise = require("bluebird");

function getConfig(path){
	return JSON.parse(fs.readFileSync(path.toString()));
}

const getPallete = (configPath=configFile) => {
	const pallete = getConfig(configPath).pallete;

  if(!Array.isArray(pallete)){
		throw new Error('is not an array');
	}
	return pallete;
}

const getRgb = (hexcode, cb) => {
	setTimeout( () => {
		if(!/#/.test(hexcode)){
			return cb(new Error('not a hex value'));
		}
		cb(null,[255,255,255]);
	}, 50);
}

const getLottery = (lotteryNum) => {
	if(lotteryNum == 3){
		return Promise.resolve('won');
	}else {
		return Promise.reject('lost');
	}
}

module.exports = {
	getPallete,
	getRgb,
	getLottery
}