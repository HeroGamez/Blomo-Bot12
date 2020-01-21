	const http = require('http');
	const express = require('express');
	const app = express();
	app.get("/", (request, response) => {
	  response.sendStatus(200);
	});
	app.listen(process.env.PORT);
	setInterval(() => {

	  http.get(`https://blomo-bot423131.glitch.me`);
	}, 280000);

	const Discord = require('discord.js');  
	const client = new Discord.Client();  
	const moment = require('moment');
	const zalgo = require('zalgolize');  
	const math = require('math-expression-evaluator');   
	const figlet = require('figlet');   
	const fs = require('fs');  
	const ms = require('ms');  
	const prefix = '-'


 client.on('guildMemberAdd', async member => {
  await member.guild.fetchInvites().then(guildInvites => {
      const ei = guildInvites[member.guild.id];
      const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
      const inviter = client.users.get(invite.inviter.id);
    let LoggingChannel = member.guild.channels.find(ch => ch.name === "・welcome");
    if(LoggingChannel){
    let welcomedEmbed = new Discord.RichEmbed()
   .addField('**Invited By :**',`<@` + `${inviter.id}` + `>`, true)               
   LoggingChannel.send(welcomedEmbed);
    }})
  });

	client.on('message', msg => {  
		if (msg.content === 'باك') {  
		  msg.reply('** :wink: وِلِـكُمِـ نَوِرُتْ   :sparkling_heart:**');  
		}
	  });

	client.on('message', msg => {  
		if (msg.content === 'السلام عليكم ') {  
		  msg.reply('**وعليكم السلام **');  
		}
	  });
