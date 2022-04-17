import { reactive, ref } from 'vue';

const formRef = ref(null);
const logining = ref(false);
const formData = reactive({
  loginName: null,
  password: null,
});
const handleLogin = () => {
  logining.value = true;
  setTimeout(() => {
    logining.value = false;
    location.href = '/';
  }, 1000);
};

export { logining, formData, handleLogin };
