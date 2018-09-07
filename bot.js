const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!" ; // البرفكس



client.on('ready', () => {
  console.log('I am ready!');
});




client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {
    msg.reply('**وعليكم السلام ورحمة الله وبركاته ** :rose:');
  }
});




/// &server

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




/// n!mutechannel / !unmutechannel

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




///n!autoc

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

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='!mem')
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





client.on('message', message => {
  if (message.content.startsWith("!رابط")) {

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

client.on('message', message => {

  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
if (message.content.startsWith('!inv')) {
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ;
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
const alpha = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);
message.channel.send(alpha);

});

};
  });


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

client.on('message', message => {
    if (message.content === '!rip') {
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
    }
});


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


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