client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "creditsthelp") {
		message.channel.send(
		  `**| تــم ارسال اوامر الكريدتس للبوت بلخاص ..**`
		);
		
		message.author.sendMessage(`  **__blomo.bot__**
	   **__اوامر الكريدتس__**  
	**
『-credits ====> لمعرفة كم رصيدك
『-daily ====> لاخذ راتبك اليومي
『-credits <user> ====>لمعرفة كم يملك من كريدتس او رصيد
『-credits <user> <number> ====> لتحويل رصيد الي شخص اخر
**
`);
	  }
	});

	client.on('message', msg => {  
		if (msg.content === 'فيرتكس') {  
		  msg.reply('**وش بدك منه **');  
		}
	  });



	client.on('message', msg => {  
		if (msg.content === 'احبك') {  
		  msg.reply('**لاتحتك يا اخوي لو سمحت**');  
		}
	  });
	  

	  client.on('message', msg => {  
		if (msg.content === 'احبك') {  
		  msg.reply('**حبك برص يا سافل**');  
		}
	  });


	  
	   client.on('message', msg => {  
		if (msg.content === 'هلا') {  
		  msg.reply('**هلا بيك :heart: **');  
		}
	  });





	   client.on('message', msg => {  
		if (msg.content === 'صاحب البوت ') {  
		  msg.reply('**! Háwáii - Vertix💞.#2020 **');  
		}
	  });


	client.on("message", luxy => {
	  if (luxy.author.bot) return;
	  if (true) {
		if (luxy.content === prefix + "inv") {
		  luxy.author
			.send("** تــفــضــل رابــط الــبــوت  ** https://discordapp.com/api/oauth2/authorize?client_id=651730843366064139&permissions=8&scope=bot رابط سيرفر البوت https://discord.gg/bzyWARD ")
			.catch(e => console.log(e.stack));
		}
	  }
	});
	client.on("message", luxy => {
	  if (luxy.author.bot) return;
	  if (luxy.content === prefix + "inv") {
		luxy.channel.send(
		  " :white_check_mark:  **-** **تم تفقد الخاص **"
		);
	  }
	});

	  
	  client.on("message", message => {  //WESO#0001
		if(message.content.startsWith(prefix + 'v2min')) {  //WESO#0001
		 let args = message.content.split(" ").slice(1);  //WESO#0001
		   var nam = args.join(' ');
		
		  if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
		  if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))  //WESO#0001
		  message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000))   //WESO#0001
		  message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000)) 
		}
		});





	 client.on("message", message => {  //WESO#0001
	  if (message.channel.type === "dm") {    //WESO#0001

		  message.channel.startTyping();    //WESO#0001
		  setTimeout(() => {    //WESO#0001
			message.channel.stopTyping();    //WESO#0001
		  }, Math.random() * (1 - 3) + 1 * 1000);  //WESO#0001
	   
	  }  
	});  

	const clans = {};  //WESO#0001
	const system = {};  //WESO#0001
	const level = {};  //WESO#0001
	 
	 
	client.on('message',async message => {  //WESO#0001
	  if(message.author.bot) return;  //WESO#0001
	  if(message.channel.type === 'dm') return;  //WESO#0001
	 
	  let args = message.content.split(' ');  //WESO#0001
	  let random = Math.floor(Math.random() * 5) + 2;  //WESO#0001
	  let author = message.author;
	 
	  let xpLeft;  //WESO#0001
	  let nameClan;  //WESO#0001
	  let membersClan = [];  //WESO#0001
	  let levelClan = 0;  //WESO#0001
	  if(!system[author.id]) system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};  //WESO#0001
	 
	  if(!level[author.id]) level[author.id] = {level: 1, xp: 1};  //WESO#0001
	 
	 
	  level[author.id].xp += (+random);  //WESO#0001
	  if(level[author.id].xp >= 300) {  //WESO#0001
		if(level[author.id].xp > 300) xpLeft = level[author.id].xp - 300;  //WESO#0001
		level[author.id] = {  //WESO#0001
		  level: level[author.id].level + 1,  //WESO#0001
		  xp: xpLeft  //WESO#0001
		};
	 
	  }
	  if(message.content.startsWith(prefix + "clan")) {  //WESO#0001
		if(message.content.split(' ')[0] !== `${prefix}clan`) return;  //WESO#0001
	 
		if(!args[1] || args[1] && args[1] === 'info') {  //WESO#0001
	  let embed = new Discord.RichEmbed()
	  .setAuthor('الكلانات', message.author.avatarURL)  //WESO#0001
	  .setDescription(`- \`${prefix}clan\`: نظام الكلانات هو نظام شبه مسلي ينمي التفاعل ويمكنك التحكم بالكلان تبعك بشكل كامل
	  - \`${prefix}clan info\`: لأظهار رسالة الأوامر ( هذه الرسالة ) ء
	  - \`${prefix}clan create\`: لأنشاء كلان بالأسم الذي تريده
	  - \`${prefix}clan invite\`: لدعوة شخص ما للكلان تبعك
	  - \`${prefix}clan join\`: للتقديم على دخول الكلان الذي تريده
	  - \`${prefix}clan promote\`: لأعطاء شخص بالكلان صلاحيات الادمن ( يتطلب صلاحية الادمن ) ء
	  - \`${prefix}clan demote\`: لأزالة صلاحية الادمن من عضو بالكلان ( صاحب الكلان فقط ) ء
	  - \`${prefix}clan ownership\`: لنقل ملكيةالكلان
	  - \`${prefix}clan leave\`: للخروج من الكلان الذي انت به
	  - \`${prefix}clan kick\`: لطرد عضو من الكلان ( يتطلب صلاحية الادمن ) ء
	  - \`${prefix}clan disband\`: لمسح الكلان من السستم ( صاحب الكلان فقط ) ء
	  - \`${prefix}clan stats\`: لعرض معلومات الكلان تبعك
	  - \`${prefix}clan list\`: يظهر لك اعضاء الكلان برسالة
	  - \`${prefix}clan accept\`: لقبول شخص وجعل الشخص يدخل الكلان ( يتطلب صلاحية الادمن ) ء
	  - \`${prefix}clan decline\`: لرفض شخص وعم جعل الشخص يدخل الكلان ( يطلب صلاحية الادمن ) ء
	  - \`${prefix}clan room\`: لعمل روم شات او كتابي بأسم الكلان ( صاحب الكلان فقط ) ء`)
	  .setFooter(message.author.username, message.author.avatarURL);  //WESO#0001
	  message.channel.send(embed);
	}
	 
		if(args[1] && args[1] === 'create') {  //WESO#0001
		  if(level[author.id].level < 10) return message.channel.send('**# يجب أن يكون لديك 10 مستويات لعمل كلان , لتجميع مستويات تفاعل بالشات وسيتم حساب النقاط**');
		  if(system[author.id].clan !== 'None') return message.channel.send('**# يجب عليك ان تخرج من الكلان الذي أنت به حاليا**');
	 
		  let m = await message.channel.send('**# أكتب أسم الكلان الان**');
		  let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, { max: 1, time: 20000, errors: ['time']}).then(collected => {
			if(collected.first().content.length > 25) return message.channel.send("**# لا يمكنك وضع اسم للكلان يفوق الـ25 حرفا , أعد كابة الأمر**");
			if(collected.first().content.includes("None")) return message.channel.send("**# `None`, لا يمكنك وضع هذه الكلمة كأسم للكلان**");
			collected.first().delete().catch();
			nameClan = collected.first().content;  //WESO#0001
		  });
	 
		  m = await m.edit('**# جارى عمل الكلان**');  //WESO#0001
		  awaited = await setTimeout(async() => {  //WESO#0001
			let membersArray = {
			  nameClan: {
				array: []
			  }
			};
			let members = membersArray.nameClan.array;  //WESO#0001
			members.push(message.author.id);
			clans[nameClan] = {
			  name: nameClan,
			  createdAt: new Date().toLocaleString(),  //WESO#0001
			  level: levelClan,
			  creator: message.author.id,  //WESO#0001
			  members: members,  //WESO#0001
			  applylist: [],  //WESO#0001
			  admins: []  //WESO#0001  //WESO#0001
			};
	 
			system[author.id] = {  //WESO#0001
			  clan: nameClan,  //WESO#0001
			  joinedAt: new Date().toLocaleString(),  //WESO#0001
			  clanLevel: 0,  //WESO#0001
			  creator: message.author.id  //WESO#0001
			};
	 
			m = await m.edit('**# تم عمل الكلان بنجاح**');  //WESO#0001
		  }, 2300);
	 
		}
		if(args[1] && args[1] === 'invite') {  //WESO#0001
		  if(!system[author.id]) return message.channel.send("**# أنت لست بكلان**");  //WESO#0001
		  let clan = system[author.id].clan;
		  if(system[author.id].clan === 'None') return message.channel.send('**# أنت لست بكلان**');  //WESO#0001
		  if(!clans[clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send('**# يجب عليك ان تكون اداري بالكلان**');
		  let mention = message.mentions.users.first();  //WESO#0001
		  if(!mention) return message.channel.send('**# منشن شخص لدعوته للكلان**');  //WESO#0001
		  if(clans[clan].members.includes(mention.id)) return message.channel.send("**# هذا العضو بالكلان بالفعل**");  //WESO#0001
		  if(clans[clan].members.length === 10) return message.channel.send("**# هذا الكلان وصل للحد الاقصى من الاعضاء يمكنك**");  //WESO#0001
	   //WESO#0001  //WESO#0001  //WESO#0001  //WESO#0001  //WESO#0001
		  let m = await message.channel.send(`**${mention} # \`${clan}\`, تم دعوتك لدخول الكلان**\n\n - لقبول الدعوة \`نعم\`\n - لرفض الدعوة \`لا\``);
		  let awaiting = await message.channel.awaitMessages(r => r.author.id === mention.id, {max: 1, time: 20000, errors:['time']}).then(collected => {
			collected.first().delete().catch();  //WESO#0001
			if(collected.first().content === 'نعم') {  //WESO#0001
			  clans[clan].members.push(mention.id);  //WESO#0001
	 
			  system[author.id].members += 1;  //WESO#0001
	 
	 
			  system[mention.id] = {  //WESO#0001
				clan: clan,
				joinedAt: new Date().toLocaleString(),  //WESO#0001
				clanLevel: 0,
				creator: clans[clan].creator  //WESO#0001
			  };
	 
			  message.channel.send(`**${message.author} # تم قبول الدعوة**`);  //WESO#0001
			}  //WESO#0001
			if(collected.first().content === 'لا') {  //WESO#0001
			  message.channel.send(`**${message.author} # تم رفض الدعوة**`);  //WESO#0001
			} else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){  //WESO#0001
			  return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');  //WESO#0001
			}  //WESO#0001
		  });  //WESO#0001
		}  //WESO#0001
		if(args[1] && args[1] === 'stats') {
		  if(system[author.id].clan === 'None') return message.channel.send('**# يجب ان تكون بكلان لأستخدام هذا الأمر**');  //WESO#0001
		  let clan = system[author.id].clan;  //WESO#0001
		  let embed = new Discord.RichEmbed()  //WESO#0001
			.setAuthor(`${message.author.username} || الكلانات`, message.author.avatarURL)  //WESO#0001
			.setDescription(`الكلان || \`${clan.toString()}\``)  //WESO#0001
			embed.addField('» اسم الكلان', clan, true)  //WESO#0001
			embed.addField('» تاريخ عمل الكلان', clans[clan].createdAt, true);  //WESO#0001
			embed.addField('» تاريخ دخول الكلان', system[author.id].joinedAt, true)  //WESO#0001
			embed.addField('» صاحب الكلان', `<@${clans[clan].creator}>`, true);  //WESO#0001
			embed.addField('» لفل الكلان', clans[clan].level, true);  //WESO#0001
			embed.addField('» عدد اعضاء الكلان', clans[clan].members.length, true);  //WESO#0001
			embed.addField('» عدد التقديمات للكلان', clans[clan].applylist.length, true);  //WESO#0001
			embed.addField('» عدد الادمنية بالكلان', clans[clan].admins.length, true);  //WESO#0001
			embed.addField('» اعضاء الكلان', `${prefix}clan list || يظهرلك رسالة بها اعضاء الكلان`);  //WESO#0001
		  message.channel.send(embed);  //WESO#0001
	 
		}
		if(args[1] && args[1] === 'join') {  //WESO#0001  //WESO#0001
		let clanName = message.content.split(' ').slice(2).join(" ");  //WESO#0001
		if(system[author.id].clan !== 'None') return message.channel.send("**# يجب أن لا تكون بكلان**");  //WESO#0001
		if(!args[2]) return message.channel.send("**# يجب عليك كتابة اسم الكلان**");  //WESO#0001
		if(!clans[clanName]) return message.channel.send("**# هذا الكلان غير موجود**");  //WESO#0001
		if(clans[clanName].applylist.includes(message.author.id)) return message.channel.send("**# لقد قدمت على دخول هذا الكلان مسبقا");  //WESO#0001
	   //WESO#0001  //WESO#0001  //WESO#0001
		clans[clanName].applylist.push(message.author.id);  //WESO#0001
		message.channel.send("**# لقد تم التقديم على دخول الكلان , سيتم الرد عليك من قبل احد ادارة الكلان**");  //WESO#0001
	 
	  }
		if(args[1] && args[1] === 'accept') {  //WESO#0001
		  let mention = message.mentions.users.first();
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");  //WESO#0001
		  if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
		  if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
		  if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};  //WESO#0001
	 
		  if(!clans[system[author.id].clan].applylist.includes(mention.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");
	 
		  clans[system[author.id].clan].applylist.shift(mention.id);  //WESO#0001
		  clans[system[author.id].clan].members.push(mention.id);  //WESO#0001
		  let clan = system[author.id].clan;  //WESO#0001
	 
	 
		  system[mention.id] = {  //WESO#0001
			clan: clan,
			joinedAt: new Date().toLocaleString(),  //WESO#0001
			clanLevel: 0,
			creator: clans[clan].creator  //WESO#0001
		  };  //WESO#0001
	   //WESO#0001
	 
		  mention.send(`**# \`${system[author.id].clan}\`, لقد تم قبولك بالكلان**`).catch();  //WESO#0001
		  message.channel.send(`**# \`${mention.username}\`, لقد تم قبول الشخص ودخوله للكلان**`);  //WESO#0001
		}  //WESO#0001
		if(args[1] && args[1] === 'decline') {  //WESO#0001
		  let mention = message.mentions.users.first();  //WESO#0001
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
		  if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اداري بالكلان لأستخدام هذا الأمر**");
		  if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لأستخدام هذا الأمر**");
		  if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
	 
		  if(!clans[system[author.id].clan].applylist.includes(message.author.id)) return message.channel.send("**# هذا الشخص لم يقم بالتقديم على دخول الكلان**");
	 
		  clans[system[author.id].clan].applylist.shift(mention.id);
	 
		  system[mention.id] = {  //WESO#0001
			clan: clans[system[author.id].clan],  //WESO#0001
			joinedAt: new Date().toLocaleString(),
			clanLevel: 0  //WESO#0001
		  };
	 
	 
		  mention.send(`**# \`${system[author.id].clan}\`, لقد تم رفض دخولك للكلان**`).catch();  //WESO#0001
		  message.channel.send(`**# \`${mention.username}\`, لقد تم رفض دخول الشخص للكلان**`);  //WESO#0001
	   //WESO#0001
		}
		if(args[1] && args[1] === 'promote') {
		  let mention = message.mentions.users.first();
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لترقية عضو بالكلان**");
		  if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");
		  if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
	 
		  if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");  //WESO#0001
		  if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");  //WESO#0001
		  if(clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا العضو لديه ادمن بالفعل**");  //WESO#0001
		  if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");  //WESO#0001
	 
		  clans[system[author.id].clan].admins.push(mention.id);  //WESO#0001
	 
	 
		  mention.send(`**# \`${system[author.id].clan}\`, لقد تم ترقيتك الى ادمن**`).catch();  //WESO#0001
		  message.channel.send(`**# \`${mention.username}\`, لقد تم ترقية العضو الى رتبة ادمن**`);  //WESO#0001
		}  //WESO#0001
		if(args[1] && args[1] === 'demote') {  //WESO#0001
		  let mention = message.mentions.users.first();  //WESO#0001
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");  //WESO#0001
		  if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر لضاحب الكلان فقط**");  //WESO#0001
		  if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لأعطائه الترقية**");  //WESO#0001
		  if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};  //WESO#0001
	   //WESO#0001
		  if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");  //WESO#0001
		  if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");  //WESO#0001
		  if(!clans[system[author.id].clan].admins.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس ادمن بالكلان**");  //WESO#0001
		  if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك اعطاء نفسك ترقية**");  //WESO#0001
	   //WESO#0001
		  clans[system[author.id].clan].admins.shift(mention.id);  //WESO#0001
	 
		  mention.send(`**# \`${system[author.id].clan}\`, لقد تم ازالتك من منصب الادمن**`).catch();
		  message.channel.send(`**# \`${mention.username}\`, لقد تم ازالة الادمنية من العضو**`);
		}
		if(args[1] && args[1] === 'rename') {
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  let newName;
		  let oldName = clans[system[author.id].clan];
		  if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا الأمر مخصص لصاحب الكلان فقط**");
		  if(!args[2]) return message.channel.send("**# يجب عليك تحديد اسم الكلان**");
	 
		  let c = message.content.split(' ').slice(2).join(" ");
		  newName = c;
		  let clanInfo = clans[system[author.id].clan];
		  let m = await message.channel.send(`**# \`${c}\`, هل أنت متأكد من تغيير اسم الكلان \n\n - للتأكيد \`نعم\`\n - للرفض \`لا\`**`);
		  let awaiting = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors: ['time']}).then(c => {
			let collected = c.first();
			collected.delete().catch();
			m.delete().catch();
			if(collected.content === 'نعم') {
			  clans[newName] = {
				name: newName,
				createdAt: clanInfo.createdAt,
				level: clanInfo.level,
				creator: clanInfo.creator,
				members: clanInfo.members,
				applylist: clanInfo.applylist,
				admins: clanInfo.admins
			  };
			  clans[system[author.id].clan] = undefined;
	 
			  system[author.id].clan = newName;
	 
	 
				message.channel.send("**# جارى تغيير الاسم**");
				message.channel.send("**# تم تغيير اسم الكلان بنجاح**");
	 
			} else if(collected.content === 'لا') {
			  message.channel.send(`**# \`${newName}\`, تم الغاء تغيير اسم الكلان**`);
	 
			} else if(collected.first().content !== 'نعم' && collected.first().content !== 'لا'){
			  return message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**')
			}
		  });
		}
		if(args[1] && args[1] === 'list') {
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب عليك ان تكون بكلان لأستخدام هذا الأمر**");
		  let clan = clans[system[author.id].clan];
		  let members = Array.from(clan.members);
		  let admins = Array.from(clan.admins);
		  let applylist = Array.from(clan.applylist);
		  let i = 1;
		  let o = 1;
	 
		  let embed = new Discord.RichEmbed();
		  embed.setAuthor(`${message.author.username} || ${clan.name}`, message.author.avatarURL);
		  embed.addField("# Members", members.map(r => `\`${i++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
		  embed.addField('# Admins', admins.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
		  embed.addField('# Apply', applylist.map(r => `\`${o++}.\` **|| <@${r}>**`).join('\n') || `\`1.\` **|| None**`, true);
		  embed.addField('# Owner', `\`1.\` **|| <@${clan.creator}>**`, true);
		  message.channel.send(embed);
		}
		if(args[1] && args[1] === 'leave') {
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  let m = await message.channel.send("**# هل انت متأكد انك تريد الخروج من الكلان \n\n - للتأكيد \`نعم\`\n - للألغاء \`لا\`**");
		  let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
			let collected = c.first();
			if(collected.content === 'نعم') {
			  clans[system[author.id].clan].members.shift(author.id);
	 
			  system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
	 
	 
			  message.channel.send("**# لقد غادرت الكلان**");
			} else if(collected.content === 'لا') {
			  message.channel.send("**# تم الغاء الخروج من الكلان**");
			} else if(collected.content !== 'نعم' && collected.content === 'لا') {
			  message.channel.send('**# يجب عليك كتابة `نعم` أو `لا`**');
			}
		  });
		}
		if(args[1] && args[1] === 'kick') {
		  let mention = message.mentions.users.first();
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  if(!clans[system[author.id].clan].admins.includes(message.author.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب عليك ان تكون اونر او ادمن بالكلان لأستخدام هذا الامر**");
		  if(!mention) return message.channel.send("**# يجب عليك منشنة عضو بالكلان لطرده**");
		  if(!system[mention.id]) system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
	 
		  if(system[mention.id].clan === 'None') return message.channel.send("**# هذا الشخص ليس بكلان**");
		  if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
		  if(clans[system[author.id].clan].admins.includes(mention.id) && clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# هذا العضو لديه ادمن**");
		  if(mention.id === message.author.id) return message.channel.send("**# لا يمكنك طرد نفسك**");
	 
			let index = clans[system[author.id].clan].members.indexOf(mention.id);
			let index2 = clans[system[author.id].clan].admins.indexOf(mention.id) || "";
			clans[system[author.id].clan].members.splice(index, 1);
			if(clans[system[author.id].clan].admins.includes(mention.id)) clans[system[author.id].clan].admins.splice(index2, 1);
	 
			system[mention.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
	 
	 
			message.channel.send(`**# \`${mention.username}\`, تم طرد الشخص من الكلان**`);
			mention.send(`**# \`${system[author.id].clan}\`, لقد تم طردك من الكلان**`).catch();
		}
		if(args[1] && args[1] === 'ownership') {
		  let mention = message.mentions.users.first();
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  if(!mention) return message.channel.send("**# يجب عليك منشنة شخص لتسليمه الأونر**");
		  if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
		  if(!clans[system[author.id].clan].members.includes(mention.id)) return message.channel.send("**# هذا الشخص ليس بالكلان**");
		  let o = Math.floor(Math.random() * 8) + 1;
		  let t = Math.floor(Math.random() * 8) + 1;
		  let th = Math.floor(Math.random() * 8) + 1;
		  let f = Math.floor(Math.random() * 8) + 1;
		  let number = `${o}${t}${th}${f}`;
	 
		  message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
			return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
		  });
	 
		  let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
		  let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 10000, errors:['time']}).then(c => {
			let collected = c.first();
	 
			if(collected.content === number) {
			  clans[system[author.id].clan].creator = mention.id;
	 
	 
			  m.delete();
			  message.channel.send(`**# \`${mention.username}\`, تم تحويل اونر الكلان للشخص**`);
			} else
			if(collected.content !== number) {
			  m.delete();
			}
		  });
		}
		if(args[1] && args[1] === 'disband') {
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
		  let o = Math.floor(Math.random() * 8) + 1;
		  let t = Math.floor(Math.random() * 8) + 1;
		  let th = Math.floor(Math.random() * 8) + 1;
		  let f = Math.floor(Math.random() * 8) + 1;
		  let fi = Math.floor(Math.random() * 8) + 1;
		  let number = `${o}${t}${th}${f}${fi}`;
	 
		  message.author.send(`- \`${number}\`, أكتب هذا الرقم بالشات للأستمرار`).catch(e => {
			return message.channel.send(`**# يجب عليك فتح خاصك لأستخدام هذا الأمر**`);
		  });
	 
		  let m = await message.channel.send("**# تم ارسال رقم التكملة بالخاص .. يجب عليك كتابة الرقم بالشات للأستمرار**");
		  let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 60000, errors:['time']}).then(c => {
			let collected = c.first();
	 
			if(collected.content === number) {
			  m.delete().catch();
			  collected.delete().catch();
			  let name = system[author.id].clan;
			  let members = clans[system[author.id].clan].members.length;
			  let cvlMembers = Array.from(clans[name].members);
			  for(let i = 0; i < cvlMembers.length; i++) {
				let g = message.users.get(cvlMembers[0]);
				  g.send(`- \`${system[author.id].clan}\`, تم اقفال الكلان`).catch();
				  system[g.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
	 
	 
				cvlMembers.shift();
				if(cvlMembers.length <= 0) {
				  message.channel.send(`- \`${name}\`, تم اقفال الكلان`);
	 
				  system[author.id] = {clan: 'None',joinedAt: new Date().toLocaleString() ,clanLevel: 0};
				  clans[system[author.id].clan] = undefined;
	 
				}
			  }
			} else
			if(collected.content !== number) {
			  m.delete();
			  message.channel.send(`- \`${name}\`, تم الإلغاء`);
			}
		  });
		}
		if(args && args[1] === 'room') {
		  if(system[author.id].clan === 'None') return message.channel.send("**# يجب ان تكون بكلان لأستخدام هذا الأمر**");
		  if(clans[system[author.id].clan].creator !== message.author.id) return message.channel.send("**# يجب أن تكون صاحب الكلان لأستخدام هذا الأمر**");
		  if(message.guild.channels.find(r => r.name.toLowerCase() === system[author.id].clan && r.type === 'text') || message.guild.channels.find(r => r.name === system[author.id].clan && r.type === 'voice')) return message.channel.send("**# الكلان لديه روم بالفعل**");
		  let id = '487721170687229977';
		  let m = await message.channel.send("**# اكتب نوع الروم الان\n\n - `كتابي`\n - `صوتي`**");
		  let awaited = await message.channel.awaitMessages(r => r.author.id === message.author.id, {max: 1, time: 20000, errors:['time']}).then(c => {
			let collected = c.first();
			if(collected.content === 'كتابي') {
			  message.guild.createChannel(system[author.id].clan, 'text').then(c => {
				c.setParent(id);
				c.overwritePermissions(message.guild.id, {
				  SEND_MESSAGES: false,
				  READ_MESSAGES: true,
				  CONNECT: false,
				  SPEAK: false
				});
	 
				let newArray = Array.from(clans[system[author.id].clan].members);
				for(let i = 0; i < newArray.length; i++) {
				  c.overwritePermissions(newArray[0], {
					SEND_MESSAGES: true,
					READ_MESSAGES: true,
					CONNECT: true,
					SPEAK: true
				  });
	 
				  newArray.shift();
				}
			  });
			  m.edit('**# تم عمل الروم**');
			} else if(collected.content === 'صوتي') {
			  message.guild.createChannel(system[author.id].clan, 'voice').then(c => {
				c.setParent(id);
				c.overwritePermissions(message.guild.id, {
				  CONNECT: false,
				  SPEAK: false
				});
	 
				let newArray = Array.from(clans[system[author.id].clan].members);
				for(let i = 0; i < newArray.length; i++) {
				  c.overwritePermissions(newArray[0], {
					CONNECT: true,
					SPEAK: true
				  });
	 
				  newArray.shift();
				}
			  });
			  m.edit('**# تم عمل الروم**');
			}
		  });
		}
	  }
	});

	client.on('message', message => {
		if (message.content == "-جمع") {
			var x = ["212+212=?",
	"321+43=?",
	"4534+23",
	"23+3434=?",
	"2311+32=?",
	"765+343=?",
	"343+1121=?",
	"43234+1=?",
	"10000000000+2=?",
	"232+21=?",
	"12+23=?",                 
	];
			var x2 = ['424',
			"364",
			"4557",
			"3457",
			"2343",
			"1108",
		"1464",
		"43235",
	   "10000000002",
	  "253",
	  "35",
					  
			];
			
			var x3 = Math.floor(Math.random()*x.length)
			message.channel.send(` اول شخص يحل جمع : __**${x[x3]}**_
	لديك 15 ثانية للاجابة`).then(msg1=> {
				var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
					maxMatches : 1,
					time : 15000,
					errors : ['time']
				})
			r.catch(() => {
				return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
				الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
			})
			
			r.then((collected)=> {
				message.channel.send(`${collected.first().author} لقد قمت بحل جمع في الوقت المناسب  `);
			})
			})
		}
	})

	client.on('message', message => {
		if (message.content == "-ضرب") {
			var x = ["9x9=?",
	"8x9=?",
	"4x4=?",
	"2x22=?",
	"12x2=?",
	"7x7=?",
	"5x5=?",
	"9x3=?",
	"2342432x0=?",
	"21321x1=?",
	"3x4x5=?",
	];
			var x2 = ['81',
			"72",
			"16",
			"42",
			"22",
			"49",
			"25",
			"27",
		"0",
		"21321",
		"60",
			
			];
			
			var x3 = Math.floor(Math.random()*x.length)
			message.channel.send(`  اول شخص يحل ضرب :  __**${x[x3]}**__
	لديك 15 ثانية لحل ضرب`).then(msg1=> {
				var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
					maxMatches : 1,
					time : 15000,
					errors : ['time']
				})
			r.catch(() => {
				return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
				الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
			})
			
			r.then((collected)=> {
				message.channel.send(`${collected.first().author}لقد قمت بكتابة حل  في الوقت المناسب  `);
			})
			})
		}
	})

	client.on('message', message => {
		if (message.content == "-طرح") {
			var x = ["4326-2345=?",
	"5822-8547=?",
	"543-823=?",
	"1500-500=?",
	"4322-2768=?",
	"5652-1255=?",
	"3421-11234=?",
	"34545-1233=?",
	"23456-54332=?",
	"2312-3433=?",
	"4321-321=?",
	];
			var x2 = ['1981',
			"-2725",
			"-280",
			"1000",
	"1554",
	"4397",
	"-7813",
	"33312",
	"-30876",
	"1121",
	"4000",

			
			];
			
			var x3 = Math.floor(Math.random()*x.length)
			message.channel.send(`  اول شخص يكتب حل صح :  __**${x[x3]}**__
	لديك 15 ثانية لكتابة حل صحيح`).then(msg1=> {
				var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
					maxMatches : 1,
					time : 15000,
					errors : ['time']
				})
			r.catch(() => {
				return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
				الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
			})
			
			r.then((collected)=> {
				message.channel.send(`${collected.first().author}لقد قمت بكتابة حل في الوقت المناسب  `);
			})
			})
		}
	})

	const pics = JSON.parse(fs.readFileSync('./pics.json' , 'utf8'));
	 client.on('message', message => {
			 if (!message.channel.guild) return;

	  let room = message.content.split(" ").slice(1);
	  let findroom = message.guild.channels.find('name', `${room}`)
	  if(message.content.startsWith(prefix + "setMedia")) {
		  if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
		  if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
		  if(!room) return message.channel.send('Please Type The Channel Name')
		  if(!findroom) return message.channel.send('Cant Find This Channel')
		  let embed = new Discord.RichEmbed()
		  .setTitle('**Done The MediaOnly Code Has Been Setup**')
		  .addField('Channel:', `${room}`)
		  .addField('Requested By', `${message.author}`)
		  .setThumbnail(message.author.avatarURL)
		  .setFooter(`${client.user.username}`)
		  message.channel.sendEmbed(embed)
		  pics[message.guild.id] = {
		  channel: room,
		  onoff: 'On'
		  },
		  fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
		  if (err) console.error(err)
		  
		  })
		}})
		   client.on('message', message => {
  
  if(message.content.startsWith(prefix + "toggleMedia")) {
          if (!message.channel.guild) return;

      if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
      if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
      if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return [message.channel.send(`**The MediaCode Is __𝐎𝐍__ !**`), pics[message.guild.id].onoff = 'On']
        if(pics[message.guild.id].onoff === 'On') return [message.channel.send(`**The MediaCode Is __𝐎𝐅𝐅__ !**`), pics[message.guild.id].onoff = 'Off']
        fs.writeFile("./pics.json", JSON.stringify(pics), (err) => {
          if (err) console.error(err)
          
          })
        }
        
      })
		  
			
             client.on('message', message => {
                       if (!message.channel.guild) return;
  if(message.author.bot) return;
  
        if(!pics[message.guild.id]) pics[message.guild.id] = {
        onoff: 'Off'
      }
        if(pics[message.guild.id].onoff === 'Off') return;

  if(message.channel.name !== `${pics[message.guild.id].channel}`) return;

   let types = [
    'jpg',
    'jpeg',
    'png',
    'http://prntscr.com/'
  ]
   if (message.attachments.size <= 0) {
    message.delete();
    message.channel.send(`${message.author}, This Channel For Media 🖼️ Only !`) 
    .then(msg => {
      setTimeout(() => {
        msg.delete();
      }, 5000)
  })
  return;
}
   if(message.attachments.size >= 1) {
    let filename = message.attachments.first().filename
    console.log(filename);
    if(!types.some( type => filename.endsWith(type) )) {
      message.delete();
      message.channel.send(`${message.author}, This Channel For Media 🖼️ Only !`)
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
  if(message.content.startsWith(prefix + "infoMedia")) {
let embed = new Discord.RichEmbed()
.addField('Channel Status', `${pics[message.guild.id].onoff}`)
.addField('Media Channel', `${pics[message.guild.id].channel}`)
.addField('Requested By', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
  }})

 const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل على شرطي تقول له عندكم مطافي.***',
    '*** صور اي شيء يطلبه منك الاعبين.***',
    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
    '***  تروح عند شخص تقول له احبك. ***',
    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
    '*** ذي المرة لك لا تعيدها.***',
    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
    '***سو مشهد تمثيلي عن مصرية بتولد.***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
 ]
	  client.on('message', message => {
		var prefix = '-';
	  if (message.content.startsWith(prefix + 'حكم')) {
	   var mariam= new Discord.RichEmbed()
	   .setTitle("لعبة حكم ..")
	   .setColor('RANDOM')
	   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
		message.channel.sendEmbed(mariam);
		message.react(":thinking:")
	   }
	 });

	client.on('message', PuP => {
	  let args = PuP.content.split(" ").slice(1).join(" ")
	  if (PuP.content.startsWith(`${prefix}sr`)) {
					if (!PuP.member.hasPermission("MANAGE_SERVER"))  return;
					if(!args) return PuP.channel.send('`**يرجي ادخال اسم السرفر الجديد**`');
					PuP.guild.owner.send(`**ى تغيير اسم السرفر الي ${args}
					بواسطة : <@${PuP.author.id}>**`)
					PuP.guild.setName(args)
					PuP.channel.send(`**تم تغير اسم السيرفر الي : __${args}__ **`);
					
		   }

		   });



	
	


	client.on('message', message => {
	var prefix = "-";
		  if(message.content === prefix + "hchannel") {
		  if(!message.channel.guild) return;
		  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms :x:');
				 message.channel.overwritePermissions(message.guild.id, {
				 READ_MESSAGES: false
	 })
				  message.channel.send('Channel Hided Successfully ! :white_check_mark:  ')
	 }
	});

	client.on('message',async Epic => {
	  var prefix = "-" ;
	  if(Epic.content.startsWith(prefix + "vonline")) {
	  if(!Epic.guild.member(Epic.author).hasPermissions('MANAGE_CHANNELS')) return Epic.reply(':x: **I Dont Have Permissions**');
	  if(!Epic.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return Epic.reply(':x: **You Dont Have Permissions**');
	  Epic.guild.createChannel(`Voice Online : [ ${Epic.guild.members.filter(m => m.voiceChannel).size} ]` , 'voice').then(c => {
		console.log(`Voice Online Is Activation In ${Epic.guild.name}`);
		c.overwritePermissions(Epic.guild.id, {
		  CONNECT: false,
		  SPEAK: false
		});
		setInterval(() => {
		  c.setName(`Voice Online :  ${Epic.guild.members.filter(m => m.voiceChannel).size} .`)
		},1000);
	  });
	  }
	});


	client.on('message', message => {
	var prefix = "-";
	var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
			var args = message.content.split(" ").slice(1);
		if(message.content.startsWith(prefix + 'هل تعلم')) {
			 var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
		}
	});



	client.on('message', message => {
	var prefix = "-";
		  if(message.content === prefix + "schannel") {
		  if(!message.channel.guild) return;
		  if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(':x:');
				 message.channel.overwritePermissions(message.guild.id, {
				 READ_MESSAGES: true
	 })
				  message.channel.send('Done  ')
	 }
	});

	client.on('message', message=> {
		if (message.author.bot) return;
		if (message.isMentioned(client.user))
		{
		message.reply("**My Prefix Is** : `-`")
		}
	});


	client.on("message", async message => {
	  if(message.author.bot) return;
	  if(message.channel.type === "dm") return;

	  let prefix = "-";
	  let messageArray = message.content.split (" ");
	  let cmd = messageArray[0];
	  let args = messageArray.slice(1);



	if(cmd === `${prefix}8ball`){


	if(!args[1]) return message.reply("Please ask a full question!");
	let replies = ["Yes", "No.", "I don't know.", "Ask again later plez."];

	  let result = Math.floor((Math.random() * replies.length));
	  let question = args.slice(1).join(" ");

	  let ballembed = new Discord.RichEmbed ()
	  .setAuthor(message.author.tag)
	  .setColor("#FF9900")
	  .addField("Question", question)
	  .addField("Answer", replies[result]);

	  message.channel.send(ballembed);
	}
	});

	const Love = [  "**احبك / عدد قطرات المـــطر والشجر وامواج البحر والنجوم الي تتزاحم مبهورة في جمال القمر**.",  "**ساعزفك وساجعلك لحنا تغني عليه جميع قصائد العشــق**.",  "**احبك موت... لاتسألني ما الدليل ارأيت رصاصه تسأل القتيل؟**.",  "**ربما يبيع الانسان شيئا قد شراه لاكن لا يبيع قلبا قد هواه**.",  "**و ما عجبي موت المحبين في الهوى ........... و لكن بقاء العاشقين عجيب**.",   "**حلفت / لاحشـــد جيوش الحب واحتلك مسكين ربي بلاك بعـــاشق ارهـــابي**.",   "**العيــن تعشق صورتك ... والقلب يجري فيه دمك وكل مااسمع صوتك ...شفايفي تقول احبك**.",   "**ياحظ المكان فيك..ياحظ من هم حواليك ...ياحظ الناس تشوفك ... وانا مشتاق اليك**.",   "**لو كنت دمعة داخل عيوني بغمض عليك وصدقي ما راح افتح...ولو كان الثمن عيوني**.",   "**سهل اموت عشانك لكن الصعب اعيش بدونك سهل احبك لكن صعب انساك**.",   "**أخشى ان انظر لعيناك وأنا فى شوق ولهيب لرؤياك**.",   "**أتمنى ان اكون دمعة تولد بعينيك واعيش على خديك واموت عند شفتيك**.",   "**أحياناً أرى الحياة لا تساوى إبتسامة لكن دائماً إبتسامتك هى كيانى**.",   "**من السهل أن ينسى الانسان نفسه .. لكن من الصعب ان ينسى نفساً سكنت نفسه !**.",   "**نفسى أكون نجمة سماك .. همسة شفاك .. شمعة مساك .. بس تبقى معايا وانا معاك**.",   "**أهنئ قلبى بحبك وصبر عينى فى بعدك وأقول إنك نور عينى يجعل روحى فدى قلبك**.", ]


	 client.on('message', message => {
	   if (message.content.startsWith("P.love")) {
					if(!message.channel.guild) return message.reply('** This command only for servers**');
	  var embed = new Discord.RichEmbed()
	  .setColor(0xd3d0c4)
		 .setFooter(`PuP System`)
	   .setThumbnail(message.author.avatarURL) 
	 .addField('حب' ,
	  `${Love[Math.floor(Math.random() * Love.length)]}`)
	  message.channel.sendEmbed(embed);
		}
	});

	client.on("message", message => {
			let roleembed = new Discord.RichEmbed()
		.setDescription(`
		أمثله على الأوامر :
		-role @mention rolename : لأعطاء رتبة لعضو معين
		-role all rolename : لأعطاء رتبة للجميع
		-role humans rolename : لأعطاء رتبة للاشخاص فقط
		-role bots rolename : لأعطاء رتبة لجميع البوتات`)
		.setFooter('Requested by '+message.author.username, message.author.avatarURL)
		  var args = message.content.split(' ').slice(1);
		  var msg = message.content.toLowerCase();
		  if( !message.guild ) return;
		  if( !msg.startsWith( prefix + 'role' ) ) return;
		  if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
		  if( msg.toLowerCase().startsWith( prefix + 'roleembed' ) ){
			  if( !args[0] ) return message.channel.sendEmbed(roleembed)
			  if( !args[1] ) return message.channel.sendEmbed(roleembed)
			  var role = msg.split(' ').slice(2).join(" ").toLowerCase();
			  var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first();
			  if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطاءها الى الشخص**' );if( message.mentions.members.first() ){
				  message.mentions.members.first().addRole( role1 );
				  return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء الى **');
			  }
			  if( args[0].toLowerCase() == "all" ){
				  message.guild.members.forEach(m=>m.addRole( role1 ))
				  return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى الكل رتبة**');
			  } else if( args[0].toLowerCase() == "bots" ){
				  message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
				  return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البوتات رتبة**');
			  } else if( args[0].toLowerCase() == "humans" ){
				  message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
				  return  message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الى البشريين رتبة**');
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



	client.on("message", (message) => {
		 
	   if (message.content.startsWith("-new")) {
			const reason = message.content.split(" ").slice(1).join(" ");      
			if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`This server doesn't have a \`Support Team\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
			if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);     
			message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
				let role = message.guild.roles.find("name", "Support Team");
				let role2 = message.guild.roles.find("name", "@everyone");
				c.overwritePermissions(role, {
					SEND_MESSAGES: true,
					READ_MESSAGES: true
				});     
				c.overwritePermissions(role2, {
					SEND_MESSAGES: false,
					READ_MESSAGES: false
				});
				c.overwritePermissions(message.author, {
					SEND_MESSAGES: true,
					READ_MESSAGES: true
				});
				message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
				const embed = new Discord.RichEmbed()
					.setColor(0xCF40FA)
					.addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
					.setTimestamp();
				c.send({
					embed: embed
				});
			}).catch(console.error);
		}
	 
	 
	  if (message.content.startsWith("-close")) {
			if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
	 
		   message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`-confirm\`. This will time out in 10 seconds and be cancelled.`)
			   .then((m) => {
				   message.channel.awaitMessages(response => response.content === '-confirm', {
						   max: 1,
						   time: 10000,
						   errors: ['time'],
					   })     
					   .then((collected) => {
						   message.channel.delete();
					   })     
					   .catch(() => {
						   m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
							   m2.delete();
						   }, 3000);
					   });
			   });
	   }
	 
	});

	
		 let banse = new Set();
	  let bane = JSON.parse(fs.readFileSync('./data1.json' , 'utf8'));
	  client.on('guildBanAdd', function(guild) {
		guild.fetchAuditLogs().then(logs => {
		  const ser = logs.entries.first().executor;
		  if(!bane[ser.id+guild.id]) bane[ser.id+guild.id] = {
			bans: 2
		  }
		  
		  let boner = bane[ser.id+guild.id]
	  banse.add(ser.id)
	  boner.bans = Math.floor(boner.bans+1)
	 
	 
	  setTimeout(() => {
		boner.bans = 2
		banse.delete(ser.id)
	  },8000)
	 
	  if(boner.bans > 2) {
		let roles = guild.members.get(ser.id).roles.array()
	  guild.members.get(ser.id).removeRoles(roles)
	  }
	 
		  })
		  fs.writeFile('./data1.json', JSON.stringify(bane), (err) => {
	  if (err) console.error(err);
	  })
	 
	  })
	  client.on('guildMemberRemove', (u) => {
		  u.guild.fetchAuditLogs().then( s => {
			  var ss = s.entries.first();
			  if (ss.action == `MEMBER_KICK`) {
			  if (!data[ss.executor.id]) {
				  data[ss.executor.id] = {
				  time : 1
				};
				if(antihack[u.guild.id].onoff === 'Off') return;
	 
			} else {  
				data[ss.executor.id].time+=1
			};
			if(antihack[u.guild.id].onoff === 'Off') return;
	  data[ss.executor.id].time = 0
	  u.guild.members.get(ss.executor.id).roles.forEach(r => {
					  r.edit({
						  permissions : []
					  });
					  data[ss.executor.id].time = 0
				  });
			  setTimeout(function(){
				  if (data[ss.executor.id].time <= 3) {
					  data[ss.executor.id].time = 0
				  }
			  })
		  };
		  });
		const data = require("./data.json");
	  });
	  client.on('roleDelete', (u) => {
		  u.guild.fetchAuditLogs().then( s => {
			  var ss = s.entries.first();
			  if (ss.action == `ROLE_DELETE`) {
			  if (!data[ss.executor.id]) {
				  data[ss.executor.id] = {
				  time : 1
				};
				if(antihack[u.guild.id].onoff === 'Off') return;
	 
			} else {
				data[ss.executor.id].time+=1
			};
			if(antihack[u.guild.id].onoff === 'Off') return;
	 
	  data[ss.executor.id].time = 0
	  u.guild.members.get(ss.executor.id).roles.forEach(r => {    
					  r.edit({
						  permissions : []  
					  });
					  data[ss.executor.id].time = 0
				  });
			  setTimeout(function(){
				  if (data[ss.executor.id].time <= 3) {
					  data[ss.executor.id].time = 0
				  }
			  },60000)
		  };
		  });
		const data = require("./data.json");
	  });
	  client.on('channelDelete', (u) => {   
		  u.guild.fetchAuditLogs().then( s => {  
			  var ss = s.entries.first();
			  if (ss.action == `CHANNEL_DELETE`) {  
			  if (!data[ss.executor.id]) {
				  data[ss.executor.id] = {  
				  time : 1
				};
				if(antihack[u.guild.id].onoff === 'Off') return;
			} else {
				data[ss.executor.id].time+=1
			};
			if(antihack[u.guild.id].onoff === 'Off') return;
	  data[ss.executor.id].time = 0
	  u.guild.members.get(ss.executor.id).roles.forEach(r => {
					  r.edit({
						  permissions : []
					  });
					  data[ss.executor.id].time = 0
				  });
			  setTimeout(function(){
				  if (data[ss.executor.id].time <= 3) {  
					  data[ss.executor.id].time = 0
				  }
			  })
		  };
		  });  
		const data = require("./data.json");
	  })	
	 
	 

	client.on('message', message => {
		if (message.content.startsWith("-link")) {

	  message.channel.createInvite({
			thing: true,
			maxUses: 100,
			maxAge: 86400
		}).then(invite =>
		  message.author.sendMessage(invite.url)
		)
	  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

	message.author.send(`**مدة الرابط : يـوم
	عدد استخدامات الرابط : 100**`)


		}
	});



	client.on('message', message=>{  
		if(message.author.bot) return;  
		if(!message.channel.guild) return;
		if(message.content.startsWith(prefix+'setlog')) {  
		if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
		let log = message.guild.channels.find("name", "log")  
		if(log) return message.reply("**يوجد بالفعل روم اللوق**")   
		if(!log) {   
		message.guild.createChannel("log", "text").then(c=> {  
			c.overwritePermissions(message.guild.id, {  
				SEND_MESSAGES: false
		})
	})
	message.channel.send("**✅ ,تم انشاء روم اللوق بنجــاح**")
		}
		}  
		 })
	client.on('error', console.error);
	 
	client.on('messageDelete', message => {  
		if(message.author.bot) return;
		if(message.channel.type === 'dm') return;  
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;  
		if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;  
	 
		var logChannel = message.guild.channels.find(c => c.name === 'log');  
		if(!logChannel) return;  
	 
		let messageDelete = new Discord.RichEmbed()  
		.setTitle('**[MESSAGE DELETE]**')  
		.setColor('RED')  
		.setThumbnail(message.author.avatarURL)  
		.setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
		.setTimestamp()  
		.setFooter(message.guild.name, message.guild.iconURL)  
	 
		logChannel.send(messageDelete);
	});
	client.on('messageUpdate', (oldMessage, newMessage) => {  
	 
		if(oldMessage.author.bot) return;
		if(!oldMessage.channel.type === 'dm') return;
		if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;
	 
		var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	 
		if(oldMessage.content.startsWith('https://')) return;  
	 
		let messageUpdate = new Discord.RichEmbed()
		.setTitle('**[MESSAGE EDIT]**')
		.setThumbnail(oldMessage.author.avatarURL)
		.setColor('BLUE')
		.setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
		.setTimestamp()
		.setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)
	 
		logChannel.send(messageUpdate);
	});
	 
	 

	client.on('roleCreate', role => {
	 
		if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = role.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	 
		role.guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;
	 
			let roleCreate = new Discord.RichEmbed()
			.setTitle('**[ROLE CREATE]**')
			.setThumbnail(userAvatar)  
			.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setColor('GREEN')
			.setTimestamp()
			.setFooter(role.guild.name, role.guild.iconURL)  
	   
			logChannel.send(roleCreate);
		})
	});
	client.on('roleDelete', role => {  
	 
		if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = role.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	 
		role.guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;
	 
			let roleDelete = new Discord.RichEmbed()
			.setTitle('**[ROLE DELETE]**')
			.setThumbnail(userAvatar)  
			.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setColor('RED')
			.setTimestamp()  
			.setFooter(role.guild.name, role.guild.iconURL)
	 
			logChannel.send(roleDelete);  
		})
	});
	client.on('roleUpdate', (oldRole, newRole) => {
	 
		if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	   
		oldRole.guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;
	   
			if(oldRole.name !== newRole.name) {
				let roleUpdateName = new Discord.RichEmbed()
				.setTitle('**[ROLE NAME UPDATE]**')  
				.setThumbnail(userAvatar)  
				.setColor('BLUE')
				.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()
				.setFooter(oldRole.guild.name, oldRole.guild.iconURL)
	 
				logChannel.send(roleUpdateName);  
			}
			if(oldRole.hexColor !== newRole.hexColor) {  
				if(oldRole.hexColor === '#000000') {  
					var oldColor = '`Default`';  
				}else {
					var oldColor = oldRole.hexColor;
				}    
				if(newRole.hexColor === '#000000') {  
					var newColor = '`Default`';  
				}else {
					var newColor = newRole.hexColor;  
				}  
				let roleUpdateColor = new Discord.RichEmbed()  
				.setTitle('**[ROLE COLOR UPDATE]**')  
				.setThumbnail(userAvatar)  
				.setColor('BLUE')  
				.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()  
				.setFooter(oldRole.guild.name, oldRole.guild.iconURL)
	   
				logChannel.send(roleUpdateColor);
			}
			if(oldRole.permissions !== newRole.permissions) {  
				let roleUpdate = new Discord.RichEmbed()  
				.setTitle('**[UPDATE ROLE PERMISSIONS]**')  
				.setThumbnail(userAvatar)  
				.setColor('BLUE')
				.setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()
				.setFooter(oldRole.guild.name, oldRole.guild.iconURL)
			   
				logChannel.send(roleUpdate) 
			}
		})
	});
	 
	 

	client.on('channelCreate', channel => { 
	  
		if(!channel.guild) return;
		if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = channel.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	 
		if(channel.type === 'text') {
			var roomType = 'Text';
		}else
		if(channel.type === 'voice') { 
			var roomType = 'Voice';
		}else
		if(channel.type === 'category') { 
			var roomType = 'Category';
		}
	 
		channel.guild.fetchAuditLogs().then(logs => { 
			var userID = logs.entries.first().executor.id; 
			var userAvatar = logs.entries.first().executor.avatarURL;
	   
			let channelCreate = new Discord.RichEmbed() 
			.setTitle('**[CHANNEL CREATE]**') 
			.setThumbnail(userAvatar)
			.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setColor('GREEN')
			.setTimestamp()
			.setFooter(channel.guild.name, channel.guild.iconURL)
	 
			logChannel.send(channelCreate);
		})
	}); 
	client.on('channelDelete', channel => { 
		if(!channel.guild) return;
		if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = channel.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return; 
	 
		if(channel.type === 'text') { 
			var roomType = 'Text';
		}else
		if(channel.type === 'voice') { 
			var roomType = 'Voice';
		}else
		if(channel.type === 'category') { 
			var roomType = 'Category';
		}
	 
		channel.guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;
	 
			let channelDelete = new Discord.RichEmbed()
			.setTitle('**[CHANNEL DELETE]**')
			.setThumbnail(userAvatar) 
			.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setColor('RED')
			.setTimestamp()
			.setFooter(channel.guild.name, channel.guild.iconURL)
	 
			logChannel.send(channelDelete); 
		})
	});
	client.on('channelUpdate', (oldChannel, newChannel) => {
		if(!oldChannel.guild) return;
	 
		var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	 
		if(oldChannel.type === 'text') {
			var channelType = 'Text';
		}else
		if(oldChannel.type === 'voice') {
			var channelType = 'Voice';
		}else
		if(oldChannel.type === 'category') {
			var channelType = 'Category';
		}
	   
		oldChannel.guild.fetchAuditLogs().then(logs => { 
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;

			if(oldChannel.name !== newChannel.name) {
				let newName = new Discord.RichEmbed()
				.setTitle('**[CHANNEL EDIT]**')
				.setThumbnail(userAvatar)
				.setColor('BLUE')
				.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp() 
				.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL) 
	 
				logChannel.send(newName); 
			}
			if(oldChannel.topic !== newChannel.topic) { 
				let newTopic = new Discord.RichEmbed() 
				.setTitle('**[CHANNEL EDIT]**') 
				.setThumbnail(userAvatar)
				.setColor('BLUE')
				.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()
				.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)
	 
				logChannel.send(newTopic);
			}
		})
	});
	 
	 

	client.on('guildBanAdd', (guild, user) => {
	 
		if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = guild.channels.find(c => c.name === 'log'); 
		if(!logChannel) return; 
	 
		guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;
	 
			if(userID === client.user.id) return;
	 
			let banInfo = new Discord.RichEmbed()
			.setTitle('**[BANNED]**')
			.setThumbnail(userAvatar)
			.setColor('DARK_RED')
			.setDescription(`**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(guild.name, guild.iconURL)
	 
			logChannel.send(banInfo);
		})
	});
	client.on('guildBanRemove', (guild, user) => {
		if(!guild.member(client.user).hasPermission('EMBED_LINKS')) return; 
		if(!guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = guild.channels.find(c => c.name === 'log'); 
		if(!logChannel) return;
	 
		guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userAvatar = logs.entries.first().executor.avatarURL;
	 
			let unBanInfo = new Discord.RichEmbed()
			.setTitle('**[UNBANNED]**')
			.setThumbnail(userAvatar)
			.setColor('GREEN')
			.setDescription(`**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(guild.name, guild.iconURL)
	 
			logChannel.send(unBanInfo);
		})
	});
	client.on('guildMemberUpdate', (oldMember, newMember) => { 
		var logChannel = oldMember.guild.channels.find(c => c.name === 'log'); 
		if(!logChannel) return;
	 
		oldMember.guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id; 
			var userAvatar = logs.entries.first().executor.avatarURL;
			var userTag = logs.entries.first().executor.tag;
	 
			if(oldMember.nickname !== newMember.nickname) {
				if(oldMember.nickname === null) {
					var oldNM = '\`\`اسمه الاصلي\`\`';
				}else {
					var oldNM = oldMember.nickname;
				}
				if(newMember.nickname === null) {
					var newNM = '\`\`اسمه الاصلي\`\`'; 
				}else {
					var newNM = newMember.nickname;
				}
	 
				let updateNickname = new Discord.RichEmbed()
				.setTitle('**[UPDATE MEMBER NICKNAME]**')
				.setThumbnail(userAvatar)
				.setColor('BLUE')
				.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()
				.setFooter(oldMember.guild.name, oldMember.guild.iconURL)
	  
				logChannel.send(updateNickname);
			}
			if(oldMember.roles.size < newMember.roles.size) {
				let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();
	 
				let roleAdded = new Discord.RichEmbed()
				.setTitle('**[ADDED ROLE TO MEMBER]**') 
				.setThumbnail(oldMember.guild.iconURL)
				.setColor('GREEN')
				.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()
				.setFooter(userTag, userAvatar) 
	 
				logChannel.send(roleAdded);
			}
			if(oldMember.roles.size > newMember.roles.size) {
				let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();
	 
				let roleRemoved = new Discord.RichEmbed()
				.setTitle('**[REMOVED ROLE FROM MEMBER]**')
				.setThumbnail(oldMember.guild.iconURL)
				.setColor('RED')
				.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
				.setTimestamp()
				.setFooter(userTag, userAvatar) 
	 
				logChannel.send(roleRemoved);
			}
		})
		if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
			let newOwner = new Discord.RichEmbed()
			.setTitle('**[UPDATE GUILD OWNER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL)
	 
			logChannel.send(newOwner);
		}
	});
	client.on('guildMemberAdd', member => {
	  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
	  if(!logChannel) return;
	  
	  let newMember = new Discord.RichEmbed()
	  .setTitle('**[NEW MEMBER ADDED]**') 
	  .setThumbnail(member.user.avatarURL)
	  .setColor('GREEN')
	  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
	  .setTimestamp()
	  .setFooter(member.user.tag, member.user.avatarURL)
	 
	  logChannel.send(newMember);
	});
	function Days(date) {
		let now = new Date();
		let diff = now.getTime() - date.getTime();
		let days = Math.floor(diff / 86400000);
		return days + (days == 1 ? " day" : " days") + " ago";
	}
	client.on('guildMemberRemove', member => { 
	  var logChannel = member.guild.channels.find(c => c.name === 'log'); 
	  if(!logChannel) return; 
	 
	  let leaveMember = new Discord.RichEmbed()
	  .setTitle('**[LEAVE MEMBER]**')
	  .setThumbnail(member.user.avatarURL)
	  .setColor('GREEN')
	  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)  
	  .setTimestamp() 
	  .setFooter(member.user.tag, member.user.avatarURL)
	  
	  logChannel.send(leaveMember);
	});
	 
	 

	client.on('voiceStateUpdate', (voiceOld, voiceNew) => {
	 
		if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
		if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;
	 
		var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
		if(!logChannel) return;
	 
		voiceOld.guild.fetchAuditLogs().then(logs => {
			var userID = logs.entries.first().executor.id;
			var userTag = logs.entries.first().executor.tag;
			var userAvatar = logs.entries.first().executor.avatarURL;
	 

			if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
				let serverMutev = new Discord.RichEmbed()
				.setTitle('**[VOICE MUTE]**')
				.setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
				.setColor('RED')
				.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
				.setTimestamp()
				.setFooter(userTag, userAvatar)
	 
				logChannel.send(serverMutev);
			}

			if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
				let serverUnmutev = new Discord.RichEmbed()
				.setTitle('**[VOICE UNMUTE]**')
				.setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
				.setColor('GREEN')
				.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
				.setTimestamp()
				.setFooter(userTag, userAvatar)
	 
				logChannel.send(serverUnmutev);
			}

			if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
				let serverDeafv = new Discord.RichEmbed()
				.setTitle('**[VOICE DEAFEN]**')
				.setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
				.setColor('RED')
				.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
				.setTimestamp()
				.setFooter(userTag, userAvatar)
	 
				logChannel.send(serverDeafv);
			}

			if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
				let serverUndeafv = new Discord.RichEmbed() 
				.setTitle('**[VOICE UNDEAFEN]**')
				.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
				.setColor('GREEN')
				.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
				.setTimestamp()
				.setFooter(userTag, userAvatar)
	 
				logChannel.send(serverUndeafv); 
			}
		})

		if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
			let voiceJoin = new Discord.RichEmbed()
			.setTitle('**[JOIN VOICE ROOM]**')
			.setColor('GREEN')
			.setThumbnail(voiceOld.user.avatarURL)
			.setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
			.setTimestamp()
			.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
	 
			logChannel.send(voiceJoin);
		}

		if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
			let voiceLeave = new Discord.RichEmbed()
			.setTitle('**[LEAVE VOICE ROOM]**')
			.setColor('GREEN')
			.setThumbnail(voiceOld.user.avatarURL)
			.setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
			.setTimestamp()
			.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
	 
			logChannel.send(voiceLeave); 
		}

		if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
			let voiceLeave = new Discord.RichEmbed()
			.setTitle('**[CHANGED VOICE ROOM]**')
			.setColor('GREEN')
			.setThumbnail(voiceOld.user.avatarURL)
			.setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
			.setTimestamp()
			.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)
	 
			logChannel.send(voiceLeave);
		}  
	}); 



	client.on("message", msg => {
  if(msg.content === '-' + "id") {
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

	client.on('message',function(message) {
		let prefix = "-";
	let args = message.content.split(" ").slice(1).join(" ");
	if(message.content.startsWith(prefix + "say")) {
	if(!args) return;
	message.channel.send(`**${args}**`);
	}
	});

	client.on('message', message => {
    if (message.content.startsWith("-hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("**```اكتب اسم الشخص الي تبي يتهكر```**");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓ ] 20%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 30%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 40%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 50%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 70%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 85%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يتم تهكير ').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: تحديث بسيط' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: يرجى انتضار ثواني 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100% virus added').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send('** ! تمت عمليه التهكير بنجاح **')
           }, 33000)
           });
         }
})
	




	client.on('message', message =>{
		let args = message.content.split(' ');
		let prefix = '-'; 
		
		if(args[0] === `-{prefix}avatar`){
			let mentions = message.mentions.members.first()
			if(!mentions) {
			  let sicon = message.author.avatarURL
			  let embed = new Discord.RichEmbed()
			  .setImage(message.author.avatarURL)
			  .setColor("#f7abab") 
			  .setDescription(`**${message.author.username}#${message.author.discriminator}**'s avatar :`);
			  message.channel.send({embed})
			} else {
			  let sicon = mentions.user.avatarURL
			  let embed = new Discord.RichEmbed()
			  .setColor("#f7abab")
			  .setDescription(`**${mentions.user.username}#${mentions.user.discriminator}**'s avatar :`)
			  .setImage(sicon)
			  message.channel.send({embed})
			}
		};
	});




	client.on('message' , message => {
	  var prefix = "-"
	  
	  if (message.author.bot) return;
	  if (message.content.startsWith(perfix+"report")) {
	  if (!message.channel.guild) return;
	  
	  
	  
	  let args = message.content.split(" ").slice(1).join(" ");
	  
	  
	  
	 client.users.get("337647196235366401").send(
      "\n" + "**" + "● السيرفر :" + "**" +
      "\n" + "**" + "» " + message.guild.name + "**" +
      "\n" + "**" + " ● المرسل : " + "**" +
      "\n" + "**" + "» " + message.author.tag + "**" +
      "\n" + "**" + " ● الرسالة : " + "**" +
      "\n" + "**" + args + "**")
  
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.username, message.author.avatarURL)
       .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
       .setThumbnail(message.author.avatarURL)
       .setFooter("ScriptBot | System")
                                                  
  
  message.channel.send(embed);
  
  
  } });










	client.on('message', message => { 
									if(!message.channel.guild) return;
							if (message.content.startsWith(prefix + 'ping')) {
								if(!message.channel.guild) return;
								var msg = `${Date.now() - message.createdTimestamp}`
								var api = `${Math.round(client.ping)}`
								if (message.author.bot) return;
							let embed = new Discord.RichEmbed()
							.setAuthor(message.author.username,message.author.avatarURL)
							.setColor('#5016f3')
							.addField('**Time Taken:**',msg + " ms :signal_strength: ")
							.addField('**WebSocket:**',api + " ms :signal_strength: ")
							.setTimestamp()
			message.channel.send({embed:embed});
							}
						});

	client.on("guildMemberAdd", member => {
	  member.createDM().then(function (channel) {
	  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
	:crown:اسمك   ${member}:crown:  
	 العضو رقم ${member.guild.memberCount} `) 
	}).catch(console.error)
	})

		client.on('message', message => {
		if(message.content.includes('discord.gg/')) {
			if(message.member.hasPermission('ADMINISTRATOR')) return;
			message.delete();
			message.guild.member(message.author).addRole(message.guild.roles.find(r => r.name === 'Muted'));
			let embedP = new Discord.RichEmbed()
			.setTitle('❌ | You are have mute')
			.setAuthor(message.author.username, message.author.avatarURL)
			.addField(`** لقد قمت بنشر روابط ديسكورد   **`)
			.addField(`by`,`Blomo bot.support. `)
			.setColor('RED')
			.setThumbnail(message.author.avatarURL)
			.setFooter(`${message.guild.name} Server`, message.guild.iconURL)
			
			message.channel.send(embedP);
		}
	});



	client.on('message', message => {
	var prefix = "-";
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

	client.on('message', message => {
		if (message.content.startsWith("-bot")) {
		message.channel.send({
			embed: new Discord.RichEmbed()
				.setAuthor(client.user.username,client.user.avatarURL)
				.setThumbnail(client.user.avatarURL)
				.setColor('RANDOM')
				.setTitle('Info Vertix.Bot.')
				.addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
				.addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
				.addField('``servers``', [client.guilds.size], true)
				.addField('``channels``' , `[ ${client.channels.size} ]` , true)
				.addField('``Users``' ,`[ ${client.users.size} ]` , true)
				.addField('``My Name``' , `[ ${client.user.tag} ]` , true)
				.addField('``My ID``' , `[ ${client.user.id} ]` , true)
				.addField('``Owner bot``' , `[ <@553105229588070400> ]` , true)
				.addField('``My Prefix``' , `[ - ]` , true)
			  .addField('``My Language``' , `[ Java Script ]` , true)
				 .addField('``bot support ``' , `[ https://discord.gg/tVs6YC ]` , true)
		})
	}
	});

	client.on("message", message => {
		const prefix = "-"
				  
			  if(!message.channel.guild) return;
	   if(message.author.bot) return;
		  if(message.content === prefix + "savatar"){
			  const embed = new Discord.RichEmbed()
	  
		  .setTitle(`ServerAvatar${message.guild.name}   `)
	  .setAuthor(message.author.username, message.guild.iconrURL)
		.setColor(0x164fe3)
		.setImage(message.guild.iconURL)
		.setURL(message.guild.iconrURL)
						.setTimestamp()

	   message.channel.send({embed});
		  }
	  });


	client.on('message', function(message) {
		if(!message.channel.guild) return;
		if (message.author.bot) return;
		if (message.author.id === client.user.id) return;
		if (message.author.equals(client.user)) return;
		if (!message.content.startsWith(prefix)) return;
		
		var args = message.content.substring(prefix.length).split(' ');
		switch (args[0].toLocaleLowerCase()) {
		case "clear" :
    case "مسح" :
		message.delete()
		if(!message.channel.guild) return
		if(message.member.hasPermission(0x20000)){ if (!args[1]) {
		message.channel.fetchMessages()
		.then(messages => {
		message.channel.bulkDelete(messages);
		var messagesDeleted = messages.array().length;
		message.channel.sendMessage(' '+ "**```cs\n" + messagesDeleted + " " +  ': عدد الرسائل التي تم مسحها بلشات العام ' + "```**").then(m => m.delete(500000000));
	  message.delete(6000000);
		})
		} else {
		let messagecount = parseInt(args[1]);
		message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
		message.channel.sendMessage(' '+ "**```fix\n" + args[1] + " " +  ':   عدد الرسائل التي تم مسحها بلشات العام' + "```**").then(m => m.delete(50000000));
		message.delete(6000000);
		}
		} else {
		var manage = new Discord.RichEmbed()
		.setDescription('You Do Not Have Permission MANAGE_MESSAGES :(')
		.setColor("0x5016f3")
		message.channel.sendEmbed(manage)
		return;
		}
		}
		});
		
	

	
		
	

	  
		   





	client.on('message', message => {
		if(message.content == '-members') {
		const embed = new Discord.RichEmbed()
		.setDescription(`**حالات الاعضاء🔋
	:green_heart: اونلاين   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
	:heart:مشغول       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
	:yellow_heart: خامل      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
	:black_heart: اوفلاين   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
	:blue_heart:   الكل  ${message.guild.memberCount}**`)         
			 message.channel.send({embed});

		}
	  });

	client.on('message',message =>   {
  if(message.channel.type == 'dm') return;
  if(message.content.startsWith(prefix + "talk")) {
      var attentions = {};
      attentions[message.guild.id] = { };
      message.channel.send( message.author + ', **Wait , PuP System**').then( (m) =>{
      m.edit( message.author + ', **أرسل أيدي الروم**' )
      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 600000 } ).then ( (m1) => {
      m1 = m1.first();
      attentions[message.guild.id]['id'] = m1.content;
      m1.delete();
m1 = message.guild.channels.get(`${attentions[message.guild.id]['id']}`)
if(!m1) return message.reply(`**الأيدي هذا غير صحيح \`${attentions[message.guild.id]['id']}\`**`);
 
      m.edit(message.author+"**أرسل الرساله المراد توجيهها للروم**")
      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 600000 }).then ( (m2) => {
      m2 = m2.first();
      attentions[message.guild.id]['msg'] = m2.content;
      m2.delete();
      m.delete();
      message.channel.send(`**هل تريد إرسال في روم <#${attentions[message.guild.id]['id']}>
${attentions[message.guild.id]['msg']}**`).then(msge => {
      msge.react('✅').then( r => {
      msge.react('❌')
      const oneFilterBB = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
      const threeFilterBB = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
      const oneBY = msge.createReactionCollector(oneFilterBB, {maxMatches : 1,time : 400000,});
      const threeBY = msge.createReactionCollector(threeFilterBB, {maxMatches : 1,time : 400000,});
      oneBY.on('collect', r => {
      msge.delete();
      message.guild.channels.get(`${attentions[message.guild.id]['id']}`).send(`${attentions[message.guild.id]['msg']}`)
      }).catch(RebeL =>{ console.log('`Error`: ' + RebeL)});
          threeBY.on('collect', r => {
      msge.delete();
      })
      })
  })
      });
      });
      });
     
    }
    });




	client.on('message', function(msg) {
	  if(msg.content.startsWith ('-server')) {
		if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للاداره فقط**');         
		let embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(msg.guild.iconURL)
		.addField(':globe_with_meridians: **اسم السيرفر : **' , `**[ ${msg.guild.name } ]**`,true)
		.addField(':earth_africa: ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
		.addField(':military_medal:** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
		.addField(':bust_in_silhouette:** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
		.addField('<:658650535683162143:667354588575432714>** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
	  .addField('<:658650534315556874:667354587971452938>** عدد الاعضاء المشغولين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'dnd').size} ]**`,true)
	  .addField('<:658650534743638017:667354588382232606>** عدد الاعضاء الخاملين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'idle').size} ]**`,true)
     .addField(':black_circle:** عدد الاعضاء الوفلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'offline').size} ]**`,true)
		.addField(':pencil:** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
		.addField(':loud_sound:** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
		.addField(':crown:** صاحب السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
		.addField(':id:** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
		.addField(':date:** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
		msg.channel.send({embed:embed});
	  }
	});

	 const cuttweet = [
		 'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
		 'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
		 'كت تويت | الحرية لـ ... ؟',
		 'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
		 'كت تويت ‏| كلمة للصُداع؟',
		 'كت تويت ‏| ما الشيء الذي يُفارقك؟',
		 'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
		 'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
		 'كت تويت | بعد 10 سنين ايش بتكون ؟',
		 'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
		 '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
		 'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
		 '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
		 '‏كت تويت | وش يفسد الصداقة؟',
		 '‏كت تويت | شخص لاترفض له طلبا ؟',
		 '‏كت تويت | كم مره خسرت شخص تحبه؟.',
		 '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
		 '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
		 '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
		 '‏كت تويت |أقوى كذبة مشت عليك ؟',
		 '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
		 'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
		 '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
		 '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
		 '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
		 '‏كت تويت | مطلبك الوحيد الحين ؟',
		 '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
	]
	 
	 client.on('message', message => {
	   if (message.content.startsWith("-cuttweet")) {
					if(!message.channel.guild) return message.reply('** This command only for servers**');
	  var embed = new Discord.RichEmbed()
	  .setColor('RANDOM')
	   .setThumbnail(message.author.avatarURL)
	 .addField('لعبه كت تويت' ,
	  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
	  message.channel.sendEmbed(embed);
	  console.log('[id] Send By: ' + message.author.username)
		}
	});

	client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
  if(!message.channel.guild) return message.reply('** This command only for servers **')
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command === "kill"){

   var sabotage = message.mentions.users.first();
   if(sabotage == message.author)return message.reply(`**الانتحار مو زين و الله**`);
    if(sabotage === client.user) return message.reply(`** تبي تقتلني ؟ **`);
  if (sabotage < 1) {
    message.delete();
    return message.channel.sendMessage('ضع شيئا للقتل، مثل ذكر مستخدم، أو استخدام رمز تعبيري');
  }
  if (!sabotage) return message.channel.send(`Please Mention A Member to Kill :warning:`)
  message.channel.send("▄︻̷̿┻̿═━一 ${sabotage")
  .then(msg =>{
  msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :three:`);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :two:`);
  }, 1000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 ${sabotage} :one:`);
  }, 2000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :boom:`);
  }, 3000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :fire:`);
  }, 4000);
  setTimeout(function() {
    msg.edit(`▄︻̷̿┻̿═━一 :skull:`);
  }, 5000);
  msg.delete(6000)
  message.delete()
  })
  message.channel.send("**تم اخفاء الجريمة بنجاح 🕳 **").then(msg => msg.delete(7000));
    }
});


	const Sra7a = [
		 'صراحه  |  صوتك حلوة؟',
		 'صراحه  |  التقيت الناس مع وجوهين؟',
		 'صراحه  |  شيء وكنت تحقق اللسان؟',
		 'صراحه  |  أنا شخص ضعيف عندما؟',
		 'صراحه  |  هل ترغب في إظهار حبك ومرفق لشخص أو رؤية هذا الضعف؟',
		 'صراحه  |  يدل على أن الكذب مرات تكون ضرورية شي؟',
		 'صراحه  |  أشعر بالوحدة على الرغم من أنني تحيط بك كثيرا؟',
		 'صراحه  |  كيفية الكشف عن من يكمن عليك؟',
		 'صراحه  |  إذا حاول شخص ما أن يكرهه أن يقترب منك ويهتم بك تعطيه فرصة؟',
		 'صراحه  |  أشجع شيء حلو في حياتك؟',
		 'صراحه  |  طريقة جيدة يقنع حتى لو كانت الفكرة خاطئة" توافق؟',
		 'صراحه  |  كيف تتصرف مع من يسيئون فهمك ويأخذ على ذهنه ثم ينتظر أن يرفض؟',
		 'صراحه  |  التغيير العادي عندما يكون الشخص الذي يحبه؟',
		 'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
		 'صراحه  |  نظرة و يفسد الصداقة؟',
		 'صراحه  |  ‏‏إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
		 'صراحه  |  شخص معك بالحلوه والمُره؟',
		 'صراحه  |  ‏هل تحب إظهار حبك وتعلقك بالشخص أم ترى ذلك ضعف؟',
		 'صراحه  |  تأخذ بكلام اللي ينصحك ولا تسوي اللي تبي؟',
		 'صراحه  |  وش تتمنى الناس تعرف عليك؟',
		 'صراحه  |  ابيع المجرة عشان؟',
		 'صراحه  |  أحيانا احس ان الناس ، كمل؟',
		 'صراحه  |  مع مين ودك تنام اليوم؟',
		 'صراحه  |  صدفة العمر الحلوة هي اني؟',
		 'صراحه  |  الكُره العظيم دايم يجي بعد حُب قوي " تتفق؟',
		 'صراحه  |  صفة تحبها في نفسك؟',
		 'صراحه  |  ‏الفقر فقر العقول ليس الجيوب " ، تتفق؟',
		 'صراحه  |  تصلي صلواتك الخمس كلها؟',
		 'صراحه  |  ‏تجامل أحد على راحتك؟',
		 'صراحه  |  اشجع شيء سويتة بحياتك؟',
		 'صراحه  |  وش ناوي تسوي اليوم؟',
		 'صراحه  |  وش شعورك لما تشوف المطر؟',
		 'صراحه  |  غيرتك هاديه ولا تسوي مشاكل؟',
		 'صراحه  |  ما اكثر شي ندمن عليه؟',
		 'صراحه  |  اي الدول تتمنى ان تزورها؟',
		 'صراحه  |  متى اخر مره بكيت؟',
		 'صراحه  |  تقيم حظك ؟ من عشره؟',
		 'صراحه  |  هل تعتقد ان حظك سيئ؟',
		 'صراحه  |  شـخــص تتمنــي الإنتقــام منـــه؟',
		 'صراحه  |  كلمة تود سماعها كل يوم؟',
		 'صراحه  |  **هل تُتقن عملك أم تشعر بالممل؟',
		 'صراحه  |  هل قمت بانتحال أحد الشخصيات لتكذب على من حولك؟',
		 'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
		 'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
		 '‏صراحه | هل جرحت شخص تحبه من قبل ؟',
		 'صراحه  |  ما هي العادة التي تُحب أن تبتعد عنها؟',
		 '‏صراحه | هل تحب عائلتك ام تكرههم؟',
		 '‏صراحه  |  من هو الشخص الذي يأتي في قلبك بعد الله – سبحانه وتعالى- ورسوله الكريم – صلى الله عليه وسلم؟',
		 '‏صراحه  |  هل خجلت من نفسك من قبل؟',
		 '‏صراحه  |  ما هو ا الحلم  الذي لم تستطيع ان تحققه؟',
		 '‏صراحه  |  ما هو الشخص الذي تحلم به كل ليلة؟',
		 '‏صراحه  |  هل تعرضت إلى موقف مُحرج جعلك تكره صاحبهُ؟',
		  '‏صراحه  |  هل قمت بالبكاء أمام من تُحب؟',
		 '‏صراحه  |  ماذا تختار حبيبك أم صديقك؟',
		 '‏صراحه  | هل حياتك سعيدة أم حزينة؟',
		 'صراحه  |  ما هي أجمل سنة عشتها بحياتك؟',
		 '‏صراحه  |  ما هو عمرك الحقيقي؟',
		 '‏صراحه  |  ما اكثر شي ندمن عليه؟',
		 'صراحه  |  ما هي أمنياتك المُستقبلية؟‏',
		 'صراحه | نفسك فـ ايه ؟',
		 'صراحه | هل تحب فتاه او احببت من قبل ؟',
		 'صراحه | هل شكلك حلو او جيد او متوسط او سئ ؟',
		 'صراحه | ما هي الماده الدراسيه التي تحبها اكثر وتفضلها؟',
		 'صراحه | هل تحب مدرستك ؟',
		 'صراحه | ما الشئ الذي تتمني ان يحصل ؟',
		 'صراحه | هل تحب عائلتك ؟',
	]
	   client.on('message', message => {
		   if (message.author.bot) return;
	 if (message.content.startsWith('-sara7a')) {
		 if(!message.channel.guild) return message.reply('** This command only for servers **');
	  var client= new Discord.RichEmbed()
	  .setTitle("لعبة صراحة ..")
	  .setColor('RANDOM')
	  .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
	  .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
					  .setTimestamp()

	   message.channel.sendEmbed(client);
	   message.react("🌍")
	 }
	});

	client.on('message', message => {
				  if (!message.channel.guild) return;
		  if(message.content =='-count')
		  var IzRo = new Discord.RichEmbed()
		  .setThumbnail(message.author.avatarURL)
		  .setFooter(message.author.username, message.author.avatarURL)
		  .setTitle('🌍| Members info')
		  .addBlankField(true)
		  .addField('Mmeber Count',`${message.guild.memberCount}`)
		  message.channel.send(IzRo);
		});

	

	var Za7f = [
	  "**صورة وجهك او رجلك او خشمك او يدك**.",
	  "**اصدر اي صوت يطلبه منك الاعبين**.",
	  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
	  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
	  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
	  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
	  "**ذي المرة لك لا تعيدها**.",
	  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
	  "**صور اي شيء يطلبه منك الاعبين**.",
	  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
	  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
	  "**سو مشهد تمثيلي عن مصرية بتولد**.",
	  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
	  "**ذي المرة لك لا تعيدها**.",
	  "**تعطي اي شخص 5 الاف كرديت**.",
	  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
	  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
	  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
	  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
	  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
	  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
	  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
	  "**اتصل على امك و قول لها انك تحبها :heart:**.",
	  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
	  "**قل لواحد ماتعرفه عطني كف**.",
	  "**منشن الجميع وقل انا اكرهكم**.",
	  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
	  "**روح المطبخ و اكسر صحن او كوب**.",
	  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
	  "**قول لاي بنت موجود في الروم كلمة حلوه**.",
	  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
	  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
	  "**قول قصيدة **.",
	  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
	  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
	  "**اول واحد تشوفه عطه كف**.",
	  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
	  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
	  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
	  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
	  "**تاخذ عقابين**.",
	  "**قول اسم امك افتخر بأسم امك**.",
	  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
	  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
	  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
	  "**تتصل على الوالده  و تقول لها خطفت شخص**.",
	  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
	  "**تصل على الوالده  و تقول لها  احب وحده**.",
		"**تتصل على شرطي تقول له عندكم مطافي**.",
		"**خلاص سامحتك**.",
		"** تصيح في الشارع انا  مجنوون**.",
		"** تروح عند شخص تقول له احبك**.",

	];

	client.on('message', message => {
		if (message.content === "-rooms") {
			var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
			const embed = new Discord.RichEmbed()
			.setColor('RANDOM')
			.addField('rooms:',`**[${channels}]**`)
			message.channel.sendEmbed(embed);
		}
	});

	client.on('message',async message => {
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var gMembers;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration / 60000 ,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "giveaway")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(':heavy_multiplication_x:| **يجب أن يكون لديك خاصية التعديل على السيرفر**');
    message.channel.send(`:eight_pointed_black_star:| **اكتب اسم روم الجيفاواي**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(':heavy_multiplication_x:| **i Found It :(**');
        room = collected.first().content;
        collected.first().delete();
        msg.edit(':eight_pointed_black_star:| **كم تريد وقت الجيفواي**').then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(isNaN(collected.first().content)) return message.channel.send(':heavy_multiplication_x:| **انا لم افهم هاذا الوقت**');
            duration = collected.first().content * 60000;
            collected.first().delete();
            msg.edit(':eight_pointed_black_star:| **ما هي الجائزة؟**').then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎉 To Enter! \nTime remaining : ${duration / 60000} **Minutes**\n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(' :heavy_check_mark: **تم صنع الجيفواي** :heavy_check_mark:' , {embed: giveEmbed}).then(m => {
                     let re = m.react('🎉');
                     setTimeout(() => {
                       let users = m.reactions.get("🎉").users;
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField('Giveaway Ended !🎉',`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit('** 🎉 GIVEAWAY ENDED 🎉**' , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! انت ربحت الجيفواي \`${title}\`**` , {embed: {}})
                     },duration);
                   });
                } catch(e) {
                message.channel.send(`:heavy_multiplication_x:| **ليست لدي الصلاحيات الكافية**`);
                 console.log(e);
               }
             });
           });
         });
       });
     });
   });
 }
});
  
