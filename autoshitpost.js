const http = require('http');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

process.on('unhandledRejection', console.error);

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "a!";

client.on("ready", () => {
  console.log("I am ready!");
});

// Detect messages
client.on("message", (message) => {
  // Prevent bot-reply-ception
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  switch (command) {
    case "allhailajitpai":
      message.channel.send(`Ajit Pai is very articulate and sensible in his arguments against Net Neutrality. \n
Here is a quote of his criticism against Internet neutrality, stating that the perceived threats from ISPs to deceive consumers, degrade content, or disfavor the content that they dislike are non-existent: "The evidence of these continuing threats? There is none; it's all anecdote, hypothesis, and hysteria. A small ISP in North Carolina allegedly blocked VoIP calls a decade ago. Comcast capped BitTorrent traffic to ease upload congestion eight years ago. Apple introduced Facetime over Wi-Fi first, cellular networks later. Examples this picayune and stale aren't enough to tell a coherent story about net neutrality." This wiki copypasta disproves most of the echo chamber comments against Ajit Pai. \n
Net Neutrality is a Silicon Valley corporate campaign against TeleCommunication companies control over pricing of ISP and data speed. \n
It puts Google/Facebook/Netflix and other websites against AT&T/Comcast/Verizon and other broadband. \n
This does not affect the consumer in any significant way. NN is unnecessary regulation. The internet is not broken. Leave it alone. And please research and verify this on your own. (Notice that NN is heavily promoted on Reddit and other social media figures)`);
      break;
    case "bitcoin":
      message.channel.send(`If my Bitcoin💲💰 and my girl😍👰 both drowning😱🌊 and I could only save one😤😬 Catch me HODL'ing at my girls funeral😔👻🌹 Cuz its To The Moon or Nothing, kiddo 💰💯🔥😎📈💲`);
      break;
    case "beemovie":
      message.channel.send(`According to all known laws of aviation, there is no way a bee should be able to fly.
Its wings are too small to get its fat little body off the ground.
The bee, of course, flies anyway because bees don't care what humans think is impossible.`);
      break;
    case "bernie":
      message.channel.send(`Holy shit. My mom came into my room to bring me a plate of chicken nuggets and I literally screamed at her and hit the plate of chicken nuggets out of her hand. She started yelling and swearing at me and I slammed the door on her. I'm so distressed right now I don't know what to do. I didn't mean to do that to my mom but I'm literally in shock from the results tonight. I feel like I'm going to explode. Why the fucking fuck is he losing? This can't be happening. I'm having a fucking breakdown. I don't want to believe the world is so corrupt. I want a future to believe in. I want Bernie to be president and fix this broken country. I cannot fucking deal with this right now. It wasn't supposed to be like this, I thought he was polling well in New York???? This is so fucked.`);
      break;
    case "cancer":
      message.channel.send(`My Grandfather smoked his whole life. I was about 10 years old when my mother said to him, ‘If you ever want to see your grandchildren graduate, you have to stop immediately.’. Tears welled up in his eyes when he realized what exactly was at stake. He gave it up immediately. Three years later he died of lung cancer. It was really sad and destroyed me. My mother said to me- ‘Don’t ever smoke. Please don’t put your family through what your Grandfather put us through.’ I agreed. At 28, I have never touched a cigarette. I must say, I feel a very slight sense of regret for never having done it, because your post gave me cancer anyway.`);
      break;
    case "chatsucks":
      message.channel.send(`This chat is awful, literally ass, except ass can bring pleasure, and this chat is the goddamn antithesis of pleasure. This chat takes life from children and kittens and puts that pure innocence into phallic cancer pus. This chat is disappointment and hate of humanity funneled into barely literate text that takes intelligence and shits all over it before making a shit sculpture out of the souls of everyone reading this whore of a chat. Everyone in this chat is the dregs of humanity, if even that, content with postulating whatever ass talk they can squeeze out of the withered rectum of their wasted lives.`);
      break;
    case "chickentendies":
      message.channel.send(`Gimme gimme chicken tendies, Be they crispy or from Wendys. Spend my hard-earned good-boy points, on Kid's Meal ball pit burger joints. Mummy lifts me to the car, To find me tendies near and far. Enjoy my tasty tendie treats, in comfy big boy booster seats. McDonald's, Hardee's, Popeye's, Cane's, But of my tendies none remains. She tries to make me take a nappy, But sleeping doesn't make me happy. Tendies are the only food, That puts me in the napping mood. I'll scream and shout and make a fuss, I'll scratch, I'll bite, I'll even cuss! Tendies are my heart's desire, Fueled by raging, hungry fire. Mummy sobs and wails and cries, But tears aren't tendies, nugs or fries. My good-boy points were fairly earned, To buy the tendies that I've yearned. But there's no tendies on my plate! Did mummy think that I'd just ate? "TENDIES TENDIES GET THEM NOW, YOU FAT, UNGRATEFUL, SLUGGISH SOW!" I screech while hurling into her eyes, My foul-smell bowel-dwelling diaper surprise. For she who is un-pooped on is she who remembers: Never forget my chicken tenders.`);
      break;
    case "floganpaul":
      message.channel.send(`My son 👦🏻 can be homer sexual 🏳️‍🌈 My daughter 👧🏻 can be lebanese 👭 But I will NEVER ‼️ Raise a child 👶🏻 who likes Jake and Logan Paul 🙅🏻‍`);
      break;
    case "goodshit":
      message.channel.send(`👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit`);
      break;
    case "goodshit-xthicc":
      message.channel.send(`👌👀👌👀👌👀👌👀👌👀 厶口口刀 丂卄工丅 厶口౦刀 丂卄工丅👌 丅卄卂丅丂 ✔ 丂口从乇 厶口口刀👌👌丂卄工丅 尺工厶卄丅👌👌丅卄乇尺乇👌👌👌 尺工厶卄丅✔ 丅卄乇尺乇 ✔✔工下 工 刀口 ƽ卂ү 丂口 从丫 丂乇乚下 💯 工 丂卂丫 丂口 💯 丅卄卂丅丂 山卄卂丅 工从 丅卂乚长工𠘨厶 卂乃口凵丅 尺工厶卄丅 丅卄乇尺乇 尺工厶卄丅 丅卄乇尺乇 (匚卄口尺凵丂: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) 从从从从从ᎷМ💯 👌👌 👌卄口0Оଠ口口口口口Оଠଠ口口口口ᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌厶口口刀 丂卄工丅`);
      break;
    case "harambe":
      message.channel.send(`I'm Harambe, and this is my zoo enclosure. I work here with my zoo keeper and my friend, Cecil the lion. Everything in here has a story and a price. One thing I've learned after 21 years - you never know WHO is gonna come over that fence.`);
      break;
    case "harrypotter":
      message.channel.send(`Ok, this has been driving me crazy for seven movies now, and I know you're going to roll your eyes, but hear me out: Harry Potter should have carried a 1911. \n
Here's why: \n
Think about how quickly the entire WWWIII (Wizarding-World War III) would have ended if all of the good guys had simply armed up with good ol' American hot lead. \n
Basilisk? Let's see how tough it is when you shoot it with a .470 Nitro Express. Worried about its Medusa-gaze? Wear night vision goggles. The image is light-amplified and re-transmitted to your eyes. You aren't looking at it--you're looking at a picture of it. \n
Imagine how epic the first movie would be if Harry had put a breeching charge on the bathroom wall, flash-banged the hole, and then went in wearing NVGs and a Kevlar-weave stab-vest, carrying a SPAS-12. \n
And have you noticed that only Europe seems to a problem with Deatheaters? Maybe it's because Americans have spent the last 200 years shooting deer, playing GTA: Vice City, and keeping an eye out for black helicopters over their compounds. Meanwhile, Brits have been cutting their steaks with spoons. Remember: gun-control means that Voldemort wins. God made wizards and God made muggles, but Samuel Colt made them equal. \n`);
      message.channel.send(`Now I know what you're going to say: "But a wizard could just disarm someone with a gun!" Yeah, well they can also disarm someone with a wand (as they do many times throughout the books/movies). But which is faster: saying a spell or pulling a trigger? \n
Avada Kedavra, meet Avtomat Kalashnikova. \n
Imagine Harry out in the woods, wearing his invisibility cloak, carrying a .50bmg Barrett, turning Deatheaters into pink mist, scratching a lightning bolt into his rifle stock for each kill. I don't think Madam Pomfrey has any spells that can scrape your brains off of the trees and put you back together after something like that. Voldemort's wand may be 13.5 inches with a Phoenix-feather core, but Harry's would be 0.50 inches with a tungsten core. Let's see Voldy wave his at 3,000 feet per second. Better hope you have some Essence of Dittany for that sucking chest wound. \n
I can see it now...Voldemort roaring with evil laughter and boasting to Harry that he can't be killed, since he is protected by seven Horcruxes, only to have Harry give a crooked grin, flick his cigarette butt away, and deliver what would easily be the best one-liner in the entire series: \n
"Well then I guess it's a good thing my 1911 holds 7+1." \n
And that is why Harry Potter should have carried a 1911.`);
      break;
    case "help":
      message.channel.send(`Here is the full list of commands (prefix is a!): \n`);
      message.channel.send("```allhailajitpai - Ajit Pai Defense Rant```");
      message.channel.send("```beemovie - First 3 Lines of the Bee Movie```");
      message.channel.send("```bernie - Bernie Chicken Tenders Copypasta```");
      message.channel.send("```bitcoin - Bitcoin Copypasta```");
      message.channel.send("```cancer - Cancerous Roast Copypasta```");
      message.channel.send("```chatsucks - Chat Hate Rant```");
      message.channel.send("```chickentendies - Chicken Tendies Song```");
      message.channel.send("```floganpaul - Logan Paul/Jake Paul Roast```");
      message.channel.send("```goodshit - Good Shit Copypasta```");
      message.channel.send("```  -xthicc - In EXTRA THICC font```");
      message.channel.send("```hmmm - Extra Large 🤔 Emoji```");
      message.channel.send("```identifyashelicopter - Apache Attack Helicopter Copypasta```");
      message.channel.send("```identifyasthesun - I Sexually Identify as the Sun Copypasta```");
      message.channel.send("```iwanttodie - I Want 2 Die Anyway Copypasta```");
      message.channel.send("```jebaited - Twitch Jebaited Copypasta```");
      message.channel.send("```mesothelioma - Mesothelioma Commercial```");
      message.channel.send("```na - Twitch NA Salt Copypasta```");
      message.channel.send("```nachos - I Dropped My Bag of Nachos Copypasta```");
      message.channel.send("```nathan - Nathan Villafria's Indian Java Rant```");
      message.channel.send("```navyseal - Navy SEALS Copypasta```");
      message.channel.send("```pacer - The FitnessGram™ Pacer Test Script```");
      message.channel.send("```radicalcentrism - R A D I C A L  C E N T R I S M  Copypasta```");
      message.channel.send("```suicidewatch - Suicide Resources```");
      message.channel.send("```tidepods - Tide Pods™ Copypasta```");
      message.channel.send("```vsaucewtf - A Rant-like Segment from a Vsauce Video```");
      break;
    case "hmmm":
      message.channel.send(`
\n
⠀⠰⡿⠿⠛⠛⠻⠿⣷
⠀⠀⠀⠀⠀⠀⣀⣄⡀⠀⠀⠀⠀⢀⣀⣀⣤⣄⣀⡀
⠀⠀⠀⠀⠀⢸⣿⣿⣷⠀⠀⠀⠀⠛⠛⣿⣿⣿⡛⠿⠷
⠀⠀⠀⠀⠀⠘⠿⠿⠋⠀⠀⠀⠀⠀⠀⣿⣿⣿⠇
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠁

⠀⠀⠀⠀⣿⣷⣄⠀⢶⣶⣷⣶⣶⣤⣀
⠀⠀⠀⠀⣿⣿⣿⠀⠀⠀⠀⠀⠈⠙⠻⠗
⠀⠀⠀⣰⣿⣿⣿⠀⠀⠀⠀⢀⣀⣠⣤⣴⣶⡄
⠀⣠⣾⣿⣿⣿⣥⣶⣶⣿⣿⣿⣿⣿⠿⠿⠛⠃
⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄
⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡁
⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁
⠀⠀⠛⢿⣿⣿⣿⣿⣿⣿⡿⠟
⠀⠀⠀⠀⠀⠉⠉⠉
`);
      break;
    case "identifyashelicopter":
      message.channel.send(`I sexually Identify as an Attack Helicopter. Ever since I was a boy I dreamed of soaring over the oilfields dropping hot sticky loads on disgusting foreigners. People say to me that a person being a helicopter is Impossible and I'm fucking retarded but I don't care, I'm beautiful. I'm having a plastic surgeon install rotary blades, 30 mm cannons and AMG-114 Hellfire missiles on my body. From now on I want you guys to call me 'Apache' and respect my right to kill from above and kill needlessly. If you can't accept me you're a heliphobe and need to check your vehicle privilege. Thank you for being so understanding.`);
      break;
    case "identifyasthesun":
      message.channel.send(`I sexually identify as an the sun. Ever since I was a boy I dreamed of slamming hydrogen isotopes into each other to make helium & light and send it throught the galaxy. People say to me that a person being a star is Impossible and I’m fucking retarded but I don’t care, I’m beautiful. I’m having a plastic surgeon inflate me with hydrogen and raise my temperature to over 6000 °C. From now on I want you guys to call me “Sol” and respect my right to give you vitamin D and probably skin cancer. If you can’t accept me you’re a fusionphobe and need to check your celestial privilege. Thank you for being so understanding.`);
      break;
    case "jebaited":
      message.channel.send(`Jebaited KAPPA OUTDATED Jebaited POGCHAMP OVERRATED Jebaited LONG HAVE WE WAITED Jebaited NOW WE JEBAITED Jebaited`);
      break;
    case "iwanttodie":
      message.channel.send(`If me 👦🙋 and my waifu 👧👫❤ both drowning 💦💦💧💧🌊🌊 and I can only save one 😭👆😭 there will be no survivors 👎⛔🚫 cause my waifu doesnt exist 🙅💔😤 and I want 2 die anyway 🔫🔪🔌💯💯`);
      break;
    case "mesothelioma":
      message.channel.send(`If you or a loved one has been diagnosed with Mesothelioma you may to be entitled to financial compensation. Mesothelioma is a rare cancer linked to asbestos exposure. Exposure to asbestos in the Navy, shipyards, mills, heating, construction or the automotive industries may put you at risk. Please don’t wait, call 1-800-99 LAW USA today for a free legal consultation and financial information packet. Mesothelioma patients call now! 1-800-99 LAW USA`);
      break;
    case "na":
      message.channel.send(`Sodium, atomic number 11, was first isolated by Sir Humphry Davy in 1807. A chemical component of salt, he named it Na in honor of the saltiest region on Earth, North America.`);
      break;
    case "nachos":
      message.channel.send(`▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼Sorry, I've dropped my bag of NACHOS™▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ► ▼ ◄ ◄ ▲▲ ► ▼ ◄▼ ◄ ◄ ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲ ► ▼ ◄ ▲`);
      break;
    case "nathan":
      message.channel.send(`Do people who only know a native language code in English or their native language? Because this would prove a significant gap in ease of access for coders based solely on their region, and an unspoken “language lottery” for coders. But if there’re interpreters, there would be significant gaps in syntax of strings and possible functions for bad translations. I’ve never seen Indian Java so I don’t know. Help please.`);
      break;
    case "navyseal":
      message.channel.send(`What the fuck did you just fucking say about me, you little bitch? I’ll have you know I graduated top of my class in the Navy Seals, and I’ve been involved in numerous secret raids on Al-Qaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, kiddo.`);
      break;
    case "quantummattresses":
      message.channel.send(`I'm convinced that mattress/furniture stores exist in a quantum superposition of grand opening and going out of business sale.
It is both and neither at once until an observer records the state at which point it becomes one or the other.
But because you know exactly where the store is located, you cannot know how fast it is going out of business because of your uncertainty about its business momentum.
All around us, all the time pairs of anti-discount mattress stores and discount mattress stores are popping into existence, forming the quantum memory foam that is the basis for the universe. Without the pressure of this quantum memory foam strip malls would collapse.
We can see evidence of this when a pair is created such that one half is within the sales radius of a supermassive furniture store like Ikea-- one of them is pulled in and the other escapes as a Hawking mattress store.`);
      break;
    case "pacer":
      message.channel.send(`The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.`);
      break;
    case "radicalcentrism":
      message.channel.send(`I drive in the middle of the road in a perfectly spherical, transparent, rolling ball.
My seat and steering wheel are in the exact middle point of the sphere.
If someone honks at me I honk back to balance it out.
I listen to NPR and Rush Limbaugh at the same time, both at 1.5x speed.
Let me know if you need help understanding the implications of this.`);
      break;
    case "suicidewatch":
      message.channel.send(`If you feel you might be suicidal, and live in the United States, I urge you to call the Suicide Hotline at 800-273-8255 or navigate to http://www.suicidepreventionlifeline.org/ for a live chat and additional resources. If it's not an emergency, but you want to know more about mental health, the National Alliance on Mental Illness (NAMI) offers information on their website https://www.nami.org/ and a free HELPLINE 800-950-6264. If you do not live in the United States please seek out local resources. /r/SuicideWatch has a list that may cover your country: http://www.reddit.com/r/SuicideWatch/wiki/hotlines Let me know if you need any other guidance to people who help.`);
      break;
    case "tidepods":
      message.channel.send(`Do you know what's great at cleansing? Tide Pods™! They will cleanse your whites, your blacks, your jews, your stomach, and your large intestines right before you go into shock and die on the floor due to ingesting a large amount of chemicals not fit for human consumption or any living organism for that matter. Tide Pods™ will give you the sweet agonizing release of death in the candy shaped soaps you love. Got a small child your sick of raising, give them Tide Pods™. How about a dog? Tide Pods™, they'll eat that shit right up! Want to poison your coworkers? Add our signature Tide Pods™ into a variety of foodstuffs and get that promotion you wanted. Want to clean your clothes, no problem! Tide Pods™ will clean the cum-stains out of that shirt and make it smell less like cum. Why don't you masturbate with Tide Pods™? Shove them up your anal captivity and stick a hose up their. Clean out your insides with Tide Pods™ and ejaculate from the pain. When your mother finds your corpse she'll know she made a great decision to buy Tide Pods™!`);
      break;
    case "vsaucewtf":
      message.channel.send(`Hey, Vsauce, Michael here! Down here. But which way is down? And how much does down weigh? Well, down weighs about 1/100 of a g/cm3 . It is light, and airy, which makes it a great source of insulation and buoyancy for waterbirds. But if you let go of down, it falls down. So that's which way down is, it's the direction that gravity is pulling everything. Now for someone on the other side of the Earth, my down is their up, but where are falling things going? Why do things fall? Are they being pushed or pulled? Or, is it because of TIME TRAVEL?`);
      break;
  }

  if (message.content.startsWith("a!roses")) {
    const roses = message.content.slice(prefix.length + 5).trim().split(/ +/g).shift().toLowerCase();;
    switch (roses) {
      case "":
        message.channel.send(`WIP`);
        break;
      case "-allahuakbar":
        message.channel.send(`Roses are roses,
Violets are violets,
Allahu Akbar!
Said the 9/11 pilots.`);
        break;
      case "-bush":
        message.channel.send(`Roses are red,
Harambe's in heaven,
That is proof
that Bush did 9/11.`);
        break;
      case "-bigbird":
        message.channel.send(`Roses are red,
My dad is a pastor,`);
        message.channel.send({
        "embed": {
          "image": {
            "url": "https://cdn.glitch.com/6f7a207f-64b0-43a9-87f7-a18a2f48aec8%2Froses_bigbird.png?1516681187503"
          }
        }
        });
        break;
      case "-calmdown":
        message.channel.send(`Roses are red,
Shit is brown,
Shut the fuck up
and calm the fuck down.`);
        break;
      case "-haiku":
        message.channel.send(`The roses are red,
And all the violets are blue.
O shit a haiku!`);
        break;
      case "-facebook":
        message.channel.send(`Roses are red,
Facebook is blue,
No mutual friends,
Who the fuck are you???`);
        break;
      case "-filthyfrank":
        message.channel.send();
      case "-harambe":
        message.channel.send(`Roses are red,
I'm feeling blue,
'Cause there's one less gorilla
in the Cincinnati Zoo.`);
        break;
      case "-hearthstone":
        message.channel.send(`Roses are red,
Violets are blue,
4 mana 7/7,
Overload (2).`);
        break;
      case "-notdave":
        message.channel.send(`Roses are red,
My name is not Dave,
This poem makes no sense,
Microwave.`);
        break;
      case "-pizza":
        message.channel.send(`Roses are red,
Pizza is too,
I ordered a large
and none of it is for you.`);
        break;
    }
  
  }
});

client.login(process.env.TOKEN);