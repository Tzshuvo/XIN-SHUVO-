const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.1',
    hasPermssion: 0,
    credits: 'Shahadat Islam',
    description: 'Automatically sends messages at scheduled times (BD Time)',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: 'এখন বাজে রাত 12টা 🌙\nমোবাইল ছাড়ো, ভূত এসে কানে কানে গান ধরাই দিবে! 👻🎶', special: null },
    { time: '1:00 AM', message: 'এখন বাজে রাত 1টা 🕐\nঘুম না দিলে চোর এসে তোর ফ্রিজ খালি করে দেবে! 😾🥶', special: null },
    { time: '2:00 AM', message: 'এখন বাজে রাত 2টা 🌌\nতুই যদি জেগে থাকিস, তাহলে মশারা পার্টি করবে! 🦟🎉', special: null },
    { time: '3:00 AM', message: 'এখন বাজে রাত 3টা 😴\nভাই ঘুমা, নাহলে সকাল বেলা শশার মতো চোখ ফুলে যাবে 🥒👀', special: null },
    { time: '4:00 AM', message: 'এখন বাজে ভোর 4টা 🌅\nআজান আসতে যাচ্ছে, নড়ে চড়ে বস নইলে মা বকা দিবে! 🕌🙄', special: null },
    { time: '5:00 AM', message: 'এখন বাজে ভোর 5টা 🌄\nফজরের নামাজ পড়, নাহলে বালিশ তোর সাথে ঝগড়া করবে! 🛏️🤬', special: null },
    { time: '6:00 AM', message: 'এখন বাজে সকাল 6টা ☀️\nঘুম থেকে উঠে আয়না দেখিস না, ভয় পেয়ে যাবি! 😳🪞', special: null },
    { time: '7:00 AM', message: 'এখন বাজে সকাল 7টা ⏰\nদাঁত ব্রাশ কর নইলে শ্বাসে মশারা মারা যাবে! 🪥💨', special: null },
    { time: '8:00 AM', message: 'এখন বাজে সকাল 8টা 🌞\nমোবাইল রেখে নাস্তা কর, নাহলে রুটি তোর সাথে ফাইট করবে 🥖🥊', special: null },
    { time: '9:00 AM', message: 'এখন বাজে সকাল 9টা ⏳\nভাই/আপু নাস্তা করলি? নাহলে পেট ধর্মঘট ডাকবে! 🍳🚫', special: null },
    { time: '10:00 AM', message: 'এখন বাজে সকাল 10টা 😜\nকলেজ/স্কুল গেলি নাকি? না কি আজ আবার Netflix চলছে? 📚➡️📺', special: null },
    { time: '11:00 AM', message: 'এখন বাজে সকাল 11টা 📱\nঅতিরিক্ত নাটক করলে মোবাইল রিস্টার্ট হবে! 😂🔋', special: null },
    { time: '12:00 PM', message: 'এখন বাজে দুপুর 12টা 🌞\nGood Afternoon! এখন ঘুমালে চা বানাবে কে? ☕😴', special: null },
    { time: '1:00 PM', message: 'এখন বাজে দুপুর 1টা 🙏\nভাই/আপু জোহরের নামাজ পড়ো, নইলে কুকুরও রাগ করবে 🐕😡', special: null },
    { time: '2:00 PM', message: 'এখন বাজে দুপুর 2টা 😳\nগোসল কর, নাহলে প্রতিবেশীরা বলবে পেঁয়াজের দাম তোর গায়ে 😅🧅', special: null },
    { time: '3:00 PM', message: 'এখন বাজে বিকেল 3টা 💤\nঘুম আসতেছে? হেডফোন খুলে ঘুমা, নাহলে গান স্বপ্নে বাজবে 🎶😂', special: null },
    { time: '4:00 PM', message: 'এখন বাজে বিকেল 4টা 🥵\nঅনেক গরম, ফ্রিজে ঢুকে থাকলে কুল হবে! 🧊🤣', special: null },
    { time: '5:00 PM', message: 'এখন বাজে বিকেল 5টা 😅\nহাসতে থাক, কারণ কান্না করলে ডেটা শেষ হবে না! 📶😂', special: null },
    { time: '6:00 PM', message: 'এখন বাজে সন্ধ্যা 6টা 🌆\nহাত-মুখ ধুয়ে নে, নাহলে মশারা তোরে VIP ভাবে কামড়াবে! 🦟👑', special: null },
    { time: '7:00 PM', message: 'এখন বাজে সন্ধ্যা 7টা 📚\nপড়তে বস নইলে ক্যালকুলেটরও তোকে চিনবে না! 🔢😭', special: null },
    { time: '8:00 PM', message: 'এখন বাজে রাত 8টা 😎\nBot কে গালি দিস না, নইলে বট তোরে ব্লক করে দিবে 😂🤖', special: null },
    { time: '9:00 PM', message: 'এখন বাজে রাত 9টা 🍽️\nডিনার করলি? না করলে স্বপ্নে বিরিয়ানি দেখবি 🤤🍗', special: null },
    { time: '10:00 PM', message: 'এখন বাজে রাত 10টা 📱\nমোবাইল ছেড়ে ঘুমা, নাহলে চার্জারও আত্মহত্যা করবে! 🔌😫', special: null },
    { time: '11:00 PM', message: 'এখন বাজে রাত 11টা 😔\nভালোবাসা ব্যর্থ হলেও ঘুম কিন্তু ফ্রি… তাই ঘুমাই যান! 🛌😂', special: null }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ AUTOSENT COMMAND LOADED (BD TIME) ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const rule = new schedule.RecurrenceRule();
        rule.tz = 'Asia/Dhaka';
        rule.hour = hour24;
        rule.minute = parseInt(minute, 10);

        schedule.scheduleJob(rule, () => {
            if (!global.data?.allThreadID) return;
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });

        console.log(chalk.hex("#00FFFF")(`Scheduled (BDT): ${time} => ${message}`));
    });
};

module.exports.run = () => {
    // Main logic is in onLoad
};
