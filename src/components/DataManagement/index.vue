<template>
  <div class="data-manage-ment-wapper">
    <img src="@/assets/login.jpeg" />
    <el-card>
      <el-radio-group
        v-model="activeName"
        type="card"
        class="tab-group"
      >
        <el-radio-button
          v-for="item in DATA_MANAGE_TAB_CONFIGS"
          :key="item.label"
          :value="item.label"
        >
          {{ item.label }}
        </el-radio-button>
      </el-radio-group>
      <el-form :label-width="200" :model="formValue" :rules="rules" ref="formRef">
        <el-form-item label="Model Name" prop="modelName">
          <el-input v-model="formValue.modelName" />
        </el-form-item>
        <el-form-item label="S/N" prop="sn">
          <el-input v-model="formValue.sn" />
        </el-form-item>
        <el-form-item label="Length" prop="length">
          <el-input v-model="formValue.length" />
        </el-form-item>
        <el-form-item label="Width" prop="width">
          <el-input v-model="formValue.width" />
        </el-form-item>
        <el-form-item label="Height" prop="height">
          <el-input v-model="formValue.height" />
        </el-form-item>
        <el-form-item label="Weight" prop="weight">
          <el-input v-model="formValue.weight" />
        </el-form-item>
        <el-form-item label="Power" prop="power">
          <el-input v-model="formValue.power" />
        </el-form-item>
        <el-form-item label="Owner" prop="owner">
          <el-input v-model="formValue.owner" />
        </el-form-item>
        <el-form-item label="Location" prop="location">
          <el-input v-model="formValue.location" />
        </el-form-item>
        <el-form-item label="Last Maintenance" prop="lastMaintenance">
          <el-input v-model="formValue.lastMaintenance" />
        </el-form-item>
        <el-form-item label="Register Date" prop="registerDate">
          <el-input v-model="formValue.registerDate" />
        </el-form-item>
        <el-form-item label="Register Person" prop="registerPerson">
          <el-input v-model="formValue.registerPerson" />
        </el-form-item>
        <el-collapse v-model="activeCollapseName" accordion>
          <el-collapse-item title="Choose an Icon" name="1">
            <el-radio-group v-model="formValue.icon">
              <el-tooltip
                v-for="item in DATA_MANAGE_IMG_CONFIGS"
                :key="item.id"
                class="box-item"
                effect="light"
                placement="left"
                :hide-after="0"
              >
                <template #content>
                  <div>方舱功能单元名称：{{ item.title }}</div>
                  <div>方舱功能单元名称英文：{{ item.titleEnglish }}</div>
                  <div>结构形式：{{ item.structureType }}</div>
                  <div>结构形式英文：{{ item.structureEnglish }}</div>
                </template>
                <el-radio
                  :value="item.id"
                  size="large"
                  style="margin-top: 10px;"
                  border
                >
                  <img :src="item.img" style="width: 40px;height: 40px;margin-top: 5px;" />
                </el-radio>
              </el-tooltip>
            </el-radio-group>
          </el-collapse-item>
        </el-collapse>

        <el-form-item class="button-group">
          <el-button @click="goback()">Return</el-button>
          <el-button type="primary" @click="submit()">Save</el-button>
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
import DATA_MANAGE_TAB_CONFIGS from "@/configs/data-manage-tab-config";
import DATA_MANAGE_IMG_CONFIGS from "@/configs/data-manage-img-config";

const commonStore = useStore();
const router = useRouter();
const formRef = ref(null);
const formValue = ref({
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
});
const rules = {
  modelName: { required: true, message: 'enter on Model Name' },
  sn: { required: true, message: 'enter on S/N' },
  length: { required: true, message: 'enter on length' },
  width: { required: true, message: 'enter on width' },
  height: { required: true, message: 'enter on height' },
  weight: { required: true, message: 'enter on weight' },
  power: { required: true, message: 'enter on power' },
  owner: { required: true, message: 'enter on owner' },
  location: { required: true, message: 'enter on location' },
  lastMaintenance: { required: true, message: 'enter on lastMaintenance' },
  registerDate: { required: true, message: 'enter on registerDate' },
  registerPerson: { required: true, message: 'enter on registerPerson' }
};
const activeName = ref('reggister')
const activeCollapseName = ref('1')

function goback() {
  commonStore.commit("resetDataManage");
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
  commonStore.commit("updateDataManage", formValue.value);
  ElMessage({
    type: "success",
    message: "save success!",
  });
  setTimeout(() => {
    router.push("/menu");
  }, 600);
}

</script>
<style lang="less">
.data-manage-ment-wapper {
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
  .el-collapse {
    margin: 0 20px;
  }
}
</style>
