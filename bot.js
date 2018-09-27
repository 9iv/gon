const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "=";
//



client.on('message', m => {
    if(m.content.startsWith('هلا')) {
        m.reply('**هلا بك، منور :rose: :heart_eyes:**')
    }
});

client.on('message', m => {
    if(m.content.startsWith('السلام عليكم')) {
        m.reply('**.وعليكم السلام ورحمة الله تعالى وبركاته :rose: :wave:**')
    }
});

client.on('message', m => {
    if(m.content.startsWith('هاي')) {
        m.reply('**هايات ي غالي منورر , ء . :heart_eyes: **')
    }
});


client.on('message', m => {
    if(m.content.startsWith('عندك فولتارين؟')) {
        m.reply('**حوتو ف تيبة قلبك :slight_smile:**')
    }
});
//
//
//

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('🎽 | name :  ',`${member}`)
        .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
        .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
        .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })


// Streaming + Console logging.
client.on('ready', async => {
    console.log(`----------------`);
       console.log(`Cave. Bot By Vaniet.`);
         console.log(`----------------`);
       console.log(`ON ${client.guilds.size} Servers ' By: Vaniet ' `);
     console.log(`----------------`);
   console.log(`Logged in as ${client.user.tag}!`);
  });

  client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`=help - =inv | ${client.guilds.size} Servers!`,`=help - =inv | ${client.users.size} Users!`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/9ivv`);
    }, ms);

});

// Ready.
client.on('ready', async => {
    console.log('I am ready! :D');
    
});

//cmddd BroadcastBeta. =betabc
client.on('message', message => {
        
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'betabc') {
    if (!args[1]) {
message.channel.send(`**ملحوظة، يمكنك ارسال صورة الآن مع البرودكاست... فقط ادرج الصورة كـ رسالة عادية مع الأمر :tada:**`);
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .setTitle('**✉ New Message. | .رسالة جديدة**')
            .setThumbnail(`${message.guild.iconURL}`)
            .addField('✯ السيرفر', `${message.guild.name}`)
            .addField('✯ المرسل', `<@${message.author.id}>`)
            .addField('✯ الرسالة', args)
            .setFooter(`${client.user.username}`)
            .setColor('RANDOM')
            m.send(`${m}`,{embed: bc})
    if(message.attachments.first()){
m.sendFile(message.attachments.first().url).catch();
}
})
}
}
});


//cmddd Channels. =channels
client.on('message', message => {
    if (message.content.startsWith(prefix + "channels")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('wlc', 'text')
     message.guild.createChannel('info', 'text')
     message.guild.createChannel('news', 'text')
     message.guild.createChannel('f5r', 'text') 
     message.guild.createChannel('gifts', 'text')
     message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('pic', 'text')
     message.guild.createChannel('bot', 'text')
     message.guild.createChannel('bo7', 'text')
     message.guild.createChannel('Event-Chat', 'text')
     message.guild.createChannel('Events', 'voice')
     message.guild.createChannel('Talk.', 'voice')
     message.guild.createChannel('Chill.', 'voice')
     message.guild.createChannel('Coffe.', 'voice')
     message.guild.createChannel('Down.', 'voice')
     message.guild.createChannel('One ,', 'voice')
     message.guild.createChannel('Double ,', 'voice')
     message.guild.createChannel('Triple ,', 'voice')
     message.guild.createChannel('Squad ,', 'voice')
     message.guild.createChannel('Minecraft #', 'voice')
     message.guild.createChannel('Fortnite #', 'voice')
     message.guild.createChannel('Creative #', 'voice')
     message.guild.createChannel('Brawlahalla #', 'voice')
     message.guild.createChannel('Sleeeeeep.', 'voice')

message.channel.sendMessage('**تم انشاء جميع الرومات بنجاح، يرجى اضافة البرمشنات وتنظيم الأقسام :white_check_mark: **')
}
});
 


//cmddd Clear. =clear
client.on('message', function(message) {
    if (message.content.startsWith(prefix + 'clear')) {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("**.عذراً، لقد حدث خطأ غير محدد عند محاولة مسح الشات :x: **")})
        }
    }

});

// تكملهه,.
client.on('message', m => {
    if(m.content.startsWith(prefix + 'clear')) {
        m.channel.send('```.تم مسح الشات بنجاح```')
    }
});



//cmddd Skin. =skin
client.on("message", message => {
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("**يرجى كتابة اسم السكن لهذا الأمر :x:**");
        const image = new Discord.Attachment(`https://minotar.net/avatar/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


