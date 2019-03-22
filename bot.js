const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

 

 

client.on('message', message => {

                                if(!message.channel.guild) return;

                        if (message.content.startsWith(prefix + 'ping')) {

                            if(!message.channel.guild) return;

                            var msg = `${Date.now() - message.createdTimestamp}`

                            var api = `${Math.round(client.ping)}`

                            if (message.author.bot) return;

                        let embed = new Discord.RichEmbed()

                        .setAuthor(message.author.username,message.author.avatarURL)

                        .setColor('RANDOM')

                        .addField('**Time Taken:**',msg + " ms 📶 ")

                        .addField('**WebSocket:**',api + " ms 📶 ")

         message.channel.send({embed:embed});

                        }

   });

 // Start of bot:
const ms = require("ms");
const pretty = require("pretty-ms");
const Discord = require("discord.js");
const moment = require('moment');
const Enmap = require("enmap");
const fs = require("fs");
const fetch = require('node-fetch');
const request = require('request');
const qs = require('querystring');
// Database info:
const antijoin = JSON.parse(fs.readFileSync('./JsonFiles/antijoin.json', 'utf8'));
const sug = JSON.parse(fs.readFileSync('./JsonFiles/sug.json', 'utf8'));
const pics = JSON.parse(fs.readFileSync('./JsonFiles/pics.json', 'utf8'));
const inv = JSON.parse(fs.readFileSync("./JsonFiles/userD.json", "UTF8"))
const invs = JSON.parse(fs.readFileSync("./JsonFiles/invites.json", "UTF8"))
const anti = JSON.parse(fs.readFileSync("./JsonFiles/antigreff.json", "UTF8"));
const config = JSON.parse(fs.readFileSync("./JsonFiles/config.json", "UTF8"));
const botconfig = JSON.parse(fs.readFileSync("./JsonFiles/skdnioqhuiwio1joiqwhbjbcnmkdv.json", "UTF8"));
const logs = require('./JsonFiles/guildLogs.json');
const auto = require('./JsonFiles/autoMessage.json');
// Defineds:
const notes = new Enmap();
const emojis = new Enmap();
const client = new Discord.Client();
const bot = new Discord.Client();
const hero = client;
const prefix = botconfig.prefix
const token = botconfig.token
client.login(token)
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
client.on('ready', () => {
    console.log(`-------------------------------
    [Start] ${new Date()}`);
    console.log(`[INFO] [Bot Name : [ ${client.user.username}. ]`)
    console.log(`[INFO] [Users Size : [ ${client.user.id} ]`)
    console.log(`[INFO] [Guild Size : [ ${client.guilds.size}. ]`)
    console.log(`[INFO] [File Do : Admin Commands]`)
    console.log(`[BOT] By : [SBot Team.]
    -------------------------------`)
    client.user.setActivity(`$help | SBot.`, {
        type: "LISTENING"
    })
});
client.on('guildCreate', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`✅ SBot join new server.`)
        .setDescription(`**
   ⇏ | Server name : \`${guild.name}\`
   ⇏ | Server id: \`${guild.id}\`
   ⇏ | Server owner: ${guild.owner}
   ⇏ | Member Count: \`${guild.memberCount}\`
   ⇏ | Servers Counter : \`${client.guilds.size}\`**`)
        .setColor("#f3ae10")
    client.channels.get("554723955810893827").send({
        embed
    });
});
client.on('guildDelete', guild => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`❌ SBot leave from server.`)
        .setDescription(`**
⇏ | Server name : \`${guild.name}\`
⇏ | Server id: \`${guild.id}\`
⇏ | Server owner: ${guild.owner}
⇏ | Member Count: \`${guild.memberCount}\`
⇏ | Servers Counter : \`${client.guilds.size}\`**`)
        .setColor("#f3ae10")
    client.channels.get("554723955810893827").send({
        embed
    });
});
// Settings info:
client.on('message', msg => {
	if (!msg.guild || msg.author.bot) return;
    if (msg.content === (prefix + "settings")) {
        const embed = new Discord.RichEmbed()
            .setAuthor('❯ Settings:', 'https://labs-public-dl.xda-cdn.com/images/af6aef8c-4d0a-41f4-8afb-5b8572aa3697.png')
            .addField(`❯ Values: `, `» \`limitsban\`, \`limitskick\`, \`limitsroleD\`, \`limitsroleC\`, \`limitschannelD\`, \`limitstime\`, \`setMedia\`, \`infoMedia\`, \`toggleMedia\`, \`AntiFake\`, \`SetFake\`, \`SetSug\`, \`SetLogs\`, \`SetVoice\`, \`VoiceOnline\``)
            .addField(`❯ Commands: `, `» $settings [limitsban/SetLogs/...] [vlaue]\n» $settings [AntiFake/toggleMedia/...] [On/Off]`)
            .setFooter(`SBot.`)
        msg.channel.send(embed)
  
    };
  });
// Help info:
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + "help")) {
        message.author.send(`**\`\`\`asciidoc
❯ Informetion Commands ::
  
  
= $settings :: اعدادات الـ بوت
= $ping :: لمعرفة سرعة استجابة الـ بوت
= $invite :: لدعوة البوت لـ سيرفرك \`\`\`**
  `)
  
  
    }
  });
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
    if (message.author.bot) return;
    if (message.content === prefix + "help") {
        message.author.send(`**\`\`\`asciidoc
❯ Public Commands ::


= $timer :: بدأ مؤقت زمني
= $mybot :: للرد بكلامك عن طريق بوت بأسمك
= $file :: عمل ملف يضع بداخله الكلام الذي قمت بكتابته
= $top inv :: لرؤية اعلى الانفايت
= $colors :: قائمة الألوان
= $color [Number] :: لختيار اللون
= $npm :: لمعرفة بكجات الـ(Npmjs.)
= $text create :: صناعة روم
= $text delete :: حذف روم
= $docs :: لمعرفة معلومات مكتبتة الـ(Discord.js Docs.)
= $user :: لمعرفة معلومات حسابك
= $wiki :: البحث في موقع الـwikipedia
= $avt :: لروئية صورة الحساب
= $short :: اختصار الروابط
= $server :: معلومات لسيرفرك
= $steam :: معلومات الالعاب في برنامج الـ steam
= $film :: معلومات اي فلم\`\`\`**
                          
  `)
        // ❯ , »   
  
  
    }
  });
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
    if (message.author.bot) return;
    if (message.content === prefix + "help") {
        message.author.send(`**\`\`\`asciidoc
❯ Staff Commands ::


= $recrole :: لعمل الري أكشن رول
= $points :: لاعطاء نقاط للاشخاص (للفعاليات.)
= $delete :: مسح الشات بعدد
= $ban :: اعطاء باند لعضو
= $kick :: اعطاء كيك لعضو
= $mmove :: لسحب عضو لـ الفويس
= $moveall :: لسحب كل الاعضاء لـ الفويس
= $reply :: اعادة كلامك من الـ بوت
= $logs :: لـ اختيار اللوق
= $rolecolor :: لوضع لون لـ الرتبه
= $vkick :: لطرد عضو من الـ فويس\`\`\`**
  
                            `);
  
  
    }
  });
  client.on('message', message => {
    if (!message.guild || message.author.bot) return;
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`**\`\`\`asciidoc
❯ Tickets Commands ::


= $new :: فتح تذكرة
= $close :: إغلاق التذكرة
= $forceclose :: لمسح التذكرة مبآشر دون الإنتظار
= $closeall :: إغلاق جميع التذاكر
= $add :: إضافة شخص للتذكرة
= $remove :: إزالة شخص من التذكرة
= $rename :: تغيير إسم التذكرة
= $blacklist :: إضافة شخص للبلاك لست بالتذاكر
= $unblacklist :: إزالة شخص من البلاك لست
= $config :: معلومات عن ما تم تحديدة بالفعل
= $setsupportrole :: تحديد رتبة من يستطيعون رؤية التذاكر والتحكم بها
= $setcategory :: تحديد كاتيقوري التذاكر
= $setwelcomemessage :: تحديد الرسالة التي تظهر للشخص عند فتحة للتذكرة
= $setclosemessage :: تحديد الرسالة التي تظهر للشخص عند إغلاقة للتذكرة
= $settickets :: تشغيل وإيقاف نظام التذاكر\`\`\`**

                          `);


  }
});
client.on('message', message => {
    if (!message.guild || message.author.bot) return;
  if (message.author.bot) return;
  if (message.content === prefix + "help") {
      message.author.send(`**\`\`\`asciidoc
❯ Other Commands ::


= $scoin :: رؤية عدد الكوينز التي تمتلكها
= $daily :: الهدية اليومية
= $casino :: حظك اليومي 
= $trans :: لتحويل الكوينز من حساب لأخر \`\`\`**

                          `);


  }
});
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
    if (message.author.bot) return;
    if (message.content === prefix + "invite" || message.content === prefix + "inv") {
        message.author.send(`**\`\`\`asciidoc
= This link for SBot :: 
        
         https://discordapp.com/oauth2/authorize?client_id=554294795976310784&scope=bot&permissions=8\`\`\`**`);
  
  
    }
  });
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
    if (message.author.bot) return;
    if (message.content === prefix + "help") {
        message.channel.send(`**:white_check_mark: » Check your DM.**`);
  
  
    }
  });
// VoiceOnline:
let vojson = JSON.parse(fs.readFileSync('vojson.json', 'utf8'))
client.on('message', message => {
    if(message.content.startsWith(prefix + "settings SetVoice")) {
let channel = message.content.split(" ").slice(1).join(" ")
let channelfind = message.guild.channels.find('name', `${channel}`)
if(!channel) return message.channel.send(`**:x: | أكتب إسم الروم, \`Ex: $settings SetVoice Hi\`**`)
if(!channelfind) return message.channel.send(`**:x: | أكتب إسم الروم بشكل صحيح, \`Ex: $settings SetVoice Hi\`**`)
vojson[message.guild.id] = {
stats: 'enable',
chid: channelfind.id,
guild: message.guild.id

}
channelfind.setName(`» VoiceOnline: ${message.guild.members.filter(m => m.voiceChannel).size}.`)
message.channel.send('**:white_check_mark: » Done.**')
}
    if(message.content.startsWith(prefix + "settings VoiceOnline Off")) {
      message.guild.channels.find('id', `${vojson[message.guild.id].chid}`).delete()
    vojson[message.guild.id] = {
        stats: 'disable',
        chid: 'undefined',
        guild: message.guild.id
        }
        message.channel.send('**:white_check_mark: » Done.**')

}
fs.writeFile("./vojson.json", JSON.stringify(vojson), (err) => {
    if (err) console.error(err)
  })
})

