import type { PersonaType } from './types';

export const personalityTypes: Record<string, PersonaType> = {
  WVAK: {
    id: 'WVAK',
    name: '炸鱼蕾娜',
    subtitle: '狂犬+压力+枪法+KDA',
    description:
      '顺风局你是神，逆风局你化身演说家。主打一个真实，杀人靠枪法，输出靠声带！瓦村没有你开麦，就像西方没有耶路撒冷。',
    imagePath: '/images/type1.jpg',
    dominantDimensions: ['W', 'V', 'A', 'K'],
  },
  WVAO: {
    id: 'WVAO',
    name: '敢死队捷风',
    subtitle: '狂犬+压力+枪法+分奴',
    description:
      '最好的闪光弹是自己E技能永远只往前飞。大喊一声"我拉了"然后光速暴毙在包点。虽然游戏体验只有10秒，但哪怕战绩0-15，你也觉得自己是破局的关键！',
    imagePath: '/images/type2.jpg',
    dominantDimensions: ['W', 'V', 'A', 'O'],
  },
  WVBK: {
    id: 'WVBK',
    name: '泉水第一指挥官',
    subtitle: '狂犬+压力+道具+KDA',
    description:
      '死了比活着话还多。开局冲得最猛，死得最早。倒下后立刻接管队伍语音，化身战术带师，给剩下的四个冤种队友进行高强度的电台播音，主打一个"灵魂同在"。',
    imagePath: '/images/type3.jpg',
    dominantDimensions: ['W', 'V', 'B', 'K'],
  },
  WVBO: {
    id: 'WVBO',
    name: '仁川铁臂',
    subtitle: '狂犬+压力+道具+分奴',
    description: '闪瞎队友专业户。平地起惊雷，康哥闪来了！',
    imagePath: '/images/type4.jpg',
    dominantDimensions: ['W', 'V', 'B', 'O'],
  },
  WMAK: {
    id: 'WMAK',
    name: '冷酷代练哥',
    subtitle: '狂犬+自闭+枪法+KDA',
    description:
      '莫得感情的杀手，全场0语音，拿把狂徒杀穿全场。你不沟通不是因为脾气好，而是觉得大家萍水相逢，没必要用语言交流，用子弹说话就足够了。',
    imagePath: '/images/type5.jpg',
    dominantDimensions: ['W', 'M', 'A', 'K'],
  },
  WMAO: {
    id: 'WMAO',
    name: '战斗奶妈',
    subtitle: '狂犬+自闭+枪法+分奴',
    description:
      '冰墙是用来踩的。谁说奶妈只能躲在后面？你的冰墙是给自己创造对枪角度的！奶人？不存在的，等我把对面全杀光了，你们自己去地上捡枪吧！',
    imagePath: '/images/type6.jpg',
    dominantDimensions: ['W', 'M', 'A', 'O'],
  },
  WMBK: {
    id: 'WMBK',
    name: '集锦受害者',
    subtitle: '狂犬+自闭+道具+KDA',
    description:
      '人类迷惑行为大赏。脑子里装满了前卫的黑科技战术，总试图整出逆天操作。虽然偶尔下饭，不幸成为对面每日集锦的背景板，但你的创造力绝对是瓦村第一流的！',
    imagePath: '/images/type7.jpg',
    dominantDimensions: ['W', 'M', 'B', 'K'],
  },
  WMBO: {
    id: 'WMBO',
    name: '上朝幽影',
    subtitle: '狂犬+自闭+道具+分奴',
    description: '依旧上朝，依旧灵性。',
    imagePath: '/images/type8.jpg',
    dominantDimensions: ['W', 'M', 'B', 'O'],
  },
  SVAK: {
    id: 'SVAK',
    name: 'KDA保护协会',
    subtitle: '老六+压力+枪法+KDA',
    description:
      '幻影坦克。队友全在A大火拼，你在B点下水道看风景。永远走在队伍最后面，不是不敢打，只是为了守护那可怜的KDA。只要我不死，这把就不算输！',
    imagePath: '/images/type9.jpg',
    dominantDimensions: ['S', 'V', 'A', 'K'],
  },
  SVAO: {
    id: 'SVAO',
    name: '逛街自由人',
    subtitle: '老六+压力+枪法+分奴',
    description:
      '瓦罗兰特旅行家。仿佛在玩另一款探索类游戏。喜欢在地图边缘单摸，一边看风景一边开麦指导正面战场。赢了是你信息拿得好，输了是你还没逛完。',
    imagePath: '/images/type10.jpg',
    dominantDimensions: ['S', 'V', 'A', 'O'],
  },
  SVBK: {
    id: 'SVBK',
    name: '阴险保安',
    subtitle: '老六+压力+道具+KDA',
    description: '战术带师。不要叫我老六，全是思路。',
    imagePath: '/images/type11.jpg',
    dominantDimensions: ['S', 'V', 'B', 'K'],
  },
  SVBO: {
    id: 'SVBO',
    name: '上帝视角玩家',
    subtitle: '老六+压力+道具+分奴',
    description:
      '泉水战术板。肉体虽然倒下，但灵魂已经升华。活着的时候低调做人，倒下后战术素养超越职业教练，最喜欢在观战视角指点江山，运筹帷幄。',
    imagePath: '/images/type12.jpg',
    dominantDimensions: ['S', 'V', 'B', 'O'],
  },
  SMAK: {
    id: 'SMAK',
    name: '瘤子勃勒',
    subtitle: '老六+自闭+枪法+KDA',
    description: '西装暴徒。他们走不了了，谁还有多余资金？',
    imagePath: '/images/type13.jpg',
    dominantDimensions: ['S', 'M', 'A', 'K'],
  },
  SMAO: {
    id: 'SMAO',
    name: '气氛组专员',
    subtitle: '老六+自闭+枪法+分奴',
    description:
      '极致的陪伴。你就像个走丢的孩子，主打一个极致的陪伴。枪可以马，技能可以空，但态度必须端正。默默跟着大哥后面，你是瓦村不可或缺的吉祥物。',
    imagePath: '/images/type14.jpg',
    dominantDimensions: ['S', 'M', 'A', 'O'],
  },
  SMBK: {
    id: 'SMBK',
    name: '经济管理大师',
    subtitle: '老六+自闭+道具+KDA',
    description:
      '枪比命重要。游戏可以输，枪不能掉。只要觉得打不过，哪怕1v2你也掉头就跑。道具捏在手里能带到下辈子，沉默是你理财时的完美保护色。',
    imagePath: '/images/type15.jpg',
    dominantDimensions: ['S', 'M', 'B', 'K'],
  },
  SMBO: {
    id: 'SMBO',
    name: '感动瓦村十大人物',
    subtitle: '老六+自闭+道具+分奴',
    description:
      '纯良大冤种。选人补烟位，开局发狂徒。全场话最少，干的脏活最多。吃的是草，挤的是血球，瓦村有你，真的是全服的福气！',
    imagePath: '/images/type16.jpg',
    dominantDimensions: ['S', 'M', 'B', 'O'],
  },
  'ZMJJ-KK': {
    id: 'ZMJJ-KK',
    name: '流水的 ZmjjKK',
    subtitle: '天选之子',
    description:
      '天生狂骨，主角光环。收手吧，外面全是康康！你就是瓦村的绝对核心，自信的化身。你是懂什么叫"这枪我必须要开"的。',
    imagePath: '/images/type17.jpg',
    dominantDimensions: ['W', 'A'],
  },
};
