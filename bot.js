const Discord = require('discord.js');
const client = new Discord.Client();
const translate = require('google-translate-api');
var prefix = "!" ; // البرفكس


// translate


  client.on('message', message => {
    if (message.content.startsWith("!translate")) {


    let toTrans = message.content.split(' ').slice(1);
    let language;

    language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
    if (!language) {
        return message.reply(`**من فضلك قم باستخدام . \`$tr [الكلمه] to [اللغه]\`**`);
    }
    let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
    translate(finalToTrans, {to: language}).then(res => {
            message.channel.send({embed: {
                color: 3447003,
                author: {
                  name: 'S Bot translate',
                  icon_url: client.user.avatarURL
                },
                fields: [{
                    name: "S Bot",
                    value: `**من:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**الي: **${language}\n\`\`\`${res.text}\`\`\``
                  }
                ],
                timestamp: new Date(),
                footer: {
                  icon_url: client.user.avatarURL,
                  text: "S Bot"
                }
              }
            });
    }).catch(err => {
        message.channel.send({
            embed: {
                description: '❌  لم استطيع العثور علي اللغة المطلوبه',
                color: 0xE8642B
            }
        });
    });
    }
});



client.on('ready', () => {
  console.log('I am ready!');
});



// الرد التلقائي

client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام ورحمة الله وبركاته ** :rose:');
  }
});

client.on('message', msg => {
  if (msg.content === 'مين النرم؟') {
    msg.channel.send('**أحلــى نرم دا ولا ايه -> e2k :eggplant:**')
  }
});

/// !server

client.on('message', function(msg) {
  if(msg.content.startsWith ('!server')) {
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
    .addField('** Night Bot Creator :robot:**', '**! Vaniet**')
    msg.channel.send({embed:embed});
  }
});




/// !mutechannel / !unmutechannel

client.on('message', message => {

    if (message.content === "!mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك أي صلاحيات لاستعمال هذا الامر** :no_entry:');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("**تم تقفيل الشات** ✅ ")
           });
             }

if (message.content === "!unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**ليس لديك أي صلاحيات لاستعمال هذا الامر** :no_entry:');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("** تم فتـح الشات ** ✅")
           });
             }



});




/// !autoc

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
if(!prefix) var prefix = "!" ; // البرفكس

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`**لم يتم وجود رتبة بهذا الاسم ${definedRoleName} **`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("**هناك من يقوم باستعمال الميزة حالياً يرجى الانتظار**");
      message.channel.send(`** تم بنجاح، الآن يرجى التصويت للحصول على رتبة :white_check_mark: ** ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`**عذراً لا استطيع استعمال هذا الايموجي، يرجى التأكد من ان الايموجي من نظام الدسكورد الثابت**`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});





/// !ping
client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith('!ping')) {
if(!message.channel.guild) return;
var msg = `${Date.now() - message.createdTimestamp}`
var api = `${Math.round(client.ping)}`
if (message.author.bot) return;
let embed = new Discord.RichEmbed()
.setAuthor(message.author.username,message.author.avatarURL)
.setColor('RANDOM')
.addField('**My Ping :D:**',msg + " ms 📶 ")
message.channel.send({embed:embed});
}
});



// !members

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!members')
      var night = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| **حالة الأعضاء**')
      .addBlankField(true)
      .addField('📗| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField('📕| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField('📙| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField('📓| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('➡| Server Members',`${message.guild.memberCount}`)
      message.channel.send(night);

    });



// !bc

client.on("message", message => {
            if (message.content.startsWith("!bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' ');
  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` 💌 **: عدد الاعضاء المستلمين**`);
 message.delete();
};
});




// !link

client.on('message', message => {
  if (message.content.startsWith("!link")) {

message.channel.createInvite({
      thing: true,
      maxUses: 2,
      maxAge: 86400
  }).then(invite =>
    message.author.sendMessage(invite.url)
  )
message.channel.send("**تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 2**`)


  }
});