client.on('message', message => {
     var prefix = "-"
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});



	 client.on('message', message => {
	  if (message.author.bot) return;
	  if (!message.content.startsWith(prefix)) return;

	  let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);

	  let args = message.content.split(" ").slice(1);
	if (command == "za5") {
		let say = new Discord.RichEmbed()
		.setTitle('Text emboss :');
	  message.reply(`\n ${zalgo(args.join(' '))}`);
	  }

	});

	client.on("guildCreate", guild => {
  var embed = new Discord.RichEmbed().setImage(
    ""
  ).setDescription(` ✽ **Thank You for Adding  Bot To Your Server**  ✽ 
   ✽ **Support Server** [ • https://discord.gg/bzyWARD • ]  ✽ `); //تعديل مهم رابط سيرفرك
  guild.owner.send(embed);
});


var Enmap = require("enmap");
client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
  if (codes.content.startsWith(prefix + "antibots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("AntiBots Join Is On");
  }
  if (codes.content.startsWith(prefix + "antibots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("AntiBots Join Is Off");
  }
});

julian.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});


	client.on('message', message => {
	 if (message.content.startsWith("-عقاب")) {
				  if(!message.channel.guild) return message.reply('** This command only for servers**');
	var embed = new Discord.RichEmbed()
	.setColor('RANDOM')
	 .setThumbnail(message.author.avatarURL) 
	.addField('WESO.Bot' ,
	`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
	message.channel.sendEmbed(embed);
	console.log('[38ab] Send By: ' + message.author.username)
	  }
	});


	 

	client.on("message", function(message) {
	var prefix = "-";
   if(message.content.startsWith(prefix + "rps")) {
    let messageArgs = message.content.split(" ").slice(1).join(" ");
    let messageRPS = message.content.split(" ").slice(2).join(" ");
    let arrayRPS = ['**# - Rock**','**# - Paper**','**# - Scissors**'];
    let result = `${arrayRPS[Math.floor(Math.random() * arrayRPS.length)]}`;
    var RpsEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setThumbnail(message.author.avatarURL)
    .addField("Rock","🇷",true)
    .addField("Paper","🇵",true)
    .addField("Scissors","🇸",true)
    message.channel.send(RpsEmbed).then(msg => {
        msg.react(' 🇷')
        msg.react("🇸")
        msg.react("🇵")
.then(() => msg.react('🇷'))
.then(() =>msg.react('🇸'))
.then(() => msg.react('🇵'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '🇷' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '🇸' && user.id === message.author.id;
let reaction3Filter = (reaction, user) => reaction.emoji.name === '🇵' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
	    
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
let reaction3 = msg.createReactionCollector(reaction3Filter, { time: 12000 });
reaction1.on("collect", r => {
        message.channel.send(result)
})
reaction2.on("collect", r => {
        message.channel.send(result)
})
reaction3.on("collect", r => {
        message.channel.send(result)
})

    })
}
});

	client.on('message', message => {
    if (message.content == "-quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});

	client.on('message', async message =>{
	  if (message.author.boss) return;

	if (!message.content.startsWith(prefix)) return;
		let command = message.content.split(" ")[0];
		 command = command.slice(prefix.length);
		let args = message.content.split(" ").slice(1);
		if (command == "mute") {
			if (!message.channel.guild) return;
			if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
			if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
			let user = message.mentions.users.first();
			let muteRole = message.guild.roles.find("name", "Muted");
			if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
			if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
			let reason = message.content.split(" ").slice(2).join(" ");
			message.guild.member(user).addRole(muteRole);
			const muteembed = new Discord.RichEmbed()
			.setColor("RANDOM")
			.setAuthor(`Muted!`, user.displayAvatarURL)
			.setThumbnail(user.displayAvatarURL)
			.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
			.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
			.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
			.addField("User", user, true)
			message.channel.send({embed : muteembed});
			var muteembeddm = new Discord.RichEmbed()
			.setAuthor(`Muted!`, user.displayAvatarURL)
			.setDescription(`      
	${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
	${message.author.tag} تمت معاقبتك بواسطة
	[ ${reason} ] : السبب
	اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
	`)
			.setFooter(`في سيرفر : ${message.guild.name}`)
			.setColor("RANDOM")
		user.send( muteembeddm);
	  }
	if(command === `unmute`) {
	  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
	if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("**ما عندي برمشن**").then(msg => msg.delete(6000))

	  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
	  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

	  let role = message.guild.roles.find (r => r.name === "Muted");
	  
	  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

	  await toMute.removeRole(role)
	  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

	  return;

	  }

	});

	 
	client.on('message', message => {
	  if (message.author.x5bz) return;
	  if (!message.content.startsWith(prefix)) return;

	  let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);

	  let args = message.content.split(" ").slice(1);

	  if (command == "kick") {
				   if(!message.channel.guild) return message.reply('** This command only for servers**');
			 
	  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
	  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
	  let user = message.mentions.users.first();
	  let reason = message.content.split(" ").slice(2).join(" ");
	  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
	  if(!reason) return message.reply ("**اكتب سبب الطرد**");
	  if (!message.guild.member(user)
	  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

	  message.guild.member(user).kick();

	  const kickembed = new Discord.RichEmbed()
	  .setAuthor(`KICKED!`, user.displayAvatarURL)
	  .setColor("RANDOM")
	  .setTimestamp()
	  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
	  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
	  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
	  message.channel.send({
		embed : kickembed
	  })
	}
	});
	client.on('message', message => {
	  if (message.author.codes) return;
	  if (!message.content.startsWith(prefix)) return;

	  let command = message.content.split(" ")[0];
	  command = command.slice(prefix.length);

	  let args = message.content.split(" ").slice(1);

	  if (command == "ban") {
				   if(!message.channel.guild) return message.reply('** This command only for servers**');
			 
	  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
	  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
	  let user = message.mentions.users.first();
	  
	  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
	  if (!message.guild.member(user)
	  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");


	  message.guild.member(user).ban(7, user);

	message.channel.send(`**:white_check_mark: ${user.tag} banned from the server ! :airplane: **  `)

	}
	});

	client.on('message', message => {
				var prefix = "-";
		if (message.author.bot) return;
		if (!message.content.startsWith(prefix)) return;

		let command = message.content.split(" ")[0];
		command = command.slice(prefix.length);

		let args = message.content.split(" ").slice(1);

		if (command == "embed") {
			if (!message.channel.guild) return message.reply('** This command only for servers **');
			let say = new Discord.RichEmbed()
				.addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
				.setDescription(args.join("  "))
				.setColor(0x23b2d6)
			message.channel.sendEmbed(say);
			message.delete();
		}
	});



	client.on('message', message => {
	if (message.content.startsWith(prefix+"ct")) {
		var args = message.content.split(" ").slice(1);
		var argrst = args.join(' ');
					message.guild.createChannel(`${argrst}`, 'text')
		  }
	});

	client.on('message', message => {
	if (message.content.startsWith(prefix+"cv")) {
		var args = message.content.split(" ").slice(1);
		var argrst = args.join(' ');
					message.guild.createChannel(`${argrst}`,'voice')
			 
			}
	});

	const perfix = '$';
	client.on('message', msg => {
	 if (msg.content.startsWith(prefix + 'send')) {
		  let args = msg.content.split(' ').slice(1)
		  if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
		  if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
		  let alpha = msg.mentions.members.first()
		  if (!alpha) return msg.reply(`**يجب تحديد الشخص**`)
		  let alphaEmbed = new Discord.RichEmbed()
		  .setTitle(`**رسالة جديده لك من شخص ما**`)
		  .setDescription(args.join(" "))

		  client.users.get(`${alpha.id}`).send(alphaEmbed)
		  msg.reply(`**تم ارسال الرساله**`)
		}
	});

	var cats = [

	"https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg",
	"https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg",
	"http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg",
	"https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg",
	"https://vignette1.wikia.nocookie.net/houseofnight/images/8/8b/Cats.jpg/revision/latest?cb=20130812053537",
	"https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg",
	"http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg"
	]
		client.on('message', message => {
			
			var args = message.content.split(" ").slice(1);
		if(message.content.startsWith(prefix + 'cat')) {
			if(!message.channel.guild) return message.reply('** This command only for servers **');
			 var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	.setColor(0xd3d0c4)
	   .setFooter(`WESO.Bot`)
	message.channel.sendEmbed(cat);

		}
	});

	client.on('message' , message => {
		;
		let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
		if(message.content.startsWith(prefix + 'unban')) {
			if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
			if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
			message.guild.unban(user);
			message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
			var embed = new Discord.RichEmbed()
			.setThumbnail(message.author.avatarURl)
			.setColor("RANDOM")
			.setTitle('**Unban** !')
			.addField('**User Unban :** ', `${user}` , true)
			.addField('**By :**' ,       ` <@${message.author.id}> ` , true)
			.setAuthor(message.guild.name)
			message.channel.sendEmbed(embed)
		}
	});



	  
	  client.on('message', message => {
		   if (message.content.startsWith(prefix + 'bs')) {
		 let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
	  let embed = new Discord.RichEmbed()
	  .setTitle(`${client.guilds.size}سيرفرات `)
	  .setDescription(`${msg}`)
	  .setColor("#ebf442");
	  message.channel.send(embed);
	}
	});
	  
	


	   
	   client.on('message', message => {
		 if(!message.channel.guild) return;
	var prefix = "-";
					if(message.content.startsWith(prefix + 'allbots')) {

		
		if (message.author.bot) return;
		let i = 1;
			const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
			  const embed = new Discord.RichEmbed()
			  .setAuthor(message.author.tag, message.author.avatarURL)
			  .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
	${botssize.join('\n')}`)
	.setFooter(client.user.username, client.user.avatarURL)
	.setTimestamp();
	message.channel.send(embed)

	}


	});
	   
	   client.on('message', message => {
		var prefix = "-";
		if(message.content.startsWith(prefix + 'mvall')) {
		 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
		   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
		if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
		 var author = message.member.voiceChannelID;
		 var m = message.guild.members.filter(m=>m.voiceChannel)
		 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
		 m.setVoiceChannel(author)
		 })
		 message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


		 }
		   });
	   
	   client.on('message' , message => {
	  var prefix = "-";
	  if(message.author.bot) return;
	 
	  if(message.content.startsWith(prefix + "xo")) {
	 let array_of_mentions = message.mentions.users.array();
	  let symbols = [':o:', ':heavy_multiplication_x:']
	  var grid_message;
	 
	  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
		let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
		let random2 = Math.abs(random1 - 1);
		if (array_of_mentions.length == 1) {
		  random1 = 0;
		  random2 = 0;
		}
		var player1_id = message.author.id
		let player2_id = array_of_mentions[random2].id;
		var turn_id = player1_id;
		var symbol = symbols[0];
		let initial_message = `Game match between <@${player1_id}> and <@${player2_id}>!`;
		if (player1_id == player2_id) {
		  initial_message += '\n_( ألعب مع نفسك)_'
		}
		message.channel.send(`Xo ${initial_message}`)
		.then(console.log("Successful tictactoe introduction"))
		.catch(console.error);
		message.channel.send(':one::two::three:' + '\n' +
							 ':four::five::six:' + '\n' +
							 ':seven::eight::nine:')
		.then((new_message) => {
		  grid_message = new_message;
		})
		.then(console.log("Successful tictactoe game initialization"))
		.catch(console.error);
		message.channel.send('يجب الانتضار حيث ما يتم الموافقه')
		.then(async (new_message) => {
	 	 await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
		  await new_message.edit(`It\'s <@${turn_id}>\'s turn! Your symbol is ${symbol}`)
		  .then((new_new_message) => {
			require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
		  })
		  .then(console.log("Successful tictactoe listener initialization"))
		  .catch(console.error);
		})
		.then(console.log("Successful tictactoe react initialization"))
		.catch(console.error);
	  }
	  else {
		message.reply(`منشن مع من تريد ألعب`)
		.then(console.log("Successful error reply"))
		.catch(console.error);
	  }
	}
	 });
	   
	   client.on('message', msg => {
		var  prefix = "-";
	 if (msg.content.startsWith(prefix + 'cal')) {
		let args = msg.content.split(" ").slice(1);
			const question = args.join(' ');
		if (args.length < 1) {
			msg.reply('Specify a equation, please.');
	} else {    let answer;
		try {
			answer = math.eval(question);
		} catch (err) {
			msg.reply(`Error: ${err}`);
		}
		
		const embed = new Discord.RichEmbed()
		.addField("**Input**: ",`**${question}**`, true)
		.addField("**Output**: ",`**${answer}**`, true)
		msg.channel.send(embed)
		}
	};
	});
	   
	   client.on('message', omar => {
	var prefix = "-";
	if(omar.content.split(' ')[0] == prefix + 'dc') {  
	if (!omar.channel.guild) return;
	if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
	if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
	omar.guild.channels.forEach(m => {
	m.delete();
	});
	}
	if(omar.content.split(' ')[0] == prefix + 'dr') { 
	if (!omar.channel.guild) return;
	if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
	if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
	omar.guild.roles.forEach(m => {
	m.delete();
	});
	omar.reply(" `Success Deleted All Roles - Ranks`")
	}
	});
	   

	 client.on('message',async message => {
	
  if(message.content.startsWith(prefix + "تقديم")) {
 
if(!message.channel.guild) return message.reply(' ');
 
 
  let submite = message.guild.channels.find(`name`, "التقديمات");
 
  if(!submite) return message.channel.send("❌لم اجد الروم الخاص بالتقديمات");
 
    let filter = m => m.author.id === message.author.id;
 
    let thisMessage;
 
    let thisFalse;
 
    message.channel.send('📝 **| من فضلك اكتب اسمك الأن... ✏ **').then(msg => {
 
 
 
    message.channel.awaitMessages(filter, {
 
      max: 1,
 
      time: 90000,
 
      errors: ['time']
 
    })
 
    .then(collected => {
 
      collected.first().delete();
 
      thisMessage = collected.first().content;
 
      let boi;
 
      msg.edit('📜 **| هل ستحترم القوانين؟... ✏ **').then(msg => {
 
 
 
          message.channel.awaitMessages(filter, {
 
            max: 1,
 
            time: 90000,
 
            errors: ['time']
 
          })
 
          .then(collected => {
 
            collected.first().delete();
 
            boi = collected.first().content;
 
            let boi2;
 
            msg.edit('🤵 **| ما اسم ارتبه التى تريد الحصول عليها ولماذا؟... ✏ **').then(msg => {
 
 
 
              message.channel.awaitMessages(filter, {
 
                max: 1,
 
                time: 90000,
 
                errors: ['time']
 
              })
 
              .then(collected => {
 
                collected.first().delete();
 
              boi2 = collected.first().content;
 
      msg.edit('🛡 **| [ هل انت متأكد من تقديمك؟ | [ نعم ] او [ لا**');
 
 message.channel.awaitMessages(response => response.content === 'نعم' || 'لا' && filter,{
 
        max: 1,
 
        time: 90000,
 
        errors: ['time']
 
      })
 
      .then(collected => {
 
        if(collected.first().content === 'لا') {
 
          msg.delete();
 
          message.delete();
 
          thisFalse = false;
 
        }
 
        if(collected.first().content === 'نعم') {
 
          if(thisFalse === false) return;
 
          msg.edit('🕊 **| Done ✅, تم بنجاح نشر تقديم في روم التقديمات**');
 
          collected.first().delete();
 
          submite.send(`@everyone | @here
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
**[ ${message.guild.name}:arrow_down: ] Submite⬇**
 
[**اسم المقدم**]:
${thisMessage}
 
[**هلسيحترم القوانين؟**]:
${boi}
 
[**اسم الرتبه والسبب**]:
${boi2}
 
[**تم التقديم بواسطة**]:
${message.author}
 
[**ايدي المقدم**]:
${message.author.id}`);
 
        }
 
      }
 
  );
 
});
 
    });
 
  }
 
    );
 
  });
 
}
 
);
 
    })}});
	   
	   client.on('message', message => {
		var prefix = "-";
		if(message.content.startsWith(prefix + 'mvall')) {
		 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**:x: You Dont Have Perms `MOVE_MEMBERS`**');
		   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**:x: I Dont Have Perms `MOVE_MEMBERS`**");
		if (message.member.voiceChannel == null) return message.channel.send(`**You Have To Be In Room Voice**`)
		 var author = message.member.voiceChannelID;
		 var m = message.guild.members.filter(m=>m.voiceChannel)
		 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
		 m.setVoiceChannel(author)
		 })
		 message.channel.send(`**:white_check_mark: Success Moved All To Your Channel**`)


		 }
		   });
	   
	   client.on('message', message => {
		if (message.content.startsWith(prefix + 'ranks')) {
	 
			const Rank = message.guild.roles.map(e => e.toString()).join(" ");
	 
			const RankList = new Discord.RichEmbed()
				.setTitle(' Roles.')
				.setAuthor(message.guild.name, message.guild.iconURL)
				.setColor('RANDOM')
				.setDescription(Rank)
				.setFooter(message.guild.name)
			message.channel.send(RankList)
		}
	});
	   
	client.on('message', message => {
		var prefix = "-";
	if(!message.channel.guild) return;
	if(message.content.startsWith(prefix + 'move')) {
	 if (message.member.hasPermission("MOVE_MEMBERS")) {
	 if (message.mentions.users.size === 0) {
	 return message.channel.send("``Use : " +prefix+ "move @User``")
	}
	if (message.member.voiceChannel != null) {
	 if (message.mentions.members.first().voiceChannel != null) {
	 var authorchannel = message.member.voiceChannelID;
	 var usermentioned = message.mentions.members.first().id;
	var embed = new Discord.RichEmbed()
	 .setTitle("Succes!")
	 .setColor("#000000")
	 .setDescription(` You Have Moved <@${usermentioned}> To Your Channel`)
	var embed = new Discord.RichEmbed()
	.setTitle(`You are Moved in ${message.guild.name}`)
	 .setColor("RANDOM")
	.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
	 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
	message.guild.members.get(usermentioned).send(embed)
	} else {
	message.channel.send("`You Cant Move"+ message.mentions.members.first() +" `The User Should Be In channel To Move It`")
	}
	} else {
	 message.channel.send("**``You Should Be In Room Voice To Move SomeOne``**")
	}
	} else {
	message.react("❌")
	 }}});
	  
	  
	  
	  client.on('message',async message => {
	  let args = message.content.split(" ").slice(1).join(" ");
	  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


	  if(message.content.startsWith(prefix + "gRole")) {
		if(!args) return message.reply('اكتب اسم الرتبة');
		if(!role) return message.reply('هذه الرتبة غير موجودة');
		let iQp = new Discord.RichEmbed()
		.setAuthor(message.author.tag,message.author.avatarURL)
		.setTitle(message.guild.name)
		.setThumbnail(message.guild.iconURL)
		.addField('- اسم الرتبة',role.name,true)
		.addField('- اي دي الرتبة',role.id,true)
		.addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
		.addField('- لون الرتبة',role.hexColor,true)
		.addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
		.addField('- مركز الرتبة بين كل الرتب',role.position - message.guild.roles.size,true)
		.addField('- خصائص الرتبة',role.permissions,true)
		.setFooter(message.author.tag,message.author.avatarURL);

		message.channel.send(iQp);
	  }
	}); 
	   
	client.on("message", message => {
		var prefix = "-";
		const command = message.content.split(" ")[0];

		if(command == prefix+"kv"){

			if (!message.guild.member(message.author).hasPermission('MOVE_MEMBERS') || !message.guild.member(message.author).hasPermission('ADMINISTRATOR')) {
				return message.reply('you do not have permission to perform this action!');
			}

			var member = message.guild.members.get(message.mentions.users.array()[0].id);
			if(!message.mentions.users){
				message.reply("please mention the member")
				return;
			}

		if(!member.voiceChannel){
		message.reply("i can't include voice channel for member!")
		return;
		}
				  message.guild.createChannel('voicekick', 'voice').then(c => {
					member.setVoiceChannel(c).then(() => {
						c.delete(305).catch(console.log)
			


		
		  });
		 });
		}
	});

	client.on('message', message => {
		var prefix = "-";
	if (message.content.startsWith(prefix + 'tag')) {
		let args = message.content.split(" ").slice(1);
	if(!args[0]) return message.reply('Write Some Things');  

		figlet(args.join(" "), (err, data) => {
				  message.channel.send("```" + data + "```")
			   })
	}
	});
	   
	 

	client.on("message", message => {
		if (message.content.startsWith("-obc")) {
					 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
	  let args = message.content.split(" ").slice(1);
	  var argresult = args.join(' ');
	  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {
	  m.send(`${argresult}\n ${m}`);
	  })
	  message.channel.send(`\`${message.guild.members.filter( m => m.presence.status !== 'all').size}\`:mailbox:  عدد المستلمين `);
	  message.delete();
	  };
	  });




	


	client.on('message', message => {    
				if (message.content.startsWith(prefix + "cto")) {
					if(!message.channel.guild) return;
					if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
		  var a= message.content.split(' ').slice(1).join("  ");
		  if (!a) return message.reply("اكتب كلام لوضعه في التوبيك!")
		  message.channel.setTopic(`${a}`)
		  .then(newChannel => message.channel.send(`تم تغيير التوبيك لـ **${a}**`))
		  .catch(console.error);
				}
			});




	client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "publichelp") {
		message.channel.send(
		  `**| تــم رســال اوامــر الــعــامــه فــى الــخــاص ..**`
		);

		message.author.sendMessage(`  **__ blomo.bot__**
	**
	『-ping ====> لمعرفة سرعة اتصال البوت
	『-link ====> يسويلك رابط لمدة يوم وعدد الاستخدامات 100
	『-tag ====> لعرض الكلام بشكل جميل و كبير
	『-تقديم
	『-quran ====> لعرض 200 صفحة من القرآن الكريم
	『-perms ====> لعرض صلاحياتك
	『-topinv ====> لعرض صاحب اكثر دعوات 
	『-hypixel ====> لرؤية احصائياتك في هايبكسل
	『-contact ====> للتواصل مع صاحب البوت
	『-clan ====> لعبة الكلانات
	『-report ====> للابلاغ عن احد
	『-Minv ====> لمعرفة عدد دعواتك
	『-color ====> لوضع لون لك
	『-emojilist ====> لرؤية قائمة اموجيات السيرفر
	『-date ====> يعرضلك تاريخ اليوم
	『-email ====> يعطيك ايميل و باس عشوائي
	『-gRole Role name ====> يوريك معلومات رتبة باسمها او الايدي حقها
	『-bot ====> يعرض لك كل معلومات البوت
	『-say ====> يكرر الكلام الي تكتبو
	『-savatar ====> صورة السيرفر
	『-id ====> معلومات عنك
	『-new ====> يفتح لك تكت
	『-avatar ====> صورتك او صورة الي تمنشنو
	『-embed ====> يكرر الي تقولو بشكل حلو
	『-rules ====> يعرض لك قوانين السيرفر
	『-v2min ====> لصنع روم صوتي مؤقت
	
	**


	`);
	  }
	});
	





	







	client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "staffhelp") {
		message.channel.send(
		  `**| تــم رســال اوامــر الإداريــه فــى الــخــاص ..**`
		);
		
		message.author.sendMessage(`  **__blomo.bot__**
	   **__الاوامر الإداريــه__**  
	**
	『-bc ====> رسالة لجميع اعضاء السيرفر
	『-rolebc ====> رسالة لرتبة معينة
	『-setbot ====> لعمل روم صوتي بعدد البوتات في السيرفر
	『-bans ====> الاعضاء المبندين من سيرفرك
	『-setmember ====> لعمل روم صوتي بعدد اعضاء السيرفر
	『-cto ====> تغير الكلام في اعلى الروم
	『-leave ====> لطرد البوت من سيرفرك
	『setMedia ====> لتحديد روم الصور
	『-ranks ====> يوريك رتب السيرفر
	『-vonline ====> لعمل روم صوتي اونلاين
	『-schannel ====> اضهار الشات المخفية
	『-sr Exemple ====> لتغيير اسم السيرفر
	『-kv ====> لطرد عضو من روم صوتي
	『-hchannel ====> اخفاء الشات
	『-talk ====> للتكلم بصفة البوت
	『-count ====> عدد اعضاء السيرفر
	『-setlog ====> لصنع روم اللوج
	『-server ====> يعرض لك معلومات عن السيرفر
	『-movall ====> لسحب الجميع الى رومك
	『-sug ====> suggestions لصنع اقتراح لازم روم 
	『-bs ====> لمعرفة سيرفرات البوت
	『-rooms ====> لرؤية رومات السيرفر
	『-dc ====> مسح كل الرومات
	『-dr ====>  فوق كل الرانكات
	『-allbots ====> يوريك كل البوتات في سيرفرك
	『-move ====> لسحب عضو الى روم صوتية
	『-giveaway ====> لصنع جيفواي
	『-role @mention rolename ====> لأعطاء رتبة لعضو معين
	『-role all rolename ====> لأعطاء رتبة للجميع
	『-role humans rolename ====> لأعطاء رتبة للاشخاص فقط
	『-role bots rolename ====> لأعطاء رتبة لجميع البوتات
	『-members ====> حالات اعضاء السيرفر
	『-send ====> ارسال رسالة لشخص المنشن
	『-clr <numbr> ====> مسح الشات بعدد
	『-clear ====> مسح الشات
	『-mute @user <reason> ====> اعطاء العضو ميوت لازم رتبة <Muted>
	『-unmute @user ====> لفك الميوت عن الشخص 
	『-kick @user <reason> ====> طرد الشخص من السيرفر
	『-ban @user <reason> ====> حضر الشخص من السيرفر
	『-unban @user ====> لفك حضر الشخص من السيرفر
	『-mutechannel ====> تقفيل الشات
	『-unmutechannel ====> فتح الشات
	『-ct <name> ====> انشاء شات
	『-cv <name> ====> انشاء رووم فويس
	**

	`);
	  }
	});

	client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "musichelp") {
		message.channel.send(
		  `**| تــم رســال اوامــر الــمــوســيــقــى فــى الــخــاص ..**`
		);

		message.author.sendMessage(`  **__blomo.bot__**
	  **__أوامر الــمــوســيــقــى__**   
	**
『-musicp <name> ====> لتشغيل الموسيقي
『-musics  ====>  اللتوقيف الموسيقي
『-musicskip  ====> لتخ\ي الموسيقي المشغله
『-musicrepeat  ====> لاعادة تشغيل الموسيقي
『-musicvol <number> ====>  لرفع صوت الموسيقي
『-musicqueue  ====> لمعرفة اسم الموسيقي المشغله
  **

		
	`);
	  }
	});

	client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "gamehelp") {
		message.channel.send(
		  `**| تــم رســال اوامــر الالعاب فــى الــخــاص ..**`
		);

		message.author.sendMessage(`**__blomo.bot__**
	**       
	『-8ball ====> لعبه تسال البوت اسال  وهو يجاوب عنها
	『-cuttweet ====> لعبة كت تويت
	『-هل تعلم
	『-cal ====> ألة حاسبة
	『-za5 ====> لزخرفة ما تقول
	『-cats ====> قطط كيوت
	『-love ====> يعطيك اقوال عن الحب 
	『-حكم
	『-جمع
	『-طرح
	『-ضرب
	『-فواكه
	『-فكك
	『-sara7a ====> لعبة صراحة
	『-roll ====> قرعة
	『-xo ====> xo لعبة 
	『-نكت مضحكه ====> نكت
	『-marry ====> لعبة الزواج
	『-hack ====> لعبه هاك
	『-kill ====> لعبة قتل
	『-quas ====> اسئلة عامة
	『-لعبة مريم ====> مريم
	『-عواصم
	『-يعطيك عقابات قاسية ====> عقاب
	**
	`);
	  }
	});