client.on('voiceStateUpdate', (oldMember , newMember) => {
            if(!vojson[oldMember.guild.id]) vojson[oldMember.guild.id] = {
                stats: 'disable',
                chid: 'undefined',
                guild: 'undefined'
            }
                    if (vojson[oldMember.guild.id].stats === 'enable') {
                        let ch = vojson[oldMember.guild.id].chid
                        let channel = oldMember.guild.channels.get(ch)
                        let guildid = vojson[oldMember.guild.id].guild
                        channel.setName(`VoiceOnline: ${oldMember.guild.members.filter(m => m.voiceChannel).size}`)
                    };
                    if (vojson[oldMember.guild.id].stats === 'disable') {
                    return;
                    }
        });
// Rection role:
hero.on('message',async message => {
    if(message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
    let alias = message.content.split(" ")[0].substring(prefix.length).toLowerCase();
    let args = message.content.split(" ");
    
    if(alias === 'recrole') {
      if(!args[1] || isNaN(args[1])) return message.channel.send("**:x: | أكتب أيدي الرسالة**");
      if(!message.channel.fetchMessage(args[1])) return message.channel.send("**:x: | هذا الأيدي غير مناسب**");
      let mention = message.mentions.roles.first();
      if(!mention) return message.channel.send("**:x: | قم بمنشنة رتبة**");
      
      message.channel.send("**:information_source: | يتم التحميل**");
      try {
        let i = await message.channel.send("**:information_source: | الأن .. قم بوضع الري أكشن المطلوب على الرسالة المطلوبة**");
        let collector = i.createReactionCollector((reaction, user) => user.id === message.author.id, { time: 15000 });
        let c = false;
        collector.on('collect', f => {
        c = true;
        if(emojis.get(message.guild.id) !== undefined) {
        emojis.delete(message.guild.id);
        emojis.set(message.guild.id, {
          emoji: f._emoji.name,
          msgid: args[1],
          role: mention.id
        });
        collector.stop();
      } else {
        emojis.set(message.guild.id, {
          emoji: f._emoji.name,
          msgid: args[1],
          role: mention.id
        });
        collector.stop();
      }
        });
       collector.on('end', f => {
         if(c === true) return message.channel.send("**:white_check_mark: » تم الحفظ** ");
         else {
           return message.channel.send("**:white_check_mark: » فشلت العملية**")
         }
       }); 
      } catch(e) {
        if(e) console.error(e.stack);
      }
    }
  });
  hero.on('raw', event => {
    if(event.t === "MESSAGE_REACTION_ADD" || event.t === "MESSAGE_REACTION_REMOVE") {
      let data = event.d;
      if(emojis.get(data.guild_id) === undefined) return;
      let emoj = emojis.get(data.guild_id);
      console.log(data.emoji.name, emoj.emoji);
      if(data.emoji.name.toString() !== emoj.emoji.toString()) return;
      if(emoj.msgid !== data.message_id) return;
      let member = hero.guilds.get(data.guild_id).members.get(data.user_id);
      let role = hero.guilds.get(data.guild_id).roles.get(emoj.role);
      
      if(event.t === "MESSAGE_REACTION_ADD") {
        member.addRole(role)
        .catch(e => {});
      }
      if(event.t === "MESSAGE_REACTION_REMOVE") {
        member.removeRole(role)
        .catch(e => {});
      }
    }
  });
// Webhook reply:
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'mybot')) {
     const args = message.content.substring(prefix.length).split(' ');
   
    message.delete();
   args.shift() 
   let msg = args.join(' ') 
   if(!msg)return message.reply(`:x: **\`${prefix}mybot <message>\`**`);
   message.channel.createWebhook(message.author.username, message.author.avatarURL) 
       .then(wb => {
           const user = new Discord.WebhookClient(wb.id, wb.token) 
           user.send(msg.replace('@everyone', `:x: **لا يمكن القيام بمنشن في هذا البوت الخاص .**`).replace('@here', `**لا يمكن القيام بمنشن في هذا البوت الخاص .**`));
           user.delete() 
       })
       .catch(console.error)
    }
   });
// Top Invites:
client.on('message',async message => {
	if (!message.guild || message.author.bot) return;
    var command = message.content.toLowerCase().split(" ")[0]; 
   var args = message.content.toLowerCase().split(" ");
   var user = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
  
   if(command == prefix + 'top') {
       if(!args[1] !== 'inv')
       if(message.channel.type !== "text") return;
message.guild.fetchInvites().then(res => {
       let invs = new Discord.Collection();
       res.forEach(i => {
           if(!message.guild.member(i.inviter.id)) return;
           if(!invs.has(i.inviter.id)) invs.set(i.inviter.id, i.uses);
           else invs.set(i.inviter.id, invs.get(i.inviter.id)+i.uses);
       })
       let desc = "";

     
       console.log(invs.sort((a, b) => b - a))
       desc += invs.sort((a, b) => b - a).firstKey(10).map((id, index) => "#" + (index+1) + " | " + (message.guild.member(id) ? message.guild.member(id) : "``Unknown``") + " INV: `" + invs.sort((a, b) => b - a).array()[index] + "`").join("\n");
       let embed = new Discord.RichEmbed()
       .setTitle("**:sparkling_heart: INVITERS SCORE** [ 1/1 ]")
       .setTimestamp()
       .setColor('#36393F')
       .setFooter(message.author.username, message.author.avatarURL)
       .setDescription(desc);
       message.channel.send(embed);    
})
   }
       });
