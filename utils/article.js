//暴露接口
module.exports = {
  getArticle: getArticle
}
//定义数据
var getArticle = getArticle();
function getArticle(){
  var list = [
    {
      headEng: "双语美文",
      headCha: "爱要及时说出口",
      paragArray: [
        {
          index: 0,
          content: "There was once a guy who suffered from cancer, a cancer that can't be cured. He was 18 years old and he could die anytime. All his life, he was stuck in his house being taken cared by his mother. He never went outside but he was sick of staying home and wanted to go out for once. So he asked his mother and she gave him permission.",
          translate: "曾有一男孩，患了不治之癌。他才18岁，但生命随时会结束。一直以来，男孩都被困在屋子里，由他的母亲照料。男孩从未出去过，但他厌倦了一直窝在家里，想出去走一走。男孩因此询问他的母亲，并得到了母亲的同意。"
        }, {
          index: 1,
          content: "He walked down his block and found a lot of stores. He passed a CD store and looked through the front door for a second as he walked. He stopped and went back to look into the store. He saw a beautiful girl about his age and he knew it was love at first sight. He opened the door and walked in, not looking at anything else but her. He walked closer and closer until he was finally at the front desk where she sat.",
          translate: "男孩出了门，路过了许多家店。经过一家卖CD的音像店时他看了眼前门。男孩停了下来，并走回去又往店里看了看。他看见一个漂亮的女孩，年龄大约和他一般大。男孩意识到他一眼就爱上了这女孩。他打开了这家店的门，走了进去，什么也不看，就只看着她。男孩越走越近，直到来到这女孩坐着的前台。"
        }, {
          index: 2,
          content: "She looked up and asked, Can I help you?",
          translate: "女孩抬起头来问道：有什么需要帮忙的吗？"
        }, {
          index: 3,
          content: "She smiled and he thought it was the most beautiful smile he has ever seen before and wanted to kiss her right there.",
          translate: "女孩笑了笑，男孩认为这是他见过的最美丽的笑容，他甚至想当场就亲吻这女孩。"
        }, {
          index: 4,
          content: "He said, Uh... Yeah... Umm... I would like to buy a CD.",
          translate: "他说道：呃…是的…嗯…我想买张CD。"
        }, {
          index: 5,
          content: "He picked one out and gave her money for it.",
          translate: "男孩随便挑了一张出来并把钱递给女孩。"
        }, {
          index: 6,
          content: "Would you like me to wrap it for you? she asked, smiling her cute smile again.",
          translate: "需要我帮你把它包起来吗？ 女孩问，脸上又露出可爱的微笑。"
        }, {
          index: 7,
          content: "He nodded and she went to the back. She came back with the wrapped CD and gave it to him. He took it and walked out of the store.",
          translate: "男孩点了点头，女孩走到前台的后面。回来的时候女孩拿着包装好了的CD，交给了男孩。他拿了过来，然后走出了这家店"
        }, {
          index: 8,
          content: "He went home and from then on, he went to that store every day and bought a CD, and she wrapped it for him. He took the CD home and put it in his closet. He was still too shy to ask her out and he really wanted to but he couldn't. His mother found out about this and told him to just ask her. So the next day, he took all his courage and went to the store as usual. He bought a CD like he did every day and once again she went to the back of the store and came back with it wrapped. He took it and when she wasn't looking, he left his phone number on the desk and ran out...",
          translate: "男孩回到了家。从那以后，他每天都会来这家店，买一张CD，然后女孩就给他包装起来。男孩把CD带回家，放进他的衣橱里。他还是很害羞，不敢把她约出来。他真的很想，但是他做不到。男孩的母亲知道了此事后，就告诉他，只管把她约出来就好了。于是第二天，男孩鼓起了全部的勇气，像往常一样来到了店里。像过去那样，他还是买了一张CD，而女孩也还是走到后面，回来的时候再把包装好的CD交给他。男孩接了过来，趁女孩不注意，他把他的电话号码留在了桌子上，然后跑了出去…"
        }, {
          index: 9,
          content: "RRRRRING!!!",
          translate: "铃铃铃铃铃铃…"
        }, {
          index: 10,
          content: "One day the phone rang, and the mother picked it up and said, Hello?",
          translate: "一天，电话响了起来。男孩的母亲接起电话说道，你好？"
        }, {
          index: 11,
          content: "It was the girl!!! The mother started to cry and said, You don’t know? He passed away yesterday...",
          translate: "是那个女孩！！！男孩的母亲开始哭了起来，说道：你不知道吗？他昨天就去世了…"
        }, {
          index: 12,
          content: "The line was quiet except for the cries of the boy's mother. Later in the day, the mother went into the boy's room because she wanted to remember him. She thought she would start by looking at his clothes. So she opened the closet.",
          translate: "电话里安静了下来，只听到男孩母亲啜泣的声音。之后，男孩的母亲来到了他的房间，缅怀她的儿子。男孩的母亲想先看一看男孩的衣物。于是她打开了男孩的衣柜。"
        }, {
          index: 13,
          content: "She was face to face with piles and piles and piles of unopened CDs. She was surprised to find all these CDs and she picked one up and sat down on the bed and she started to open one. Inside, there was a CD and as she took it out of the wrapper, out fell a piece of paper. The mother picked it up and started to read it. It said: Hi... I think U R really cute. Do u wanna go out with me? Love, Jocelyn.",
          translate: "在她的面前，是一摞又一摞的CD。看到这么多的CD，男孩的母亲感到很惊讶。她随手拿出一张，坐在了男孩床上。她拆开了包装，把CD拿了出来。一张纸条掉了出来。男孩的母亲捡起了纸条，开始读起来。上面写着：你好…我觉得你真的很可爱。你想和我出去约会吗？爱你的，乔瑟琳。"
        }, {
          index: 14,
          content: "The mother was deeply moved and opened another CD...",
          translate: "男孩的母亲被深深打动了，拆开了另一张CD…"
        }, {
          index: 15,
          content: "Again there was a piece of paper. It said: Hi... I think U R really cute. Do u wanna go out with me? Love, Jocelyn.",
          translate: "又发现了另一张纸条。上面写着：你好…我觉得你真的很可爱。你想和我出去约会吗？爱你的，乔瑟琳。"
        }, {
          index: 16,
          content: "Love is... when you've had a huge fight but then decide to put aside your egos, hold hands and say, I Love You. ",
          translate: "爱就是…当你万般挣扎过后，把自我放到一边，握住对方的手，说：我爱你。"
        }
      ]
    },
    {
      headEng: "As a non-native English speaker, how can I improve my accent?",
      headCha: "作为一个英语不是母语的人，我该如何让英语口音更地道？",
      paragArray: [
        {
          index: 0,
          content: "Several respondants suggest imitating the sound. ",
          translate: "很多人建议模仿口音。"
        }, {
          index: 1,
          content: "However, conscious imitation brings in influences that can actually interfere with the natural process.",
          translate: "但是，刻意模仿可能会干扰自然习得的过程。"
        }, {
          index: 2,
          content: "Your TRYING to speak without an accent might be causing that accent. ",
          translate: "你试图避免口音很可能会导致另一种口音。"
        }, {
          index: 3,
          content: "If you really want to speak with a ’native‘ English accent (and, as has already been pointed out, there is no single native accent, even within a precise dialect), then the best way is to immerse yourself among speakers who share that accent (there is no such thing as speaking without an accent). ",
          translate: "如果你真的想要一口“地道”的口音（而且我已经说过，有不止一种地道的口音，甚至在同一个方言里都有不止一种），那么你最好让自己沉浸在有这种口音的人群中（不存在完全没有口音的说法）。"
        }, {
          index: 4,
          content: "Every chance you get, surroung yourself with native speakers. Listen to them (but do NOT try to analyse or imitate them). ",
          translate: "只要有机会，就接触母语者，让他们都聚在你身边。听他们讲话（但是不要试图分析或者模仿他们）。"
        }, {
          index: 5,
          content: "More importantly, speak with them. It is the natural exchange of speech that results in speech patterns starting to match one another, so you need both. ",
          translate: "更重要的是，和他们交谈。这是语言之间最自然的交换，使得言语表达模式开始和彼此匹配，所以听和说都是你需要的。"
        }, {
          index: 6,
          content: "This does not happen overnight.",
          translate: "这一切不是一夜之间就会进步的。"
        }, {
          index: 7,
          content: "If you can't immerse yourself in the actual environment of native speakers, try buying some DVDs of English movies.",
          translate: "如果你没办法让自己沉浸在一个真正的全母语者环境中，试着买一些英文电影的DVD吧。"
        }, {
          index: 8,
          content: "Learn the lines, and act out the parts of ONE of the characters.",
          translate: "学习台词，然后选择一个角色的部分表演出来。"
        }, {
          index: 9,
          content: "Listen to the other characters, and then say thelines of the character you choose to act out. ",
          translate: "听其他角色的台词，然后讲出你选择表演的角色的台词。"
        }, {
          index: 10,
          content: "This is probably as close to a natural process as you will be able to achieve if you can not get yourself into a group of native speakers.",
          translate: "这应该是在你没办法和母语者接触的情况下，你可以做到的最接近语言自然习得的方式了。"
        }, {
          index: 11,
          content: "If you DO choose the DVD method, choose movies that you enjoy, but also movies with a lot of character interaction.",
          translate: "如果你真的选择了通过DVD来练习的话，选择你喜欢的，有许多人物互动的电影吧。"
        }
      ]
    }, {
      headEng: "What is the worst mistake you can make in salary negotiation?",
      headCha: "和老板谈工资的时候，你犯过最严重的错误是？",
      paragArray: [
        {
          index: 0,
          content: "I actually had this discussion with the head of HR at a company where I worked. She told me the biggest mistake a person can make is to not negotiate at all and that it happens way too frequently. It goes like this:",
          translate: "我有过一次和以前工作的公司HR部门主管聊过这个问题。她告诉我最严重的错误就是一点都不谈，这太常见了，通常都是这么发展的："
        }, {
          index: 1,
          content: "Hi, this Mary Smith from ABC Corp. Thank you for interviewing with us. We are happy to offer you the position of xyz for n dollars per year.",
          translate: "「Hi, 我是 Mary Smith，是 ABC 公司的。感谢你参加我们的面试，我们要给你这个职位，年薪是 XX」"
        }, {
          index: 2,
          content: "Thanks, when do I start?",
          translate: "「谢谢，那我什么时候可以开始？」"
        }, {
          index: 3,
          content: "Accepting the first thing the company offers, even if it is excellent, is a sign of desperation and lack or experience and acumen and puts the company’s decision to hire such a noob in doubt.",
          translate: "接受公司第一次提出的薪酬，即便再好，也暗示了你入职心切，且缺乏经验和头脑，甚至让部门的人员怀疑他们的决定是否正确。"
        }, {
          index: 4,
          content: "The best response is to say, “I am thrilled with the offer. I really am excited about the company and the offer. May I take a day to think it over?” To which Mary Smith is going to say, Please, take all the time you need. Perhaps we can speak again on —- .",
          translate: "更好的答复应该是：我很高兴得到这个工作，对新的公司和工作很兴奋。能否再多给我一天时间好好想想？对此 Mary Smith 可能会说「当然，你会有足够时间考虑。可能我们还会再谈一下」"
        }, {
          index: 5,
          content: "And then hang up the phone, make a fist pump, think over the offer and then consider what MORE that you want. Even if they are giving you more than you ever dreamed you would get, they are holding something back and they EXPECT you to ask for more. If you don’t they lose respect for you.",
          translate: "然后挂断电话，欢呼一下吧。过后得好好想想了，从这份工作中你还想得到更多的什么吗？尽管他们最先可能会给你足够多梦寐以求的待遇，可终究还是有所保留的，以备你会有更多的要求。如果你没有，也许他们会对你有些失望。"
        }, {
          index: 6,
          content: "So at a minimum ask for a little more money, even if it’s a token amount. ALWAYS ask for another week’s vacation. You can ask for a good parking spot; an office instead of a cubicle; the right to work from home one day a week; a cell phone or a company car — absolutely ANYTHING is on the table. Ask for it. Make a list. Pick the things that will make you most happy. Then when you call them back you say, Well, Mary Smith, I have thought about your generous offer to work at xyz and I am excited to get going as soon as possible, however, my feelings are that the salary needs to be n + y and because of the extra responsibilities I am going to need xyz.",
          translate: "所以，你至少应该抬一点点价码，哪怕是象征性地多要一点。而且，一定要问他们多给一个星期的假期。或者，你可以向他们要一个好的停车位，一个办公室而不是一个隔间；一个星期有一两天可以在家工作；一部手机或者是一辆车，或者是任何公司现有的选择。要提出要求！列一张单子，看哪个最让你高兴，然后你回电话 「Mary，谢谢你给我那么好的工作和待遇，我很想马上开工。不过，我仔细想了下，工资应该再加这些，因为考虑到我还有一些附加的职责。」"
        }, {
          index: 7,
          content: "I know what you are thinking: you’re embarrassed to ask for more. Get over it. They expect you to ask for more. Develop a cold, hard heart and ask. They aren’t going to say, “You ungrateful bastard! We change our minds! Get lost!” They will either counter with some of what you want or, if they are playing hardball, refuse anything you ask for. Then you must decide whether you want to proceed.",
          translate: "我知道，你可能害怕尴尬，不想再过多去要。要习惯它，他们已经准备好要等你抬价了。把自己练成一个铁石心肠。他们不会觉得 「这个人不知感恩，我们现在就改注意，让ta走」他们抑或是反对你的某些提议，或者，他们来真的，拒绝你所有的要求。那你就得好好想想下一步怎么走。"
        }, {
          index: 8,
          content: "A successful negotiation is one where both parties feel good at its conclusion. If you walk away feeling somehow cheated or duped or used it’s not going to help your motivation and it’s not the way to start a new company. If you screw them to the wall so hard that they feel you were being unreasonable then you better be ready to walk on water the day you start because they will be expecting miracles from someone who demanded so much.",
          translate: "一个成功的谈判中双方都能达到满意的结果。如果你心里一直留有遗憾，觉得被骗了，被耍了，那你也不会那么卖命地工作，这也不是开一家新公司的好办法。如果你把他们逼到了死角，让他们觉得不可理喻，你最好是能创造奇迹，因为他们的期待值已经被抬得很高很高了，否则不会容忍你这么漫天要价。"
        }, {
          index: 9,
          content: 'And don’t forget — you don’t need to explain WHY you want what you want. That’s just whining. Never get into the “why”. Just get into the “what” of demands. Why you want it is no business of theirs.',
          translate: "别忘了，你不需要解释为什么你要求提薪，那会让人觉得你在发牢骚。不要过多解释，把重点放在你想要什么上。至于提薪的原因，和他们没有多大关系。"
        }, {
          index: 10,
          content: "I once was offered a job at a company where the pay was so far beyond what I was making at the time that my heart was pounding like a trip hammer. Nevertheless I asked for 5000 more dollars per year. My manager said, “We’re already at the top of the pay scale and I can’t give you any more money but I am prepared to offer more stock options and an extra week of vacation.” I took the job. The extra week of vacation was awesome and with the 5000 extra shares of stock (reduced in the purchase of the company in a 6 - 1 reverse split) ended up being worth over 150,000 dollars. Yay.",
          translate: "之前，一个公司给了我一份工作，他们提出的薪水远远超出了我目前挣得的水平，当时我的心扑腾扑腾地跳。但是我还是向他们多要了每年5000刀，我的经理说「这已经到我们的极限，不能再加了，但是我们可以给你一些股份和几个星期的假期」所以，我要了这份工作。多几个星期的假期实在是太棒了，还有 5000 股的股份最后变成价值15万美元。叶~"
        }, {
          index: 11,
          content: 'And whatever you negotiate — make certain it’s in the offer letter. Do nothing on a handshake or the “word” of someone. If it’s not written down, it never happened. You got played. It happens all the time. Write it down, get them to sign it, store it some place safe.',
          translate: "无论你们要谈什么，确保这会白纸黑字记录下来，不要单纯相信一个握手或者几句口头承诺。如果没有写下来，那就等于没有发生过，意思就是，你被耍了，这经常发生。所以，记录下来，双方签字，把合同妥善保存。"
        }
      ]
    }, {
      headEng: "Why do I feel that all small talk is insincere and unnecessery? ",
      headCha: "为什么我觉得寒暄很客套而且没必要？",
      paragArray: [
        {
          index: 0,
          content: "I used to watch real masters make Windsor chairs. I don't know if you know what a Windsor chair is but it is an early 1600s Welsh design that became popular in America where a loop of hard wood, like oak or hemlock, is curved and fitted into mortises in the seat. A good Winsor (hell, any good chair) has no nails or glue and is held together entirely by friction. ",
          translate: "我曾亲眼见过工匠制作温莎椅。不知你是否了解温莎椅。它是十七世纪初一个威尔士人的设计，后来在美国流行了起来。你会看到一条条硬木，比如说橡木、铁杉木，被制成弧形，卯在一起，作成椅子。一把温莎椅（或者是任何一把好椅子）没有用钉子和胶水，完全是靠摩擦力在 hold 住。"
        }, {
          index: 1,
          content: 'A good Windsor chair can last 200 years or more. Any time you have to use nails or glue in chair construction that chair will fail within a few years at most. The question is, how do you force that piece of wood to curve without breaking it?',
          translate: '一把好的温莎椅能用上 200 年或者更久。什么时候你要用到钉子和胶黏，那这种椅子大多会在几年之内坏掉。话说回来，有什么办法能让一块木头弯曲而不折断呢？ '
        }, {
          index: 2,
          content: 'That is the value of small talk, even small insincere words like "How are you?"  and "How was your day?" No one (or at least very few people) are going to come into the room and start talking about their big stock loss, the death of a loved one, the presence of incipient cancer in their colon or that they want a divorce. They are going to start with small talk, the same slow, careful way they treat and bend that hard wood to make the curve for the chair without breaking it. ',
          translate: '寒暄的确琐碎而客套，像 “你好吗？” 或者 “你今天过得怎样？”，也没有人会（至少很少一部分人会）真的坐下来，大聊自己今天股票亏损多少、自己爱的人去世了、患了早期结肠癌、或者是想离婚了。但这等大事是从琐碎的寒暄开始的，正如把一块很硬的木头，慢慢地，小心地压成弧形而不弄折它。这便是寒暄的意义。'
        }, {
          index: 3,
          content: 'If you just take the wood and force it into the mortise, it s going to split every single time. But if you work it, steam it, set it in an ammonia bath or work it while it s green, slow and steady, it will bend to your will.',
          translate: '如果你直接拿起几块硬木，强行卯在一起，它很可能很快就会折断。但是倘若你用心地处理，通过蒸它，把它浸泡在氨水中，趁它还是青绿色的时候，慢慢地加工，最后它会呈现出你想要的弧形。 '
        }, {
          index: 4,
          content: 'Small talk is the oil that greases the wheels of big talk. It is not un-necessary at all. It makes people comfortable with you. It helps them guage your openness and frame of mind. It sets the stage for bigger, more important topics. It s like the millions of tiny parts in your car that may not seem important but are necessary for the smooth operation of the larger machine.',
				translate:'寒暄是人与人之间的润滑剂，它能让促膝长谈的齿轮早日转动。所以，寒暄也并不是一无是处，它会让人知道跟你谈话很舒服，还能让人判断你的开放程度和思维模式，为将来某一天更重要的对谈做准备。就好像一个车子里有无数的小零件，看似不必要，却让这个大机器能正常地运行。'
			}, {
          index: 5,
          content: 'If you look at small talk as your ticket to enter the world of big talk then you will appreciate its value more, and you will practice it so that you can disarm people and get them to tell you all the things they might not tell you otherwise. It may be insincere, it is true -- but it is not un-necessary. It‘s as vital as the oil in the engine of your car.',
				translate:'如果你视寒暄为通往更大谈话空间的门票，你将更加珍视它。于是，你开始锻炼自己这方面的能力，怎样让对方卸下武装，向你袒露平时没有机会看到的真心。寒暄或许客套，但却是必要的，正如你汽车引擎里的汽油。'
			}
      ]
    }
  ]

  var date = new Date()
  var i = date.getDate() % list.length;
  return list[i];
}