// !setstream - !setname - !setavatar - !setlis - !setwatch - !setplay

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "410778583682777098") return;


  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}**`)
}


  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
}


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`تم تغيير الاسم بنجاح الى :white_check_mark:  **${argresult}**`)
}

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`تم تغيير الصورة بنجاح الى :white_check_mark:  **${argresult}**`);
}

if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/9ivv");
     console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}**`)
}
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}**`)
}



});


// !invites

client.on('message', message => {
  var prefix = "!";
  if(message.content.startsWith(prefix + "invites")) {
   message.guild.fetchInvites().then(invs => {
     let user = message.mentions.users.first() || message.author
     let personalInvites = invs.filter(i => i.inviter.id === user.id);
     let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
              let mmmmEmbed = new Discord.RichEmbed()
                        .setAuthor(client.user.username)
                        .setThumbnail(message.author.avatarURL)
.addField(` لقد قمت بدعوة :`, ` ${inviteCount} `)
          .setFooter(`- Requested By: ${message.author.tag}`);
          message.channel.send(mmmmEmbed)
});
 }
});




// !create-colors

client.on('message', vaniet => {
  var prefix = "!";
if (client.content ===  prefix + 'create-colors'){
      if (!client.member.hasPermission('MANAGE_ROLES')) return client.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**');
      client.channel.send("**✅ | يتم عمل الالوان**");
          setInterval(function(){})
            let count = 0;
            let ecount = 0;
  for(let x = 1; x < 141; x++){
    client.guild.createRole({name:x,
      color: 'RANDOM'})
      }
    }
});



// !sendto

  client.on("message", message=> {
  if (message.content.startsWith(prefix + 'sendto')) {
    let filter = m => m.author.id === message.author.id
    let channelBOT = ""
    let messageBOT = ""
    message.channel.send(("", {embed: {
      title: "` ➡ `** Vaniet. : **",
      color: 0x06DF00,
      timestamp: new Date(),
      description:"قم بكتابة ايدي الغرفة",
      footer: {
        icon_url: client.user.avatarURL,
        text: "©    BOT"
      }}
    })).then((messageArray1)=>{
        message.delete(/*  */)
        message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(pop1=>{
          channelBOT = pop1.first(/*  */).toString()
          pop1.first().delete(/*  */)
          messageArray1.delete(/*  */)
          message.channel.send(("", {embed: {
            title: "` ➡ `** Vaniet. : **",
            color: 0x06DF00,
            timestamp: new Date(),
            description:"قم بكتابة الرسالة",
            footer: {
              icon_url: client.user.avatarURL,
              text: "©    BOT"
            }}
          })).then((messageArray2)=>{
            message.channel.awaitMessages(filter ,{max:1,time:30000,error:['time'],} ).then(pop2=>{
              messageBOT = pop2.first(/*  */)
              pop2.first().delete(/*  */)
              messageArray2.delete(/*  */)
            message.guild.channels.find("id",channelBOT).sendMessage(messageBOT.toString())
                })
            })
        })
     })
    }
})

// !avatar

client.on('message', message => {

  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
  }
});



// !report

  client.on("message", message => {
          var prefix = ("!")
          let args = message.content.split(" ").slice(1);
        if (message.content.startsWith(prefix + 'report')) {
              let user = message.mentions.users.first();
              let reason = args.slice(1).join(' ');
              let modlog = client.channels.find('name', 'report');
              if (message.mentions.users.size < 0) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
              if (!reason) return message.reply('**لم يتم اختيار عضو لعمل بلاغ عليه أو انه لم يتم تحديد سبب للبلاغً**');

          if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
          const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setTimestamp()
            .addField('**نوع الرسالة**:', 'Report')
            .addField('**المراد الابلاغ عليه**:', `${user.username}#${user.discriminator} (${user.id}`)
            .addField('**صاحب الابلاغ**:', `${message.author.username}#${message.author.discriminator}`)
            .addField('**السبب**', reason);
            message.delete()
            return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
            console.log('[report] Send By: ' + message.author.username)
        }
        });