// Info ColorRole:
client.on('message',async function(message) {
	if (!message.guild || message.author.bot) return;
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
  
    let editRole = message.mentions.roles.first();
    let args = message.content.split(' ');
    let color = args[2];
    let black = '#1c1b1b',
        white = '#ffffff',
        lime = '#02e048',
        blue = '#02def2',
        purple = '#cb00ff',
        pink = '#ff0077',
        red = '#ff0000',
        orange = '#ffae00',
        milky = '#005dff',
        darkgreen = '#2a8942',
        darkblue = '#2a1151',
        darkpurple = '#50114b',
        darkpink = '#99038d',
        darkred = '#990303',
        darkorange = '#996103'
    if(message.content.startsWith(prefix + "rolecolor")) {
      if(!message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return;
      if(!message.guild.me.hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return;
      if(!editRole) return message.channel.send(`**:milky_way:| Mention role!**`);
      if(!args[2]) {
        let codes = [black, white, lime, blue, purple, pink, red, orange, milky, darkgreen, darkblue, darkpurple, darkpink, darkred, darkorange];
        let colors = new Discord.RichEmbed()
        .setTitle(`❯ Role Colors: \`${message.guild.name}\`.`)
        .setColor(codes[Math.floor(Math.random() * codes.length)])
        .setFooter(client.user.username)
        .setTimestamp()
  .setDescription(`\nBlack: \`${black}\`\n\nWhite: \`${white}\`\n\nLime: \`${lime}\`\n\nBlue: \`${blue}\`\n\nPurple: \`${purple}\`\n\nPink: \`${pink}\`\n\nRed: \`${red}\`\n\nOrange: \`${orange}\`\n\nMilky: \`${milky}\`
  \nDarkGreen: \`${darkgreen}\`\n\nDarkBlue: \`${darkblue}\`\n\nDarkPurple: \`${darkpurple}\`\n\nDarkPink: \`${darkpink}\`\n\nDarkRed: \`${darkred}\`\n\nDarkOrange: \`${darkorange}\`\n`);
        return message.channel.send(colors);
      }
  
      if(args[2] && color === 'white') {
        editRole.edit({color: white}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        });
      }
      if(args[2] && color === 'black') {
        editRole.edit({color: black}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        });
      }
      if(args[2] && color === 'lime') {
        editRole.edit({color: lime}).then(function(done, err) {
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'blue') {
        editRole.edit({color: blue}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'purple') {
        editRole.edit({color: purple}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
    if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'pink') {
        editRole.edit({color: pink}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'red') {
        editRole.edit({color: red}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error**`));
      }
      if(args[2] && color === 'orange') {
        editRole.edit({color: orange}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'milky') {
        editRole.edit({color: milky}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'darkgreen') {
        editRole.edit({color: darkgreen}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x:  Error.**`));
      }
      if(args[2] && color === 'darkblue') {
        editRole.edit({color: darkblue}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'darkred') {
        editRole.edit({color: darkred}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'darkpink') {
        editRole.edit({color: darkpink}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'darkpurple') {
        editRole.edit({color: darkpurple}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
      if(args[2] && color === 'darkorange') {
        editRole.edit({color: darkorange}).then(function(done, err) {
          if(err) return message.channel.send(`**:heavy_multiplication_x: Error.**`);
          if(!err) return message.channel.send(`**:ballot_box_with_check: Done.**`);
        }).catch(e => message.channel.send(`**:heavy_multiplication_x: Error.**`));
      }
    }
  });
// Timer:
client.on('message', message => {
        
    if(message.content.startsWith(prefix + 'timer')) {
          let args = message.content.split(' ').slice(1);
   let Timer = args[0];
 
   if(!args[0]){
     return message.channel.send("**❌ | Please Enter a time period followed by `s,m,h` || Ex: `$timer 5m`.**");
   }
 
   if(args[0] <= 0){
     return message.channel.send("**❌ | Please Enter a time period followed by `s,m,h` || Ex: `$timer 5m`.**");
   }
 
   message.channel.send(`**✅ | Timer Started for:  \`${ms(ms(Timer), {long: true})}\`.**`)
 
   setTimeout(function(){
     message.author.send(`**:warning: | The timer has FINISHED!, lasted: \`${ms(ms(Timer), {long: true})}\`.**`)
 
   }, ms(Timer));
 
     }
 });
// Logs Info:
client.on('message',async message => {
	if (!message.guild || message.author.bot) return;
if(message.author.bot) return;
if(message.channel.type === 'dm') return
  const m = message.content.split(' ').slice(1);
  var args = message.content.split(' ');
  if(message.content.toLowerCase().startsWith(prefix + "settings")) {
    if(!message.member.hasPermission("MANAGE_GUILD")) return;
    if(!args[1] || args[1] && args[1] !== 'logs' && args[1] !== 'efisjsdllskswhdlkshwjhwldhwd' && args[1] !== 'efisjsdllskswhdlkshwjhwldhwdqwwqwqwqw') {
      if(args[0] !== prefix + 'sasjsiausiquqihwqihwqugwqyfwtqfwgqwgquwhquwqiwq') return;
      var aa;
      if(!logs[message.guild.id]) aa = 'None';
      if(logs[message.guild.id]) aa = logs[message.guild.id].channelName;
      var setEmbed = new Discord.RichEmbed()
      .addField(':hammer_pick: » Log', `\`Default\` None\n\`Guild\` ${aa}\n\`Syntax\` $settings logs [Room]`,true);
      message.channel.send(setEmbed);
    }
    if(args[1] === 'SetLogs') {
      if(!args[2]) return message.channel.send('**:negative_squared_cross_mark: | Write room name.**');
      if(!message.guild.channels.find('name', args[2])) return message.channel.send('**:negative_squared_cross_mark: | Error.**');
      message.channel.send('**:white_check_mark: » Done.**');
      logs[message.guild.id] = {
        channelName: args[2],
        channelId: message.guild.channels.find('name', args[2]).id
      };
      fs.writeFile('./JsonFiles/guildLogs.json', JSON.stringify(logs, null ,1), (err) => {
        if(err) message.channel.send('**:negative_squared_cross_mark: » Error**');
      });
    }
    if(args[1] === 'sdsdskjdskjdskjdskdshdskh') {
       return message.channel.send(':negative_squared_cross_mark: » Soon');
    }
    if(args[1] === 'slkdoqjqwihqwuqwuqbwqhjwjhqik') {
      return message.channel.send(':negative_squared_cross_mark: » Soon');
    }
}
});


client.on("channelCreate",  channel => {
  if(!logs[channel.guild]) return;
  const c = channel.guild.channels.find("name", logs[channel.guild.id].channelName);
if(!c) return;
  if(c) {
    var emoji;
    if(channel.type === 'text') emoji = ':speech_balloon:| Text';
    if(channel.type === 'voice') emoji = ':microphone:| Voice';
    if(channel.type === 'category') emoji = ':books:| Category';
    channel.guild.fetchAuditLogs({
      limit: 1,
      type: 10
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var cReate = new Discord.RichEmbed()
      .setTitle('New room created')
      .setAuthor(audit.entries.map(e => e.executor.tag), channel.guild.iconURL)
      .setColor('GREEN')
      .addField('» Room Name:', channel.name,true)
      .addField('» By:',e,true)
      .addField('» Type:', emoji, true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(cReate);
    });
  } else {
    return;
  }
});
client.on('channelDelete', channel => {
  if(!logs[channel.guild.id]) return;
  const c = channel.guild.channels.find("name", logs[channel.guild.id].channelName);
if(!c) return;
  if(c) {
    channel.guild.fetchAuditLogs({
      limit: 1,
      type: 12
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var cDelete = new Discord.RichEmbed()
      .setTitle('Room Deleted')
      .setAuthor(audit.entries.map(e => e.executor.tag), channel.guild.iconURL)
      .setColor('RED')
      .addField('» Room Name:', channel.name,true)
      .addField('» By:',e,true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(cDelete);
    });
  } else {
    return;
  }
});
client.on('guildBanAdd', (guild, member) => {
  if(!logs[member.guild]) return;
  const c = guild.channels.find("name", logs[guild.id].channelName);
  if(!c) return;
  if(c) {
    guild.fetchAuditLogs({
      limit: 1,
      type: 22
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var bEmbed = new Discord.RichEmbed()
      .setTitle('New Ban')
      .setAuthor(audit.entries.map(e => e.executor.tag), guild.iconURL)
      .setColor('RED')
      .addField('» User:', `**${member.tag}**`,true)
      .addField('» Moderator:', `**${e}**`,true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(bEmbed);
    });
  } else {
    return;
  }
});
client.on('guildBanRemove', (guild, member) => {
  if(!logs[guild.id]) return;
  const c = guild.channels.find('name', logs[guild.id].channelName);
  if(!c) return;
  if(c) {
    guild.fetchAuditLogs({
      limit: 1,
      type: 23
    }).then(audit => {
      var e = audit.entries.map(a => a.executor.username);
      var gEmbed = new Discord.RichEmbed()
      .setTitle('New UnBan')
      .setAuthor(audit.entries.map(e => e.executor.tag), guild.iconURL)
      .setColor('GREEN')
      .addField('» User:', `**${member.tag}**`,true)
      .addField('» Moderator:', `**${e}**`,true)
      .setFooter(`v0.1 | Logs.`)
      .setTimestamp();
      c.send(gEmbed);
    });
  } else {
    return;
  }
});
client.on('guildMemberAdd', member => {
  if(!logs[member.guild.id]) return;
  const c = member.guild.channels.find('name', logs[member.guild.id].channelName) || member.guild.channels.get(logs[member.guild.id].channelId);
  if(!c) return;
  if(c) {
    var wEmbed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setTitle('New Member')
    .setColor('GREEN')
    .setThumbnail(member.user.avatarURL)
    .addField('» Member:', member,true)
    .addField('» Member Count:', member.guild.memberCount,true)
    .setFooter('v0.1 | Logs.')
    .setTimestamp();
    c.send(wEmbed);
  } else {
    return;
  }
});
client.on('guildMemberRemove', member => {
  if(!logs[member.guild.id]) return;
  const c = member.guild.channels.find('name', logs[member.guild.id].channelName);
  if(!c) return;
  if(c) {
    var lEmbed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setTitle('Member Leave')
    .setColor('RED')
    .setThumbnail(member.user.avatarURL)
    .addField('» Member:', member.user.tag,true)
    .addField('» Member Count:',member.guild.memberCount,true)
    .setFooter('v0.1 | Logs.')
    .setTimestamp();
    c.send(lEmbed);
  } else {
    return;
  }
});
client.on('messageDelete', message => {
  if(!logs[message.guild.id]) return;
   const c = message.guild.channels.find('name', logs[message.guild.id].channelName);
   if(!c) return;
   if(c) {
     if(!message || !message.id || !message.content || !message.guild || message.author.bot) return;
     var mEmbed = new Discord.RichEmbed()
     .setTitle(`🗑 ${message.author.tag} Deleted Message .`)
     .setColor('BLACK')
     .setThumbnail(message.author.avatarURL)
     .setDescription(`\`\`\`${message.cleanContent.replace('`', '\`')}\`\`\``)
     .addField('» User:',message.author,true)
     .addField('» In:',message.channel,true)
     .setFooter('v0.1 | Logs.')
     .setTimestamp();
     c.send(mEmbed);
   } else {
     return;
   }
});
client.on('messageUpdate', (old, message) => {
  try {
    if(!logs[message.guild.id]) return;
  const c = message.guild.channels.get(logs[message.guild.id].channelId);
  if(c) {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot || message.content === old.content) return;
    var editedEmbed = new Discord.RichEmbed()
    .setTitle(`✏ ${message.author.tag} Edited Message .`)
    .setColor('BLACK')
    .setThumbnail(message.author.avatarURL)
    .setDescription(`Old Message : \`\`\`${old.cleanContent || old.content}\`\`\`\nNew Message : \`\`\`${message.cleanContent || message.content}\`\`\``)
    .addField('» User:', message.author,true)
    .addField('» In:', message.channel, true)
    .setFooter('v0.1 | Logs.')
    .setTimestamp();
    c.send(editedEmbed);
  }
  } catch(e) {
    if(e) return null;
  }
});
// Films Info:
hero.on("message", message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    let alias = message.content.split(" ")[0].substring(prefix.length);
    let args = message.content.split(" ");
    if(alias === 'film') {
        if(!args[1]) return;
        let query = qs.stringify({ s: args.slice(1).join(" ") });
        let queryString = `http://www.omdbapi.com/?apikey=7163cd9d&type=movie&${query}`;
        
        fetch(queryString)
        .then(res => res.json())
        .then(async res => {
            let search = res.Search;
                request(`https://www.imdb.com/title/${search[0].imdbID}`, async function (error, response, body) {
                    let story = body.split("<div class=\"summary_text\">")[1].toString().split("</div>")[0];
                    let o = new Discord.RichEmbed();
                    await o.setColor("#36393e");
                    await o.setThumbnail(search[0].Poster);
                    await o.setTitle(`**❯ ${search[0].Title}**`);
                    await o.setURL(`https://www.imdb.com/title/${search[0].imdbID}`);
                    await o.addField("» Release", search[0].Year, true);
                    await o.addField("» Story", story, true);
                    await message.channel.send(o);
    });
        }).catch(e => {
            if(e) return message.channel.send(`**:x: | Couldn't get any results**`);
        });
    }
  });
// Create file
const util = require('util')
const writeFile = util.promisify(fs.writeFile)

client.on("message", (message) => {
	if (!message.guild || message.author.bot) return;
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) != 0) return;
  const [commandName, ...args] = message.content.slice(prefix.length).split(/ +/g);
  if (commandName === "file") {
    var text = args.join(" ");
    writeFile("./SBotFile.txt", text)
      .then(() => {
        message.channel.send('**:white_check_mark: » هذا هو ملفك الخاص :**')
         message.channel.send({ files: ["./SBotFile.txt"] })
      })
  }
}); 

// Npm Search:
  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if (message.author.bot || message.channel.type === 'dm') return;
      let args = message.content.split(" ").slice(1);
      let command = message.content.split(" ")[0];
      let request = require('snekfetch');
      if (command === `$npm`) {
          // https://www.npmjs.com/package/snekfetch
          if (!args[0]) return message.channel.send(`**:x: | Specify an arg to search for in npmjs.com.**`);
          let url = args.includes(" ") ? args.replace(" ", "-") : args;
          url = `https://registry.npmjs.com/${url[0].toLowerCase()}`;
          request.get(url).then(r => {
                  message.channel.send(new Discord.RichEmbed()
                      .setAuthor(message.author.username, message.author.avatarURL)
                      .setThumbnail("https://static.npmjs.com/338e4905a2684ca96e08c7780fc68412.png")
                      .setTitle(`❯ \`${args[0]}\`.`)
                      .setColor("#000")
                      .addField("» **Version**", `- ${r.body['dist-tags'].latest}`, true)
                      .addField("» **License**", `- ${r.body.license}`, true)
                      .addField("» **Homepage**", `- [\`Click Here\`](${r.body.homepage})`, true)
                      .addField("» **Description**", `- ${r.body.description || "- Without description."}`, true)
                      .addField("» **Contributors**", `- ${r.body.contributors ? r.body.contributors.map(r => r.name).join(', ') : "None"}`, true)
                      .addField("» **Keyboards**", `- ${r.body.keywords ? r.body.keywords.map(r => r).join(', ') : "None"}`, true));
              })
              .catch(e => {
                  if (e) message.channel.send(`**:x: |  Couldn't find the package \`${args[0]}\` .**`);
                  if (e) console.log(e.message);
              });
      }
  });
// Create Files:
  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if (message.author.bot || message.channel.type === 'dm' || !message.content.startsWith(prefix)) return;
      let alias = message.content.split(" ")[0].substring(prefix.length);
      let args = message.content.split(" ");
  
      if (notes.get(message.author.id) === undefined) {
          notes.set(message.author.id, []);
      }
      if (alias === 'text') {
          if (args[1] === 'create') {
              let data = notes.get(message.author.id);
              if (data.length >= 8) {
                  return message.channel.send(`**:x: | You can't make more than 8 texts, Use \`${prefix}text delete [Note]\` to delete a texts!**`);
              } else {
                  let thisName;
                  let thisContent;
                  let thisRegex = /([a-z,0-9])/g;
                  let x = await message.channel.send(`**:information_source: | Type the name of the text**`);
                  let i = await message.channel.awaitMessages(r => r.author.id === message.author.id, {
                      max: 1,
                      time: 30000,
                      errors: ['time']
                  });
                  if (!i.first().content.match(thisRegex)) return message.channel.send(`**:x: | That name isn't valid the name must be like \`test\`**`);
                  if (data.filter(r => r.name === i.first().content).length != 0) return message.channel.send(`**:x: | That name is already used**`);
                  thisName = i.first().content;
  
                  x = await message.channel.send(`**:information_source: | Type the content of the text**`);
                  i = await message.channel.awaitMessages(r => r.author.id === message.author.id, {
                      max: 1,
                      time: 30000,
                      errors: ['time']
                  });
                  thisContent = i.first().content;
  
                  x = await message.channel.send(new Discord.RichEmbed()
                      .setColor("ORANGE")
                      .setDescription("**⏳ | Saving the text...**"));
  
                  await notes.push(message.author.id, {
                      name: thisName,
                      content: thisContent
                  });
  
                  await x.delete().catch(e => {});
                  await message.channel.send(new Discord.RichEmbed()
                      .setColor("GREEN")
                      .setDescription(`**:white_check_mark: » Saved the text!**`));
              }
          } else if (args[1] === 'delete') {
              if (!args[2]) return message.channel.send(`**:x: | You must type the name**`);
              let data = notes.get(message.author.id);
              if (data.filter(r => r.name === args[2]).length === 0) return message.channel.send(`**:x: | Couldn't get that name**`);
              let item = data.filter(r => r.name === args[2])[0];
              let x = await message.channel.send(new Discord.RichEmbed()
                  .setColor("ORANGE")
                  .setDescription("**⏳ | Deleting the text...**"));
  
              await notes.remove(message.author.id, item);
  
              await x.delete().catch(e => {});
              await message.channel.send(new Discord.RichEmbed()
                  .setColor("GREEN")
                  .setDescription(`**:white_check_mark: » Deleted the text!**`));
          } else {
              if (!args[1]) return message.channel.send(`**:x: | You must type the name**`);
              let data = notes.get(message.author.id);
              if (data.filter(r => r.name === args[1]).length === 0) return message.channel.send(`**:x: | Couldn't get that name**`);
              let item = data.filter(r => r.name === args[1])[0];
  
              let o = new Discord.RichEmbed();
              o.setColor("#36393e");
              o.setTitle(`**❯ Displaying information about: \`${item.name}\`**`);
              o.setDescription(`**→ ${item.content}**`);
  
              await message.channel.send(o);
          }
      }
  });
// Replay
client.on('message',async message => {
	if (!message.guild || message.author.bot) return;
    var msg;
    var resp;
    var filter = m => m.author.id === message.author.id;
    if(message.content.startsWith(prefix + "reply")) {
      if(!message.member.hasPermission("MANAGE_GUILD")) return;
      message.channel.send(`**:eight_pointed_black_star: | اكتب الرسالة**`).then(m => {
        message.channel.awaitMessages(filter, {
          max: 1,
          time: 20000,
          errors: ['time']
        }).then(collected => {
          msg = collected.first().content;
          collected.first().delete();
          message.delete();
          m.edit(`**:eight_pointed_black_star: | اكتب الرد**`).then(() => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 20000,
              errors: ['time']
            }).then(collected => {
              resp = collected.first().content;
              collected.first().delete();
              message.delete();
              m.edit(`**:white_check_mark: » Auto reply activated.**`);
              var autoM = new Discord.RichEmbed()
              .setAuthor(message.author.username, message.author.avatarURL)
              .setThumbnail(message.author.avatarURL)
              .setTitle(`:white_check_mark: **Changed the reply!**`)
              .addField('❯ Message',msg,true)
              .addField('❯ Reply',resp,true)
              .setFooter(`${message.author.tag} :: ${moment().format('MMM.Do.YY')}`);
              message.channel.send(autoM);
              auto[message.guild.id] = {
                msg: msg,
                resp: resp
              };
              fs.writeFile('./JsonFiles/autoMessage.json', JSON.stringify(auto, null, 4), (e) => {
                if(e) console.log(e);
              });
            });
          });
        });
      });
    } else if(message.content.startsWith(auto[message.guild.id].msg)) {
      message.channel.send(auto[message.guild.id].resp);
    }
  });
// Points:
  var cooldown = new Set();
  var points = {};
  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if(message.channel.type !== 'text') return;
      
      
      var command = message.content.toLowerCase().split(" ")[0];
      var args = message.content.toLowerCase().split(" ");
      var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
        const embed  = new Discord.RichEmbed()
  .setDescription(`
  **لم يتم تسجيل أي نقطة حتى الأن **
  ** أمثلة للأوامر: **
  **:small_orange_diamond:** $points ${message.author} 1 \`لتغيير نقاط شخص معين \`
  **:small_orange_diamond:** $points ${message.author} +1 \`لزيادة نقاط شخص معين\`
  **:small_orange_diamond:** $points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
  **:small_orange_diamond:** $points ${message.author} 0 \`لتصفير نقاط شخص معين \`
  **:small_orange_diamond:** $points reset \`لتصفير جميع النقاط\``)
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setColor(`#e60909`)
    const error  = new Discord.RichEmbed()
  .setDescription(`
  **:x: | يجب كتابة الأمر بشكل صحيح. **
  ** أمثلة للأوامر: **
  **:small_orange_diamond:** $points ${message.author} 1 \`لتغيير نقاط شخص معين \`
  **:small_orange_diamond:** $points ${message.author} +1 \`لزيادة نقاط شخص معين\`
  **:small_orange_diamond:** $points ${message.author} -1 \`لأزالة نقطة من شخص معين \`
  **:small_orange_diamond:** $points ${message.author} 0 \`لتصفير نقاط شخص معين \`
  **:small_orange_diamond:** $points reset \`لتصفير جميع النقاط\``)
  .setFooter('Requested by '+message.author.username, message.author.avatarURL)
  .setColor(`#e60909`)
  if(command == prefix + 'points') {
       
          if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
          if(!args[1]) {
              if(!points) return message.channel.send(embed);
              var members = Object.values(points);
              var memb = members.filter(m => m.points >= 1);
              if(memb.length == 0) return message.channel.send(embed);
              var x = 1;
              let pointsTop = new Discord.RichEmbed()
              .setAuthor('Points:')
              .setColor('#FBFBFB')
              .setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**:small_blue_diamond:** <@${m.id}> \`${m.points}\``).join('\n'))
              .setFooter(`Requested by ${message.author.username}`, message.author.avatarURL);
              message.channel.send({
                  embed: pointsTop
              });
          }else if(args[1] == 'reset') {
              let pointsReset = new Discord.RichEmbed()
              .setDescription('**:white_check_mark: | تم تصفير جميع النقاظ بنجاح**')
              .setFooter('Requested by '+message.author.username, message.author.avatarURL)
              if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
              if(!points) return message.channel.send(pointsReset);
              var members = Object.values(points);
              var memb = members.filter(m => m.points >= 1);
              if(memb.length == 0) return message.channel.send(pointsReset);
              points = {};
              message.channel.send(pointsReset);
          }else if(userM) {
              if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
              if(!points[userM.user.id]) points[userM.user.id] = {
                  points: 0,
                  id: userM.user.id
              };
              if(!args[2]) {
                  if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} Not have any points.`);
                  var userPoints = new Discord.RichEmbed()
                  .setColor('#d3c325')
                  .setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
                  message.channel.send({
                      embed: userPoints
                  });
              }else if(args[2] == 'reset') {
                  if(points[userM.user.id].points == 0) return message.channel.send(error);
                  points[userM.user.id].points = 0;
                  message.channel.send(`Successfully reset ${userM.user.username} points.`);
              }else if(args[2].startsWith('+')) {
                  args[2] = args[2].slice(1);
                  args[2] = parseInt(Math.floor(args[2]));
                  if(points[userM.user.id].points == 1000000) return message.channel.send(error);
                  if(!args[2]) return message.channel.send(error);
                  if(isNaN(args[2])) return message.channel.send(error);
                  if(args[2] > 1000000) return message.channel.send(error);
                  if(args[2] < 1) return message.channel.send(error);
                  if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
                  points[userM.user.id].points += args[2];
                  let add = new Discord.RichEmbed()
                  .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                  .setAuthor('Points:')
                  .setColor('#FBFBFB')
                  .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                  message.channel.send(add);
              }else if(args[2].startsWith('-')) {
                  args[2] = args[2].slice(1);
                  args[2] = parseInt(Math.floor(args[2]));
                  if(points[userM.user.id].points == 0) return message.channel.send(error);
                  if(!args[2]) return message.channel.send(error);
                  if(isNaN(args[2])) return message.channel.send(error);
                  if(args[2] > 1000000) return message.channel.send(error);
                  if(args[2] < 1) return message.channel.send(error);
                  if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
                  points[userM.user.id].points -= args[2];
                      let rem = new Discord.RichEmbed()
                  .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                  .setAuthor('Points:')
                  .setColor('#FBFBFB')
                  .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                  message.channel.send(rem);
              }else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
                  args[2] = parseInt(Math.floor(args[2]));
                  if(isNaN(args[2])) return message.channel.send(error);
                  if(args[2] > 1000000) return message.channel.send(error);
                  if(args[2] < 1) return message.channel.send(error);
                  if(points[userM.user.id].points == args[2]) return err(message, `${userM.user.username} points is already ${args[2]}.`);
                  points[userM.user.id].points = args[2];
                      let set = new Discord.RichEmbed()
                  .setDescription(`**:small_blue_diamond:** <@${userM.id}> \`${points[userM.user.id].points}\``)
                  .setAuthor('Points:')
                  .setColor('#FBFBFB')
                  .setFooter('Requested by' + message.author.username, message.author.avatarURL)
                  message.channel.send(set);
              }
              }
              }
  });
