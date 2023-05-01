import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";
import express from "express";

const bot = new Telegraf(TOKEN);
const app = express();
const web_link = "http://127.0.0.1:5173";

bot.start((ctx) =>
    ctx.reply("Welcome :)))))", {
        reply_markup: {
            keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
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
