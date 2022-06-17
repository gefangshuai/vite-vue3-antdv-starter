<template>
  <div style="width: 900px; margin: 60px auto 50px; padding-bottom: 100px">
    <h1>欢迎访问首页：{{appName}}</h1>
    <a-divider></a-divider>
    <div v-if="loading">正在加载远程数据...</div>
    <div v-else>应用远程数据：{{ appInfo }}</div>
    <a-divider></a-divider>
    <div class="margin-top margin-bottom text-bold">
      所有组件封装见源代码：<code>src/components</code>
    </div>
    <a-button type="primary" v-link="`/login`">返回登录</a-button>
    <a-divider type="vertical" />
    <a-button type="primary" v-link="`/example`">点击查看组件示例页</a-button>
    <a-button @click="handleModal" class="margin-left">获得Modal框</a-button>
    <div ref="testRef">test: {{ test }}</div>

    <a href="#" @click.prevent="handleClick"> {{ data.test2 }}</a>
    用户列表
    <ul>
      <li v-for="user in data.users">
        {{ user }}
      </li>
    </ul>
    <a-button @click="handleEmail">获取用户邮箱</a-button>
    <a-divider>用户卡片</a-divider>
    <a-row :gutter="25">
      <a-col :span="8" v-for="u in data.users">
        <user-slot :user="u">
          <template #desc> 这是简介</template>
          111
        </user-slot>
      </a-col>
    </a-row>
    <a-divider>子组件方法调用</a-divider>
    <sub-comp ref="subRef" @success="handleSubLoad"></sub-comp>
  </div>
</template>

<script setup>
  import {
    computed,
    onBeforeUnmount,
    onMounted,
    ref,
    reactive,
    defineAsyncComponent, shallowRef,
  } from 'vue';
  import { useStore } from 'vuex';
  import UserSlot from '@/pages/example/UserSlot.vue';
  import SubComp from '@/pages/example/SubComp.vue';
  import { message } from 'ant-design-vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useSModel } from '_libs/s-modal/index.js';

  const route = useRoute(); // this.$route
  const router = useRouter(); // this.$router

  const loading = ref(true);
  const testRef = ref(null);
  const subRef = ref(null);

  const appName = import.meta.env.VITE_APP_NAME

  const data = reactive({
    users: [],
    test2: 100,
  });

  const store = useStore();

  store.dispatch('app/loadAppInfoAction').then((data) => {
    loading.value = false;
  });
  const appInfo = computed(() => store.getters['app/infoGet']);

  const test = computed(() => '123');

  /**
   * 点击
   */
  const handleClick = () => {
    data.test2 += 1;
  };

  /**
   * 获取邮箱
   */
  const handleEmail = () => {
    data.users.forEach((u) => {
      u.email = `${u.name}@163.com`;
    });
  };

  const handleSubLoad = (e) => {
    message.success('子组件加载完毕: ' + e);
  };

  const handleModal = () => {
    const sModal = useSModel();
    sModal.openModal({
      component: shallowRef(
        defineAsyncComponent(() => import('./example/ModalTest.vue'))
      ),
      modal: {
        title: '测试Modal',
        width: 400,
      },
    });
  };

  onMounted(() => {
    setTimeout(() => {
      data.users = [
        {
          name: '张三',
          createdDate: new Date()
        },
        {
          name: '李四',
          createdDate: new Date()
        },
      ];

      console.log('route name: ' + route.name);
      // subRef.value.handleClick('hello world!')
    }, 1000);
  });
</script>

<style scoped></style>
