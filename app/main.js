const {
    Telegraf
} = require('telegraf')
const dotenv = require('dotenv');
dotenv.config();

const isLink = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

const MaksDictionary = ["🔥", "топ"]



const bot = new Telegraf("1102191595:AAEYFKpLkb_2VWacPOg_4glat6GLulYOBBM")
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))

// bot.on('sticker', (ctx) => {
//     ctx.reply('ok');
//     console.log(ctx.update.message.from.username === 'ovojs')
// })

bot.hears(isLink, (ctx) => {
    if (ctx.update.message.from.username !== 'ovojs') {
        // return;
    }

    ctx.reply('🔥', {
        reply_to_message_id: ctx.message.message_id
    });
})

bot.launch()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))