// !setIcon

        client.on('message', message => {
            let messageArray = message.content.split(" ");
            let cmd = messageArray[0];
            let args = messageArray.slice(0);
            let prefix = '!';

            if(cmd === `${prefix}setIcon`) {
                if(!args[1].match(/^(jpeg|jpg|png)/)) {
                    message.guild.setIcon(args[1]).then(message.channel.send(`** :white_check_mark: تم تغيير صورة السيرفر بنجاح**`))
                    let embed = new Discord.RichEmbed()
                    .setImage(args[1])
                    .setColor('RANDOM')
                    message.channel.send(embed)
                }
            }
        });



// !rip

client.on('message', message => {
    if (message.content === '!rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});


// !id

client.on("message", msg => {
  if(msg.content === '!' + "id") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
          .addField('🏅| الرتب : ', `${msg.member.roles.filter(r => r.name).size}`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true)
          .addField('🤖| هل هو بوت ؟', `${msg.author.bot.toString().toUpperCase()}`, true);
      msg.channel.send({embed: embed})
  }
});



// !nickname

  client.on("message",  message => {

         let args = message.content.split(' ').slice(1);
    if(message.content.startsWith('!nickname')) {
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) {
            message.channel.send("حط الاسم")
        } else {
            if (!message.guild.member(client.user).hasPermission('MANAGE_NICKNAMES')) return message.reply(' ❌البوت ما عنده خاصية MANAGE_NICKNAMES.').catch(console.error);
            let changenick = message.mentions.users.first();
            let username = args.slice(1).join(' ')
            if (username.length < 1) return message.reply('حط الاسم').catch(console.error);
            if (message.mentions.users.size < 1) return message.author.send('You must mention a user to change their nickname. ❌').catch(console.error);
            message.guild.member(changenick.id).setNickname(username);
            message.channel.send("تم تغيير الاسم الى: " + changenick + "")
        }
    }});


// !user

client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`✮ Members. : ${client.users.size} ☀`);
 },1000);
  });
  }

});


// !invite


client.on('message', msg => {
  if (msg.content === '!invite') {
    msg.channel.send('**عذراً، هذه الميزة غير متوفرة لأن البوت خاص حالياً**');
  }
});



// !mute  -  !unmute