// تكملهه.,
client.on('message', msg => {
    if(msg.content.startsWith(prefix + 'skin')) {
        msg.channel.send('**.ملاحظة :** ان لم يكن هناك احد بالاسم سيتم وضع سكن ستيف بدلأ عنه :seedling: ')
    }
});
  

//cmddd Email. =email
client.on("message", (message) => {
    if(message.content.startsWith(prefix + 'email')) {
        message.channel.send(JSON.stringify({
            email: Math.random().toString(36).slice(4).trim()+'@gmail.com',
            password: Math.random().toString(36).slice(4).trim()
        }))
    }
  });


//cmddd Server. =server

client.on('message', function(msg) {
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
      .addField(':sleeping:** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField(':upside_down:** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });



//cmddd ID. =id
client.on('message', message => {
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
    y = "Not Playing... |💤.";
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
      if (!message) return message.reply('**`.خطأ: `يجب عليك وضع المنشن بشكل صحيح`❌ **').catch(console.error);
    
    }
    
});
 
//cmddd Avatar. =avatar 

client.on('message', message => {

    if (message.content.startsWith(prefix + 'avatar')) {
      var mentionned = message.mentions.users.first();
  var fm;
    if(mentionned){
        var fm = mentionned;
    } else {
        var fm = message.author;
  
    }
      const embed = new Discord.RichEmbed()
      .setTitle(`󠂪  󠂪  󠂪  󠂪  󠂪  󠂪  󠂪  󠂪󠂪   󠂪  ❋ Requested By: **${message.author.username}** ❋`)
      .setImage(`${fm.avatarURL}`)
      .setColor("RANDOM")
      .setFooter(`❋ ${fm.username}'s Avatar ❋`)
      message.channel.sendEmbed(embed);
  
    }
});
  

//cmddd Giphy. =gif
const giphy = require('giphy-api')();
    function getValue(key, array) {
  for (var el in array) {
    if (array[el].hasOwnProperty(key)) {
      return array[el][key];
    }
  }
}

client.on('message', message => {
    if(message.content.startsWith(prefix + 'gif')) {
        sb = message.content.substring(4)
      giphy.random({
        tag: sb,
        rating: 'g',
        fmt: 'json'
      }, function(err, res) {
        if (getValue("image_url", res)) {

          message.channel.send({files:[{
              attachment: getValue("image_url", res),
              name: 'gif'+sb+'.gif'
          }]
        });
        }

      });
      }
});


//cmddd BCall. =bcall
client.on('message', async message => {
    if(message.content.startsWith(prefix + "bcall")) {
      let i = client.users.size;
      if(message.author.id !== '410778583682777098') return message.channel.send('❎ هذا الأمر مخصص لصاحب البوت فقط');
      var args = message.content.split(' ').slice(1).join(' ');
      if(!args) return message.channel.send('❎ يجب عليك كتابة الرسالة')
      setTimeout(() => {
        message.channel.send(`تم الارسال لـ ${i} شخص`)
      }, client.users.size * 500);
      client.users.forEach(s => {
        s.send(args).catch(e => i--);
      });
    }
  });

