module.exports.config = {
  'name': "info",
  'version': '1.0.1',
  'hasPermssion': 0x0,
  'credits': "Sujon",
  'description': "Admin and Bot info.",
  'commandCategory': 'info',
  'cooldowns': 0x1,
  'dependencies': {
    'request': '',
    'fs-extra': '',
    'axios': ''
  }
};
module.exports.run = async function ({
  api: _0xb3858d,
  event: _0xf905ee,
  args: _0x103048,
  client: _0x77d9a8,
  Users: _0x3a5fa2,
  Threads: _0x179823,
  __GLOBAL: _0x4e9c4c,
  Currencies: _0x2f6b6c
}) {
  const _0x1b2c15 = global.nodemodule.request;
  const _0xa500c1 = global.nodemodule["fs-extra"];
  const _0x2e6d1 = process.uptime();
  const _0x50de10 = Math.floor(_0x2e6d1 / 3600);
  const _0x3641ec = Math.floor(_0x2e6d1 % 3600 / 0x3c);
  const _0x3d12fc = Math.floor(_0x2e6d1 % 0x3c);
  const _0x519c16 = require("moment-timezone");
  var _0x261172 = _0x519c16.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  var _0x54f9e2 = ["https://imgur.com/a/t5bMm1b"];
  var _0x3059fe = () => _0xb3858d.sendMessage({
    'body': "𝑨𝑫𝑴𝑰𝑵-𝑩𝑶𝑻-𝑰𝑵𝑭𝑶.. \n❁══════════ꕥ══════════❁\n 🔥🚀—͟͟͞͞𝐒𝐇𝐔𝐕𝐎 𝐂𝐇𝐀𝐓 𝐁𝐎𝐓🔥💻 \n❁══════════ꕥ══════════❁ \n\n❀𝑩𝑶𝑻 𝑵𝑨𝑴𝑬 : " + global.config.BOTNAME + "\n\n❀𝑩𝑶𝑻 𝑨𝑫𝑴𝑰𝑵 : —͟͟͞͞𝐒𝐇𝐔𝐕𝐎\n\n❀𝑨𝑫𝑫𝑹𝑬𝑺𝑺: BOGURA\n\n❁════════𝑪𝑶𝑵𝑻𝑨𝑪𝑻════════❁\n\n❀𝑭𝑨𝑪𝑩𝑶𝑶𝑲-𝑰𝑫-𝑳𝑰𝑵𝑲: https://www.facebook.com/100025645342388\n\n❀𝑩𝑶𝑻 𝑷𝑹𝑬𝑭𝑰𝑿 : " + global.config.PREFIX + "\n\n❀𝑩𝑶𝑻-𝑶𝑾𝑵𝑬𝑹 : —͟͟͞͞𝐒𝐇𝐔𝐕𝐎\n\n𝑶𝑻𝑯𝑬𝑹𝑺-𝑰𝑵𝑭𝑶𝑹𝑴𝑬𝑺𝑯𝑶𝑵══════════❁\n\n𝑻𝒀𝑷𝑬 /𝑰𝑵𝑭𝑶 \n\n➟ 𝑼𝑷𝑻𝑰𝑴𝑬\n\n❀𝑻𝑶𝑫𝑨𝒀-𝑻𝑰𝑴𝑬 : " + _0x261172 + " \n\n❀𝑩𝑶𝑻-𝑰𝑺-𝑹𝑨𝑵𝑵𝑰𝑵𝑮 " + _0x50de10 + ':' + _0x3641ec + ':' + _0x3d12fc + ".\n\n❀𝑻𝑯𝑨𝑵𝑲𝑺-𝑭𝑶𝑹-𝑼𝑺𝑬𝑰𝑵𝑮 " + global.config.BOTNAME + " 『💓🥰』",
    'attachment': _0xa500c1.createReadStream(__dirname + "/cache/juswa.jpg")
  }, _0xf905ee.threadID, () => _0xa500c1.unlinkSync(__dirname + '/cache/juswa.jpg'));
  return _0x1b2c15(encodeURI(_0x54f9e2[Math.floor(Math.random() * _0x54f9e2.length)])).pipe(_0xa500c1.createWriteStream(__dirname + "/cache/juswa.jpg")).on('close', () => _0x3059fe());
};
