const {
    Telegraf
} = require('telegraf')
const dotenv = require('dotenv');
dotenv.config();

const isLink = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

const MaksDictionary = ["🔥", "топ", "prekolno", "бля, а топово звучить", "вчора слухав", "а топово звучить", "в своє врємя заслухав до дир", "єбать мінус ахуєнний", "бля топ", "ля топ", "ляяяяяя", "дуж чіловий😍", "о оце топчек", "вспомнив https://www.youtube.com/watch?v=pA3xJCZxRxY&ab_channel=JoshuaVuitton", "просто пушка"]

// stage = 1524277405:AAFmZzmmbLtXqICR5xh-cEeeIqNK90mG1ao
// prod = 1102191595:AAEYFKpLkb_2VWacPOg_4glat6GLulYOBBM

const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const bot = new Telegraf("1102191595:AAEYFKpLkb_2VWacPOg_4glat6GLulYOBBM")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

// bot.on('sticker', (ctx) => {
//     ctx.reply('ok');
//     console.log(ctx.update.message.from.username === 'ovojs')
// })

bot.hears(isLink, (ctx) => {
    if (ctx.update.message.from.username !== 'ovojs') {
    //    return;
    }
    ctx.reply(randomElement(MaksDictionary), {
        reply_to_message_id: ctx.message.message_id
    });
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
