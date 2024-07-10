import operatingTheatre from '@assets/Logo/Operating Theatre.png';
import intensiveCareUnit from '@assets/Logo/Intensive Care Unit.png';
import Sterilizer from '@assets/Logo/Sterilizer.png';
import perioperativeShelter from '@assets/Logo/Perioperative Shelter.png';
import perioperativeTent from '@assets/Logo/Perioperative Tent.png';
import powerGenerationSystems from '@assets/Logo/Power Generation Systems.png';
import triageTent from '@assets/Logo/Triage Tent.png';
import p2Tent from '@assets/Logo/P2 (Treatment) Tent.png';
import p1Tent from '@assets/Logo/PI (Resuscitation) Tent.png';
import C2Container from '@assets/Logo/C2 Container.png';
import xRay from '@assets/Logo/X-Ray.png';
import CTScanner from '@assets/Logo/CT Scanner.png';
import Lab from '@assets/Logo/Lab Blood Bank.png';
import generalWardTents from '@assets/Logo/General Ward Tents.png';
import Dental from '@assets/Logo/Dental.png';
import combatStressWardTent from '@assets/Logo/Combat Stress Ward Tent.png';
import connectingTents from '@assets/Logo/Connecting Tents.png';
import water from '@assets/Logo/Water tanker.png';
import connectingChannel from '@assets/Logo/Connecting Channel.png';

interface DataManageImgConfig {
  id: string;
  title: string;
  titleEnglish: string;
  structureType: string;
  structureEnglish: string;
  img: string;
}

const DATA_MANAGE_IMG_CONFIGS: Array<DataManageImgConfig> = [
  {
    id: 'operatingTheatre',
    title: '手术方舱',
    titleEnglish: 'Operating Theatre',
    structureEnglish: '2 Expansions Shelter',
    structureType: '双扩展方舱',
    img: operatingTheatre
  },
  {
    id: 'intensiveCareUnit',
    title: 'ICU方舱',
    titleEnglish: 'Intensive Care Unit',
    structureEnglish: '2 Expansions Shelter',
    structureType: '双扩展方舱',
    img: intensiveCareUnit
  },
  {
    id: 'sterilizer',
    title: '消毒灭菌方舱',
    titleEnglish: 'Sterilizer',
    structureEnglish: 'Shelter',
    structureType: '非扩展方舱',
    img: Sterilizer
  },
  {
    id: 'perioperativeShelter',
    title: '术前处理方舱',
    titleEnglish: 'Perioperative Shelter',
    structureEnglish: '2 Expansions Shelter',
    structureType: '双扩展方舱',
    img: perioperativeShelter
  },
  {
    id: 'perioperativeTent',
    title: '术前处理帐篷',
    titleEnglish: 'Perioperative Tent',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: perioperativeTent
  },
  {
    id: 'powerGenerationSystems',
    title: '电站方舱',
    titleEnglish: 'Power Generation Systems',
    structureEnglish: 'ISO Container',
    structureType: 'ISO集装箱',
    img: powerGenerationSystems
  },
  {
    id: 'triageTent',
    title: '伤员鉴别分类帐篷',
    titleEnglish: 'Triage Tent',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: triageTent
  },
  {
    id: 'p2Tent',
    title: 'P2（治疗）帐篷',
    titleEnglish: 'P2 (Treatment) Tent',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: p2Tent
  },
  {
    id: 'p1Tent',
    title: 'P1（抢救）帐篷',
    titleEnglish: 'PI (Resuscitation) Tent',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img:p1Tent
  },
  {
    id: 'C2Container',
    title: '指挥方舱',
    titleEnglish: 'C2 Container',
    structureEnglish: '2 Expansions Shelter',
    structureType: '双扩展方舱',
    img: C2Container
  },
  {
    id: 'xRay',
    title: '放射方舱',
    titleEnglish: 'X-Ray',
    structureEnglish: 'Shelter',
    structureType: '非扩展方舱',
    img: xRay
  },
  {
    id: 'CTScanner',
    title: 'CT方舱',
    titleEnglish: 'CT Scanner',
    structureEnglish : '1 Expansion Shelter',
    structureType: '单扩展方舱',
    img: CTScanner
  },
  {
    id: 'Lab',
    title: '实验/血库方舱',
    titleEnglish: 'Lab/Blood Bank',
    structureEnglish: 'Shelter',
    structureType: '非扩展方舱',
    img: Lab
  },
  {
    id: 'generalWardTents',
    title: '普通病房',
    titleEnglish: 'General Ward Tents',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: generalWardTents
  },
  {
    id: 'dental',
    title: '牙科方舱',
    titleEnglish: 'Dental',
    structureEnglish: '2 Expansions Shelter',
    structureType: '双扩展方舱',
    img: Dental
  },
  {
    id: 'combatStressWardTent',
    title: '战争应急处理帐篷',
    titleEnglish: 'Combat Stress Ward Tent',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: combatStressWardTent
  },
  {
    id: 'connectingTents',
    title: '通道帐篷',
    titleEnglish: 'Connecting Tents ',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: connectingTents
  },
  {
    id: 'water',
    title: '水站（1个净水，一个污水），每个水箱1200L',
    titleEnglish: 'Water tankers(1xclean, 1xdirty),Water tank 1200 Liters each',
    structureEnglish: 'ISO Container',
    structureType: 'ISO集装箱',
    img: water
  },
  {
    id: 'connectingChannel',
    title: '连接通道',
    titleEnglish: 'Connecting Channel',
    structureEnglish: 'Tent',
    structureType: '帐篷',
    img: connectingChannel
  }
]

export default DATA_MANAGE_IMG_CONFIGS;