client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "protecthelp") {
		message.channel.send(
		  `**| تــم رســال اوامــر الحمايه فــى الــخــاص ..**`
		);

		message.author.sendMessage(`**__blomo.bot__**
	**       
	『-settings limitsban <number> ====> تحدد العدد الي تبيه لو حد بند  بيشتال رتبته
  『-settings limitskick <number> ====> تحدد العدد الي تبيه لو حد طرد 3 او 4 بيشتال رتبته 
  『-settings limitsroleD <number> ====> تحدد العدد الي تبيه لو حد مسح رول 3 او 4 بيشتال رتبته
  『-settings limitschannelD <number> ====> تحدد العدد الي تبيه لو حد مسح روم 3 او 4 بيشتال رتبته
  『-settings limitsroleC <number> ====> تحدد العدد الي تبيه لو حد صنع روم 3 او 4 بيشتال رتبته
  『-settings limitstime <number> ====> تحديد الوقت الذي من خلالة يتم التبنيد كـ مثال اذا شخص بند 5 في دقيقة تنزل رتبتة 

	
	**
	`);
	  }
	});




	client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "roomhelp") {
		message.channel.send(
		  `**| تــم ارسال الرومات الازمه للبوت بلخاص ..**`
		);
		
		message.author.sendMessage(`  **__blomo.bot__**
	   **__الرومات الازمة للبوت__**  
	**
	=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
	تحتاج رومات بالاسماء التالية
	Weclom روم الترحيب
	suggestions روم الاقتراحات
	'روم 'التقديمات 
	روم التوديع leave
	=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.=.
	**
	`);
	  }
	});

