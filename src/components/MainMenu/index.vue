<template>
  <div class="main-menu-wapper">
    <img src="@/assets/login.jpeg" />
    <el-card>
      <el-button type="primary" @click="autoDeployment()">
        Auto Deployment
      </el-button>
      <el-button type="primary" @click="manualDeployment()">
        Manual Deployment
      </el-button>
      <el-button type="primary" @click="dataManage()">
        Data Management
      </el-button>
      <el-button @click="logout()"> Logout </el-button>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const commonStore = useStore();
const router = useRouter();

function autoDeployment() {
  router.push("/autodeployment");
}

function manualDeployment() {
  router.push("/manualdeployment");
}

function dataManage() {
  router.push("/datamanagement");
}

function logout() {
  commonStore.commit("resetUserInfo");
  ElMessage({
    type: "success",
    message: "user logout success!",
  });
  router.push("/login");
}
</script>
<style lang="less">
.main-menu-wapper {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .el-card {
    width: 450px;
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
