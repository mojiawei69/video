import { createApp, Plugin } from 'vue'
import App from './App.vue'
import router from './router'
import "tailwindcss/tailwind.css"
import 'element-plus/dist/index.css'
import '../public/iconFont/iconfont.css'
import "./assets/css/table.scss";
import {
  ElUpload,
  ElButton,
  ElMenuItem,
  ElRow,
  ElCol,
  ElSubMenu,
  ElIcon,
  ElMenuItemGroup,
  ElMenu,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElForm,
  ElFormItem,
  ElTimePicker,
  ElInput,
  ElOption,
  ElSelect,
  ElSelectV2,
  ElDatePicker,
  ElSwitch,
  ElCheckbox,
  ElCheckboxGroup,
  ElMessage,
  ElTable,
  ElTableColumn,
  ElImage,
  ElDivider,
  ElLoading,
  ElPagination,
  ElDialog
} from "element-plus";
import { createPinia } from 'pinia'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const pinia = createPinia();

NProgress.configure({
  easing: 'ease',  // 动画方式    
  speed: 500,  // 递增进度条的速度    
  showSpinner: false, // 是否显示加载ico    
  trickleSpeed: 200, // 自动递增间隔    
  minimum: 0.3 // 初始化时的最小百分比
})

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
})

router.afterEach(() => {
  NProgress.done()
})

createApp(App)
  .use(router as Plugin)
  .use(ElUpload)
  .use(ElButton)
  .use(pinia as Plugin)
  .use(ElMenuItem)
  .use(ElRow)
  .use(ElCol)
  .use(ElSubMenu)
  .use(ElDialog)
  .use(ElIcon)
  .use(ElLoading as Plugin)
  .use(ElMenuItemGroup)
  .use(ElMenu)
  .use(ElPagination)
  .use(ElDivider)
  .use(ElRadio)
  .use(ElRadioButton)
  .use(ElRadioGroup)
  .use(ElForm)
  .use(ElImage)
  .use(ElFormItem)
  .use(ElTimePicker)
  .use(ElInput)
  .use(ElOption)
  .use(ElSelect)
  .use(ElSelectV2)
  .use(ElDatePicker)
  .use(ElSwitch)
  .use(ElCheckbox)
  .use(ElCheckboxGroup)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElMessage)
.mount('#app')
