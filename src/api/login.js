import { reactive, ref } from 'vue';
import Http from '@/core/http.js';
import router from '@/router/index.js';

const formRef = ref(null);
const logining = ref(false);
const formData = reactive({
  loginName: null,
  password: null,
});
const handleLogin = () => {
  logining.value = true;
  Http.post(`/api/login`, formData).then((res) => {
    router.push('/');
  });
};

export { logining, formData, handleLogin };