client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "tickethelp") {
		message.channel.send(
		  `**| تــم ارسال اوامر التكيب للبوت بلخاص ..**`
		);
		
		message.author.sendMessage(`  **__blomo.bot__**
	   **__اوامر التكيت__**  
	**
『-new ====> لصنع تكيت
『-close ====> لغلق التكيت
『-confirm ====> لتأكيد غلق التكيت
**
`);
	  }
	});
	client.on("message", message => {
	  if (message.author.bot) return;
	  if (message.content === prefix + "help") {
		message.channel.send(` **> __blomo Bot help menu__** 
> <a:539874548817068062:661101740279595049> ** -publichelp ** **  :earth_americas: الاوامر العامه   **
> <a:539874548817068062:661101740279595049> ** -staffhelp ** **   <:repare:659318040776933386> الاوامر الإداريه  **
> <a:539874548817068062:661101740279595049> ** -musichelp ** ** <a:661096783392538644:661465176129929236> أوامر الموسيقى    **
> <a:539874548817068062:661101740279595049> ** -gamehelp ** ** :video_game:  اوامر الالعاب    **
> <a:539874548817068062:661101740279595049> ** -protecthelp ** ** <:657700196498669568:661092720596484116>  اوامر الحمايه    **
> <a:539874548817068062:661101740279595049> ** -roomhelp ** ** <a:603943432469348362:661092695229333505>  الرومات الازمه    **
> <a:539874548817068062:661101740279595049> ** -tickethelp ** ** :tickets:  الرومات التكت    **
> <a:539874548817068062:661101740279595049> ** -server ** ** <a:623258020612276234:661089855274614815>  معلومات سيرفرك     **
> <a:539874548817068062:661101740279595049> ** -bot ** ** <a:625000889425592331:661092731787149312>  معلومات عن البوت   **
> <a:539874548817068062:661101740279595049> ** -inv ** ** <a:656201967483355157:661092711302037574>  لدعوة البوت     **
**__:heart:Thank you for add bot in your server :heart:__** 
	   `);
	  }
	});

	client.on('message', message => {
		if (message.content == "-فكك") {
			var x = ["محمد",
	"مدرسة",
	"بيت",
	"الله",
	"بيت مقدس",
	"مهندس",
	"ريضيات",
	"بسم الله رحمن رحيم",
	"طماطم",
	"سيرفر",
	];
			var x2 = ['م ح م ح',
			"م د ر س ة",
			"ب ي ت ",
			"ا ل ل ه",
	"ب ي ت م ق د س",
	"م ه ن د س",
	"ر ي ض ي ا ت",
	"ب س م ا ل ل ه ر ح م ن ر ح ي م",
	"ط م ا ط م",
	"س ي ر ف ر",
		 ];
			
			var x3 = Math.floor(Math.random()*x.length)
			message.channel.send(`  فكك
	 :  __**${x[x3]}**__
	لديك 20 ثانية`).then(msg1=> {
				var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
					maxMatches : 1,
					time : 20000,
					errors : ['time']
				})
			r.catch(() => {
				return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
				الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
			})
			
			r.then((collected)=> {
				message.channel.send(`${collected.first().author}لقد قمت بتفكيك كلمة في وقت مناسب`);
			})
			})
		}
	})

	client.on('message', message => {
if(message.content.startsWith("-فواكه")) {
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

	client.on('message', message => {
		if (message.content == "-عواصم"){
			var x = ["ما عاصمة **المغرب**",
		"ما عاصمة **افغانستان**",
		"ما عاصمة **الجزائر **",
		"ما عاصمة **الارجنتين",
		"ما عاصمة ** مصر**",
		"ما عاصمة ** استراليا**",
		"ما عاصمة ** البرازيل**",
		"ما عاصمة **قطر  **",
		"ما عاصمة **السعودية  **",
		"ما عاصمة **سوريا  **",
		"ما عاصمة **تركيا  **",
		"ما عاصمة **العراق  **",
		"ما عاصمة **لبنان  **",
		"ما عاصمة **فلسطين  **",
		"ما عاصمة **امريكا  **",
	   "ما عاصمة **كندا  **",
	   "ما عاصمة **البرازيل  **",
	];
			var x2 = ['الرباط',
			"كابل",
			"الجزائر",
		  "بوينس ايرس",
	"القاهرة",
	"كانبرا",
	"برازيليا",
	"الدوحة",
		  "الرياض",
		  "دمشق",
		  "انقرة",
		"بغداد",
		  "بيروت",
		"القدس",
	  "وشنطن",
		"اوتاوا",
	  "برازيليا",
	  
			
			];
			
			var x3 = Math.floor(Math.random()*x.length)
			message.channel.send(` اول شخص يكتب عاصمة صح :  __**${x[x3]}**__
	لديك 20 ثانية لكتابة عاصمة صحيحة`).then(msg1=> {
				var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
					maxMatches : 1,
					time : 20000,
					errors : ['time']
				})
			r.catch(() => {
				return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
				الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
			})
			
			r.then((collected)=> {
				message.channel.send(`${collected.first().author}لقد قمت بكتابة عاصمة صح في الوقت المناسب  `);
			})
			})
		}
	})

	client.on('message', message => {
		if (message.content.startsWith("-avatar")) {
	if(!message.channel.guild) return;
			var mentionned = message.mentions.users.first();
		var client;
		  if(mentionned){
			  var client = mentionned; } else {
			  var client = message.author;
		  }
			const embed = new Discord.RichEmbed()
							   .addField('Requested by:', "<@" + message.author.id + ">")
			.setColor(111)
			.setImage(`${client.avatarURL}`)
		  message.channel.sendEmbed(embed);
		}
	});

	

		client.on('message',async message => {
		if(message.content.startsWith(prefix + "setbot")) {
		if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(' **لا تمتلك صلاحيه**');
		if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(' **لا امتلك صلاحيه**');
		message.channel.send('| **تم عمل الروم بنجاح**');
		message.guild.createChannel(`Bots : : [ ${message.guild.members.filter(m=>m.user.bot).size} ]` , 'voice').then(c => {
		  console.log(`Done make room in: \n ${message.guild.name}`);
		  c.overwritePermissions(message.guild.id, {
			CONNECT: false,
			SPEAK: false
		  });
		  setInterval(() => {
			c.setName(`Bots : [ ${message.guild.members.filter(m=>m.user.bot).size} ]`)
		  },1000);
		});
		}
	  });

	client.on('message', message => { 
		if (message.content.startsWith(prefix + 'emojilist')) {

			const List = message.guild.emojis.map(e => e.toString()).join(" ");

			const EmojiList = new Discord.RichEmbed()
				.setTitle(' Emojis') 
				.setAuthor(message.guild.name, message.guild.iconURL) 
				.setColor('RANDOM') 
				.setDescription(List) 
				.setFooter(message.guild.name) 
			message.channel.send(EmojiList) 
		}
	});


	 client.on('message', message => {
	var prefix = "-";
	var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
			var args = message.content.split(" ").slice(1);
		if(message.content.startsWith(prefix + 'نكت')) {
			 var cat = new Discord.RichEmbed()
	.setImage(cats[Math.floor(Math.random() * cats.length)])
	message.channel.sendEmbed(cat);
		}
	});

		  client.on('message', message => {
			let args = message.content.split(" ").slice(1).join(" ")
			let men = message.mentions.users.first()
			if(message.content.startsWith(prefix + "roll")){
				if(!args) return message.channel.send("يجب كتابه رقم")
				message.channel.send(Math.floor(Math.random() * args))
			}
		});

	  client.on('message', message => {
		if (message.content.startsWith("-bans")) {
			message.guild.fetchBans()
			.then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
	  .catch(console.error);
	}
	});




	client.on('message', message => {
	  var prefix ="-";
	if (message.content.startsWith(prefix + 'perms')) {
			 if(!message.channel.guild) return;
			 var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
			 var zPeRms = new Discord.RichEmbed()
			 .setColor('RANDOM')
			 .setTitle(':tools: Permissions')
			 .addField('Your Permissions:',perms)
					  message.channel.send({embed:zPeRms});
	 
		}
	});


	 client.on("message", async message => {
				if(!message.channel.guild) return;
			if(message.content.startsWith(prefix + 'invites')) {
			var nul = 0
			var guild = message.guild
			await guild.fetchInvites()
				.then(invites => {
				 invites.forEach(invite => {
					if (invite.inviter === message.author) {
						 nul+=invite.uses
						}
					});
				});
			  if (nul > 0) {
				  console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
				  var embed = new Discord.RichEmbed()
					  .setColor("#000000")
						.addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
							  message.channel.send({ embed: embed });
						  return;
						} else {
						   var embed = new Discord.RichEmbed()
							.setColor("#000000")
							.addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

						   message.channel.send({ embed: embed });
							return;
						}
			}
			if(message.content.startsWith(prefix + 'invite-codes')) {
	let guild = message.guild
	var codes = [""]
	message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
	guild.fetchInvites()
	.then(invites => {
	invites.forEach(invite => {
	if (invite.inviter === message.author) {
	codes.push(`discord.gg/${invite.code}`)
	}
	})
	}).then(m => {
	if (codes.length < 0) {
		var embed = new Discord.RichEmbed()
	.setColor("#000000")
	.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
	message.author.send({ embed: embed });
	return;
	} else {
		var embed = new Discord.RichEmbed()
	.setColor("#000000")
	.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
	message.author.send({ embed: embed });
	return;
	}
	})
	}

	});



	console.log("Vertix");
	



	

	client.on('message', msg => {
		if(msg.content.startsWith('-binv')) {
		if(msg.channel.type === 'dm') return;
	const user = msg.mentions.users.first();
	if(!user) return msg.channel.send('``' + `حدد بوت` + '``')
	if(!user.bot) return msg.reply('`منشن بوت`');
	msg.channel.send(`**Bot InviteURL : ** https://discordapp.com/api/oauth2/authorize?client_id=${user.id}&permissions=8&scope=bot`)
		}
	});

	client.on("message", message => {
		if (message.content === "-rules") {
			   message.react("✅")
				  message.react("❌")
		 const embed = new Discord.RichEmbed() 
			 .setColor("#ffff00")
			 .setDescription(`
  ●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
[ ★・rules   |  قوانين السيرفر  ]
1) ممنوع السب مع اى سبب 
2)ممنوع الحديث عن الدين او سبه او مفاوضات دينيه 
5)ممنوع التحدث عن السياسه  "
6)ممنوع الصور الاباحيه او اى شي مخل بالادب 
7)ممنوع نشر صور من  مواقع التواصل الاجتماعى  بحقوق ملكيه
8)ممنوع طلب الرتبه والرتب تكون بالتفاعل
9)لاستخدام البوت  فى - #cmd
__

@everyone || @here
●▬▬▬▬▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬▬▬▬▬●
	  
		`)
	   
		  message.author.sendEmbed(embed)
		  
		  }
	}); 


client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('   عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'welcome')
			if (!channel) return;
			channel.send({embed : embed});
			})
