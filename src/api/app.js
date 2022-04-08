import Http from "@/core/http";

export const fetchAppInfo = () => {
    return Http.get('/api/apps/vite-vue3-antdv-starter')
}