// Wiki.
  const wiki = require("wikipediajs");
  const query = require('querystring');
  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if (message.author.bot || message.channel.type === 'dm') return;
      if (!message.content.startsWith(prefix)) return;
      let cmd = message.content.split(" ")[0].substring(prefix.length);
      let args = message.content.split(" ");
      if (cmd === 'f,dklsjilwndsjksdkldsnewkejnhdwmwekjwhwhjdwwdlqkowqpoi1ohu1bjwnmwdkslcjdbck') {
          if (!args[1]) return;
          let o = await message.channel.send(`**• Getting data, Please wait...**`);
          let i = new Discord.RichEmbed();
          i.setColor("#36393e");
          let string = query.stringify({
              term: args.slice(1).join(" ")
          });
          fetch(`http://api.urbandictionary.com/v0/define?${string}`)
              .then(async res => res.json())
              .then(async res => {
                  let data = res.list;
                  if (!data.length || data.length === 0) {
                      o.delete();
                      return message.channel.send(`**• Couldn't search \`${args.slice(1).join(" ").slice(0, 1024)}\`**`);
                  }
                  let info = data[0];
                  i.addField('❯ General', `→ Definition: \`${info.definition}\`\n→ Link: [${info.word}](${info.permalink})\n→ Author: \`${info.author}\``);
                  i.addField('❯ Rating', `→ Agreed: \`${info.thumbs_up}\`\n→ Disagreed: \`${info.thumbs_down}\`\n→ Votes: \`${info.thumbs_up + info.thumbs_down}\``);
                  i.addField('❯ Example', `→ \`${info.example}\``);
                  i.setThumbnail("https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-11/297387706245_85899a44216ce1604c93_512.jpg");
                  i.setFooter("Urban Dictionary", "https://s3.amazonaws.com/pushbullet-uploads/ujxPklLhvyK-RGDsDKNxGPDh29VWVd5iJOh8hkiBTRyC/urban_dictionary.jpg?w=188&h=188&fit=crop");
                  // ❯  , →
                  await o.delete().catch(e => {});
                  await message.channel.send(i);
              });
      } else if (cmd === 'wiki') {
          if (!args[1]) return;
          let i = new Discord.RichEmbed();
          i.setColor("#36393e");
          let o = await message.channel.send(`**:information_source: Getting data, Please wait...**`);
          wiki.search(args.slice(1).join(" ")).then(async (data) => {
              let pages = data.query.pages;
              let values = Object.values(pages)[0];
              i.setThumbnail("https://english.cdn.zeenews.com/sites/default/files/2015/08/16/391299-wikipedia.jpg");
              i.setFooter("Wikipedia", "https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/58af0228b8aa8.jpg");
              i.addField('❯ General', `→ Length: \`${values.length}\`\n→ Link: [${values.title}](${values.fullurl})\n→ Language: \`${values.pagelanguage}\``);
              await message.channel.send(i);
              await o.delete().catch(e => {});
          });
      }
  });
