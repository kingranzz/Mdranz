//base by DGXeon
//re-upload? recode? copy code? give credit ya :)
//YouTube: @DGXeon
//Instagram: unicorn_xeon13
//Telegram: t.me/xeonbotinc
//GitHub: @DGXeon
//WhatsApp: +916909137213
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@DGXeon

const fs = require('fs')
const chalk = require('chalk')

//session
global.sessionid ='ur session id'

//owmner v card
global.ytname = "YT: @ranzstartboyy" //ur yt chanel name
global.socialm = "GitHub: ranzganteng" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'RanZbot WhatsApp' //ur bot name
global.ownernumber = '6282393734303' //ur owner number
global.ownername = '🦄드림 가이 Ranz Tamfan😎' //ur owner name
global.websitex = "https://xnxx.com/tobrutt"
global.wagc = "https://whatsapp.com/channel/"
global.themeemoji = '🪀'
global.wm = "Ranz Bot Inc."
global.botscript = 'https://wa.me/6282393734303' //script link
global.packname = "ranz suka tobrutt😎"
global.author = "🦄\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
global.creator = "6282393734303@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6282393734303"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = true //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
