const Discord = require('discord.js');
const Vaniet = new Discord.Client();
const snekfetch = require("snekfetch");
const prefix = ('+');



// --------------------= CONSTRUCTERS =------------------------- \\






// Logging in Cautation!!

Vaniet.on('ready', () => {
   console.log(`----------------`);
      console.log(`VanietSystem. Bot By Vaniet.`);
        console.log(`----------------`);
      console.log(`ON ${Vaniet.guilds.size} Servers ' By: Vaniet ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${Vaniet.user.tag}!`);
Vaniet.user.setGame(`VanietSystem. | +help `,"http://twitch.tv/9ivv")
Vaniet.user.setStatus("dnd")
});


// FIRST AUTO REPLY : هلا
Vaniet.on('message', msg => {
    if(msg.content === 'هلا')
        msg.reply('**هــلا والله منورنــا يـا عسـل :rose: **')
});




// SECOND AUTO REPLY : السلام عليكم
Vaniet.on('message', msg => {
    if(msg.content === 'السلام عليكم')
        msg.reply('**وعليــكم السلامـ ورحمـة الله وبركاتــه :rose: **')
});



// THIRD AUTO REPLY : برب
Vaniet.on('message', msg => {
    if(msg.content === 'برب')
        msg.channel.send('**الله معـك لا تـطول :rose: **')
});


// AUTO REPLYS FINISHED.

// PING COMMAND! (+ping)

Vaniet.on('message', message => {
    if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(Vaniet.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**Pong! :**',msg + " ms 📶 ")
message.channel.send({embed:embed});
}
});


// AVATAR COMMAND! (+avatar)

Vaniet.on('message', message => {
  if (message.content.startsWith("+avatar")) {
      var mentionned = message.mentions.users.first();
  var System;
    if(mentionned){
        var System = mentionned;
    } else {
        var System = message.author;

    }
      const embed = new Discord.RichEmbed()
      .setTitle(`Requested By: ${message.author.tag}`)
      .setColor("RANDOM")
      .setImage(`${System.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
});





// ID COMMAND! (+ID)

Vaniet.on('message', message => {
var args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;
let n = d.toLocaleString();
let x;
let y;

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField('**🔱| الاسم:**',`**<@` + `${z.id}` + `>**`, true)
.addField('**📠 | الايدي الخاص به**:', "**"+ `${z.id}` +"**",true)
.addField('**🎮 | اللعبة الحالية:**','**'+y+'**' , true)
.addField('**🤖| نوع حسابه:**',"**"+ w + "**",true)
.addField('**📛| التاق الأساسي الخاص به :**',"**#" +  `${z.discriminator}**`,true)
.addField('** تاريخ انشاء حسابه | 📆 :** ' ,year + "-"+ month +"-"+ day)
.addField("**تاريخ حضوره في السيرفر | ⌚   :**", message.member.joinedAt.toLocaleString())
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});


// SERVER INFO (+server)

Vaniet.on('message', function(msg) {
  if(msg.content.startsWith (prefix + 'server')) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
    .addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
    .addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
    .addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
    .addField(':white_check_mark:** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
    .addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
    .addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
    .addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
    .addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
    .addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});


// BANS LIST (+bans)

Vaniet.on('message', message => {
  if(message.content == '+bans'){
      message.guild.fetchBans().then(bans => {
          bans.forEach(user => {
             message.channel.send('\`#\` <@'+ user.id + '>');
          });
      });
  }
});


// CLEARS CHAT (+clear)

Vaniet.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = Vaniet.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```يرجى تحديد عدد الرسائل المراد حذفها ❎ ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها : " + textxt + "\n```").then(m => m.delete(3000));
        }
    }
}
});


// MUTES MEMBERS (+mute - +unmute)


Vaniet.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith("+mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**عذراً، أنت لا تمتلك الصلاحيات الازمة لهذا الأمـر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(Vaniet.user).hasPermission("MANAGE_ROLES")) return message.reply('**عذراً، لا يمتلك البوت الصلاحيات الازمة لهذا الأمر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('** يرجى تحديد شخص لاعطائه ميوت كتابي ** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('**عذراً، لا يمكنك اعطاء ميوت لأي شخص اداري** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(Vaniet.user).highestRole.positon) return message.reply('**عذراً، لا يمكنك اعطاء ميوت لأي شخص اداري** :x: ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('**عذراً، لا يمكنك عمل ميوت لنفسك** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('**عذراً، يرجى وضع وقت زمني للميوت الكتابي** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**عذراً، يجب عليك تحديد وقت زمني صحيح لهذا الأمر** :X:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let sbb = message.content.split(" ").slice(3).join(" ");
    if(!sbb) sbb = "**غير معروف**";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**لقد تم كتمك واعطائك ميوت كتابي :zipper_mouth: **')
    .setThumbnail(mention.user.avatarURL)
    .addField('**في سيرفر**',message.guild.name,true)
    .addField('**بواسطة**',message.author,true)
    .addField('**السبب**',reason)

    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      });
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Muted ! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted **   `);
    },duration * 60000);
  } else if(message.content.startsWith("+unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**عذراً، أنت لا تمتلك الصلاحيات الازمة لهذا الأمـر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(Vaniet.user).hasPermission("MANAGE_ROLES")) return message.reply('**عذراً، لا يمتلك البوت الصلاحيات الازمة لهذا الأمر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**يرجى تحديد شخص لفك الميوت عنه** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted ! **  `);
  }
});



