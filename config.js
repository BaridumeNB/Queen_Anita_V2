//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347060977659";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09oSnR5ZkxobXhwd3RwNGI3d29nZThKR2JzUEpaZlM0V2ZJbFVGZmIwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDArUE54NktvMWorNW9YcXFIUlZlNHkvdUVKTFNJS3dyTzBFZTVtRlJWRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSWlUcXBKVitENzdTQlNLczhWR1grS0wvT1MvdkxlVnU4RGVhZXdUUmxvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0amkyNlJ6enRGN1JtL08vMGlSLzZxMnMrYzlLaWhjVUsxWXJLdDhjNjBzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlNQ09tMXpYV3RENTNBdXM3U2x5UDA0aksxbU0wRGhhUWhGblNoVmRsV1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQeVpZV2wxS0UxY2g1SnRXV2o1Z1hHdGxaSE5nazBqWDB4VWRjRDFTUVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE03VE9MRmNXenhKdUVOc3g0emQ5dFIremRYNWRZa2F1aHEyeWx1bVRHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHFET3hmNzNGeDRoK2JjKzIvY2lseXpXS0gxMzk1L1VyNW15bDdnbUZTZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVYVEt5dFhrMmluK0pmZXdsSnhsVEI2NjZobTRQM09WODRlOTlIS0JkVjRHZ1Q5dzA5K0lzaHJXcmxCNFlmUm1IUHdxQkYrSVhFN0htYks2OU5FTUNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJkSmVPcjV1eitoT1JncjhPbVFPZFE4TFRBdTA5UnNySHU5MVUxaU9LUUNjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNDE4MDMwNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRjJGRUZFRTg3QzkyRUZGMjdBMjdERjk2MEZFNTk0QTcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTE1NzAxOX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA0MTgwMzA2NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJFRjYyOTk3QUFFMzIzMUIyMjdFREYzM0U5RDgzMTU3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM1MTU3MDE5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDQxODAzMDY2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAyOUJBM0FGQzk0QTY3QTJCQTFGOEI0MTcyQzRCMDg5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzUxNTcwMjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNDE4MDMwNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUQyQzlBRTg4QTU4ODkwM0M0QzI4RDY2ODU2ODQyNzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTE1NzAyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMG93MDFLSUNTR0dSblNrR2xRNDRyZyIsInBob25lSWQiOiI5ZDUxYzc2My0zZTc3LTQ2MDQtOGE4Ni1mZTU1ZTc1YzUwYmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaENiekZxdTRKSnBRVUx3WnNBRk1kYTNZS2JNPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitYY3Y4aTJGcFc5aFlSZWZPNnBDMUtBZlRyaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJOMjc2NDVKQiIsIm1lIjp7ImlkIjoiMjM0OTA0MTgwMzA2NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkNMQVNTSVFVRSBIVUIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pMby9hOEdFSXZLc2JzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFkeGtZYTI4eHpXdWZ4bTVMT0FWNFV1MVpVTUgzQUxxelBVWm13cHk3Mnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlduK3NMYXNMbEM4NFZOYy85cnoxUTFTd1VqcnNyU3lKNVVDYWtPbFdIa2Vwa3Z1SlVnQWhZR3krVTQrODZ1bmFhOVZYK2dDVnRSSk03UGNxbXhDd0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI5WWs4em1iTHVvS0ZvSUVweEtlSTNMOGtxUEZGNURhVDEraXk3TDVHNDkweEpvUFZoem1Ycm5iSWZhQ3RUNXBPWG5xdmQ5NWJIcTVxZGE3QnZjU1pEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDE4MDMwNjY6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSGNaR0d0dk1jMXJuOFp1U3pnRmVGTHRXVkRCOXdDNnN6MUdac0tjdTlzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MTU3MDE4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURHRSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "DEV∆NQUISHER’S BOT",
  ownername: process.env.OWNER_NAME || "𝔹𝔸ℝℝ𝕐~ℕ𝕌𝔹𝔸ℝ𝕀",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
