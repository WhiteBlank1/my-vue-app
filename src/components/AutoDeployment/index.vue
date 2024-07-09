<template>
  <div class="auto-deplyment-wapper">
    <img src="@/assets/login.jpeg" />
    <el-card>
      <el-form
        :model="formValue"
        :label-width="160"
        ref="formRef"
        :rules="rules"
      >
        <el-form-item label="Outpatient Capacity" prop="outpatient">
          <el-input
            v-model="formValue.outpatient"
            placeholder="enter one Outpatient Capacity"
          >
            <template #append>Persons/24h</template>
          </el-input>
        </el-form-item>
        <el-form-item label="Surgeries Capacity" prop="surgeries">
          <el-input
            v-model="formValue.surgeries"
            placeholder="enter one Surgeries Capacity"
          >
            <template #append>Persons/24h</template>
          </el-input>
        </el-form-item>
        <el-form-item label="Inpatient Capacity" prop="inpatient">
          <el-input
            v-model="formValue.inpatient"
            placeholder="enter one Inpatient Capacity"
          >
            <template #append>Persons</template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button @click="goback()"> Return </el-button>
      <el-button type="primary" @click="submit()"> Submit </el-button>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const commonStore = useStore();
const router = useRouter();
const formRef = ref(null);
const formValue = ref({
  outpatient: undefined,
  surgeries: undefined,
  inpatient: undefined,
});
const rules = {
  outpatient: { required: true, validator: outpatientValidator },
  surgeries: { required: true, validator: surgeriesValidator },
  inpatient: { required: true, validator: inpatientValidator },
};

function outpatientValidator(
  _rule: any,
  value: string | undefined | null,
  callback: Function
) {
  if (!value) {
    callback("outpatient capacity is required！");
    return;
  }
  if (!/^[0-9]+$/g.test(value)) {
    callback("outpatient capacity is illegality！");
    return;
  }
  callback();
}

function surgeriesValidator(
  _rule: any,
  value: string | undefined | null,
  callback: Function
) {
  if (!value) {
    callback("surgeries capacity is required！");
    return;
  }
  if (!/^[0-9]+$/g.test(value)) {
    callback("surgeries capacity is illegality！");
    return;
  }
  callback();
}

function inpatientValidator(
  _rule: any,
  value: string | undefined | null,
  callback: Function
) {
  if (!value) {
    callback("inpatient capacity is required！");
    return;
  }
  if (!/^[0-9]+$/g.test(value)) {
    callback("inpatient capacity is illegality！");
    return;
  }
  callback();
}

function goback() {
  commonStore.commit("resetAutoCapacity");
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
  commonStore.commit("updateAutoCapacity", formValue.value);
  setTimeout(() => {
    router.push("/autodeployment/programme");
  }, 600);
}
</script>
<style lang="less">
.auto-deplyment-wapper {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .el-card {
    width: 500px;
    padding: 20px;
    position: absolute;
    top: 50%;
    right: 250px;
    transform: translateY(-50%);
  }
  .el-button {
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-left: 0;
  }
}
</style>