//cmddd Marry. =marry
client.on('message', message => {
    if(message.content.startsWith(prefix + 'marry')) {
    if(!message.channel.guild) return message.reply('**:x: This command only for servers **')
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


//cmddd Slots. =slots
client.on('message', message => {
    if(message.content.startsWith(prefix + 'slots')) {
      let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
      let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
      let we;
      if(slots1 === slots2 && slots2 === slots3) {
        we = " : ** لقد فزت   ** ."
      } else {
        we = ": ** لقد خسرت  ** ."
      }
      message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
    }
    });


    
//HACKING DEFENDER.. 
var guilds = {};
client.on('guildBanAdd', function(guild) {
            const rebellog = client.channels.find("name", "log"),
            Onumber = 3,
  Otime = 10000
guild.fetchAuditLogs({
    type: 22
}).then(audit => {
    let banner = audit.entries.map(banner => banner.executor.id)
    let bans = guilds[guild.id + banner].bans || 0 
    guilds[guild.id + banner] = {
        bans: 0
    }
      bans[guilds.id].bans += 1; 
if(guilds[guild.id + banner].bans >= Onumber) {
try {
let roles = guild.members.get(banner).roles.array();
guild.members.get(banner).removeRoles(roles);
  guild.guild.member(banner).kick();

} catch (error) {
console.log(error)
try {
guild.members.get(banner).ban();
  rebellog.send(`<@!${banner.id}>
حآول العبث بالسيرفر @everyone`);
guild.owner.send(`<@!${banner.id}>
حآول العبث بالسيرفر ${guild.name}`)
    setTimeout(() => {
 guilds[guild.id].bans = 0;
  },Otime)
} catch (error) {
console.log(error)
}
}
}
})
});
 let channelc = {};
  client.on('channelCreate', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelcreate = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was Created By ${channelcreate.tag}`);
   if(!channelc[channelcreate.id]) {
    channelc[channelcreate.id] = {
    created : 0
     }
 }
 channelc[channelcreate.id].created += 1;
 if(channelc[channelcreate.id].created >= Onumber ) {
    Oguild.members.get(channelcreate.id).kick();
rebellog.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelcreate.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelc[channelcreate.id].created = 0;
  },Otime)
  });

let channelr = {};
  client.on('channelDelete', async (channel) => {
  const rebellog = client.channels.find("name", "log"),
  Oguild = channel.guild,
  Onumber = 3,
  Otime = 10000;
  const audit = await channel.guild.fetchAuditLogs({limit: 1});
  const channelremover = audit.entries.first().executor;
  console.log(` A ${channel.type} Channel called ${channel.name} was deleted By ${channelremover.tag}`);
   if(!channelr[channelremover.id]) {
    channelr[channelremover.id] = {
    deleted : 0
     }
 }
 channelr[channelremover.id].deleted += 1;
 if(channelr[channelremover.id].deleted >= Onumber ) {
  Oguild.guild.member(channelremover).kick();
rebellog.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر @everyone`);
channel.guild.owner.send(`<@!${channelremover.id}>
حآول العبث بالسيرفر ${channel.guild.name}`)
}
  setTimeout(() => {
 channelr[channelremover.id].deleted = 0;
  },Otime)
  });

//cmddd Hack. =hack
client.on('message', message => {
    if (message.content.startsWith(prefix + "hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```!حقاً؟ تريد تهكير نفسك... هذا غريب. يرجى تحديد شخص لتهكيره```");
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
               message.channel.send('```Target Is Hacked.```')
           }, 6000)
           });
         }
 });

//Welcoming...
const moment = require('moment');

client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let Cave = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:Cave});          
               
 
      }
      });
//cmddd Report. =report
client.on('message', message =>{
        let messageArray = message.content.split(" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
        let prefix = '=';
         
        if(cmd === `${prefix}report`){
            let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!rUser) return message.channel.send("**:x: .خطأ : لا يمكن عمل البلاغ بدون تحديدك لشخص لعمل بلاغ عليه**");
            let reason = args.join(" ").slice(22);
            if(!reason) return message.channel.send("**:x: .خطأ : يرجى تحديد سبب للبلاغ**");
        
            let reportEmbed = new Discord.RichEmbed()
            .setTitle("﹥Report")
            .setColor("RANDOM")
            .addField("❋ Reported User :", `${rUser} (${rUser.id})`)
            .addField("❋ Report Creator :", `${message.author} (${message.author.id})`)
            .addField("❋ Reported In :", message.channel)
            .addField("❋ Report Time :", message.createdAt.toLocaleString(),true)
            .addField("❋ Report Reason :", reason);
        
            let reportschannel = message.guild.channels.find(`name`, "reports");
            if(!reportschannel) return message.channel.send("**عذراً، يرجى تواجد روم البلاغات`reports`. ان كنت عضو فـ يرجى التواصل مع أي من الادارة**");
        
        
            message.delete().catch(O_o=>{});
            message.author.send(`**.تم عمل البلاغ على العضو → <@${rUser.id}>**`)
            reportschannel.send(reportEmbed);
        };
    });