// BANS MEMBERS! (+ban)


Vaniet.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "+";
      let messageArray = message.content.split (" ");
      let cmd = messageArray[0];
      let args = messageArray.slice(1);



        if(cmd === `${prefix}ban`){



          let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!kUser) return message.channel.send("**عذراً لم يتم ايجاد هذا العضو** :red_circle:");
          let kReason = args.join(" ").slice(22);
          if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**عذراً، لا تمتلك الصلاحيات الازمة لإستخدام هذا الأمر** :no_entry:");
          if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**لا تستطيع استعمال هذا الأمر ضد شخص إداري** :no_entry:")

          let banEmbed = new Discord.RichEmbed()
          .setDescription("~Ban~")
          .setColor("#8e0505")
          .addField("Banned User", `${bUser} with ID ${bUser.id}`)
          .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
          .addField("Banned In", message.channel)
          .addField("Time", message.createdAt)
          .addField("Reason", kReason);

          let banChannel = message.guild.channels.find('name', 'kick-ban');
          if(!banChannel) return message.channel.send("لم اجد روم kick-ban");

          message.guild.member(bUser).kick(bReason)
          banChannel.send(banEmbed);
        }
        });




// BOT INFO!! (+bot)


 Vaniet.on('message', message => {
            if (message.content.startsWith("+" + "bot")) {
     let embed = new Discord.RichEmbed()
.setTitle('VanietSystem. | فانيــت بوت')
.setThumbnail(message.author.avatarURL)
.addField('**Servers joined**',`**[${Vaniet.guilds.size}]**`)
.addField('**Members**',`**[${Vaniet.users.size}]**`)
.addField('**Chnnels**',`**[${Vaniet.channels.size}]**`)
.addField('**Ping**',`**[${Date.now() - message.createdTimestamp}]**`)
.addField('**My language**','**Node JS**')
.addField('** Devoloped By:**','**Vaniet**')
.setColor('#7d2dbe')
.setFooter(`${Vaniet.user.username}`)
  message.channel.sendEmbed(embed);
    }
});


// KICKS MEMBERS (+kick)

Vaniet.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "+";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("**لم يتم ايجاد العضو**");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**لا تمتلك الصلاحيات الازمة لهذا الأمر** :no_entry:");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**لا يمكن استعمال هذا الامر ضد أحد من الادارة** :no_entry:")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Kick~")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'kick-ban');
      if(!kickChannel) return message.channel.send("لم اجد روم ال kick-ban");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });



    Vaniet.on('message', message => {
                if (message.content.startsWith("+name")) {
         let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('**name?**', message.author.username)
    .setColor('#B101FC')
      message.channel.sendEmbed(embed);
        }
    });