// Colors info:
  client.on("message", message => {
	  if (!message.guild || message.author.bot) return;
      if (message.content == "$colors") {
          var fsn = require('fs-nextra');
          fs.readdir('./SBotImages/colors', async (err, files) => {
              var f = files[Math.floor(Math.random() * files.length)];
              var {
                  Canvas
              } = require('canvas-constructor');
              var x = 0;
              var y = 0;
              if (message.guild.roles.filter(role => !isNaN(role.name)).size <= 0) return replies.err(message, `**Can\'t found any color. **`)
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(() => {
                  x += 100;
                  if (x > 100 * 12) {
                      x = 100;
                      y += 80;
                  }
              });
              var image = await fsn.readFile(`./SBotImages/colors/${f}`);
              var xd = new Canvas(100 * 11, y + 250)
                  .addBeveledImage(image, 0, 0, 100 * 11, y + 250, 50)
                  .setTextBaseline('middle')
                  .setColor('white')
                  .setTextSize(60)
                  .addText(`قائمة الألوان`, 375, 40);
              x = 0;
              y = 150;
              message.guild.roles.filter(role => !isNaN(role.name)).sort((b1, b2) => b1.name - b2.name).forEach(role => {
                  x += 75;
                  if (x > 100 * 10) {
                      x = 75;
                      y += 80;
                  }
                  xd
                      .setTextBaseline('middle')
                      .setTextAlign('center')
                      .setColor(role.hexColor)
                      .addBeveledRect(x, y, 60, 60, 15)
                      .setColor('white');
                  if (`${role.name}`.length > 2) {
                      xd.setTextSize(30);
                  } else if (`${role.name}`.length > 1) {
                      xd.setTextSize(40);
                  } else {
                      xd.setTextSize(50);
                  }
                  xd.addText(role.name, x + 30, y + 30);
              });
              message.channel.sendFile(xd.toBuffer());
          });
      }
  })
// 
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
      let args = message.content.split(' ').slice(1);
      if (message.content.split(' ')[0] == `$color`) {
          const embedd = new Discord.RichEmbed()
              .setFooter('Requested by ' + message.author.username, message.author.avatarURL)
              .setDescription(`** :x: | Can\'t find color with this number.**`)
              .setColor(`ff0000`)
  
          if (!isNaN(args) && args.length > 0)
  
  
              if (!(message.guild.roles.find(x => x.name === `${args}`))) return message.channel.sendEmbed(embedd);
  
  
          var a = message.guild.roles.find(x => x.name === `${args}`)
          if (!a) return;
          const embed = new Discord.RichEmbed()
  
              .setFooter('Requested by ' + message.author.username, message.author.avatarURL)
              .setDescription(`**:white_check_mark: » Done give you this color.**`)
  
              .setColor(`${a.hexColor}`)
          message.channel.sendEmbed(embed);
          if (!args) return;
          setInterval(function () {})
          let count = 0;
          let ecount = 0;
          for (let x = 1; x < 201; x++) {
  
              message.member.removeRole(message.guild.roles.find(x => x.name === `${x}`))
  
          }
          message.member.addRole(message.guild.roles.find(x => x.name === `${args}`));
  
  
      }
  });
  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if (message.author.bot) return;
  
  
      let command = message.content.split(" ")[0].slice(prefix.length);
      let args = message.content.split(" ").slice(1);
      if (!message.content.toLowerCase().startsWith(prefix)) return;
  
      if (command == 'delete-colors') {
          if (!message.member.hasPermission("ADMINISTRATOR")) return;
          message.channel.send(`**:white_check_mark: » Loading delete colors.**`).then(async m => {
              await message.guild.roles.forEach(role => {
                  if (/^\d+$/gi.test(role.name)) {
                      role.delete();
                  }
              });
              m.edit(`**:white_check_mark: » Done, deleted all colors.**`)
          });
      }
  });
// User Info:
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
  
  
      if (message.content.startsWith(prefix + "user")) {
  
          if (!message.channel.guild) return;
  
          message.guild.fetchInvites().then(invs => {
              let member = client.guilds.get(message.guild.id).members.get(message.author.id);
              let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
              let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              var args = message.content.split(" ").slice(1);
              let user = message.mentions.users.first();
              let roles = message.member.roles.map(r => r).slice(0, 3).toString() + '\n' + message.member.roles.map(r => r).slice(3, 6).toString();
              var men = message.mentions.users.first();
              var heg;
              if (men) {
                  heg = men
              } else {
                  heg = message.author
              }
              var mentionned = message.mentions.members.first();
              var h;
              if (mentionned) {
                  h = mentionned
              } else {
                  h = message.member
              }
              moment.locale('ar-TN');
              var id = new Discord.RichEmbed()
  
                  .setColor("#0a0909")
                  .setThumbnail(message.author.avatarURL)
                  .addField(`❯ Username: `, `→ **${message.author.username} \`(${message.author.id})\`** `)
                  .addField('❯ Times: ', ` → Created At:** \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')}\` **
                  → Joined At: **\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}\`**`)
                  .addField(`❯ Invites: `, `→ **${inviteCount}**`)
                  .addField(`❯ Roles: `,`→ **${roles}**`)
  
                  .setFooter(message.author.username, message.author.avatarURL)
              message.channel.sendEmbed(id);
          })
      }
  
  
  
  });
