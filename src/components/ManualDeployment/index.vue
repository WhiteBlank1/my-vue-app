<template>
  <div class="manual-deplyment-wapper">
    <img src="@/assets/login.jpeg" />
    <el-card>
      <el-radio-group
        v-model="activeName"
        type="card"
        class="tab-group"
      >
        <el-radio-button
          v-for="item in MANUAL_TAB_CONFIGS"
          :key="item.label"
          :value="item.label"
        >
          {{ item.label }}
        </el-radio-button>
      </el-radio-group>
      <el-form :label-width="200" :model="formValue" :rules="rules" ref="formRef">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Length of Field" prop="lengthField">
              <el-input v-model="formValue.lengthField" type="number" disabled>
                <template #append>Meters</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Width of Field" prop="widthField">
              <el-input v-model="formValue.widthField" type="number" disabled>
                <template #append>Meters</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Operating Theatre" prop="operatingTheatre">
              <el-input v-model="formValue.operatingTheatre" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="X-Ray" prop="xRay">
              <el-input v-model="formValue.xRay" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Intensice Care Unit" prop="intensiceCare">
              <el-input v-model="formValue.intensiceCare" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="CT Scanner" prop="ctScanner">
              <el-input v-model="formValue.ctScanner" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Sterilizer" prop="sterilizer">
              <el-input v-model="formValue.sterilizer" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Lab/Blood Bank" prop="lab">
              <el-input v-model="formValue.lab" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Perioperative Shelter" prop="perioperativeShelter">
              <el-input v-model="formValue.perioperativeShelter" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="General Ward Tents" prop="generalWardTents">
              <el-input v-model="formValue.generalWardTents" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Perioperative Tent" prop="perioperativeTent">
              <el-input v-model="formValue.perioperativeTent" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Dental" prop="dental">
              <el-input v-model="formValue.dental" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Power Generation Systems" prop="powerGenerationSystems">
              <el-input v-model="formValue.powerGenerationSystems" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Combat Stress Ward Tent" prop="combatStressWardTent">
              <el-input v-model="formValue.combatStressWardTent" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Triage Tent" prop="triageTent">
              <el-input v-model="formValue.triageTent" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Connecting Tents" prop="connectingTents">
              <el-input v-model="formValue.connectingTents" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="P2 (Treatment) Tent" prop="p2Tent">
              <el-input v-model="formValue.p2Tent" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Water tanker" prop="water">
              <el-input v-model="formValue.water" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="PI (Resuscitation) Tent" prop="p1Tent">
              <el-input v-model="formValue.p1Tent" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Connecting Channel" prop="connectingChannel">
              <el-input v-model="formValue.connectingChannel" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="C2 Container" prop="C2Container">
              <el-input v-model="formValue.C2Container" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        
        <el-form-item class="button-group">
          <el-button @click="goback()">Return</el-button>
          <el-button type="primary" @click="submit()">Submit</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import MANUAL_TAB_CONFIGS from "@/configs/manual-tab-config";

const commonStore = useStore();
const router = useRouter();
const formRef = ref(null);
const formValue = ref({
  lengthField: 50,
  widthField: 20,
  operatingTheatre: 2,
  intensiceCare: 2,
  sterilizer: 2,
  xRay: 2,
  ctScanner: 2,
  lab: 2,
  perioperativeShelter: 2,
  generalWardTents: 2,
  perioperativeTent: 2,
  dental: 2,
  powerGenerationSystems: 2,
  combatStressWardTent: 2,
  triageTent: 2,
  connectingTents: 2,
  p2Tent: 2,
  water: 2,
  p1Tent: 2,
  connectingChannel: 2,
  C2Container: 2,
  C1Container: 2,
});
const rules = {
  lengthField: { required: true, validator: fieldValidator },
  widthField: { required: true, validator: fieldValidator },
  operatingTheatre: { required: true, validator: fieldValidator },
  intensiceCare: { required: true, validator: fieldValidator },
  sterilizer: { required: true, validator: fieldValidator },
  xRay: { required: true, validator: fieldValidator },
  ctScanner:{ required: true, validator: fieldValidator },
  lab: { required: true, validator: fieldValidator },
  perioperativeShelter: { required: true, validator: fieldValidator },
  generalWardTents: { required: true, validator: fieldValidator },
  perioperativeTent: { required: true, validator: fieldValidator },
  dental: { required: true, validator: fieldValidator },
  powerGenerationSystems: { required: true, validator: fieldValidator },
  combatStressWardTent: { required: true, validator: fieldValidator },
  triageTent: { required: true, validator: fieldValidator },
  connectingTents: { required: true, validator: fieldValidator },
  p2Tent: { required: true, validator: fieldValidator },
  water: { required: true, validator: fieldValidator },
  p1Tent: { required: true, validator: fieldValidator },
  connectingChannel: { required: true, validator: fieldValidator },
  C2Container: { required: true, validator: fieldValidator },
  C1Container: { required: true, validator: fieldValidator },
};
const activeName = ref('reggister')

function fieldValidator(
  _rule: any,
  value: string | undefined | null,
  callback: Function
) {
  if (!value) {
    callback("field is required！");
    return;
  }
  if (!/^[0-9]+$/g.test(value)) {
    callback("field is illegality！");
    return;
  }
  callback();
}

function goback() {
  commonStore.commit("resetManualCapacity");
  router.back();
}

async function submit() {
  if (formRef.value === null) {
    return;
  }
  const validator = await (formRef.value as any).validate();
  
  if (validator === false) {
    return;
  }
  commonStore.commit("updateManualCapacity", formValue.value);
  ElMessage({
    type: "success",
    message: "save success!",
  });
  setTimeout(() => {
    router.push("/manualdeployment/paylout");
  }, 600);
}

</script>
<style lang="less">
.manual-deplyment-wapper {
  position: relative;
  .tab-group {
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .paylout {
    width: 100%;
    height: 400px;
    border: 1px solid;
  }
  .el-card {
    width: 50%;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    .content {
      display: flex;
    }
    .content-left {
      width: 50%;
      height: 400px;
      border: 1px solid #ccc;
    }
    .content-right {
      width: 50%;
      padding: 0 15px;
    }
    .button-group {
      margin-top: 20px;
      .el-form-item__content{
        justify-content: end;
        margin-right: 20px;
        .el-button {
          width: 150px;
        }
      }
    }
  }
}
</style>