client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('   عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', '・welcome')
			if (!channel) return;
			channel.send({embed : embed});
			})
client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('  عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'ولكم')
			if (!channel) return;
			channel.send({embed : embed});
			})
client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('   عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'دخول-خروج')
			if (!channel) return;
			channel.send({embed : embed});
			})
client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('  عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'ترحيب')
			if (!channel) return;
			channel.send({embed : embed});
			})
client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('   عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'الدخول')
			if (!channel) return;
			channel.send({embed : embed});
			})
client.on('guildMemberAdd', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`مرحبا بك بلسيرفر   `)
				.setDescription(`اتمنا تقرأ القوانين    `)
				.addField('  عدد الاعضاء',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'دخول')
			if (!channel) return;
			channel.send({embed : embed});
			})
			
			client.on('guildMemberRemove', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`الله معاك `)
				.setDescription(`مع السلامه تشرفنا بك  `)
				.addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'leave')
			if (!channel) return;
			channel.send({embed : embed});
			})
	
			client.on('guildMemberRemove', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`الله معاك `)
				.setDescription(`مع السلامه تشرفنا بك  `)
				.addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', '・leave')
			if (!channel) return;
			channel.send({embed : embed});
			})
	
			client.on('guildMemberRemove', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`الله معاك `)
				.setDescription(`مع السلامه تشرفنا بك  `)
				.addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'خروج')
			if (!channel) return;
			channel.send({embed : embed});
			})
	
			client.on('guildMemberRemove', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`الله معاك`)
				.setDescription(`مع السلامه تشرفنا بك  `)
				.addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'دخول-خروج')
			if (!channel) return;
			channel.send({embed : embed});
			})
	
			client.on('guildMemberRemove', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`الله معاك `)
				.setDescription(`مع السلامه تشرفنا بك  `)
				.addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'lev')
			if (!channel) return;
			channel.send({embed : embed});
			})
	
			client.on('guildMemberRemove', member => {
				var embed = new Discord.RichEmbed()
				.setAuthor(member.user.username, member.user.avatarURL)
				.setThumbnail(member.user.avatarURL)
				.setTitle(`الله معاك `)
				.setDescription(`مع السلامه تشرفنا بك  `)
				.addField('   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
				.setColor('RED')
				.setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
			
			var channel =member.guild.channels.find('name', 'الخروج')
			if (!channel) return;
			channel.send({embed : embed});
			})

	const HeRo = new Discord.Client();
	client.on('message', message => {
	var prefix = "-";

		if (message.content === prefix + "date") {
			if (!message.channel.guild) return message.reply('** This command only for servers **');  
			var currentTime = new Date(),
				Year = currentTime.getFullYear(),
				Month = currentTime.getMonth() + 1,
				Day = currentTime.getDate();

				var Date15= new Discord.RichEmbed()
				.setTitle("**!-[ التاريخ ]-! **")
				.setColor('RANDOM')
				.setTimestamp()
				.setDescription( ""+ Day + "-" + Month + "-" + Year + "")
				 message.channel.sendEmbed(Date15);
		}
	});

	client.on('message', msg => {
							let args = msg.content.split(" ").slice(1).join(" ")
	if (msg.content.split(" ")[0].toLowerCase() === "-cr ") {
		if(!args) return msg.channel.send('`الرجاء كتابة عدد اللوان المرجى صنعها`');
				 if (!msg.member.hasPermission('MANAGE_ROLES')) return;
				  msg.channel.send(`** Done Colors Was Successful Created ${args}**`);
					  setInterval(function(){})
						let count = 0;
						let ecount = 0;
			  for(let x = 1; x < `${parseInt(args)+1}`; x++){
				msg.guild.createRole({name:x,
				  color: 'RANDOM'})
				  }
				}
	});

	client.on('message', message => {
			  let args = message.content.split(' ').slice(1);
	   if(message.content.split(' ')[0] == '-color'){
			   const embedd = new Discord.RichEmbed()
		 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
	   .setDescription(`**There's No Color With This Number ** :x: `)
	   .setColor(`ff0000`)

		if(!isNaN(args) && args.length > 0)
		

	if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


		   var a = message.guild.roles.find("name",`${args}`)
					if(!a)return;
	const embed = new Discord.RichEmbed()
						
		 .setFooter('Requested by '+message.author.username, message.author.avatarURL)
	   .setDescription(`**Color Changed To Successfully** :white_check_mark: `)
	 
	   .setColor(`${a.hexColor}`)
	  message.channel.sendEmbed(embed);
			  if (!args)return;
	setInterval(function(){})
					  let count = 0;
					  let ecount = 0;
			for(let x = 1; x < 201; x++){
			   
				message.member.removeRole(message.guild.roles.find("name",`${x}`))
			  
				}
					message.member.addRole(message.guild.roles.find("name",`${args}`));
			
				
		}
	});

	client.on('message', message => {
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(`name`, "suggestions")
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
       .addField('**Suggestion**',`${args}`)
       .setThumbnail(message.author.avatarURL)
       .setFooter(`ID: ${message.author.id}`)
       Room.sendEmbed(embed).then(c => {
           c.react('✅').then(() =>
               c.react('❌'))
           
       }).catch(e => console.error(e)
       )
   }
});

	client.on('message', message => {
		if (message.author.bot) return;
		 if (message.content === prefix + "email") {
	function randomem() {
	let email = '';
	const ReBeL = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._';
	for (let i = 0; i < 5; i++) email += ReBeL.charAt(Math.floor(Math.random() * ReBeL.length));
	return email;
	}
	function randompass() {
	let pass = '';
	const CoDeS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 8; i++) pass += CoDeS.charAt(Math.floor(Math.random() * CoDeS.length));
	return pass;
	}
	const random1 = randomem();
	const random2 = randompass();
	message.author.send(`P.P.------------------------P.P.
	Email : **${random1}@gmail.com**
	Password : **${random2}**
	P.P.------------------------P.P.`).catch(err => {
	   if(err == "DiscordAPIError: Cannot send messages to this user") {
		  return message.channel.send("**للأسف , لديك اعدادات خصوصية لاتسمح لي بأرسال رسائل خاصة لك **");
	}
	});

	message.channel.send("**تم الارسال الحساب في الخاص |  **")
	}});

	client.on('message', message => {
	   if(message.channel.type === "dm") return;
		 if(message.content.startsWith ("-marry")) {
		 if(!message.channel.guild) return message.reply(' This command only for servers ')
		 var proposed = message.mentions.members.first()
	 
		 if(!message.mentions.members.first()) return message.reply('لازم تطلب ايد وحدة').catch(console.error);
		 if(message.mentions.users.size > 1) return message.reply('ولد ما يضبط لازم بنت').catch(console.error);
		  if(proposed === message.author) return message.reply(`**خنتى ؟ **`);
		   if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
				 message.channel.send(`**${proposed}
	بدك تقبلي عرض الزواج من ${message.author}
	العرض لمدة 10 ثواني
	اكتبي موافقه او لا**`)
	 
	const filter = m => m.content.startsWith("موافقه");
	message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
	.then(collected =>{
	   message.channel.send(`**${message.author} و ${proposed} الف الف مبروك انشاء الله تستمتعون بحياتكم الزوجية ويطول اعماركم ولا تنسون شهر العسل**`);
	})
	  .catch(collected => message.channel.send(`**السكوت علامة الرضا نقول مبرووك**`))
	 
	  const filte = m => m.content.startsWith("لا");
	message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
	.then(collected =>{
	  message.channel.send(`**${message.author} تم رفض عرضك**`);
	})
	 
	 
	 
	 
	 }
	});


	 

