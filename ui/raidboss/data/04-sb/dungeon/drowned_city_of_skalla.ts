import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';
import { RaidbossData } from '../../../../../types/data';
import { TriggerSet } from '../../../../../types/trigger';

export type Data = RaidbossData;

const triggerSet: TriggerSet<Data> = {
  zoneId: ZoneId.TheDrownedCityOfSkalla,
  timelineFile: 'drowned_city_of_skalla.txt',
  timelineTriggers: [
    {
      // There is a startsUsing line, but the cast time is under 3 seconds.
      id: 'Skalla Torpedo',
      regex: /Torpedo/,
      beforeSeconds: 4,
      response: Responses.tankBuster(),
    },
    {
      id: 'Skalla Bubble Burst',
      regex: /Bubble Burst/,
      beforeSeconds: 3,
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Avoid Bubble Explosions',
          de: 'Vermeide die Blasen-Explosionen',
          fr: 'Évitez les explosions des bulles',
          ja: '泡の爆発から避ける',
          cn: '躲开泡泡爆炸',
          ko: '거품 폭발 피하기',
        },
      },
    },
  ],
  triggers: [
    {
      id: 'Skalla Rising Seas',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2650', source: 'Kelpie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2650', source: 'Kelpie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2650', source: 'Kelpie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2650', source: 'ケルピー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2650', source: '凯尔派', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2650', source: '켈피', capture: false }),
      response: Responses.aoe(),
    },
    {
      id: 'Skalla Hydro Pull',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2651', source: 'Kelpie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2651', source: 'Kelpie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2651', source: 'Kelpie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2651', source: 'ケルピー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2651', source: '凯尔派', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2651', source: '켈피', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'Skalla Hydro Push',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2652', source: 'Kelpie', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2652', source: 'Kelpie', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2652', source: 'Kelpie', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2652', source: 'ケルピー', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2652', source: '凯尔派', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2652', source: '켈피', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'Skalla Bloody Puddle',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '002B' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Skalla Rusting Claw',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2661', source: 'Hrodric Poisontongue' }),
      netRegexDe: NetRegexes.startsUsing({ id: '2661', source: 'Hrodric Giftzunge' }),
      netRegexFr: NetRegexes.startsUsing({ id: '2661', source: 'Hrodric Le Médisant' }),
      netRegexJa: NetRegexes.startsUsing({ id: '2661', source: '直言のフロドリック' }),
      netRegexCn: NetRegexes.startsUsing({ id: '2661', source: '直言不讳 赫罗德里克' }),
      netRegexKo: NetRegexes.startsUsing({ id: '2661', source: '입바른 흐로드릭' }),
      response: Responses.tankCleave(),
    },
    {
      id: 'Skalla Tail Drive',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2663', source: 'Hrodric Poisontongue', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2663', source: 'Hrodric Giftzunge', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2663', source: 'Hrodric Le Médisant', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2663', source: '直言のフロドリック', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2663', source: '直言不讳 赫罗德里克', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2663', source: '입바른 흐로드릭', capture: false }),
      alertText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'tail cleave',
          de: 'Schweif-Flächenangriff',
          fr: 'Évitez la queue',
          ja: 'しっぽ！',
          cn: '尾巴攻击',
          ko: '꼬리쓸기',
        },
      },
    },
    {
      id: 'Skalla The Spin',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2664', source: 'Hrodric Poisontongue', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2664', source: 'Hrodric Giftzunge', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2664', source: 'Hrodric Le Médisant', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2664', source: '直言のフロドリック', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2664', source: '直言不讳 赫罗德里克', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2664', source: '입바른 흐로드릭', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'Skalla Ring Of Chaos',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '0079' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Ring on YOU',
          de: 'Ring auf DIR',
          fr: 'Anneau sur VOUS',
          ja: '自分にドーナツ範囲',
          cn: '环形AoE点名',
          ko: '나에게 도넛 장판',
        },
      },
    },
    {
      id: 'Skalla Cross Of Chaos',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '007A' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'Cross on YOU',
          de: 'Kreuz auf DIR',
          fr: 'Croix sur VOUS',
          ja: '自分に十字範囲',
          cn: '十字AoE点名',
          ko: '나에게 십자 장판',
        },
      },
    },
    {
      id: 'Skalla Circle Of Chaos',
      type: 'HeadMarker',
      netRegex: NetRegexes.headMarker({ id: '001C' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'Skalla Eye Of The Fire',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2665', source: 'Hrodric Poisontongue', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2665', source: 'Hrodric Giftzunge', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2665', source: 'Hrodric Le Médisant', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2665', source: '直言のフロドリック', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2665', source: '直言不讳 赫罗德里克', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2665', source: '입바른 흐로드릭', capture: false }),
      response: Responses.lookAway(),
    },
    {
      id: 'Skalla Words Of Woe',
      type: 'StartsUsing',
      netRegex: NetRegexes.startsUsing({ id: '2662', source: 'Hrodric Poisontongue', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2662', source: 'Hrodric Giftzunge', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2662', source: 'Hrodric Le Médisant', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2662', source: '直言のフロドリック', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2662', source: '直言不讳 赫罗德里克', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2662', source: '입바른 흐로드릭', capture: false }),
      infoText: (_data, _matches, output) => output.text!(),
      outputStrings: {
        text: {
          en: 'avoid eye lasers',
          de: 'Augenlaser ausweichen',
          fr: 'Évitez les lasers',
          ja: '前方レーザーを避ける',
          cn: '避开眼部激光',
          ko: '레이저 피하기',
        },
      },
    },
  ],
  timelineReplace: [
    {
      'locale': 'en',
      'replaceText': {
        'Cross Of Chaos/Circle Of Chaos': 'Circle/Cross',
        'Ring Of Chaos/Cross Of Chaos': 'Cross/Ring',
        'Ring Of Chaos/Circle Of Chaos': 'Circle/Ring',
        'Hydro Pull/Hydro Push': 'Hydro Pull/Push',
        'Order To Detonate \\(cast\\)': 'Order To Detonate',
      },
    },
    {
      'locale': 'de',
      'replaceSync': {
        'A Door Unopened': 'Siegelpforte',
        'Hrodric Poisontongue': 'Hrodric Giftzunge',
        'Hydrosphere': 'Hydrosphäre',
        'Kelpie': 'Kelpie',
        'The Golden Walls Of Ruin': 'Theoderics Schatzkammer',
        'The Green Screams': 'Kelpies Revier',
        'The Old One': 'Altvorder(?:e|er|es|en)',
      },
      'replaceText': {
        'Bloody Puddle': 'Blutlache',
        'Bubble Burst': 'Platzende Blasen',
        'Circle Of Chaos': 'Chaoskreis',
        'Cross Of Chaos': 'Chaoskreuz',
        'Eye Of The Fire': 'Feuerauge',
        'Gallop': 'Galopp',
        'Hydro Pull': 'Hydrosog',
        'Hydro Push': 'Hydroschub',
        'Mystic Flame': 'Mystische Flamme',
        'Mystic Light': 'Mystisches Licht',
        'Order To Detonate': 'Selbstzerstörungsbefehl',
        'Ring Of Chaos': 'Chaosring',
        'Rising Seas': 'Steigender Spiegel',
        'Rusting Claw': 'Rostklaue',
        'Self-Detonate': 'Zerbersten',
        'Shifting Light': 'Lichtspiel',
        'Tail Drive': 'Schwanzfetzer',
        'The Spin': 'Doller Drall',
        'Torpedo': 'Torpedo',
        'Words Of Woe': 'Wehklagende Worte',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'A Door Unopened': 'La voie scellée',
        'Hrodric Poisontongue': 'Hrodric le Médisant',
        'Hydrosphere': 'hydrosphère',
        'Kelpie': 'Kelpie',
        'The Golden Walls Of Ruin': 'Salle du trésor',
        'The Green Screams': 'Domaine de Kelpie',
        'The Old One': 'Ancien',
      },
      'replaceText': {
        '\\?': ' ?',
        '\\(cast\\)': '(lancement)',
        'Bloody Puddle': 'Mare ensanglantée',
        'Bubble Burst': 'Bulles explosives',
        '(?<!/)Cross Of Chaos(?!/)': 'Croix du chaos',
        'Cross Of Chaos/Circle Of Chaos': 'Croix/Cercle du chaos',
        'Eye Of The Fire': 'Œil des flammes',
        'Gallop': 'Galop',
        'Hydro Pull': 'Hydrotraction',
        'Hydro Push': 'Hydropoussée',
        'Mystic Flame': 'Flammes mystiques',
        'Mystic Light': 'Lumière mystique',
        'Order To Detonate': 'Ordre de s\'auto-détruire',
        'Ring Of Chaos(?!/)': 'Anneau du chaos',
        'Ring Of Chaos/Cross Of Chaos': 'Anneau/Croix du chaos',
        'Ring Of Chaos/Circle Of Chaos': 'Anneau/Cercle du chaos',
        'Rising Seas': 'Montée des eaux',
        'Rusting Claw': 'Griffes de ruine',
        'Self-Detonate': 'Auto-atomisation',
        'Shifting Light': 'Lumière tremblante',
        'Tail Drive': 'Coup de queue',
        'The Spin': 'Balayage',
        'Torpedo': 'Ruée saumâtre',
        'Words Of Woe': 'Mots de malheur',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'A Door Unopened': '封印された門扉',
        'Hrodric Poisontongue': '直言のフロドリック',
        'Hydrosphere': 'ハイドロスフィア',
        'Kelpie': 'ケルピー',
        'The Golden Walls Of Ruin': 'テオドリックの黄金堂',
        'The Green Screams': 'ケルピーの縄張り',
        'The Old One': 'オールドワン',
      },
      'replaceText': {
        'Bloody Puddle': 'ブラッディパドル',
        'Bubble Burst': 'バブルバースト',
        'Circle Of Chaos': 'カオスサークル',
        'Cross Of Chaos': 'カオスクロス',
        'Eye Of The Fire': 'フィアーアイ',
        'Gallop': 'ギャロップ',
        'Hydro Pull': 'ハイドロプル',
        'Hydro Push': 'ハイドロプッシュ',
        'Mystic Flame': '魔光炎',
        'Mystic Light': '魔光線',
        'Order To Detonate': '自爆命令',
        'Ring Of Chaos': 'カオスリング',
        'Rising Seas': 'ライジングシー',
        'Rusting Claw': 'ラスティクロウ',
        'Self-Detonate': '爆発霧散',
        'Shifting Light': '変化光',
        'Tail Drive': 'テイルドライブ',
        'The Spin': 'トルネードスピン',
        'Torpedo': 'トルペド',
        'Words Of Woe': 'ワード・オブ・ウー',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'A Door Unopened': '封闭的门扉',
        'Hrodric Poisontongue': '直言不讳 赫罗德里克',
        'Hydrosphere': '水化球体',
        'Kelpie': '凯尔派',
        'The Golden Walls Of Ruin': '黄金堂',
        'The Green Screams': '凯尔派的领地',
        'The Old One': '旧日灵偶',
      },
      'replaceText': {
        'Bloody Puddle': '血池',
        'Bubble Burst': '泡泡炸裂',
        'Circle Of Chaos': '混沌之圈',
        'Cross Of Chaos': '混沌十字',
        'Eye Of The Fire': '惧乱之眼',
        'Gallop': '飞驰',
        'Hydro Pull': '水力吸引',
        'Hydro Push': '水力推行',
        'Mystic Flame': '魔光炎',
        'Mystic Light': '魔光线',
        'Order To Detonate': '自爆命令',
        'Ring Of Chaos': '混沌之环',
        'Rising Seas': '水平面上升',
        'Rusting Claw': '锈爪',
        'Self-Detonate': '雾散爆发',
        'Shifting Light': '变化光',
        'Tail Drive': '尾部打击',
        'The Spin': '龙卷回旋',
        'Torpedo': '鱼雷',
        'Words Of Woe': '灾厄之语',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'A Door Unopened': '봉인된 문',
        'Hrodric Poisontongue': '입바른 흐로드릭',
        'Hydrosphere': '액체 구체',
        'Kelpie': '켈피',
        'The Golden Walls Of Ruin': '테오도리크의 보물고',
        'The Green Screams': '켈피의 영역',
        'The Old One': '옛 존재',
      },
      'replaceText': {
        'Bloody Puddle': '피 웅덩이',
        'Bubble Burst': '거품 작렬',
        'Circle Of Chaos': '혼돈의 원',
        'Cross Of Chaos': '혼돈의 십자가',
        'Eye Of The Fire': '공포의 눈동자',
        'Gallop': '습보',
        'Hydro Pull': '수력 당기기',
        'Hydro Push': '수력 밀치기',
        'Mystic Flame': '마광염',
        'Mystic Light': '마광선',
        'Order To Detonate': '자폭 명령',
        'Ring Of Chaos': '혼돈의 고리',
        'Rising Seas': '솟구치는 바다',
        'Rusting Claw': '녹슨 발톱',
        'Self-Detonate': '자가폭발',
        'Shifting Light': '변화광',
        'Tail Drive': '꼬리쓸기',
        'The Spin': '대회전',
        'Torpedo': '뒷발질',
        'Words Of Woe': '비통한 외침',
      },
    },
  ],
};

export default triggerSet;