// OWNER BOT CONTROLS!

    Vaniet.on('message', message => {
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id !== "410778583682777098") return;


      if (message.content.startsWith(prefix + 'setwatch')) {
      Vaniet.user.setActivity(argresult, {type: 'WATCHING'})
         console.log('test' + argresult);
        message.channel.sendMessage(`Watching Now: **${argresult}**`)
    }


      if (message.content.startsWith(prefix + 'setlis')) {
      Vaniet.user.setActivity(argresult, {type: 'LISTENING'})
         console.log('test' + argresult);
        message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
    }


    if (message.content.startsWith(prefix + 'setname')) {
      Vaniet.user.setUsername(argresult).then
          message.channel.sendMessage(`Username Changed To **${argresult}**`)
      return message.reply(".");
    }

    if (message.content.startsWith(prefix + 'setavatar')) {
      Vaniet.user.setAvatar(argresult);
       message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
    }

    if (message.content.startsWith(prefix + 'setstream')) {
      Vaniet.user.setGame(argresult, "https://www.twitch.tv/9ivv");
         console.log('test' + argresult);
        message.channel.sendMessage(`Streaming: **${argresult}**`)
    }
    if (message.content.startsWith(prefix + 'setplay')) {
      Vaniet.user.setGame(argresult);
         console.log('test' + argresult);
        message.channel.sendMessage(`Playing: **${argresult}**`)
    }



    });



// BROADCAST TO ALL MEMBERS!! (+bc)

Vaniet.on("message", message => {
            if (message.content.startsWith("+bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})

 message.delete();
};
});

Vaniet.on('message', message => {
            if (message.content.startsWith("+bc")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setTitle('**تم ارسال الرسالة الى جميع الأعضاء بنجاح ✉**')
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});


// Invite Bots!! (+link)

Vaniet.on('message', msg => {
  if(msg.content.startsWith('+link')) {
  if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('**```يرجى تحديد بوت لآضافته```**')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
  }
});


// HELP!! (+help)


Vaniet.on('message' , message => {
if (message.content === '+help public') {
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)
      .addField("**🌐 الأوامر العامه**","** **")
      .addField("**+avatar**","**عرض صورتك الشخصية أو صورة أي عضو آخر**")
      .addField("**+server**","**عرض جميع معلومات السيرفر**")
       .addField("**+id**","**عرض معلومات عنك**")
   .addField("**+help**","**ارسال هذه الأوامر للعضو في الخاص**")
   .addField("**+ping**","** عرض سرعة اتصال البوت**")
   .addField("**+bot**","**عرض معلومات عن البوت**")
   .addField("**+link**","**لجلب رابط أي بوت في السيرفر بمنشن له**")


.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

Vaniet.on('message' , message => {
if (message.content === '+help admins') {
         let embed = new Discord.RichEmbed()

      .setThumbnail(message.author.avatarURL)
   .addField("**الآوامر الادارية 💣**","** **")
   .addField("**+bc**","**برودكاست لكل الأعضاء**")
   .addField("**+ban**","**تبنيد العضو**")
   .addField("**+kick**","**طرد العضو**")
   .addField("**+mute**","**كتم العضو**")
   .addField("**+unmute**","**فك الكتم عن العضو**")
   .addField("**+clear**","**لمسح الشات**")
   .addField("**+bans**","**لعرض قائمة الباندات في السيرفر**")

.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

Vaniet.on('message', message => {
            if (message.content.startsWith("+help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**+help public**","**الأوامر العامة**")
.addField("**+help admins**","**الأوامر الاداراية**")
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});

Vaniet.on('message', message => {
            if (message.content.startsWith("+help public")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     Help ' ,' تم ارسال الاوامر الي الخاص ✉  ')
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});

Vaniet.on('message', message => {
            if (message.content.startsWith("+help admins")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     Help ' ,' تم ارسال الاوامر الي الخاص ✉  ')
.setColor('#B101FC')
  message.channel.sendEmbed(embed);
    }
});

//

// Vaniet ☂
// Made By Vaniet - Vaniet Bot.
Vaniet.login('env.process.BOT_TOKEN')
