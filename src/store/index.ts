import { createStore } from "vuex";

interface UserInfo {
  userName: string | undefined
}

interface AutoCapacity {
  outpatient: number | undefined,
  surgeries: number | undefined,
  inpatient: number | undefined
}

interface AutoCapacityProgramme {
  lengthField: number | undefined;
  manppower: number | undefined;
  widthField: number | undefined;
  deploymentPeriods: number | undefined;
  operatingTheatre: number | undefined;
  intensiceCare: number | undefined;
  sterilizer: number | undefined;
  ctScanner: number | undefined;
  wardTent: number | undefined;
  connectingTents: number | undefined;
  powerGeneration: number | undefined;
  waterTankers: number | undefined;
}

interface ManualCapacity {
  lengthField: number | undefined;
  widthField: number | undefined;
  operatingTheatre: number | undefined;
  intensiceCare: number | undefined;
  sterilizer: number | undefined;
  xRay: number | undefined;
  ctScanner: number | undefined;
  lab: number | undefined;
  perioperativeShelter: number | undefined;
  generalWardTents: number | undefined;
  perioperativeTent: number | undefined;
  dental: number | undefined;
  powerGenerationSystems: number | undefined;
  combatStressWardTent: number | undefined;
  triageTent: number | undefined;
  connectingTents: number | undefined;
  p2Tent: number | undefined;
  water: number | undefined;
  p1Tent: number | undefined;
  connectingChannel: number | undefined;
  C2Container: number | undefined;
  C1Container: number | undefined;
}

interface DataManage {
  modelName: number | undefined;
  sn: number | undefined;
  length: number | undefined;
  width: number | undefined;
  height: number | undefined;
  weight: number | undefined;
  power: number | undefined;
  owner: number | undefined;
  location: number | undefined;
  lastMaintenance: number | undefined;
  registerDate: number | undefined;
  registerPerson: number | undefined;
  icon: string | undefined;
}

// 定义状态的类型
interface State {
  count: number;
  userInfo: UserInfo;
  autoCapacity: AutoCapacity;
  autoCapacityProgramme: AutoCapacityProgramme;
  manualCapacity: ManualCapacity;
  dataManage: DataManage;
}

const state: State = {
  count: 0,
  userInfo: {
    userName: undefined,
  },
  autoCapacity: {
    outpatient: undefined,
    surgeries: undefined,
    inpatient: undefined
  },
  autoCapacityProgramme: {
    lengthField: undefined,
    manppower: undefined,
    widthField: undefined,
    deploymentPeriods: undefined,
    operatingTheatre: undefined,
    intensiceCare: undefined,
    sterilizer: undefined,
    ctScanner: undefined,
    wardTent: undefined,
    connectingTents: undefined,
    powerGeneration: undefined,
    waterTankers: undefined,
  },
  manualCapacity: {
    lengthField: undefined,
    widthField: undefined,
    operatingTheatre: undefined,
    intensiceCare: undefined,
    sterilizer: undefined,
    xRay: undefined,
    ctScanner: undefined,
    lab: undefined,
    perioperativeShelter: undefined,
    generalWardTents:undefined,
    perioperativeTent: undefined,
    dental: undefined,
    powerGenerationSystems: undefined,
    combatStressWardTent: undefined,
    triageTent: undefined,
    connectingTents: undefined,
    p2Tent: undefined,
    water: undefined,
    p1Tent: undefined,
    connectingChannel: undefined,
    C2Container: undefined,
    C1Container: undefined,
  },
  dataManage: {
    modelName: undefined,
    sn: undefined,
    length: undefined,
    width: undefined,
    height: undefined,
    weight: undefined,
    power: undefined,
    owner: undefined,
    location: undefined,
    lastMaintenance: undefined,
    registerDate: undefined,
    registerPerson: undefined,
    icon: undefined,
  }
};

const mutations = {
  increment(state: State) {
    state.count++;
  },
  setUserInfo(state: State, userInfo: UserInfo) {
    state.userInfo = userInfo;
  },
  resetUserInfo(state: State) {
    state.userInfo = {
      userName: undefined,
    };
  },
  updateAutoCapacity(state: State, autoCapacity: AutoCapacity) {
    state.autoCapacity = {
      ...state.autoCapacity,
      ...autoCapacity
    };
  },
  resetAutoCapacity(state: State) {
    state.autoCapacity = {
      outpatient: undefined,
      surgeries: undefined,
      inpatient: undefined
    };
  },
  updateAutoCapacityProgramme(state: State, programme: AutoCapacityProgramme) {
    state.autoCapacityProgramme = {
      ...state.autoCapacityProgramme,
      ...programme
    };
  },
  resetAutoCapacityProgramme(state: State) {
    state.autoCapacityProgramme = {
      lengthField: undefined,
      manppower: undefined,
      widthField: undefined,
      deploymentPeriods: undefined,
      operatingTheatre: undefined,
      intensiceCare: undefined,
      sterilizer: undefined,
      ctScanner: undefined,
      wardTent: undefined,
      connectingTents: undefined,
      powerGeneration: undefined,
      waterTankers: undefined,
    };
  },
  updateManualCapacity(state: State, manualCapacity: ManualCapacity) {
    state.manualCapacity = {
      ...state.manualCapacity,
      ...manualCapacity
    };
  },
  resetManualCapacity(state: State) {
    state.manualCapacity = {
      lengthField: undefined,
      widthField: undefined,
      operatingTheatre: undefined,
      intensiceCare: undefined,
      sterilizer: undefined,
      layouts: [],
    };
  },
  updateDataManage(state: State, dataManage: DataManage) {
    state.dataManage = {
      ...state.dataManage,
      ...dataManage
    };
  },
  resetDataManage(state: State) {
    state.dataManage = {
      modelName: undefined,
      sn: undefined,
      length: undefined,
      width: undefined,
      height: undefined,
      weight: undefined,
      power: undefined,
      owner: undefined,
      location: undefined,
      lastMaintenance: undefined,
      registerDate: undefined,
      registerPerson: undefined,
      icon: undefined,
    };
  },
}

const actions = {
  increment({ commit }) {
    commit('increment');
  }
}

const getters = {
  doubleCount(state) {
    return state.count * 2;
  }
}

// 创建一个新的 store 实例
const store = createStore<State>({
  state,
  mutations,
  actions,
  getters
});

export default store;