client.on('message', function(message) {
    if(message.content.startsWith(prefix + "report")) {
        let messageArgs = message.content.split(" ").slice(1).join(" ");
        let messageReason = message.content.split(" ").slice(2).join(" ");
        if(!messageReason) return message.reply("**# Specify a reason!**");
    let mUser = message.mentions.users.first();
    if(!mUser) return message.channel.send("Couldn't find user.");
    let Rembed = new Discord.RichEmbed()
    .setTitle("`New Report!`")
    .setThumbnail(message.author.avatarURL)
    .addField("**# - Reported User:**",mUser,true)
    .addField("**# - Reported User ID:**",mUser.id,true)
    .addField("**# - Reason:**",messageReason,true)
    .addField("**# - Channel:**",message.channel,true)
    .addField("**# - Time:**",message.createdAt,true)
    .setFooter("لو ان الابلاغ فيه مزح راح يتعرض صاحب الابلاغ لقوبات")
message.channel.send(Rembed)
message.channel.send("__Are you sure you want to send this to the Server owner??__").then(msg => {
    msg.react("✅")
    msg.react("❌")
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))
let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.guild.owner.send(Rembed)
    message.reply("**# - Done! 🎇**");
})
reaction2.on("collect", r => {
    message.reply("**# - Canceled!**");
})
})
    }
});




	client.on('message', message => {
	  var prefix = "-"
			if(message.content.startsWith(prefix + 'hypixel')) {
				let args = message.content.split(' ').slice(1).join(' ');
				if (!args) return message.channel.send("**Please provide a Minecraft username. ?**");
				var link = (`https://hypixel.net/player/${args}`);
				message.channel.send(link);
			}
		});
	client.on('message',  (message) => {
			if(message.content.startsWith('-love')) {
	  let user = message.mentions.users.first();
	  if (!user) {

		return message.emit('commandUsage', message, this.help);
	  }
	  let loves = [
		'https://media.giphy.com/media/YDB4EF3U6i6IM/giphy.gif',
		'https://media.giphy.com/media/l41JWw65TcBGjPpRK/giphy.gif',
		'https://media.giphy.com/media/3o6gDZ9unSrDk3EuR2/giphy.gif',
		'https://media.giphy.com/media/ymkLJAxVz2la/giphy.gif',
		'https://media.giphy.com/media/ZOln4JxCoZay4/giphy.gif',
		'https://media.giphy.com/media/l0K4kWJir91VEoa1W/giphy.gif',
		'https://media.giphy.com/media/X3FmqQ7ehoCBy/giphy.gif',
		'https://media.giphy.com/media/VlzUkJJzvz0UU/giphy.gif',
		'https://media.giphy.com/media/NbPJFUS6Vkx7q/giphy.gif',
		'https://media.giphy.com/media/wDEWXcisSjrQQ/giphy.gif',
		'https://media.giphy.com/media/xT8qBuhwq0OyL7UkdW/giphy.gif',
		'https://media.giphy.com/media/gfvxlwRKH1y5q/giphy.gif',
		'https://media.giphy.com/media/PuTSgeacS3Z7i/giphy.gif',
		'https://media.giphy.com/media/l49JBwneyflgjm5zO/giphy.gif',
		'https://media.giphy.com/media/QKUA2bIAgjFgk/giphy.gif',
		'https://media.giphy.com/media/T3Uzzre7Ap0mk/giphy.gif',
		'https://media.giphy.com/media/3oeSB6pawq6G99xCXS/giphy.gif',
		'https://media.giphy.com/media/iKIgD5j0I3hMQ/giphy.gif',
		'https://media.giphy.com/media/hhHcFH0xAduCs/giphy.gif',
      'https://media.giphy.com/media/3o7qDJKIO5rSeyHhvO/giphy.gif',
		'https://media.giphy.com/media/92bGINsmjAuUE/giphy.gif',
		'https://media.giphy.com/media/bErElGdAHUmoE/giphy.gif',
		'https://media.giphy.com/media/jQqU9dCKUOdri/giphy.gif',
		'https://media.giphy.com/media/10uJ0IFxlCA06I/giphy.gif',
		'https://media.giphy.com/media/bMLGNRoAy0Yko/giphy.gif',
		'https://media.giphy.com/media/3osxYcry2fDfqyhOQ8/giphy.gif',
		'https://media.giphy.com/media/3ohs84a6AyArTscVsk/giphy.gif',
		'https://media.giphy.com/media/3o6Zt6D0wctP0kpuwg/giphy.gif',
		'https://media.giphy.com/media/4zmFt0xpke8AU/giphy.gif',
		'https://media.giphy.com/media/l3vR9O3vpOCDRo8rC/giphy.gif',
		'https://media.giphy.com/media/13sgibUDaaaEU0/giphy.gif'
	  ];

	  message.channel.send({
		embed: {
		  description: `${message.author.username} :heart:  يعبر لك عن حبه الحقيقي   ${user.username}!`,
		  image: {
			url: loves[Math.floor(Math.random() * loves.length)]
		  }
		}
	  }).catch(e => {
		client.log.error(e);
	  })
			}  
	});
	client.on('message',  (message) => {
			if(message.content.startsWith('-boom')) {
	  let user = message.mentions.users.first();
	  if (!user) {

		return message.emit('commandUsage', message, this.help);
	  }
	  let bombs = [
		'https://media.giphy.com/media/Xp98Vi5OBvhXpwA0Zp/giphy.gif',
		'https://media.giphy.com/media/POnwee2RZBWmWWCeiX/giphy.gif',
		'https://media.giphy.com/media/oywQ7OhnYupINQa0L4/giphy.gif',
		'https://media.giphy.com/media/5aLrlDiJPMPFS/giphy.gif',
		'https://media.giphy.com/media/l1BgS9aNtdCdjgkaQ/giphy.gif',
		'https://media.giphy.com/media/d0NnEG1WnnXqg/giphy.gif',
		'https://media.giphy.com/media/NmrqUdwGXPOog/giphy.gif',
		'https://media.giphy.com/media/dpnfPvaCIHBrW/giphy.gif',
		'https://media.giphy.com/media/mks5DcSGjhQ1a/giphy.gif',
		'https://media.giphy.com/media/8wfoaIjVc0FBaLu5xH/giphy.gif',
		'https://media.giphy.com/media/xThtanBNixj1O1m5oY/giphy.gif',
		'https://media.giphy.com/media/fdGkCOiM0oOqI/giphy.gif',
		'https://media.giphy.com/media/c862b2dAhJXYA/giphy.gif',
		'https://media.giphy.com/media/CepTYjGRbV1ba/giphy.gif',
		'https://media.giphy.com/media/sRGCQ7INgSD0qbTqB5/giphy.gif',
		'https://media.giphy.com/media/ZJYOwl8SbFsic/giphy.gif',
		'https://media.giphy.com/media/3oEhmKspQX9EN48HNm/giphy.gif',
		'https://media.giphy.com/media/l1KVcAP6jvP9r4MaA/giphy.gif',
		'https://media.giphy.com/media/j2mY6orBJqAdG/giphy.gif',
		'https://media.giphy.com/media/3oz8xEqn8AGAQbR0yY/giphy.gif',
		'https://media.giphy.com/media/l4lQW9KfRQscU0ds4/giphy.gif',
		'https://media.giphy.com/media/XathaB5ILqSME/giphy.gif',
		'https://media.giphy.com/media/26AHvF2p5pridaSf6/giphy.gif',
		'https://media.giphy.com/media/Nlur5uO8GkjC0/giphy.gif',
		'https://media.giphy.com/media/l1J3preURPiwjRPvG/giphy.gif',
		'https://media.giphy.com/media/8cdZit2ZcjTri/giphy.gif',
		'https://media.giphy.com/media/3o7btNa0RUYa5E7iiQ/giphy.gif',
		'https://media.giphy.com/media/V88pTEefkoOFG/giphy.gif',
		'https://media.giphy.com/media/rfWAomOTPeOo8/giphy.gif'
	  ];

	  message.channel.send({
		embed: {
		  description: `${message.author.username} لقد تم تطير الجبه بنجاح  جبهتك طارت ${user.username}!`,
		  image: {
			url: bombs[Math.floor(Math.random() * bombs.length)]
		  }
		}
	  }).catch(e => {
		client.log.error(e);
	  })
			}  
	});
	client.on('message',  (message) => {
			if(message.content.startsWith('-hug')) {
	  let user = message.mentions.users.first();
	  if (!user) {

		return message.emit('commandUsage', message, this.help);
	  }
	  let hugs = [
		'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
		'https://media.giphy.com/media/13YrHUvPzUUmkM/giphy.gif',
		'https://media.giphy.com/media/wnsgren9NtITS/giphy.gif',
		'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
		'https://media.giphy.com/media/hi0VuTUqLrmuc/giphy.gif',
		'https://media.giphy.com/media/xJlOdEYy0r7ZS/giphy.gif',
		'https://media.giphy.com/media/7WQQXPg6o3YNa/giphy.gif',
		'https://media.giphy.com/media/LWTxLvp8G6gzm/giphy.gif',
		'https://media.giphy.com/media/xZshtXrSgsRHy/giphy.gif',
		'https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif',
		'https://media.giphy.com/media/10BcGXjbHOctZC/giphy.gif',
		'https://media.giphy.com/media/49mdjsMrH7oze/giphy.gif',
		'https://media.giphy.com/media/xUPGcgtKxm4PADy3Cw/giphy.gif',
		'https://media.giphy.com/media/JTjSlqiz63j5m/giphy.gif',
		'https://media.giphy.com/media/aD1fI3UUWC4/giphy.gif',
		'https://media.giphy.com/media/5eyhBKLvYhafu/giphy.gif',
		'https://media.giphy.com/media/ddGxYkb7Fp2QRuTTGO/giphy.gif',
		'https://media.giphy.com/media/pXQhWw2oHoPIs/giphy.gif',
		'https://media.giphy.com/media/ZRI1k4BNvKX1S/giphy.gif',
		'https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif',
		'https://media.giphy.com/media/s31WaGPAmTP1e/giphy.gif',
		'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
		'https://media.giphy.com/media/aVmEsdMmCTqSs/giphy.gif',
		'https://media.giphy.com/media/C4gbG94zAjyYE/giphy.gif',
		'https://media.giphy.com/media/ArLxZ4PebH2Ug/giphy.gif',
		'https://media.giphy.com/media/kFTKQfjK4ysZq/giphy.gif',
		'https://media.giphy.com/media/vVA8U5NnXpMXK/giphy.gif',
		'https://media.giphy.com/media/2q2qHJu838EyQ/giphy.gif',
		'https://media.giphy.com/media/q3kYEKHyiU4kU/giphy.gif',
		'https://media.giphy.com/media/3ZnBrkqoaI2hq/giphy.gif',
		'https://media.giphy.com/media/ExQqjagJBoECY/giphy.gif',
		'https://media.giphy.com/media/3o6Yg5fZCGeFArIcbm/giphy.gif'
	  ];

	  message.channel.send({
		embed: {
		  description: `${message.author.username} اداك حضن او ضمه ${user.username}!`,
		  image: {
			url: hugs[Math.floor(Math.random() * hugs.length)]
		  }
		}
	  }).catch(e => {
		client.log.error(e);
	  })
			}  
	});
	client.on('message',  (message) => {
			if(message.content.startsWith('-slap')) {
	  let user = message.mentions.users.first();
	  if (!user) {

		return message.emit('commandUsage', message, this.help);
	  }
	  let slaps = [
		'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
		'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
		'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
		'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
		'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
		'https://media.giphy.com/media/81kHQ5v9zbqzC/giphy.gif',
		'https://media.giphy.com/media/QYT2VEOXVyVmE/giphy.gif',
		'https://media.giphy.com/media/xUNd9HZq1itMkiK652/giphy.gif',
		'https://media.giphy.com/media/xXRDuvEcMA2JO/giphy.gif',
		'https://media.giphy.com/media/zRlGxKCCkatIQ/giphy.gif',
		'https://media.giphy.com/media/9U5J7JpaYBr68/giphy.gif',
		'https://media.giphy.com/media/q0uYk5uwJVFug/giphy.gif',
		'https://media.giphy.com/media/iREUC7qrjN4vC/giphy.gif',
		'https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif',
		'https://media.giphy.com/media/6Fad0loHc6Cbe/giphy.gif',
		'https://media.giphy.com/media/prKt29rL7zAbe/giphy.gif',
		'https://media.giphy.com/media/LeTDEozJwatvW/giphy.gif',
		'https://media.giphy.com/media/6UTkJXBd26qiI/giphy.gif',
		'https://media.giphy.com/media/VEmm8ngZxwJ9K/giphy.gif',
		'https://media.giphy.com/media/EtdEOL3MbPbmE/giphy.gif',
		'https://media.giphy.com/media/CIvfqJqBbvliU/giphy.gif',
		'https://media.giphy.com/media/3pSKnxaDzl9Oo/giphy.gif',
		'https://media.giphy.com/media/1iw7RG8JbOmpq/giphy.gif',
		'https://media.giphy.com/media/m0VwgrO5yXxQY/giphy.gif',
		'https://media.giphy.com/media/2o855hr1xVotO/giphy.gif',
		'https://media.giphy.com/media/URBigLkgWoYzS/giphy.gif',
		'https://media.giphy.com/media/pGOdXNi6J7ML6/giphy.gif',
		'https://media.giphy.com/media/HHUd5nOFbSYtG/giphy.gif',
		'https://media.giphy.com/media/TZp6XSDusOnXG/giphy.gif',
		'https://media.giphy.com/media/wqP5TOFnOMwqQ/giphy.gif',
		'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
	  ];

	  message.channel.send({
		embed: {
		  description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
		  image: {
			url: slaps[Math.floor(Math.random() * slaps.length)]
		  }
		}
	  }).catch(e => {
		client.log.error(e);
	  })
			}  
	});


	




  



















