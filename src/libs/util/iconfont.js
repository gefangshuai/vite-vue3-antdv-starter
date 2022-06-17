import { createFromIconfontCN } from '@ant-design/icons-vue';

const SIcon = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_3352137_z2xhhxhu9qt.js', // 在 iconfont.cn 上生成
});

export default {
  install(app) {
    app.component('s-icon', SIcon)
  }
}