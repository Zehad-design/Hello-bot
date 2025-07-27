module.exports.config = {
 name: "info2",
 version: "1.0.1", 
 hasPermssion: 0,
 credits: "Joshua Sy (modified by Siegfried Sama)", //don't change the credits please
 description: "Admin and Bot info.",
 commandCategory: "...",
	usePrefix: false,
 cooldowns: 1,
 dependencies: 
 {
	"request":"",
	"fs-extra":"",
	"axios":""
 }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
	hours = Math.floor(time / (60 * 60)),
	minutes = Math.floor((time % (60 * 60)) / 60),
	seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Manila").format("『D/MM/YYYY』 【HH:mm:ss】");

var callback = () => api.sendMessage({body:`➢ Admin and Bot Information

⁂ Bot Name: ${global.config.BOTNAME}
✧ Bot Admin: ${global.config.ADMINBOT}
♛ Bot Admin Link: https://www.facebook.com/MR.AARYAN.HERE
❂ Bot Prefix: ${global.config.PREFIX}
✫ Bot Owner: https://www.facebook.com/MR.AARYAN.HERE
➟ UPTIME
✬ Today is: ${juswa} 

➳ Bot is running ${hours}:${minutes}:${seconds}.
✫ Thanks for using ${global.config.BOTNAME}
`,attachment: fs.createReadStream(__dirname + "owner_video.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "owner_video.mp4")); 
	 return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"owner_video.mp4")).on("close",() => callback());
	};