//cmddd Invite. =inv
client.on('message' , message => {

    if (message.content === "=inv") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**')
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
.setTitle('Invite Cave to your server now!')
.setURL('https://discordapp.com/oauth2/authorize?client_id=461191968920436738&permissions=8&scope=bot')
  message.channel.sendEmbed(embed);
   }
});

//cmddd MembersChannel. =mchc

client.on('message', message => {
    if (message.content.startsWith(prefix + "mchc")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel(`°${message.guild.memberCount} Members. ☀`, 'voice')

     message.channel.sendMessage('**تم عمل روم الأعضاء بنجاح | :white_check_mark: **')
}
});

//cmddd Temporary Channels. =temp / =temp-close
const temp = {};
client.on('message', async message => {
 if(message.channel.type === "dm") return;
  if(message.author.bot) return;
   if(!temp[message.guild.id]) temp[message.guild.id] = {
    time: "3000",
     category : 'click here',
      channel : 'click here'
       }
        if(message.content.startsWith(prefix + 'temp')){
         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
          var ggg= message.guild.createChannel('click here', 'category').then(cg => {
           var ccc =message.guild.createChannel('click here', 'voice').then(ch => {
            ch.setParent(cg)
             message.channel.send('**تم عمل الروم المؤقت بنجاح ... :white_check_mark: **')
              client.on('message' , message => {
               if(message.content.startsWith(prefix + 'temp-close')) {
                if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                 cg.delete()
                  ch.delete()
                   message.channel.send('**تم اغلاق الروم المؤقت بنجاح :white_check_mark:**  ')
                    }
                     });
                      const time = temp[message.guild.id].time
                       client.on('message' , message => {
                        if (message.content === "fgfdkjfdhfgdjghdhghj") {
                         if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
                          let newTime= message.content.split(' ').slice(1).join(" ")
                          if(!newTime) return message.reply(`**${prefix}temptime <time>  \`1000 = 1s\`**`)
	                 if(isNaN(newTime)) return message.reply(`** The Time Be Nambers :face_palm: **`);
	                if(newTime < 1) return message.reply(`**The Time Be Up \`3000s\`**`)
                       temp[message.guild.id].time = newTime
                      message.channel.send(`**Temp Rooms Time Change To \`${newTime}\`**`);
                     }
                    });
                   client.on('voiceStateUpdate', (old, neww) => {
                  let newUserChannel = neww.voiceChannel
                 let oldUserChannel = old.voiceChannel
                temp[message.guild.id].category = cg.id
               temp[message.guild.id].channel = ch.id
              let channel = temp[message.guild.id].channel
             let category = temp[message.guild.id].category
            if(oldUserChannel === undefined && newUserChannel !== undefined && newUserChannel.id == channel) {
           neww.guild.createChannel(neww.displayName , 'voice').then(c => {
          c.setParent(category)
         let scan = setTimeout(()=>{
        if(!neww.voiceChannel) {
       c.delete();
      client.channels.get(channel).overwritePermissions(neww, {
     CONNECT:true,
    SPEAK:true
   })
  }
 }, temp[neww.guild.id].time);
  c.overwritePermissions(neww, {
   CONNECT:true,
    SPEAK:true,
     MANAGE_CHANNEL:true,
      MUTE_MEMBERS:true,
       DEAFEN_MEMBERS:true,
	MOVE_MEMBERS:true,
	 VIEW_CHANNEL:true
	  })
	   neww.setVoiceChannel(c)
            })
             client.channels.get(channel).overwritePermissions(neww, {
	      CONNECT:false,
	       SPEAK:false
		})
               }
              })
             })
           })
          }
      });

