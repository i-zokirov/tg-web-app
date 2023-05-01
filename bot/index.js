import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const bot = new Telegraf(process.env.TOKEN);
const app = express();
const web_link = "https://master--beamish-sorbet-e62585.netlify.app/";

bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
        reply_markup: {
            keyboard: [[{ text: "My App", web_app: { url: web_link } }]],
        },
    })
);

bot.command("quit", async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);

    // Using context shortcut
    await ctx.leaveChat();
});

bot.on(message("text"), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(
        ctx.message.chat.id,
        `Hello ${ctx.state.role}`
    );

    // Using context shortcut
    await ctx.reply(`Hello ${ctx.state.role}`);
});

bot.on("callback_query", async (ctx) => {
    // Explicit usage
    await ctx.telegram.answerCbQuery(ctx.callbackQuery.id);

    // Using context shortcut
    await ctx.answerCbQuery();
});

bot.on("inline_query", async (ctx) => {
    const result = [];
    // Explicit usage
    await ctx.telegram.answerInlineQuery(ctx.inlineQuery.id, result);

    // Using context shortcut
    await ctx.answerInlineQuery(result);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Listening on port", port));
