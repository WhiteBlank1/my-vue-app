<template>
  <div class="auto-deplyment-programme">
    <img src="@/assets/login.jpeg" />
    <el-card>
      <el-form :label-width="200" :model="formValue" :rules="rules" ref="formRef">
        <el-row :gutter="30">
          <el-col :span="12">
            <el-form-item label="Length of Field" prop="lengthField">
              <el-input v-model="formValue.lengthField" type="number" disabled>
                <template #append>Meters</template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Manppower" prop="manppower">
              <el-input v-model="formValue.manppower" type="number" disabled>
                <template #append>Persons</template>
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
          <el-col :span="12">
            <el-form-item label="Est. Deployment Periods" prop="deploymentPeriods">
              <el-input v-model="formValue.deploymentPeriods" type="number" disabled>
                <template #append>Minutes</template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div class="content">
          <div class="content-left">
            <div class="left-content-img">
              <img :src="img" v-show="img !== ''" />
            </div>
            <el-button-group class="pageination-button-group">
              <el-button
                type="primary"
                :icon="ArrowLeft"
                :disabled="current === 1"
                @click="previousPage()"
              >Previous Page</el-button>
              <el-button
                type="primary"
                :icon="ArrowRight"
                :disabled="current === AUTO_MANAGE_PROGRAMME.length"
                @click="nextPage()"
              >
                Next Page
              </el-button>
            </el-button-group>
          </div>
          <div class="content-right">
            <el-form-item label="Operating Theatre" prop="operatingTheatre">
              <el-input v-model="formValue.operatingTheatre" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Intensice Care Unit" prop="intensiceCare">
              <el-input v-model="formValue.intensiceCare" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Sterilizer" prop="sterilizer">
              <el-input v-model="formValue.sterilizer" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="CT Scanner" prop="ctScanner">
              <el-input v-model="formValue.ctScanner" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Ward Tent" prop="wardTent">
              <el-input v-model="formValue.wardTent" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Connecting Tents" prop="connectingTents">
              <el-input v-model="formValue.connectingTents" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Power Generation" prop="powerGeneration">
              <el-input v-model="formValue.powerGeneration" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
            <el-form-item label="Water tankers" prop="waterTankers">
              <el-input v-model="formValue.waterTankers" type="number">
                <template #append>Units</template>
              </el-input>
            </el-form-item>
          </div>
        </div>
        <el-form-item class="button-group">
          <el-button @click="goback()">Return</el-button>
          <el-button type="primary" @click="submit()">Save</el-button>
          <el-button type="primary" @click="print()">Print</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import {
  ArrowLeft,
  ArrowRight,
} from '@element-plus/icons-vue'
import AUTO_MANAGE_PROGRAMME from "../../configs/auto-manage-programme";

const commonStore = useStore();
const router = useRouter();
const formRef = ref(null);
const formValue = ref({
  lengthField: 50,
  manppower: 8,
  widthField: 20,
  deploymentPeriods: 30,
  operatingTheatre: 1,
  intensiceCare: 2,
  sterilizer: 1,
  ctScanner: 1,
  wardTent: 2,
  connectingTents: 14,
  powerGeneration: 2,
  waterTankers: 2,
});
const rules = {
  lengthField: { required: true, validator: fieldValidator },
  manppower: { required: true, validator: fieldValidator },
  widthField: { required: true, validator: fieldValidator },
  deploymentPeriods: { required: true, validator: fieldValidator },
  operatingTheatre: { required: true, validator: fieldValidator },
  intensiceCare: { required: true, validator: fieldValidator },
  sterilizer: { required: true, validator: fieldValidator },
  ctScanner: { required: true, validator: fieldValidator },
  wardTent: { required: true, validator: fieldValidator },
  connectingTents: { required: true, validator: fieldValidator },
  powerGeneration: { required: true, validator: fieldValidator },
  waterTankers: { required: true, validator: fieldValidator },
};
const current = ref(1)
const img = ref('')

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
  commonStore.commit("resetAutoCapacityProgramme");
  router.back();
}

async function submit() {
  if (formRef.value === null) {
    return;
  }
  const validator = await (formRef.value as any).validate();
  console.log('validator:', validator);
  
  if (validator === false) {
    return;
  }
  commonStore.commit("updateAutoCapacityProgramme", formValue.value);
  ElMessage({
    type: "success",
    message: "save success!",
  });
  setTimeout(() => {
    router.push("/menu");
  }, 600);
}

function previousPage() {
  current.value--
  setData()
}

function nextPage() {
  current.value++
  setData()
}

function setData() {
  const data = AUTO_MANAGE_PROGRAMME[current.value - 1]
  formValue.value = data.formData || {}
  img.value = data.img
}

function print() {
  ElMessage({
    type: "success",
    message: "print success!",
  })
}

onMounted(() => {
  setData();
})
</script>
<style lang="less">
.auto-deplyment-programme {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .el-card {
    width: 90%;
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
      position: relative;
      .left-content-img {
        width: 100%;
        height: 95%;
        img {
          width: 100%;
        }
      }
      .pageination-button-group {
        margin-top: 20px;
        justify-content: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        z-index: 5;
      }
    }
    .content-right {
      width: 50%;
      padding: 0 15px;
    }
    .button-group .el-form-item__content{
      justify-content: end;
      margin-right: 20px;
      .el-button {
        width: 150px;
      }
    }
  }
}
</style>