//cmddd Broadcast. =bc
client.on('message', message => {
    if(!message.channel.guild) return;
 if(message.content.startsWith(prefix + 'bc')) {
 if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
 if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
 let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
 let BcList = new Discord.RichEmbed()
 .setThumbnail(message.author.avatarURL)
 .setAuthor(`محتوى الرساله ${args}`)
 .setDescription(`برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست`)
 if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
 msg.react('📝')
 .then(() => msg.react('✏'))
 .then(() =>msg.react('📝'))
  
 let EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
 let NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;
  
 let EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
 let NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });
  
 EmbedBc.on("collect", r => {
 message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 var bc = new Discord.RichEmbed()
 .setColor('RANDOM')
 .setTitle('**New Message. | رسالة**`')
 .addField('✯ السيرفر', `${message.guild.name}`)
 .setFooter('✯ المرسل', `<@${message.author.id}>`)
 .addField('✯ الرسالة', `**${args}**`)
 .setThumbnail(`${message.guild.iconUR}`)
 m.send({ embed: bc }) 
 
 msg.delete();
 })
 })
 NormalBc.on("collect", r => {
   message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
 message.guild.members.forEach(m => {
 m.send(`✯ السيرفر : **${message.guild.name}**
 ${m}` + args);
 msg.delete();
 })
 })
 })
 }
 });


//cmddd Ban. =ban
client.on("message", async message => {
        if(message.author.bot) return;
        if(message.channel.type === "dm") return;
  
        let prefix = "=";
        let messageArray = message.content.split (" ");
        let cmd = messageArray[0];
        let args = messageArray.slice(1);
  
  
  
          if(cmd === `${prefix}ban`){
  
  
  
            let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
            if(!kUser) return message.channel.send("**لم يتم ايجاد العضو :x: **");
            let kReason = args.join(" ").slice(22);
            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:x: لا تمتلك صلاحيات لازمة**");
            if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:x: .لا يمكن عمل بان لأي أحد من الادارة او احد ذو رتبة أعلى منك أو أعلى من رتبة البوت**")
  
            let banEmbed = new Discord.RichEmbed()
            .setDescription("-Ban.")
            .setColor("#8e0505")
            .addField("Banned User", `${bUser} with ID ${bUser.id}`)
            .addField("Banned By", `<@${message.author.id}> with the id ${message.author.id}`)
            .addField("Banned In", message.channel)
            .addField("Time", message.createdAt)
            .addField("Reason", kReason);
  
            let banChannel = message.guild.channels.find('name', 'log');
            if(!banChannel) return message.channel.send("**يرجى تواجد روم `log`**");
  
            message.guild.member(bUser).kick(bReason)
            banChannel.send(banEmbed);
          }
          });

//cmddd Kick. =kick
          client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "=";
  let messageArray = message.content.split (" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);



    if(cmd === `${prefix}kick`){



      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!kUser) return message.channel.send("**لم يتم ايجاد العضو :x: **");
      let kReason = args.join(" ").slice(22);
      if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:x: لا تمتلك الصلاحيات الازمة**");
      if(kUser.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**:x: .لا يمكن عمل بان لأي أحد من الادارة او احد ذو رتبة أعلى منك أو أعلى من رتبة البوت**")

      let kickEmbed = new Discord.RichEmbed()
      .setDescription("-Kick.")
      .setColor("#e56b00")
      .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
      .addField("Kicked By", `<@${message.author.id}> with the id ${message.author.id}`)
      .addField("Kicked In", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", kReason);

      let kickChannel = message.guild.channels.find('name', 'log');
      if(!kickChannel) return message.channel.send("**يرجى تواجد روم `log`**");

      message.guild.member(kUser).kick(kReason)
      kickChannel.send(kickEmbed);
    }
    });



//cmddd Mute. =mute / =unmute
const fs = require("fs");
var json = JSON.parse(fs.readFileSync("json.json", "utf8"));