client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('** لا تمتلك الصلاحيات الازمة لاستعمال هذا الأمر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('** لا تمتلك الصلاحيات الازمة لاستعمال هذا الأمر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let mention = message.mentions.members.first();
    if(!mention) return message.reply('** يرجى اختيار شخص لأعطائه ميوت كتابي** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(mention.highestRole.position >= message.guild.member(message.author).highestRole.positon) return message.reply('** لا يمكن اعطاء ميوت كتابي لأحد من ادارة السيرفر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.highestRole.positon >= message.guild.member(client.user).highestRole.positon) return message.reply('** لا يمكن اعطاء ميوت كتابي لأحد من ادارة السيرفر** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
    if(mention.id === message.author.id) return message.reply('** لا يمكنك اعطاء ميوت كتابي لنفسك :x:**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let duration = args[2];
    if(!duration) return message.reply('** يرجى تحديد مدة الميوت الكتابي مع الأمر :x:**').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(isNaN(duration)) return message.reply('**يرجى تحديد وقت صحيح لأعطاء ميوت كتابي لهذا الشخص** :X:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    let sbb = message.content.split(" ").slice(3).join(" ");
    if(!sbb) sbb = "غير معروف .";

    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('** تم اعطائك ميوت كتابي :zipper_mouth: ** ')
    .setThumbnail(mention.user.avatarURL)
    .addField('** في سيرفر**',message.guild.name,true)
    .addField('** بواسطة**',message.author,true)
    .addField('** السبب**',reason)

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
      message.channel.send(`**:white_check_mark: ${mention.user.username} Muted! :zipper_mouth:  **  `);
      mention.setMute(true);
    });
    setTimeout(() => {
      if(duration === 0) return;
      if(!mention.has.roles(role)) return;
      mention.setMute(false);
      mention.removeRole(role);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted **   `);
    },duration * 60000);
  } else if(message.content.startsWith(prefix + "unmute")) {
    let mention = message.mentions.members.first();
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('**لا تمتلك البرمشنات الازمة لاستعمال هذا ال :x:** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply('** أنالا امتلك البرمشنات الازمةلهذا الإجراء** :x:').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

    if(!mention) return message.reply('**يرجى تحديد شخص لفك الميوت عنه :x: **').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });

      mention.removeRole(role);
      mention.setMute(false);
      message.channel.send(`**:white_check_mark: ${mention.user.username} Unmuted ! **  `);
  }
});



// !role

client.on("message", message => {

    var args = message.content.split(' ').slice(1);
    var msg = message.content.toLowerCase();
    if( !message.guild ) return;
    if( !msg.startsWith( prefix + 'role' ) ) return;
    if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
    if( msg.toLowerCase().startsWith( prefix + 'rerole' ) ){
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().removeRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.removeRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
        }
    } else {
        if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
        if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
        var role = msg.split(' ').slice(2).join(" ").toLowerCase();
        var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
        if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
            message.mentions.members.first().addRole( role1 );
            return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
        }
        if( args[0].toLowerCase() == "all" ){
            message.guild.members.forEach(m=>m.addRole( role1 ))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
        } else if( args[0].toLowerCase() == "bots" ){
            message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
        } else if( args[0].toLowerCase() == "humans" ){
            message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
            return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
        }
    }
});


// !move-all

client.on('message', message => {
    if(message.content.startsWith(prefix + 'move-all')) {
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });


// !clear

       client.on('message', msg => {
         if (msg.author.bot) return;
         if (!msg.content.startsWith(prefix)) return;
         let command = msg.content.split(" ")[0];
         command = command.slice(prefix.length);
         let args = msg.content.split(" ").slice(1);

           if(command === "clear") {
               const emoji = client.emojis.find("name", "wastebasket")
           let textxt = args.slice(0).join("");
           if(msg.member.hasPermission("MANAGE_MESSAGES")) {
           if (textxt == "") {
               msg.delete().then
           msg.channel.send("**يرجى تحديد عدد الرسائل المراد حذفها :x:**").then(m => m.delete(3000));
       } else {
           msg.delete().then
           msg.delete().then
           msg.channel.bulkDelete(textxt);
               msg.channel.send("php\nتم مسح الرسائل :white_check_mark: " + textxt + "\n").then(m => m.delete(3000));
               }
           }
       }
       });


       var ss = 0;


// voice online

       client.on('voiceStateUpdate', (o,n) => {
           if (o.voiceChannel && !n.voiceChannel) {
               ss-=1
               n.guild.channels.get("487912225630322701").edit({
                   name : "Voice Online : [" + ss+ "]"
               })
           };
           if (n.voiceChannel && !o.voiceChannel) {
               ss+=1
               n.guild.channels.get("487912225630322701").edit({
                   name : "Voice Online : [" + ss+ "]"
               })
           }
       })
       client.on("ready", () => {
           client.guilds.get("485481037820854282").members.forEach(m => {
               if (m.voiceChannel) {
                   ss+=1
               };
               client.channels.get("487912225630322701").edit({
                   name : "Voice Online : [" + ss+ "]"
               })
           });
           ;
       });




// !owner

       const Vaniet = ["410778583682777098"];
     if (message.content.startsWith(prefix + 'owner')) {
           if(!message.channel.guild) return message.reply(' ');
         if(!message.channel.guild) return;
     if( Vaniet.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**👑 انت صاحب البوت **")
     } else {
        message.reply("**🚫 انت لسا صاحب البوت**");
     }
     }
     });



// !bans

     client.on('message', message => {
       if (message.content.startsWith("!bans")) {
           message.guild.fetchBans()
           .then(bans => message.channel.send(`${bans.size}** عدد اشخاص المبندة من السيرفر**`)
         )
     .catch(console.error);
   }
   });



// !bot

   client.on('message',async message => {
    function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400);
    let hours = Math.floor(time % 31536000 % 86400 / 3600);
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60);
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60);
    days = days > 9 ? days : '0' + days;
    hours = hours > 9 ? hours : '0' + hours;
    minutes = minutes > 9 ? minutes : '0' + minutes;
    seconds = seconds > 9 ? seconds : '0' + seconds;
    return `${days > 0 ? `${days} Days ` : ''}${(hours || days) > 0 ? `${hours} Hours ` : ''}${minutes} Mins ${seconds} Secs`;
    }

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "bot")) {
      let ramUsage = (process.memoryUsage().rss / 1048576).toFixed();
      let upTime = timeCon(process.uptime());
      let createdAt = moment(hero.user.createdAt).fromNow();

  let m = await message.channel.send(`\`\`\`asciidoc\n= Normal Information =
  Creator :: ${hero.users.get("410778583682777098").username} - ${createdAt}
  Ping :: ${hero.pings[0]} ms
  UpTime :: ${upTime}

  = Servers Information =
  Servers :: ${hero.guilds.size}
  Users :: ${hero.users.size}
  Channels :: ${hero.channels.size}

  = Developer Information =
  NodeJS :: ${process.version}
  DiscordJS :: ${Discord.version}
  Arch :: ${process.arch}
  Platform :: ${process.platform}

  = Host Information =
  UsedHeap :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100} MB
  Heap :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024 * 100) / 100} MB
  Ram :: ${ramUsage} MB
  Rss :: ${Math.round(process.memoryUsage().rss / 1024 / 1024 * 100) / 100} MB
  \`\`\``);
    }
  });


  client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});


