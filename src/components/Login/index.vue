<template>
  <div class="login-wapper">
    <img src="@/assets/login.jpeg" />
    <el-card class="login-content">
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="userInfo"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="Username" prop="username">
          <el-input
            v-model="userInfo.username"
            autocomplete="off"
            placeholder="enter one user name"
          />
        </el-form-item>
        <el-form-item label="Password" prop="passward">
          <el-input
            v-model="userInfo.passward"
            type="password"
            autocomplete="off"
            placeholder="enter one passward"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm()"> Login </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const ruleFormRef = ref(null);
const commonStore = useStore();
const userInfo = ref({
  username: undefined,
  passward: undefined,
});
const rules = {
  username: { required: true, validate: userNameValidator },
  passward: { required: true, validate: passWardValidator },
};
const router = useRouter();

function userNameValidator(
  _rule: any,
  value: string | undefined | null,
  callback: Function
) {
  if (!value) {
    callback("user name is required！");
    return;
  }
  if (!/^[A-Za-z0-9]+$/g.test(value)) {
    callback("user name is illegality！");
    return;
  }
  callback();
}

function passWardValidator(
  _rule: any,
  value: string | undefined | null,
  callback: Function
) {
  if (!value) {
    callback("passward is required！");
    return;
  }
  if (!/^[A-Za-z0-9]+$/g.test(value)) {
    callback("passward is illegality！");
    return;
  }
  callback();
}

async function submitForm() {
  if (ruleFormRef.value === null) {
    return;
  }
  const validator = await (ruleFormRef.value as any).validate();
  if (validator === false) {
    return;
  }
  if (userInfo.value.username !== "admin") {
    ElMessage({
      message: "user name login fail!",
      type: "error",
    });
    return;
  }
  commonStore.commit("setUserInfo", userInfo.value);
  ElMessage({
    message: "user name login success!",
    type: "success",
  });
  setTimeout(() => {
    router.push("/menu");
  }, 600);
}
</script>
<style lang="less">
.login-wapper {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .el-card {
    width: 450px;
    height: 200px;
    padding: 20px;
    position: absolute;
    top: 50%;
    right: 250px;
    transform: translateY(-50%);
  }
  .el-button--primary {
    width: 100%;
    height: 40px;
    margin-top: 20px;
  }
}
</style>