// AntiFake Info:
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
      if (message.content.startsWith(prefix + "settings AntiFake On")) {
          if (!message.channel.guild) return;
          if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**:x: | Don\'t have perms.**`);
          antijoin[message.guild.id] = {
              onoff: 'On',
          }
          message.channel.send(`**:white_check_mark: » \`ON\`**`)
          fs.writeFile("./JsonFiles/antijoin.json", JSON.stringify(antijoin), (err) => {
              if (err) return console.error(err)
                  .catch(err => {
                      console.error(err);
                  });
          });
      }
  
  })
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
      if (message.content.startsWith(prefix + "settings AntiFake Off")) {
          if (!message.channel.guild) return;
          if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**:x: | Don\'t have perms.**`);
          antijoin[message.guild.id] = {
              onoff: 'Off',
          }
          message.channel.send(`**:white_check_mark: » \`OFF\`**`)
          fs.writeFile("./JsonFiles/antijoin.json", JSON.stringify(antijoin), (err) => {
              if (err) return console.error(err)
                  .catch(err => {
                      console.error(err);
                  });
          });
      }
  
  })
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
      if (!message.channel.guild) return;
      // ❯  , →


      if (message.content.startsWith(prefix + "settings SetFake")) {
          let time = message.content.split(" ").slice(2).join(" ");
          if (!message.channel.guild) return;
          if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**:x: | Don\'t have perms.**`);
          if (!time) return message.channel.send(`**:x: | Please type the time of create accounts \`DaysOnly\`.**`);
          let embed = new Discord.RichEmbed()
              .addField(`❯ Account Create Time:`, `→ \`${time}\`.`)
              .addField('❯ Requested By:', `→ \`${message.author}\``)
              .setThumbnail(message.author.avatarURL)
              .setFooter(`${client.user.username}`)
          message.channel.sendEmbed(embed)
          antijoin[message.guild.id] = {
              created: time,
              onoff: 'On',
          }
          fs.writeFile("./JsonFiles/antijoin.json", JSON.stringify(antijoin), (err) => {
              if (err) console.error(err)
          })
      }
  })
  
  client.on("guildMemberAdd", async member => {
	  if (!message.guild || message.author.bot) return;
      if (!antijoin[member.guild.id]) antijoin[member.guild.id] = {
          onoff: 'Off'
      }
      if (antijoin[member.guild.id].onoff === 'Off') return;
      if (!member.user.bot) return;
      let accounttime = `${antijoin[member.guild.id].created}`
      let moment2 = require('moment-duration-format'),
          date = moment.duration(new Date() - member.user.createdAt).format("d");
  
      if (date < accounttime) {
          member.ban(`Member account age is lower than ${antijoin[member.guild.id].created} days.`)
      }
  });
// setSug Info:
  client.on('message', message => {
	  if (!message.guild || message.author.bot) return;
      if (!message.channel.guild) return;
      let room = message.content.split(" ").slice(1);
      let findroom = message.guild.channels.find(x => x.name === `${room}`)
      if (message.content.startsWith(prefix + "settings SetSug")) {
          if (!message.channel.guild) return;
          if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`**:x: | Don\'t have perms.**`);
          if (!room) return message.channel.send(`** :x: | Please type the channel name.**`)
          if (!findroom) return message.channel.send(`**:x: | Can\'t found this channel.**`)
          let embed = new Discord.RichEmbed()
              .addField(`❯ Channel:`, `→ \`${room}\`.`)
              .addField(`❯ Requested By:`, `→ \`${message.author}\``)
              .setThumbnail(message.author.avatarURL)
              .setFooter(`${client.user.username}`)
          message.channel.sendEmbed(embed)
          sug[message.guild.id] = {
              channel: room,
          }
          fs.writeFile("./JsonFiles/sug.json", JSON.stringify(sug), (err) => {
              if (err) console.error(err)
          })
          client.on('message', message => {
              if (message.content.startsWith(`$sug`)) {
                  if (!message.channel.guild) return;
                  let suggest = message.content.split(" ").slice(1);
                  if (!suggest) return message.reply(`**:x: | Please type the suggest.**`)
                  let findchannel = (message.guild.channels.find(x => x.name === `${sug[message.guild.id].channel}`))
                  if (!findchannel) return message.channel.send(`** :x: | Error: \`Can\'t find the suggestions room.**`)
                  message.channel.send(`**:white_check_mark: » Thanks for your suggest.**`)
                  let sugembed = new Discord.RichEmbed()
                      .setTitle('❯ New suggest:')
                      .addField('❯ Suggest By:', `→ \`${message.author}\``)
                      .addField('❯ Suggest:', `→ \`${suggest}\``)
                      .setFooter(client.user.username)
                  findchannel.sendEmbed(sugembed)
                      .then(function (message) {
                          message.react('✅')
                          message.react('❌')
                      })
                      .catch(err => {
                          message.reply(`** :x: | Error: \`Can\'t find the suggestions room.**`)
                          console.error(err);
                      });
              }
          })
      }
  })
// Hypixel Info:
  client.on('message', async message => {
	  if (!message.guild || message.author.bot) return;
      if (message.author.bot || message.channel.type === "dm") return;
      if (!message.content.startsWith(prefix)) return;
      let cmd = message.content.split(" ")[0].substring(prefix.length);
      let args = message.content.split(" ");
      if (cmd === 'hypixel') {
          if (!args[1]) return;
          let HypixelAPI = require("hypixel-api");
          let client = new HypixelAPI("4856cc0d-031c-4b27-9d49-2edb7679853b");
          let i = new Discord.RichEmbed();
          i.setColor("#36393e");
          let o = await message.channel.send(`**:white_check_mark: » :information_source: Collecting data.. please wait.**`);
          client.getPlayer(x => x.name === args[1])
              .then(async player => {
                  let stats = player.player.achievements;
                  let overall = player;
                  const getDays = (createdAt) => {
                      let date = Date.now() - createdAt;
                      // return `${Math.round(date / 1000 / 60 / 60 / 24)} Days ago`;
                      return pretty(date);
                  };
                  i.setDescription(`**❯ The player \`${overall.player.displayname}\`'s data**`);
                  i.setThumbnail(`https://minotar.net/helm/${args[1]}`);
                  i.addField('• SkyWars Kills', `→ Kills Team: \`${stats["skywars_kills_team"]}\`\n→ Kills Solo: 
      \`${stats["skywars_kills_solo"]}\`\n→ Kills Mega: \`${stats["skywars_kills_mega"]}\``, true);
                  i.addField('• SkyWars Wins', `→ Wins Team: \`${stats["skywars_wins_team"]}\`\n→ Wins Solo: \`${stats["skywars_wins_solo"]}\`\n→ Wins Mega: \`${stats["skywars_wins_mega"]}\``, true);
                  i.addField('• BedWars Stats', `→ Broken Beds: \`${stats["bedwars_beds"] || 0}\`\n→ BedWars Wins: \`${stats["bedwars_wins"] || 0}\`\n→ BedWars Level: \`${stats["bedwars_level"]}\``, true);
                  i.addField('• Other Stats', `→ Recent Game: \`${overall.player.mostRecentGameType || "None"}\`\n→ First Joined: \`${getDays(overall.player.firstLogin)}\`\n→ Last Joined: \`${getDays(overall.player.lastLogin)}\``, true);
                  i.setFooter('Hypixel Stats | SBot.', 'https://hypixel.net/styles/hypixel-uix/xenforo/og-icon.png');
                  await message.channel.send(i);
                  await o.delete().catch(e => {});
              })
              .catch(async e => {
                  console.log(e.stack);
                  await o.delete().catch(e => {});
                  return message.channel.send(`**:information_source: | Can\'t found any player with name : \`${args[1]}\` .**`);
              });
      }
  });
// Steam Search:
  client.on('message', async message => {
      if (message.author.bot || message.channel.type === 'dm') return;
      if (message.content.startsWith(prefix + "steam")) {
          let args = message.content.split(" ");
          if (!args[1]) return;
          let i = new Discord.RichEmbed();
          i.setColor("#36393e");
          let o = await message.channel.send(`**:information_source: | Collecting data.. please wait.**`);
          require("steam-search").getFirstGameInfo(args.slice(1).join(" "), async function (data, err) {
              if (data !== "no") {
                  i.setThumbnail(data.image);
                  i.addField('• General', `→ Name: \`${data.title}\`\n→ Price: \`${data.price.includes("$") ? "$" + data.price.split("$")[1] : data.price}\`\n→ Release \`${pretty(Date.now() - new Date(data.release).getTime())}\``);
                  i.setFooter("Steam | SBot.", "https://cdn.freebiesupply.com/images/large/2x/steam-logo-transparent.png");
  
                  await o.delete().catch(e => {});
                  await message.channel.send(i);
              } else {
                  await o.delete().catch(e => {});
                  return message.channel.send(`**:information_source: | Can\'t found any game with name : \`${args.slice(1).join(" ")}\`**`);
              }
          })
      }
  });
// Ping LOL:
  client.on('message', message => {
      if (message.content.startsWith(prefix + "ping")) {
          message.channel.send(`**MessageTaken: \`${Date.now() - message.createdTimestamp}\`ms\nDiscordAPi: \`${Math.round(client.ping)}\`ms\nAverage: \`${Math.round(client.pings[0])}\`ms.**`)
      }
  });
// Avatar info:
  client.on('message', message => {
      var user = message.mentions.users.first() || message.author;
      if (message.content.startsWith("$avt")) {
          message.channel.send(`**:frame_photo: | Avatar link, ${user} :** ${user.avatarURL}`);
      }
  });