client.on("message", (message) => {
    var command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (!message.content.startsWith(prefix)) return;
    switch(command) {
        case "mute" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : false,
                CONNECT : false
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : true};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> لا يستطيع التحدث بعد الآن!🤐**`);
        break;
        case "unmute" : 
        if (!message.channel.type =="text") return;
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return;
        if (!message.mentions.members.first()) return;
        message.guild.channels.forEach(c => {
            c.overwritePermissions(message.mentions.members.first().id, {
                SEND_MESSAGES : null,
                CONNECT : null
            })
        })
        json[message.guild.id + message.mentions.members.first().id] = {muted : false};
        fs.writeFile("json.json", JSON.stringify(json), err => {
            if (err) console.error(err);
        });
        message.channel.send(`** <@${message.mentions.members.first().id}> يستطيع التحدث الآن!😀**`);
    }
})

.on("guildMemberAdd", (member) => {
    if(json[member.guild.id + member.user.id]) {
        if (json[member.guild.id + member.user.id].muted == true) {
            member.guild.channels.forEach(c => {
                c.overwritePermissions(member.user.id, {
                    SEND_MESSAGES : false,
                  CONNECT : false
                })
            })
        }
    }
});

//cmddd Bot. =bot
client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
let embed = new Discord.RichEmbed()
.setTitle(`${client.user.username} :sparkles:`)
.setThumbnail(`${client.user.avatarURL}`)
.addField('**-Servers joined :**',`**[${client.guilds.size}]**`)
.addField('**-Members :**',`**[${client.users.size}]**`)
.addField('**-Chnnels :**',`**[${client.channels.size}]**`)
.addField('**-Ping :**',`**[${Date.now() - message.createdTimestamp}]**`)
.addField('**-My language :**','**Node.js**')
.addField('**-Devoloped By:**','**Vaniet**')
.setColor('#7d2dbe')
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed);
}
});


//cmddd Colors. =colors
client.on('message', msg => {

    if (msg.content ===  prefix + 'colors'){
                if (!msg.member.hasPermission('MANAGE_ROLES')) return msg.channel.sendMessage('**عذراً، أنت لا تمتلك الصلاحيات الازمة :x:**')
        msg.channel.send('**... جاري عمل الألوان حالياً :robot:**')
                    setInterval(function(){})
                      let count = 0;
                      let ecount = 0;
            for(let x = 1; x < 101; x++){
              msg.guild.createRole({name:x,
                color: 'RANDOM'})
                }
              }
         });

//cmddd Help. =help
client.on('message', message => {
    if (message.content.startsWith("=help1")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('**.تم ارسال قائمة المساعدة لك في رسالة خاصة ✉**' ,'** **')
.setColor('#B101FC')
message.channel.sendEmbed(embed);
}
});
client.on('message', message => {
    if (message.content.startsWith("=help2")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('**.تم ارسال قائمة المساعدة لك في رسالة خاصة ✉**' ,'** **')
.setColor('#B101FC')
message.channel.sendEmbed(embed);
}
});
client.on('message' , message => {
    if (message.content === '=help') {
             let embed = new Discord.RichEmbed()
    
          .setTitle(': يرجى اختيار نوع القائمة ')
          .setThumbnail(`${message.author.avatarURL}`)
          .addField('help1','.قائمة الأوامر العامة') 
          .addField('help2','.قائمة الأوامر الآدارية') 
          .setFooter(`${client.user.username}`)

    
    .setColor('RANDOM')
      message.channel.sendEmbed(embed);
        }
    });



client.on('message' , message => {
    if (message.content === '=help1') {
             let embed = new Discord.RichEmbed()
    
             .setTitle('Welcome to Cave Help Menu! | مرحباً بك في قائمة المساعدة')
             .setThumbnail(`${client.user.avatarURL}`)
             .setDescription('**برفكس البوت -> "="**')
             .setFooter(`${client.user.username}`)
           .setThumbnail(`${message.author.avatarURL}`)
          .addField("**🌐 الأوامر العامه**","** **")
          .addField("**=avatar**","**عرض صورتك الشخصية أو صورة أي عضو آخر**")
          .addField("**=server**","**عرض جميع معلومات السيرفر**")
           .addField("**=id**","**عرض معلومات عامة عنك أو اي عضو تحدده**")
       .addField("**=help**","**ارسال هذه القائمة للعضو في الخاص**")
       .addField("**=gif**","** ارسال صور متحركة عشوائية لا نهائية**")
       .addField("**=bot**","**عرض معلومات عن البوت**")
       .addField("**=skin**","**عمل صورة الوجه لسكن الاسم الذي تكتبه في ماينكرافت**")
       .addField("**=marry**","**لعبة الزواج**")
       .addField("**=slots**","**لعبة الفواكه**")
       .addField("**=hack**","**لعبة التهكير**")
       .addField("**=report**","**عمل بلاغ على اي عضو قام بمخالفة القوانين**")
       .addField("**=inv**","**لدعوة البوت الى سيرفرك**")
       .addField("**=temp**","**عمل روم مؤقت باسمك لا يمكن لغيرك دخوله او رؤيته**")
       .addField("**=temp-close**","**لاغلاق الروم المؤقت بعد استخدامه**")
       .addField("**=email**","**يعطي لك ايميل وباسورد لحساب جيميل وهمي عشوائي**")
       .addField("**=roles**","**لعرض كافة الرتب في السيرفر**")

    
    .setColor('RANDOM')
      message.author.sendEmbed(embed);
        }
    });
    client.on('message' , message => {
        if (message.content === '=help2') {
                 let embed = new Discord.RichEmbed()
                 .setTitle('Welcome to Cave Help Menu! | مرحباً بك في قائمة المساعدة')
             .setThumbnail(`${client.user.avatarURL}`)
             .setDescription('**برفكس البوت -> "="**')
             .setFooter(`${client.user.username}`)
           .setThumbnail(`${message.author.avatarURL}`)
    .addField("**الآوامر الادارية 💣**","** **")
    .addField("**=bc**","**برودكاست لكل الأعضاء مع تحديد الشكل ايمبد او بدون**")
    .addField("**=channels**","**عمل شكل الرومات الأساسي في اغلب السيرفرات __BETA__** ")
    .addField("**=clear**","**مسح الشات**")
    .addField("**=mchc**","**عمل روم عدد الأعضاء**")
    .addField("**=ban**","**تبنيد العضو **")
    .addField("**=mute**","**عمل ميوت للعضو**")
    .addField("**=unmute**","**فك الكتم عن العضو**")
    .addField("**=kick**","**طرد العضو**")
    .addField("**=betabc**","**برودكاست آخر لكن مع صورة بدون روابط __BETA__**")
    .addField("**=colors**","**عمل 100 لون في ثواني بألوان مختلفة**")
    .addField("**=move**","**لسحب أي عضو الى رومك الصوتي الحالي**")
    .addField("**=mutechannel**","**عمل ميوت للروم كامل**")
    .addField("**=unmutechannel**","**فك الميوت عن الروم كامل**")
    .setColor('RANDOM')
    message.author.sendEmbed(embed);
      }
    });

//cmddd Roles. =roles
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "=roles"){
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
  //cmddd Mute & Unmute Channel. =mutechannel / =unmutechannel
client.on('message', message => {
    var prefix = "=";
           if(message.content === prefix + "mutechannel") {
                               if(!message.channel.guild) return message.reply('** This command only for servers**');
    
       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                  message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: false
    
                  }).then(() => {
                      message.reply("**__تم تقفيل الشات__ ✅ **")
                  });
                    }

        if(message.content === prefix + "unmutechannel") {
                            if(!message.channel.guild) return message.reply('** This command only for servers**');
    
       if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                  message.channel.overwritePermissions(message.guild.id, {
                SEND_MESSAGES: true
    
                  }).then(() => {
                      message.reply("**__تم فتح الشات__✅**")
                  });
        }
           
    });

//cmddd Move. =move
client.on('message', message => {
    var prefix = "!";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("```الاستخدام الصحيح للأمر: " +prefix+ "move [USER]```")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Success!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("```لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي```")
}
} else {
 message.channel.send("**```يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك```**")
}
} else {
message.react("❌")
 }}});


 

 client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.split(' ').slice(1);
    var argresult = args.join(' ');
    if (message.author.id !== "410778583682777098") return;


    if (message.content.startsWith(prefix + 'setwatch')) {
    client.user.setActivity(argresult, {type: 'WATCHING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`Watching Now: **${argresult}**`)
  }


    if (message.content.startsWith(prefix + 'setlis')) {
    client.user.setActivity(argresult, {type: 'LISTENING'})
       console.log('test' + argresult);
      message.channel.sendMessage(`LISTENING Now: **${argresult}**`)
  }


  if (message.content.startsWith(prefix + 'setname')) {
    client.user.setUsername(argresult).then
        message.channel.sendMessage(`Username Changed To **${argresult}**`)
    return message.reply(".");
  }

  if (message.content.startsWith(prefix + 'setavatar')) {
    client.user.setAvatar(argresult);
     message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
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

//
client.login('NDYxMTkxOTY4OTIwNDM2NzM4.Do1bRw.I__kfbezbv4fHZrky6nHgsRh40U');