client.on('message', message => {
    if(message.content === prefix + 'createcolors') {
                         if(!message.channel.guild) return message.channel.send('**This Commnad only For Servers !**'); 
         if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('**You Dont Have** `ADMINISTRATOR` **premission**').then(msg => msg.delete(6000))
      message.guild.createRole({
                  name: "1",
                    color: "#FFB6C1",
                    permissions: []
     })
           message.guild.createRole({
                  name: "2",
                    color: "#FFC0CB",
                    permissions: []
     })
                message.guild.createRole({
                  name: "3",
                    color: "#FF69B4",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "4",
                    color: "#FF1493",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "5",
                    color: "#DB7093",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "6",
                    color: "#C71585",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "7",
                    color: "#E6E6FA",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#D8BFD8",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "8",
                    color: "#DDA0DD",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "9",
                    color: "#DA70D6",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "10",
                    color: "#EE82EE",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "11",
                    color: "#FF00FF",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "12",
                    color: "#BA55D3",
                    permissions: []
     })
                     message.guild.createRole({
                  name: "13",
                    color: "#9932CC",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "14",
                    color: "#9400D3",
                    permissions: []
     })
                          message.guild.createRole({
                  name: "15",
                    color: "#8A2BE2",
                    permissions: []
     })
                               message.guild.createRole({
                  name: "16",
                    color: "#8B008B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "17",
                    color: "#800080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "18",
                    color: "#9370DB",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "19",
                    color: "#7B68EE",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "20",
                    color: "#6A5ACD",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "21",
                    color: "#483D8B",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "22",
                    color: "#663399",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "23",
                    color: "#4B0082",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "24",
                    color: "#FFA07A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "25",
                    color: "#FA8072",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "26",
                    color: "#E9967A",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "27",
                    color: "#F08080",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "28",
                    color: "#CD5C5C",
                    permissions: []
     })
                                    message.guild.createRole({
                  name: "29",
                    color: "#DC143C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "30",
                    color: "	#FF0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "31",
                    color: "#B22222",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "32",
                    color: "#8B0000",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "33",
                    color: "#FFA500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "34",
                    color: "#FF8C00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "35",
                    color: "#FF7F50",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "36",
                    color: "#FF6347",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "37",
                    color: "#FF4500",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "38",
                    color: "#FFD700",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "39",
                    color: "#FFFFE0",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "40",
                    color: "#FFFACD",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "41",
                    color: "#FAFAD2",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "42",
                    color: "	#FFEFD5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "43",
                    color: "#FFE4B5",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "44",
                    color: "#FFDAB9",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "45",
                    color: "#EEE8AA",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "46",
                    color: "#F0E68C",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "47",
                    color: "#BDB76B",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "48",
                    color: "#ADFF2F",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "49",
                    color: "#7FFF00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "50",
                    color: "#7CFC00",
                    permissions: []
     })
                                         message.guild.createRole({
                  name: "51",
                    color: "#00FF00",
                    permissions: []
     })  
     
                                         message.guild.createRole({
                  name: "52",
                    color: "#32CD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "53",
                    color: "#98FB98",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "54",
                    color: "#90EE90",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "55",
                    color: "#00FA9A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "56",
                    color: "#00FF7F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "57",
                    color: "#3CB371",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "58",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "59",
                    color: "#2E8B57",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "60",
                    color: "#008000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "61",
                    color: "#006400",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "62",
                    color: "#9ACD32",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "63",
                    color: "#6B8E23",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "64",
                    color: "#556B2F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "65",
                    color: "#66CDAA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "66",
                    color: "#8FBC8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "67",
                    color: "#20B2AA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "68",
                    color: "#008B8B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "69",
                    color: "#008080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "70",
                    color: "#00FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "71",
                    color: "#E0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "72",
                    color: "#AFEEEE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "73",
                    color: "#7FFFD4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "74",
                    color: "#40E0D0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "75",
                    color: "#48D1CC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "76",
                    color: "#00CED1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "77",
                    color: "#5F9EA0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "78",
                    color: "#4682B4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "79",
                    color: "#B0C4DE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "80",
                    color: "#ADD8E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "81",
                    color: "#B0E0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "82",
                    color: "#87CEFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "83",
                    color: "#87CEEB",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "84",
                    color: "#6495ED",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "85",
                    color: "#00BFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "86",
                    color: "#1E90FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "87",
                    color: "#4169E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "88",
                    color: "#0000FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "89",
                    color: "#0000CD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "90",
                    color: "#00008B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "91",
                    color: "#000080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "92",
                    color: "#191970",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "93",
                    color: "#FFF8DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "94",
                    color: "#FFEBCD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "95",
                    color: "#FFE4C4",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "96",
                    color: "#FFDEAD",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "97",
                    color: "#F5DEB3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "98",
                    color: "#DEB887",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "99",
                    color: "#D2B48C",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "100",
                    color: "#BC8F8F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "101",
                    color: "#F4A460",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "102",
                    color: "#DAA520",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "103",
                    color: "#B8860B",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "104",
                    color: "#CD853F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "105",
                    color: "#D2691E",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "106",
                    color: "#808000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "107",
                    color: "#8B4513",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "108",
                    color: "#A0522D",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "109",
                    color: "#A52A2A",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "110",
                    color: "#800000",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "111",
                    color: "#FFFFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "112",
                    color: "#FFFAFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "113",
                    color: "#F0FFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "114",
                    color: "#F5FFFA",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "115",
                    color: "#F0FFFF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "116",
                    color: "#F0F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "117",
                    color: "#F8F8FF",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "118",
                    color: "#F5F5F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "119",
                    color: "#FFF5EE",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "120",
                    color: "#F5F5DC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "121",
                    color: "#FDF5E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "122",
                    color: "#FFFAF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "123",
                    color: "#FFFFF0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "124",
                    color: "#FAEBD7",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "125",
                    color: "#FAF0E6",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "126",
                    color: "#FFF0F5",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "127",
                    color: "#FFE4E1",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "128",
                    color: "#DCDCDC",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "129",
                    color: "#D3D3D3",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "130",
                    color: "#C0C0C0",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "131",
                    color: "#A9A9A9",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "132",
                    color: "#696969",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "133",
                    color: "#808080",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "134",
                    color: "#778899",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "135",
                    color: "#708090",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "136",
                    color: "#2F4F4F",
                    permissions: []
     })     
                                         message.guild.createRole({
                  name: "137",
                    color: "#000000",
                    permissions: []
     })     

     
          message.channel.sendMessage({embed: new Discord.RichEmbed()
     .setColor('#502faf').setAuthor(`${message.author.username}'`, message.author.avatarURL).setDescription('``Colors Has Been Created``')});
    }
	});
	
	

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '1');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '2');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '3');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '4');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '5');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '6');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '7');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '8');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '9');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '10');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '11');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '12');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '13');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '14');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '15');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '16');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '17');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '18');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '19');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '20');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '21');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '22');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '23');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '24');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '25');
		
		role.delete()
		}
	
	});



	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '26');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '27');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '28');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '29');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '30');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '31');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '32');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '33');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '34');
		
		role.delete()
		}
	
	});


	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '35');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '36');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '37');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '38');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '39');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '40');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '41');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '42');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '43');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '44');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '45');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '46');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '47');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '48');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '49');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '50');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '51');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '52');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '53');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '54');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '55');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '56');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '57');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '58');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '59');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '60');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '61');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '62');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '63');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '64');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '65');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '66');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '67');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '68');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '69');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '70');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '71');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '72');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '73');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '74');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '75');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '76');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '77');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '78');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '79');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '80');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '81');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '82');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '83');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '84');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '85');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '86');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '87');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '88');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '89');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '90');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '91');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '92');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '93');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '94');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '95');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '96');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '97');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '98');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '99');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '100');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '101');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '102');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '103');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '104');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '105');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '106');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '107');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '108');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '109');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '110');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '111');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '112');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '113');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '114');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '115');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '116');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '117');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '118');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '119');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '121');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '122');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '123');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '124');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '125');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '126');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '127');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '128');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '129');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '130');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("!deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '131');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '132');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '133');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '134');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '135');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '136');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
	if (message.content.startsWith("-deletecolors")) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', '137');
		
		role.delete()
		}
	
	});








	


	 
  const credits = JSON.parse(fs.readFileSync("./creditsCode.json", "utf8"));
	const coolDown = new Set();

	client.on("message", message => {
	 const args = message.content.split(' ');
	  const credits = require('./creditsCode.json');
	  const path = './creditsCode.json';
	  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
	  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	  const author = message.author.id;
	  const balance = args[2];
	  const daily = Math.floor(Math.random() * 350) + 10;
	 
	  if(!credits[author]) credits[author] = {credits: 50};
	  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
	  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	 
	 
	  if(message.content.startsWith(prefix + "credit")) {
	  if(args[0] !== `${prefix}credit` && args[0] !== `${prefix}credits` ) return;
	 
	  if(args[2]) {
		if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
		if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
		if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
		if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
		var one = Math.floor(Math.random() * 9) + 1;
		var two = Math.floor(Math.random() * 9) + 1;
		var three = Math.floor(Math.random() * 9) + 1;
		var four = Math.floor(Math.random() * 9) + 1;
	 
		var number = `${one}${two}${three}${four}`;
	   
		message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
		  message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
			if(c.first().content === number) {
			  m.delete();
			  message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
			  credits[author].credits += (-balance);
			  credits[mention.id].credits += (+balance);
			  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
			} else if(c.first().content !== number) {
			  m.delete();
			  message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
			}
		  });
		});
	  }
	  if(!args[2]) {
		if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
		message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
	  }
	 
	  }
			if(args[0].toLowerCase() === `${prefix}daily`) {  
		 
	if(credits[message.author.id].daily != moment().format('L')) {
	 
		   credits[message.author.id].daily = moment().format('L');
			   
	 
			  let ammount = ( 662, 310, 120, 765, 1000, 1, 210, 453, 752, 462, 523, 45, 36, 52, 450, 200, 46, 563, 623, 444, 555, 666, 201, 56, 305, 56, 995, 600, 699, 76, 65, 26, 65, 65, 90,  110, 56, 230, 526, 2, 10, 455, 1, 563, 220, 550, 300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
			  credits[author].credits += ammount;
		   
		   
			  message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
			fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
				if (e) throw e;
			})
	 
		  }else{
		  message.channel.send(`**${mention.username}, your daily credits refreshes ${moment().endOf('day').fromNow()}**`);
	 
		  }
	   
			}
			 
	   
	 
	});



  client.on("message", message => {
	 const args = message.content.split(' ');
	  const credits = require('./creditsCode.json');
	  const path = './creditsCode.json';
	  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
	  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	  const author = message.author.id;
	  const balance = args[2];
	  const daily = Math.floor(Math.random() * 350) + 10;
	 
	  if(!credits[author]) credits[author] = {credits: 50};
	  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
	  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	 
	 
	  if(message.content.startsWith("c")) {
	  if(args[0] !== `c` && args[0] !== `c` ) return;
	 
	  if(args[2]) {
		if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
		if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
		if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
		if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
		var one = Math.floor(Math.random() * 9) + 1;
		var two = Math.floor(Math.random() * 9) + 1;
		var three = Math.floor(Math.random() * 9) + 1;
		var four = Math.floor(Math.random() * 9) + 1;
	 
		var number = `${one}${two}${three}${four}`;
	   
		message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
		  message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
			if(c.first().content === number) {
			  m.delete();
			  message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
			  credits[author].credits += (-balance);
			  credits[mention.id].credits += (+balance);
			  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
			} else if(c.first().content !== number) {
			  m.delete();
			  message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
			}
		  });
		});
	  }
	  if(!args[2]) {
		if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
		message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
	  }
	 
	  }
			if(args[0].toLowerCase() === `d`) {  
		 
	if(credits[message.author.id].daily != moment().format('L')) {
	 
		   credits[message.author.id].daily = moment().format('L');
			   
	 
			  let ammount = ( 662, 310, 120, 765, 1000, 1, 210, 453, 752, 462, 523, 45, 36, 52, 450, 200, 46, 563, 623, 444, 555, 666, 201, 56, 305, 56, 995, 600, 699, 76, 65, 26, 65, 65, 90,  110, 56, 230, 526, 2, 10, 455, 1, 563, 220, 550, 300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
			  credits[author].credits += ammount;
		   
		   
			  message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
			fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
				if (e) throw e;
			})
	 
		  }else{
		  message.channel.send(`**${mention.username}, your daily credits refreshes ${moment().endOf('day').fromNow()}**`);
	 
		  }
	   
			}
			 
	   
	 
	});
	
	
client.on("message", message => {
	 const args = message.content.split(' ');
	  const credits = require('./creditsCode.json');
	  const path = './creditsCode.json';
	  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
	  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	  const author = message.author.id;
	  const balance = args[2];
	  const daily = Math.floor(Math.random() * 350) + 10;
	 
	  if(!credits[author]) credits[author] = {credits: 50};
	  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
	  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	 
	 
	  if(message.content.startsWith("C")) {
	  if(args[0] !== `C` && args[0] !== `C` ) return;
	 
	  if(args[2]) {
		if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
		if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
		if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
		if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
		var one = Math.floor(Math.random() * 9) + 1;
		var two = Math.floor(Math.random() * 9) + 1;
		var three = Math.floor(Math.random() * 9) + 1;
		var four = Math.floor(Math.random() * 9) + 1;
	 
		var number = `${one}${two}${three}${four}`;
	   
		message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
		  message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
			if(c.first().content === number) {
			  m.delete();
			  message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
			  credits[author].credits += (-balance);
			  credits[mention.id].credits += (+balance);
			  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
			} else if(c.first().content !== number) {
			  m.delete();
			  message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
			}
		  });
		});
	  }
	  if(!args[2]) {
		if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
		message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
	  }
	 
	  }
			if(args[0].toLowerCase() === `D`) {  
		 
	if(credits[message.author.id].daily != moment().format('L')) {
	 
		   credits[message.author.id].daily = moment().format('L');
			   
	 
			  let ammount = ( 662, 310, 120, 765, 1000, 1, 210, 453, 752, 462, 523, 45, 36, 52, 450, 200, 46, 563, 623, 444, 555, 666, 201, 56, 305, 56, 995, 600, 699, 76, 65, 26, 65, 65, 90,  110, 56, 230, 526, 2, 10, 455, 1, 563, 220, 550, 300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
			  credits[author].credits += ammount;
		   
		   
			  message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
			fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
				if (e) throw e;
			})
	 
		  }else{
		  message.channel.send(`**${mention.username}, your daily credits refreshes ${moment().endOf('day').fromNow()}**`);
	 
		  }
	   
			}
			 
	   
	 
	});
	
client.on("message", message => {
	 const args = message.content.split(' ');
	  const credits = require('./creditsCode.json');
	  const path = './creditsCode.json';
	  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
	  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	  const author = message.author.id;
	  const balance = args[2];
	  const daily = Math.floor(Math.random() * 350) + 10;
	 
	  if(!credits[author]) credits[author] = {credits: 50};
	  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
	  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	 
	 
	  if(message.content.startsWith(prefix + "c")) {
	  if(args[0] !== `${prefix}c` && args[0] !== `${prefix}c` ) return;
	 
	  if(args[2]) {
		if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
		if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
		if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
		if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
		var one = Math.floor(Math.random() * 9) + 1;
		var two = Math.floor(Math.random() * 9) + 1;
		var three = Math.floor(Math.random() * 9) + 1;
		var four = Math.floor(Math.random() * 9) + 1;
	 
		var number = `${one}${two}${three}${four}`;
	   
		message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
		  message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
			if(c.first().content === number) {
			  m.delete();
			  message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
			  credits[author].credits += (-balance);
			  credits[mention.id].credits += (+balance);
			  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
			} else if(c.first().content !== number) {
			  m.delete();
			  message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
			}
		  });
		});
	  }
	  if(!args[2]) {
		if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
		message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
	  }
	 
	  }
			if(args[0].toLowerCase() === `${prefix}d`) {  
		 
	if(credits[message.author.id].daily != moment().format('L')) {
	 
		   credits[message.author.id].daily = moment().format('L');
			   
	 
			  let ammount = ( 662, 310, 120, 765, 1000, 1, 210, 453, 752, 462, 523, 45, 36, 52, 450, 200, 46, 563, 623, 444, 555, 666, 201, 56, 305, 56, 995, 600, 699, 76, 65, 26, 65, 65, 90,  110, 56, 230, 526, 2, 10, 455, 1, 563, 220, 550, 300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
			  credits[author].credits += ammount;
		   
		   
			  message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
			fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
				if (e) throw e;
			})
	 
		  }else{
		  message.channel.send(`**${mention.username}, your daily credits refreshes ${moment().endOf('day').fromNow()}**`);
	 
		  }
	   
			}
			 
	   
	 
	});


client.on("message", message => {
	 const args = message.content.split(' ');
	  const credits = require('./creditsCode.json');
	  const path = './creditsCode.json';
	  const mention = message.mentions.users.first() || client.users.get(args[1]) || message.author;
	  const mentionn = message.mentions.users.first() || client.users.get(args[1]);
	  const author = message.author.id;
	  const balance = args[2];
	  const daily = Math.floor(Math.random() * 350) + 10;
	 
	  if(!credits[author]) credits[author] = {credits: 50};
	  if(!credits[mention.id]) credits[mention.id] = {credits: 50};
	  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
	 
	 
	  if(message.content.startsWith(prefix + "C")) {
	  if(args[0] !== `${prefix}C` && args[0] !== `${prefix}C` ) return;
	 
	  if(args[2]) {
		if(isNaN(args[2]) || args[2] < 0) return message.channel.send(`:interrobang: **| ${message.author.username}, type the credit you need to transfer! **`);
		if(mention.bot) return message.channel.send(`**:heavy_multiplication_x:| ${message.content.split(' ')[1]} لم يتم العثور على**`);
		if(mention.id === message.author.id) return message.channel.send('**:heavy_multiplication_x:| لا يمكنك تحويل كردت لنفسك**');
		if(credits[author].credits < balance) return message.channel.send(`** :thinking: | ${message.author.username}, Your balance is not enough for that!**`);
		var one = Math.floor(Math.random() * 9) + 1;
		var two = Math.floor(Math.random() * 9) + 1;
		var three = Math.floor(Math.random() * 9) + 1;
		var four = Math.floor(Math.random() * 9) + 1;
	 
		var number = `${one}${two}${three}${four}`;
	   
		message.channel.send(`**:heavy_dollar_sign:| \`${number}\`, أكتب الرقم للأستمرار**`).then(m => {
		  message.channel.awaitMessages(m => m.author.id === message.author.id, {max: 1, time: 10000}).then(c => {
			if(c.first().content === number) {
			  m.delete();
			  message.channel.send(`**:moneybag: | ${message.author.username}, has transferred \`${balance}\` to ${mention}**`);
			  credits[author].credits += (-balance);
			  credits[mention.id].credits += (+balance);
			  fs.writeFile(path, JSON.stringify(credits, null, 5), function(err) {if(err) console.log(err)});
			} else if(c.first().content !== number) {
			  m.delete();
			  message.channel.send(`** :money_with_wings: | تم الغاء الإرسال**`);
			}
		  });
		});
	  }
	  if(!args[2]) {
		if(mention.bot) return message.channel.send(`:interrobang:**| ${message.author.username}, I can't find** ${message.content.split(' ')[1]}**!**`);
		message.channel.send(`**${mention.username}, your :credit_card: balance is** \`$${credits[mention.id].credits}\`**.** `);
	  }
	 
	  }
			if(args[0].toLowerCase() === `${prefix}D`) {  
		 
	if(credits[message.author.id].daily != moment().format('L')) {
	 
		   credits[message.author.id].daily = moment().format('L');
			   
	 
			  let ammount = ( 662, 310, 120, 765, 1000, 1, 210, 453, 752, 462, 523, 45, 36, 52, 450, 200, 46, 563, 623, 444, 555, 666, 201, 56, 305, 56, 995, 600, 699, 76, 65, 26, 65, 65, 90,  110, 56, 230, 526, 2, 10, 455, 1, 563, 220, 550, 300, 500, 100, 200, 120, 150, 350, 320, 220, 250);
			  credits[author].credits += ammount;
		   
		   
			  message.channel.send(`**:atm: | ${message.author.username}, you received your :yen: ${ammount} daily credits!**`);
			fs.writeFile("./creditsCode.json", JSON.stringify(credits), function(e) {
				if (e) throw e;
			})
	 
		  }else{
		  message.channel.send(`**${mention.username}, your daily credits refreshes  ${moment().endOf('day').fromNow()}**`);
	 
		  }
	   
			}
			 
	   
	 
	});


let anti = JSON.parse(fs.readFileSync("./antigreff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
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
       {
 if (message.content.startsWith("xbnjcfnbdsjkghdfgkfdhglkfjgodp"))
 
        if (message.author.id !== message.guild.owner.user.id) return message.channel.send(`**لا تستطيع استخدام هذا الامر**`);
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
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
});


let Level = JSON.parse(fs.readFileSync("./level.json", "utf8"));
client.on("message", message => {
  if (message.author.bot) return undefined;
  if (!level[message.author.id])
    level[message.author.id] = {
      xp: 0,
      level: 0
    };
  let username = message.author;
  level[message.author.id].xp++;
  let userlevel = level[message.author.id];
  if (userlevel.xp > Math.floor(Math.random() * 250) + 50) {
    userlevel.level++;
    userlevel.xp = 0;
  }
  fs.writeFileSync("./level.json", JSON.stringify(level), function(s) {
    if (s) throw s;
  });
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
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
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
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
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
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});
 
client.on("guildBanAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
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
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
        if (e) throw e;
    });
});





client.on("error", err => {
  console.log(err);
});
const members = JSON.parse(fs.readFileSync("./members.json")) || {};
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.guilds.forEach(g => (!members[g.id] ? (members[g.id] = {}) : null));
});

client.on("guildMemberRemove", member => {
  let roles = [];
  member.roles.forEach(r => roles.push(r.id));
  members[member.guild.id][member.id] = roles;
  saveChanges();
});
client.on("guildMemberAdd", member => {
  if (members[member.guild.id][member.id] !== undefined) {
    member.addRoles(
      members[member.guild.id][member.id],
      "Returning roles after leaving"
    );
    members[member.guild.id][member.id] = [];
  }
  saveChanges();
});
function saveChanges() {
  fs.writeFileSync("./members.json", JSON.stringify(members, null, 4));
}



const SQLite = require("sqlite"); // SQLpackage
const path = require("path"); // PATHpackage
const invites = {}; // Codes

client.on("ready", () => {
  // ready ?
  client.guilds.forEach(g => {
    // for each guilds ?
    g.fetchInvites().then(guildInvites => {
      // fetch invites ?
      invites[g.id] = guildInvites; // push guild invites on invites ^^
    }); // end
  }); // end
}); // end
SQLite.open(path.join(__dirname, "links.sql")) // read path ?
  .then(() => {
    // then ?
    console.log("Opened"); // seccussfull opened
    SQLite.run(
      `CREATE TABLE IF NOT EXISTS linkSysteme (code TEXT, id VARCHAR(30))`
    ); // create table if not exisit
  }) // end
  .catch(err => console.error(err)); // on error

client.on("message", async msg => {
  // message ?
  if (msg.author.bot || !msg.channel.guild) return; // if bot or private return
  if (msg.content.startsWith("رابط")) {
    // message content
    let invite = await msg.channel
      .createInvite(
        {
          //  create invites
          maxAge: 86400, // one day // limit time for invite ^^
          maxUses: 5 // 5 people can enter // limit users for invites ^^
        },
        `Requested by ${msg.author.tag}`
      )
      .catch(console.log); // reason // end

    SQLite.run(
      `INSERT INTO linkSysteme VALUES ('${invite.code}','${msg.author.id}')`
    ); // insert into table
    msg.author.send(
      invite
        ? /*seccussfull*/ `**مدة الرابط : يـوم
 عدد استخدامات الرابط : 5 **:\n ${invite}` /*error catch*/

        : "يوجد خلل في البوت :( \n  يتم حل المشكل قريبا ..."
    );
  }
});


   


 
client.on("guildKickAdd", async (guild, user) => {
    const entry1 = await guild.fetchAuditLogs({
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
            guild.members.get(entry.id).ban().catch(e => guild.owner.send(`**⇏ | ${entry.username} حاول حظر جميع الأعضاء **`))
            anti[guild.id + entry.id].actions = "0"
            fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                if (e) throw e;
            });
            fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                if (e) throw e;
            });
        }
    }
 
    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
        if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
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
        	if (!config[member.guild.id]) config[member.guild.id] = {
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
                fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
                    if (e) throw e;
                });
                fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
                    if (e) throw e;
                });
            }
        }
 
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function (e) {
            if (e) throw e;
        });
        fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function (e) {
            if (e) throw e;
        });
    }
 
})
var Enmap = require("enmap");
client.antibots = new Enmap({ name: "chat" });
var antibots = client.antibots;
var julian = client;
julian.on("message", codes => {
  if (codes.content.startsWith(prefix + "antibots on")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "On"
    });

    codes.channel.send("AntiBots Join Is On");
  }
  if (codes.content.startsWith(prefix + "antibots off")) {
    if (
      codes.author.bot ||
      !codes.channel.guild ||
      codes.author.id != codes.guild.ownerID
    )
      return;
    antibots.set(`${codes.guild.id}`, {
      onoff: "Off"
    });
    codes.channel.send("AntiBots Join Is Off");
  }
});

julian.on("guildMemberAdd", member => {
  if (!antibots.get(`${member.guild.id}`)) {
    antibots.set(`${member.guild.id}`, {
      onoff: "Off"
    });
  }
  if (antibots.get(`${member.guild.id}`).onoff == "Off") return;
  if (member.user.bot) return member.kick();
});

















	client.login('NjUxNzMwODQzMzY2MDY0MTM5.XiSCOw.kKYRH1DQ7JSa6Pv4OKNSwtp9v9s');
