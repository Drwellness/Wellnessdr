//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2347065530282";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347065530282";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0ZmSnQvY2RlUm1tRWhFQlNrVFNDbEljSGxiZXhzdXNIZ0x4bzZYNzkwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEJ5ZXVIdXZEVUI4eFdqMlpYQTRNMlBWMDF4aXVkZ2dtNUpDd2ZEL3htOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQlRSUktXdm0zUzJNZkxKOWYxeDY3NjhuZUxFeEt1bjFRd2VRWjJaNm40PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXeUlUQ2xZYjlTelNoQjFaTlNVTlYxWmp4RDg2Z3M4UEtRanNyR2JFcVNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlDK1crdVNJY0k5WjJ5UDFpQjhnMHozcllWYU0zRG9wN1NlVTJzajlCbGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNNR25yUUZqRC9ISksxb2R6Y0RxWjJzMnJ0ODRJRWgvUjVZSGMwWUdPV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEtFaEJaemlOTStEbjVEMGJUSHVRc2M4UHNURFNiYWYweGZScUEwMWszaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNzJtOEZnQ002cTREMkpRY25lUmdpY2VEL3BvZG5odUtGc1RLVkFISzRDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkUxZGt3UVRSNEZ0Tyt4M0wxbzFlZWZOTXlYb1EyVjJaMyttZVNjQTIyV2NWdS96ZktwOExoWDJDOVMwMDU3SzR0bms2Mm85WGFJaEdzRkJnRVJEV0NnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJIeXVVS2xvdVFuZHZ4M0IvWS9sc2pCdTZEWkdPOExTZGRCVG9YelMxVitZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJVaURnbHd2X1JILVhqQmJ4b3I5LS1nIiwicGhvbmVJZCI6ImZjNjcwMjg4LTk5YTAtNDI0My05YjY4LWYyZmJjN2ViZjFhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQmVuNDZ6VnNDN1Foc0VLbWJsYU1rSnVjZFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDRBMHFnRWlnYjNKR2ZsMDdzbnlaTU8rVG1vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik41S1hZRVpTIiwibWUiOnsiaWQiOiIyMzQ3MDY1NTMwMjgyOjEwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPcVZ5ZXdIRU1YdDM3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJkSExFczJuM29xUlBOWWV2S3Q3QlUwbUErWEVVWFF2ZDJRckxKcnphT0djPSIsImFjY291bnRTaWduYXR1cmUiOiJacDltcURxSG00bDRzYkRxWHhwODNjaWRCNmRESUZGRWluejArdUFtQTRYSW9OZlB5N0Nram5OUFdPNmZjNUlMV2xQOUVtcFVsWjRaeW1udHVBaU9EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMU5jd21IMjFxUENOWHFldDAxVmhCNnZoZDhISk9zVldsaDI5RVRXRkMyL2dwcjJ2TDg2a0k1NWZKSloyallKYWhBTE9tV3N6Z2N4U1VNWDVWbkt6QWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDY1NTMwMjgyOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhSeXhMTnA5NktrVHpXSHJ5cmV3Vk5KZ1BseEZGMEwzZGtLeXlhODJqaG4ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MTUyMTh9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_DAVID™`",
  author: process.env.PACK_AUTHER || "KING_DAVID",
  packname: process.env.PACK_NAME || "KING_DAVID",
  botname: process.env.BOT_NAME || "KING_DAVID",
  ownername: process.env.OWNER_NAME || "KING_DAVID",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
