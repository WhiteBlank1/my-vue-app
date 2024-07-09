<template>
  <div class="paylout-wapper">
    <img src="@/assets/login.jpeg" />
    <el-card>
      <div class="paylout">
        <SiteLayout
          :moduleConfig="formData"
          v-model="layouts"
        />
      </div>
      <el-button-group class="button-group">
        <el-button @click="goback()">Return</el-button>
        <el-button type="primary" @click="submit()">Save</el-button>
      </el-button-group>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import SiteLayout from "@/common/SiteLayout/index.vue";

const commonStore = useStore();
const router = useRouter();
const layouts = ref([])
const formData = computed(() => commonStore.state.manualCapacity)

function goback() {
  router.back();
}

async function submit() {
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
.paylout-wapper {
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }
  .paylout {
    width: 100%;
    height: 600px;
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
    .button-group {
      margin-top: 20px;
      float: right;
      .el-button {
        width: 150px;
        margin-left: 20px;
      }
      .el-form-item__content{
        justify-content: end;
        margin-right: 20px;
      }
    }
  }
}
</style>