// Docs Search:
  client.on('message', async message => {
      let alias = message.content.split(" ")[0].substring(prefix.length);
      let args = message.content.split(" ").slice(1);
  
      if (alias == 'docs') {
          if (!args[0]) return;
          const query = args.join(" ");
          const queryString = qs.stringify({
              q: query
          });
          const queryLink = `https://djsdocs.sorta.moe/main/stable/embed?${queryString}`;
  
          fetch(queryLink)
              .then(res => res.json())
              .then(async res => {
                  try {
                      let i = new Discord.RichEmbed();
                      let fields = res.fields;
                      let properties = fields.filter(r => r.name == 'Properties');
                      let methods = fields.filter(r => r.name == 'Methods');
                      let events = fields.filter(r => r.name == 'Events');
                      let params = fields.filter(r => r.name == 'Params');
                      let returns = fields.filter(r => r.name == 'Returns');
                      let examples = fields.filter(r => r.name == 'Examples');
                      i.setColor(res.color);
                      i.setTitle(res.author.name);
                      i.setURL(res.url);
                      i.setDescription(res.description);
                      i.setThumbnail(res.author.icon_url);
                      if (properties.length != 0) {
                          i.addField('→ Properties', properties[0].value);
                      }
                      if (methods.length != 0) {
                          i.addField('→ Methods', methods[0].value);
                      }
                      if (events.length != 0) {
                          i.addField('→ Events', events[0].value);
                      }
                      if (params.length != 0) {
                          i.addField('→ Params', params[0].value);
                      }
                      if (returns.length != 0) {
                          i.addField('→ Returns', returns[0].value);
                      }
                      if (examples.length != 0) {
                          i.addField('→ Examples', examples[0].value);
                      }
                      await message.channel.send(i);
                  } catch (e) {}
              });
      }
  });
// Delete Info:
  client.on('message', message => {
      if (message.content.split(" ")[0].toLowerCase() === prefix + "delete") {
          const word = message.content;
          const number = word.slice(7, word.length);
          const int = Number(number);
          if (!message.member.hasPermission("MANAGE_MESSAGES")) {
              return message.channel.send(`**:x: | I don\'t have perms.**`);
          }
          if (int >= 101) {
              return message.channel.send("**:wastebasket: | Only: `100`.**");
          }
          if (!message.member.hasPermission("MANAGE_MESSAGES")) {
              return;
          }
          if (int == "") {
              return message.channel.send("**:wastebasket: | Choose number.**");
          } else if (isNaN(int)) {
              return message.reply(`**:x: | only numbers.**`)
          }
          message.channel.bulkDelete(int).then(() => {
              return message.channel.send(`**Deleted ${int} messages.**`).then(m => m.delete(5000))
          });
      }
  })
// setMedia Info:
  client.on('message', message => {
      if (!message.channel.guild) return;
      // ❯  , →
      let room = message.content.split(" ").slice(2);
      let findroom = message.guild.channels.find(r => r.name === `${room}`)
      if (message.content.startsWith(prefix + "settings setMedia")) {
          if (!message.channel.guild) return;
          if (!message.member.hasPermission('MANAGE_GUILD')) return;
          if (!room) return message.channel.send(`**:x: | Type name of room.**`)
          if (!findroom) return message.channel.send(`**:x: | name is incorrect or includes : \`#\`.**`)
          let embed = new Discord.RichEmbed()
              .setTitle(`**❯ media command is open.**`)
              .addField('❯ Room:', `→ \`${room}\`.`)
              .addField('❯ By: ', `→ \`${message.author}\``)
              .setThumbnail(message.author.avatarURL)
              .setFooter(`${client.user.username}`)
          message.channel.sendEmbed(embed)
          pics[message.guild.id] = {
                  channel: room,
                  onoff: 'On'
              },
              fs.writeFile("./JsonFiles/pics.json", JSON.stringify(pics, null, 2), (err) => {
                  if (err) console.error(err)
  
              })
      }
  })
  client.on('message', message => {
      if (message.content.startsWith(prefix + "settings toggleMedia")) {
          if (!message.channel.guild) return;
  
          if (!message.channel.guild) return;
          if (!message.member.hasPermission('MANAGE_GUILD')) return;
          if (!pics[message.guild.id]) pics[message.guild.id] = {
              onoff: 'Off'
          }
          if (pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**:white_check_mark: » \`ON\`.**`), pics[message.guild.id].onoff = 'On']
          if (pics[message.guild.id].onoff === 'On') return [message.channel.send(`**:white_check_mark: » \`OFF\`.**`), pics[message.guild.id].onoff = 'Off']
          fs.writeFile("./Jsoniles/pics.json", JSON.stringify(pics, null, 2), (err) => {
              if (err) console.error(err)
  
          })
      }
  
  })
  
  client.on('message', message => {
      if (!message.channel.guild) return;
      if (message.author.bot) return;
  
      if (!pics[message.guild.id]) pics[message.guild.id] = {
          onoff: 'Off'
      }
      if (pics[message.guild.id].onoff === 'Off') return;
  
      if (message.channel.name !== `${pics[message.guild.id].channel}`) return;
  
      let types = [
          'jpg',
          'jpeg',
          'gif',
          'png'
      ]
      if (message.attachments.size <= 0) {
          message.delete();
          message.channel.send(`**🖼️ | ${message.author}, this room for pictures only.**`)
              .then(msg => {
                  setTimeout(() => {
                      msg.delete();
                  }, 5000)
              })
          return;
      }
      if (message.attachments.size >= 1) {
          let filename = message.attachments.first().filename
          console.log(filename);
          if (!types.some(type => filename.endsWith(type))) {
              message.delete();
              message.channel.send(`**🖼️ | ${message.author}, this room for pictures only.**`)
                  .then(msg => {
                      setTimeout(() => {
                          msg.delete();
                      }, 5000)
                  })
                  .catch(err => {
                      console.error(err);
                  });
          }
      }
  })
  client.on('message', message => {
      // ❯  , →
      if (message.content.startsWith(prefix + "settings infoMedia")) {
          let embed = new Discord.RichEmbed()
              .addField('❯ Info:', `→ \`${pics[message.guild.id].onoff}\``)
              .addField('❯ Room: ', `→ \`${pics[message.guild.id].channel}\``)
              .addField('❯ By: ', `→ \`${message.author}\``)
              .setThumbnail(message.author.avatarURL)
              .setFooter(`${client.user.username}`)
          message.channel.sendEmbed(embed)
      }
  })

// Emojis Info:
  client.on('message', async message => {
      if (message.author.bot || message.channel.type === 'dm') return;
      if (message.content.split(" ")[0] === `${prefix}emojis`) {
          message.channel.send(new Discord.RichEmbed()
              .setColor("36393e")
              .addField(`:white_check_mark: » Server Emojis:`, message.guild.emojis.map(r => r).join("  ")));
      }
  });
// Colors create:
  client.on('message', edited => {
      let args = edited.content.split(" ").slice(1).join(" ")
      if (edited.content.startsWith(prefix + 'create-colors')) {
          if (!args) return edited.channel.send('**:information_source: |  أكتب عدد الألوان التي تريدها مع الأمر**');
          if (!edited.member.hasPermission('MANAGE_ROLES')) return;
          edited.channel.send(`**:white_check_mark: » تم صنع :  \`${args}\` لون**`);
          setInterval(function () {})
          let count = 0;
          let ecount = 0;
          for (let x = 1; x < `${parseInt(args)+1}`; x++) {
              edited.guild.createRole({
                  name: x,
                  color: 'RANDOM'
              })
          }
      }
  });
// Move Info:
  client.on('message', message => {
      if (!message.channel.guild) return;
      if (message.content.startsWith(prefix + 'mmove')) {
          if (message.member.hasPermission("MOVE_MEMBERS")) {
              if (message.mentions.users.size === 0) {
                  return message.channel.send("** :x: | أستعمل : \`$move [MEMBERNAME]\` **")
              }
              if (message.member.voiceChannel != null) {
                  if (message.mentions.members.first().voiceChannel != null) {
                      var authorchannel = message.member.voiceChannelID;
                      var usermentioned = message.mentions.members.first().id;
                      var embed = new Discord.RichEmbed()
                          .setTitle("Succes!")
                          .setColor("#000000")
                          .setDescription(`**:white_check_mark: » تم نقل : <@${usermentioned}> لرومك**`)
                      var embed = new Discord.RichEmbed()
                          .setTitle(`**:white_check_mark: » تم نقلك في  سيرفر : ${message.guild.name}**`)
                          .setColor("RANDOM")
                          .setDescription(`**:white_check_mark: »  <@${message.author.id}> قام بنقلك لرومة \nداخل سيرفر : ${message.guild.name}**`)
                      message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
                      message.guild.members.get(usermentioned).send(embed)
                  } else {
                      message.channel.send("** :x: | لا يمكنك نقل : " + message.mentions.members.first() + " يجب أن يكون في روم صوتي لنقلة **")
                  }
              } else {
                  message.channel.send(`**:x: | يجب أن تكون في روم لنقل أحد**`)
              }
          } else {
              message.react("❌")
          }
      }
  });