// !count


  Client.on('message', message => {

    if (message.content === "!count") {

    let embed = new Discord.RichEmbed()

.addField('**Count**: ' , message.guild.memberCount)
.setColor("#51cde6")
.setDescription(`${message.guild.name}`)
     message.channel.sendEmbed(embed);
}

});


// bot joined servers.

client.on('guildCreate', guild => {
client.channels.get("ROOM ID").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
client.channels.get("ROOM ID").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});



var Vaniet = {};
client.on('guildMemberRemove', member => {
Vaniet[member.id] = {roles: member.roles.array()};
});

client.on('guildMemberAdd', member => {
if(!Vaniet[member.user.id]) return;
console.log(Vaniet[member.user.id].roles.length);
for(let i = 0; i < Vaniet[member.user.id].roles.length + 1; i++) {
member.addRole(Vaniet[member.user.id].roles.shift());
}
});


// !cat

const snekfetch = require("snekfetch");
client.on('message', async message => {
if(message.author.bot) return;
if (message.channel.guild) {
if (message.content.startsWith(prefix + `cat`)) {
          const { body } = await snekfetch.get("http://aws.random.cat/meow");
          return message.channel.send({ file: body.file });
}}});


// !slots

client.on('message', message => {
if(message.content.startsWith("!slots")) {
let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
let we;
if(slots1 === slots2 && slots2 === slots3) {
  we = "Win!"
} else {
  we = "Lose!"
}
message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});



// !whoBot

client.on('message', msg => {
  if(msg.content.startsWith('!whoBot')) {
  if(msg.channel.type === 'dm') return;
const user = msg.mentions.users.first();
if(!user) return msg.channel.send('``' + '**قم بتحديد بوت**' + '``')
if(!user.bot) return msg.reply('\`منشن بوت\`');
msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=384064`)
  }
});


// !tofriends

client.on('message',   message => {
var prefix = "!";
const args = message.content.split(' ').slice(1).join(' ');
                            if(message.content.startsWith(prefix + 'tofriends')) {
if(message.author.id !== '410778583682777098') return;
  client.user.friends.forEach(f =>{
f.send(args)
  })
}
}
});


// !bcusers

client.on('message', async message => {
if(message.content.startsWith(prefix + "bcusers")) {
  let i = client.users.size;
  if(message.author.id !== '410778583682777098') return message.channel.send('**❎ » هذا الأمر مخصص لصاحب البوت فقط**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(!args) return message.channel.send('**❎ » يجب عليك كتابة الرسالة**')
  setTimeout(() => {
    message.channel.send(`**تم الارسال لـ ${i} شخص**`)
  }, client.users.size * 500);
  client.users.forEach(s => {
    s.send(args).catch(e => i--);
  });
}
});


// blacklists kicking.

client.on(`guildMemberAdd`, member => {
  let listedusers = (`User1`, `User2`, `User3`, `etc`);
  if (member.id = listedusers) {
      member.kick();
      const lChannel = member.guild.channels.find(`name`, `log`)
      lChannel.send(`${member} **تم طرد العضو من السيرفر لتواجده في قائمة المحظورين**`)
  }

})

// tokens remover.

client.on("message", message => {
  if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
      if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_MESSAGES')) return message.channel.send('**I need Permission \`MANAGE_MESSAGE\`To delete Tokens**')
      message.delete();
      message.reply(`**لقد أرسلت توكن يخصك عن طريق الخطاأ تم مسحه بنجاح :white_check_mark:**`);
      return;
  }
                            if(message.channel.type === "dm"){
  if (message.content.match(/([A-Z0-9]|-|_){24}\.([A-Z0-9]|-|_){6}\.([A-Z0-9]|-|_){27}|mfa\.([A-Z0-9]|-|_){84}/gi)) {
      message.delete();
      message.reply(`**لقد أرسلت توكن يخصك عن طريق الخطاأ تم مسحه بنجاح :white_check_mark:**`);
      return;
  }
}
});


// Special Community Animated Channel name.

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '487916810851581952').setName("S");
client.channels.find('id', '487916810851581952').setName("Sp");
client.channels.find('id', '487916810851581952').setName("Spe");
client.channels.find('id', '487916810851581952').setName("Spec");
client.channels.find('id', '487916810851581952').setName("Speci");
client.channels.find('id', '487916810851581952').setName("Specia");
client.channels.find('id', '487916810851581952').setName("Special");
client.channels.find('id', '487916810851581952').setName("Special ");
client.channels.find('id', '487916810851581952').setName("Special C");
client.channels.find('id', '487916810851581952').setName("Special Co");
client.channels.find('id', '487916810851581952').setName("Special Com");
client.channels.find('id', '487916810851581952').setName("Special Comm");
client.channels.find('id', '487916810851581952').setName("Special Commu");
client.channels.find('id', '487916810851581952').setName("Special Commun");
client.channels.find('id', '487916810851581952').setName("Special Communi");
client.channels.find('id', '487916810851581952').setName("Special Communit");
client.channels.find('id', '487916810851581952').setName("Special Community");
  }, 3000);
});


// !roles

var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

  if(message.content == "!roles"){
      var
      ros=message.guild.roles.size,
      data = [['Rank', 'RoleName']]
      for(let i =0;i<ros;i++){
          if(message.guild.roles.array()[i].id !== message.guild.id){
       data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
      }}
      let res = AsciiTable.table(data)

      message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
  }
});


// !ban

client.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;

      let prefix = "!";
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



// !kick


        client.on("message", async message => {
          if(message.author.bot) return;
          if(message.channel.type === "dm") return;

          let prefix = "!";
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




// !emoji

            client.on('message', message => {

                if (message.content === "!emoji") {
                    setInterval(function(){
                    message.edit('😂')
                    message.edit('🙉')
                    message.edit('🔥')
                    message.edit('😠')
                    message.edit('🔥 🌶')
                    message.edit('🙃')
                    message.edit('☠')
                    message.edit('✨')
                    message.edit('😐')
                    message.edit('😍')
                    message.edit('❤')
                    message.edit('👌:skin-tone-2:')
                    message.edit('🌚')
                    message.edit('🌹')
                    message.edit('😒')
                    message.edit('🐸')
                    message.edit('🍉')
                    message.edit('🚨')
                    message.edit('😱')
                    message.edit('😡')
                    message.edit('🤑')
                    message.edit('😖')
                    message.edit('😚')
                    message.edit('🕊')
                    message.edit('☄')
                       message.edit('🐶')
                    message.edit('🚜')
                    message.edit('🍫')
                    message.edit('👇:skin-tone-2:')
                    message.edit('🕹')
                    message.edit('🌌 ')
                    message.edit('💋 ')
                       message.edit('🤸')
                    message.edit('🙍:skin-tone-2:')
                    message.edit('😦')
                    message.edit('👈:skin-tone-2:')
                    message.edit('💓')
                    message.edit('☺')
                    message.edit('💗')
                    message.edit('🌸')




                    }, 1000)
                }


// !marry


                client.on('message', message => {
                    if(message.content.startsWith ("!marry")) {
                    if(!message.channel.guild) return message.reply('** This command only for servers **')
                    var proposed = message.mentions.members.first()

                    if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
                    if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
                     if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
                      if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
                            message.channel.send(`**${proposed}
               بدك تقبلي عرض الزواج من ${message.author}
               العرض لمدة 15 ثانية
               اكتبي موافقة او لا**`)

              const filter = m => m.content.startsWith("موافقة");
              message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
              .then(collected =>{
                  message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
              })

                 const filte = m => m.content.startsWith("لا");
              message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
              .then(collected =>{
                 message.channel.send(`  **${message.author} تم رفض عرضك** `);
              })

                }
              });





// !that


              client.on('message', message => {


                       if (message.content.startsWith(prefix + "that")) {
                                 if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                            message.guild.fetchInvites().then(invs => {
                  let member = client.guilds.get(message.guild.id).members.get(message.author.id);
                  let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
                  let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
                  var moment = require('moment');
                  var args = message.content.split(" ").slice(1);
            let user = message.mentions.users.first();
            var men = message.mentions.users.first();
             var heg;
             if(men) {
                 heg = men
             } else {
                 heg = message.author
             }
            var mentionned = message.mentions.members.first();
              var h;
             if(mentionned) {
                 h = mentionned
             } else {
                 h = message.member
             }
                    moment.locale('ar-TN');
                  var id = new  Discord.RichEmbed()

                .setColor("#0a0909")
             .setThumbnail(message.author.avatarURL)
            .addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
            .addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)

            .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                message.channel.sendEmbed(id);
            })
            }



                 });



// offline kid


                 client.on('guildMemberAdd', member => {
                  if(member.presence.status === 'offline') {
                      member.guild.owner.send(':eyes: **في واحد دخل السيرفر ومسوي نفسه غامض اوفلاين** ')
               }
               });
               client.on('guildMemberRemove', member => {
                  if(member.presence.status === 'offline') {
                      member.guild.owner.send('في واحد خرج من سيرفرك وهو مسوي نفسه غامض اوف لاين :eyes: ')
               }
               });





// !hack


               client.on('message', message => {
                   if (message.content.startsWith(prefix + "hack")) {
                     if (message.author.bot) return
                          message.delete();
                            let args = message.content.split(' ').slice(1);
                                  let virusname = args.join(' ');
                                if (virusname < 1) {
                                    return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                                                    }
                                message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
                            setTimeout(function() {
                              m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
                            }, 1000)
                           setTimeout(function() {
                              m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
                            }, 2000)
                          setTimeout(function() {
                              m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
                            }, 3000)
                               setTimeout(function() {
                              m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
                            }, 4000)
                             setTimeout(function() {
                              m.delete()
                          }, 5000)
                            setTimeout(function() {
                              message.channel.send('**تم التهكير**')
                          }, 6000)
                          });
                        }
                });




// !help



                    client.on('message' , message => {
                    if (message.content === '!help') {
                             let embed = new Discord.RichEmbed()

                          .setThumbnail(message.author.avatarURL)
                          .addField("**🌐 الأوامر العامه**","** **")
                          .addField("**!server**","**عرض معلومات عن السيرفر**")
                          .addField("**!ping**","**عرض سرعة اتصال البوت**")
                           .addField("**!members**","**عرض معلومات عن اعضاء السيرفر**")
                       .addField("**!link**","**ارسال رابط مؤقت مع معلوماته للعضو في الخاص**")
                       .addField("**!invites**","**عرض معلومات عن عدد الانفايت الخاص بك**")
                       .addField("**!avatar**","**لعرض صورة العضو**")
                       .addField("**!report**",'**عمل بلاغ عن العضو مع السبب**')
                       .addField("**!id**","**عرض معلومات عن حسابك**")
                       .addField("**!invite**","**لدعوة البوت الى سيرفرك - قريباً**")
                       .addField("**!bot**","**لعرض معلومات عن البوت**")
                       .addField("**!count**","** لعرض عدد الأعضاء**")
                       .addField("**!whoBot**","**لاحضار رابط دعوةأي بوت بالمنشن - ما عدا البوت سيكون به أخطاء في سيرفرك**")
                       .addField("**!that**","**لعرض بعض المعلومات البسيطة عن الأعضاء الجدد**")
                       .addField("**!translate**","**ميزة الترجمة**")
                       .setFooter(`${client.user.username}`)
                    .setColor('RANDOM')
                      message.author.sendEmbed(embed);
                        }
                    });

                    client.on('message' , message => {
                    if (message.content === '!help') {
                             let embed = new Discord.RichEmbed()

                          .setThumbnail(message.author.avatarURL)
                          .addField("**الأوامر الآدارية :tools:**","** **")
                          .addField("**!mutechannel**","**كتم الروم**")
                          .addField("**!unmutechannel**","**فك الكتم عن الروم**")
                           .addField("**!members**","**عرض معلومات عن اعضاء السيرفر**")
                       .addField("**!autoc**","**اعطاء رتبة بالريأكشن**")
                       .addField("**!bc**","**ارسال رسالة برودكاست لجميع اعضاء السيرفر**")
                       .addField("**!create-colors**","**لعمل رتب الوان - تحت الصيانة**")
                       .addField("**!setIcon**","**تغيير صورة السيرفر عن طريق أمر**")
                       .addField("**!user**","**لعمل روم الأونلاين**")
                       .addField("**!mute**","**لكتم العضو - ميوت كتابي**")
                       .addField("**!unmute**","** فك الكتم عن العضو**")
                       .addField("**!role**","**لاعطاء أي عضو رتبة أو سحبها منه**")
                       .addField("**!move-all**","**لنقل كل الفويس أونلاين الى رومك - الفعاليات فقط**")
                       .addField("**!bans**","**قائمة بالمحظوريين بشكل دائم - الباندات**")
                       .addField("**!roles**", "**عرض رتب السيرفر**")
                       .addField("**!ban**", "**لعمل طرد دائم للعضو - بان**")
                       .addField("**!kick**", "**لطرد العضو**")
                       .addField("**!clear**", "**لمسح الشات**")
                       .setFooter(`${client.user.username}`)
                    .setColor('RANDOM')
                      message.author.sendEmbed(embed);
                        }
                    });



                    client.on('message' , message => {
                    if (message.content === '!help') {
                             let embed = new Discord.RichEmbed()

                          .setThumbnail(message.author.avatarURL)
                          .addField("**الأوامر الترفيهية 🎮 **","** **")
                          .addField("**!rip**","**صورة الموت - rip**")
                          .addField("**!owner**","**لسؤال البوت ان كنت أنت الاونر أم لا**")
                           .addField("**!cat**","**عرض صور قطط لا نهائية**")
                       .addField("**!slots**","**لعبة بسيطة - لعبة الفواكه**")
                       .addField("**!emoji**","**لعبة الايموجي**")
                       .addField("**!marry**","**لعبة الزواج**")
                       .addField("**!hack**",'**لعبة التهكير القوي جداً جداً جداً **')
                       .setFooter(`${client.user.username}`)
                    .setColor('RANDOM')
                      message.author.sendEmbed(embed);
                        }
                    });



                    client.on('message', message => {
                                if (message.content.startsWith("!help")) {
                         let embed = new Discord.RichEmbed()
                    .setThumbnail(message.author.avatarURL)
                    .addField('     Help ' ,' تم ارسال الاوامر الي الخاص ✉  ')
                    .setColor('#B101FC')
                      message.channel.sendEmbed(embed);
                        }
                    });




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