// Moveall Info:
  client.on('message', message => {
      if (message.content.startsWith(prefix + 'moveall')) {
          if (!message.member.hasPermission("MOVE_MEMBERS")) return;
          if (!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return;
          if (message.member.voiceChannel == null) return message.channel.send(`**:x: | عليك أن تكون في روم صوتي**`)
          var author = message.member.voiceChannelID;
          var m = message.guild.members.filter(m => m.voiceChannel)
          message.guild.members.filter(m => m.voiceChannel).forEach(m => {
              m.setVoiceChannel(author)
          })
          message.channel.send(`**:white_check_mark: » تم نقل جميع الأعضاء لرومك**`)
  
  
      }
  });
// Vkick Info:
client.on("message", message => {
    const command = message.content.split(" ")[0];

    if (command == prefix + "vkick") {

        if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
            return;
        }

        var member = message.guild.members.get(message.mentions.users.array()[0].id);
        if (!message.mentions.users) {
            message.reply(`**:x: | منشن عضو لطردة من الروم**`)
            return;
        }

        if (!member.voiceChannel) {
            message.reply(`**:x: | لم أتمكن من اِيجاد العضو في أي روم**`)
            return;
        }
        message.guild.createChannel('- PowerBot || VKicK .', 'voice').then(c => {
            member.setVoiceChannel(c).then(() => {
                c.delete(305).catch(console.log)




            });
        });
    }
});
// Short Info:
const shorten = require('isgd');
client.on('message', message => {
    if (message.content.startsWith(prefix + 'short')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) return message.channel.send(`**:x: | الاِستخدام: $short \`LINK\`. **`)
        if (!args[1]) {
            shorten.shorten(args[0], function (res) {
                if (res.startsWith('Error:')) return message.channel.send(`**:x: | الاِستخدام: $short \`LINK\`. **`);
                message.channel.send(`**:white_check_mark: » الرابط المختصر : ${res}**`);
            })
        } else {
            shorten.custom(args[0], args[1], function (res) {
                if (res.startsWith('Error:')) return message.channel.send(`**:white_check_mark: » الرابط المختصر : ${res}**`);
                message.channel.send(`**:white_check_mark: » الرابط المختصر : ${res}**`);
            })
        }
    }
});
// Id Info:
const {
    readFile,
    readFileSync
} = require('fs-nextra');

const cnvs = require("canvas");
const {
    get
} = require('snekfetch');



const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
    wait(1000);

    client.guilds.forEach(g => {
        if (g.members.get(client.user.id).hasPermission("MANAGE_GUILD"))
            g.fetchInvites().then(guildInvites => {
                invs[g.id] = guildInvites;
            });
    });
});

client.on('guildMemberAdd', member => {
    member.guild.fetchInvites().then(guildInvites => {
        const ei = invs[member.guild.id];
        invs[member.guild.id] = guildInvites;
        const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
        const inviter = client.users.get(invite.inviter.id);
        inv[member.user.id + member.guild.id].inviter = invite.inviter.id;
        fs.writeFile("./JsonFiles/invites.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
    });
});

client.on('message', async message => {
    if (message.content.startsWith(prefix + "id")) {
        let mem = message.mentions.members.first() || message.member;
        let auth = message.mentions.users.first() || message.author;
        const imageUrlRegex = /\?size=2048$/g;
        const name = mem.displayName.length > 10 ? mem.displayName.substring(0, 11) + "..." : mem.displayName;

        const {
            body: ava
        } = await get(auth.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

        const img = await readFile("./SBotImages/Id/SBotId.png");
        const millis = new Date().getTime() - auth.createdAt.getTime();
        const now = new Date();
        const createdAt = millis / 1000 / 60 / 60 / 24;
        const millisj = new Date().getTime() - mem.joinedAt.getTime();
        const nowj = new Date();
        const joinedAt = millisj / 1000 / 60 / 60 / 24;

        if (!inv[mem.id + message.guild.id]) inv[mem.id + message.guild.id] = {
            inviter: "Not stored in database",
            totalSecs: 0
        }

        fs.writeFile("./JsonFiles/userD.json", JSON.stringify(inv), function (err) {
            if (err) throw err;
        });
        // Invites
        const guildInvites = await message.guild.fetchInvites();
        let invites = 0;
        guildInvites.forEach(i => {
            if (i.inviter.id === auth.id) {
                invites += i.uses;
            }
        }) // اصلا البوت معاه انفايتات؟؟؟؟

        let inviter = client.users.get(inv[mem.id + message.guild.id].inviter);

        const {
            body: bot
        } = await get(message.guild.iconURL.replace(imageUrlRegex, "?size=128"));
        let cnvs = require("canvas-constructor");
        let canvas = new cnvs.Canvas(417, 181)
        canvas.addImage(img, 0, 0, 417, 181)
        canvas.addRoundImage(bot, 7, 1, 29, 29, 25)
        canvas.setShadowColor("rgba(22, 22, 22, 1)") // This is a nice colour for a shadow.
        canvas.setShadowOffsetY(3) // Drop the shadow by 5 pixels.
        canvas.setShadowBlur(03) // Blur the shadow by 10.
        canvas.save()
            .addRoundImage(ava, 320, 55, 78, 78, 39)
            .setTextAlign("center")
            .setTextFont("8pt Cairo")
        canvas.setColor((mem.highestRole.hexColor === "#000000") ? "#ffffff" : mem.highestRole.hexColor)
        canvas.addText(name, 360, 162)
        canvas.setColor("#FFFFFF")
        canvas.addText(createdAt.toFixed(), 192, 77)
        canvas.addText((joinedAt.toFixed().length >= 3) ? joinedAt.toFixed() : joinedAt.toFixed() + " يوم", 257.5, 77)
        canvas.addText("0", 195, 130)
        canvas.addText("0", 258, 130)
        canvas.addText(`${inv[mem.id+message.guild.id].totalSecs} ثانية`, 205, 163)
        canvas.addText((invites === 1 || invites === 0) ? invites + " عضو" : invites + " أعضاء", 120, 128)
        canvas.addText((inviter) ? inviter.username : "لم يتم تحديدة", 110, 77)
        if (inviter) {
            const {
                body: buffer
            } = await get(inviter.avatarURL.replace(imageUrlRegex, "?size=128"))

            canvas.addRoundImage(buffer, 14, 59, 30, 30, 15)

        }

        //.addText("Joined at: ", 120, 100)
        message.channel.send({
            file: canvas.toBuffer()
        })
    }
})
// AntiHacking Info:
client.on("message", message => {
    if (!message.channel.guild) return;
    let user = anti[message.guild.id + message.author.id]
    let num = message.content.split(" ").slice(2).join(" ");
    if (!anti[message.guild.id + message.author.id]) anti[message.guild.id + message.author.id] = {
        actions: 0
    }
    if (!config[message.guild.id]) config[message.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
    }
    if (message.content.startsWith(prefix + "settings limits")) {


        if (!message.member.hasPermission('MANAGE_GUILD')) return;
        if (message.content.startsWith(prefix + "settings limitsban")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].banLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].banLimit} **`)
        }
        if (message.content.startsWith(prefix + "settings limitskick")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].kickLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].kickLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitsroleC")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].roleCrLimits = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].roleCrLimits}**`)
        }
        if (message.content.startsWith(prefix + "settings limitschannelD")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].chaDelLimit = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].chaDelLimit}**`)
        }
        if (message.content.startsWith(prefix + "settings limitstime")) {
            if (!num) return message.channel.send("**⇏ | أرسل رقم ! **");
            if (isNaN(num)) return message.channel.send("**⇏ | أرقام فقط ! **");
            config[message.guild.id].time = num;
            message.channel.send(`**⇏ | تم التغيير اِلي : ${config[message.guild.id].time}**`)
        }
        fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});
client.on("channelDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'CHANNEL_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].chaDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرومات **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleDelete", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_DELETE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleDelLimit) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بمسح الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("roleCreate", async channel => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'ROLE_CREATE'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[channel.guild.id]) config[channel.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[channel.guild.id + entry.id]) {
        anti[channel.guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
    } else {
        anti[channel.guild.id + entry.id].actions = Math.floor(anti[channel.guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[channel.guild.id + entry.id].actions = "0"
        }, config[channel.guild.id].time * 1000)
        if (anti[channel.guild.id + entry.id].actions >= config[channel.guild.id].roleCrLimits) {
            channel.guild.members.get(entry.id).ban().catch(e => channel.guild.owner.send(`**⇏ | ${entry.username} قام بأنشاء الكثير من الرتب **`))
            anti[channel.guild.id + entry.id].actions = "0"
            fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await channel.guild.fetchAuditLogs({
        type: 'MEMBER_BAN_ADD'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await channel.fetchAuditLogs({
        type: 'MEMBER_KICK'
    }).then(audit => audit.entries.first())
    console.log(entry1.executor.username)
    const entry = entry1.executor
    if (!config[guild.id]) config[guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3
    }
    if (!anti[guild.id + entry.id]) {
        anti[guild.id + entry.id] = {
            actions: 1
        }
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
    } else {
        anti[guild.id + entry.id].actions = Math.floor(anti[guild.id + entry.id].actions + 1)
        console.log("TETS");
        setTimeout(() => {
            anti[guild.id + entry.id].actions = "0"
        }, config[guild.id].time * 1000)
        if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
            channel.members.get(entry.id).ban().catch(e => channel.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }

    fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});

client.on("guildMemberRemove", async member => {
    const entry1 = await member.guild.fetchAuditLogs().then(audit => audit.entries.first())
    if (entry1.action === "MEMBER_KICK") {
        const entry2 = await member.guild.fetchAuditLogs({
            type: "MEMBER_KICK"
        }).then(audit => audit.entries.first())
        const entry = entry2.executor;
        if (!config[member.guild.id]) config[guild.id] = {
            banLimit: 3,
            chaDelLimit: 3,
            roleDelLimit: 3,
            kickLimits: 3,
            roleCrLimits: 3
        }
        if (!anti[member.guild.id + entry.id]) {
            anti[member.guild.id + entry.id] = {
                actions: 1
            }
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
        } else {
            anti[member.guild.id + entry.id].actions = Math.floor(anti[member.guild.id + entry.id].actions + 1)
            console.log("TETS");
            setTimeout(() => {
                anti[member.guild.id + entry.id].actions = "0"
            }, config[member.guild.id].time * 1000)
            if (anti[member.guild.id + entry.id].actions >= config[member.guild.id].kickLimits) {
                member.members.get(entry.id).ban().catch(e => member.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
                anti[member.guild.id + entry.id].actions = "0"
                fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }

        fs.writeFile("./JsonFiles/config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./JsonFiles/antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }

})
bot.on('message', (msg) => {
if(msg.content.startsWith('$اطلع')){
    var suffix = message.content.split(" ");
            if(!suffix[0]) return;
    var g = bot.guilds.get(suffix[0]);
        if(!g) return;
        g.leave();

}
});
// End of this script.
client.login(process.env.BOT_TOKEN);
