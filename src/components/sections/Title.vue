<script lang="ts" setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ElIcon } from 'element-plus'
import { Document, Files, MagicStick, Picture, DataAnalysis, Film } from '@element-plus/icons-vue'

// logo地址，没有则置为""即可
const logo = './CVPR_Denver_2026.jpg'

// 标题
const title = 'RaUF: Learning the Spatial Uncertainty Field of Radar'

// 标题颜色（响应主题）
const title_color = ref('#e3f0ff')

// 标题补充，没有则置为''即可
const title_supp = ' (CVPR 2026)'

const THEME_KEY = 'site-theme'
const currentTheme = ref<'light' | 'dark'>('light')

function applyTitleColorForTheme(t: string) {
  if (t === 'dark') title_color.value = '#e6eef8'
  else title_color.value = '#0b1725'
}

function applyThemeState(t: string) {
  const normalized = t === 'dark' ? 'dark' : 'light'
  currentTheme.value = normalized
  applyTitleColorForTheme(normalized)
}

function themeChangedHandler(e: any) {
  const t = e?.detail || localStorage.getItem(THEME_KEY) || (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  applyThemeState(t)
}

function setTheme(t: 'light'|'dark'){
  try{ localStorage.setItem(THEME_KEY, t) }catch(e){}
  try{ document.documentElement.setAttribute('data-theme', t) }catch(e){}
  window.dispatchEvent(new CustomEvent('theme-changed', { detail: t }))
}

function toggleTheme() {
  setTheme(currentTheme.value === 'dark' ? 'light' : 'dark')
}

onMounted(() => {
  // initialize from body or localStorage
  const saved = localStorage.getItem(THEME_KEY)
  const initial = saved || (document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light')
  applyThemeState(initial)
  window.addEventListener('theme-changed', themeChangedHandler)
})

onBeforeUnmount(() => {
  window.removeEventListener('theme-changed', themeChangedHandler)
})

// 按钮颜色
const btn_color = '#444444'

// 作者清单（包含作者姓名、头像、主页、地址序号）
const authors = [
  {
    name: "Shengpeng Wang",
    icon: "./icon/wsp.jpg",
    homepage: "https://shengpeng.wang/",
    address_flag: "1"
  },
  {
    name: "Kuangyu Wang",
    icon: "./icon/2026_PhD_KuangyuWang.png",
    homepage: "https://metaiot.group/team/",
    address_flag: "1"
  },
  {
    name: "Wei Wang",
    icon: "./icon/ww.png",
    homepage: "https://cs.whu.edu.cn/info/1019/55961.html",
    address_flag: "2,*"
  },
]

// 地址清单（包含地址名称、头像、主页、地址序号）
const addresses = [
  {
    address_flag: "1",
    name: "Huazhong University of Science and Technology",
    icon: "./icon/hust.png",
    homepage: "https://hust.edu.cn/",
  },
  {
    address_flag: "2",
    name: "Wuhan University",
    icon: "./icon/whu.png",
    homepage: "https://whu.edu.cn/",
  },
]

// 共一和通讯提示
const con_and_corresponding_author = 
  "*: Corresponding Author."

// 最新消息
const news = "🔥 [2024-12-15] This project is still under development."

// 强调内容
const emphases = [
  "🎉 [CVPR 2026] ",
  "🥰 欢迎关注“metaiot”微信公众号",
  // "传递人工智能算法科普教育的减约理解",
  // "提升信息效率及认知维度"
]

// 提供引导资料链接
const buttons = [
  {
    disabled: false,
    name: "Paper",
    link: "https://arxiv.org/abs/2603.01026",
    component: Document,
  },
  {
    disabled: true,
    name: "Code",
    link: "https://github.com/wsp666/rauf",
    component: Files,
  },
  {
    disabled: false,
    name: "Demo",
    link: "#exVideo",
    component: MagicStick,
  },
  {
    disabled: true,
    name: "Poster",
    component: Picture,
  },
  {
    disabled: true,
    name: "Slide",
    component: DataAnalysis,
  },
  {
    disabled: false,
    name: "Supplementary",
    link: "#Supplementary",
    component: Film,
  },

]

</script>

<template>
  <div>

    <!-- 最新消息提示 -->
    <el-row justify="center">
      <el-col :span="24">
        <el-alert title="🔥 This project is still under development." type="success" />
      </el-col>
    </el-row>

    <!-- 文章logo -->
    <!-- <el-row v-if="logo" justify="center">
      <el-image :src="logo" class="logo" fit="cover" />
    </el-row> -->

    <!-- 文章标题 -->
    <el-row justify="center">
      <el-col :span="20">
        <h1 class="paper-title">
          <span v-if="title" :style="{color:title_color}"> {{ title }}</span>
          <span v-if="title_supp" style="color: #20bf15 !important;"> {{ title_supp }}</span>
        </h1>
      </el-col>
    </el-row>

    <!-- 主题切换开关：居中，位于标题下方 -->
    <el-row justify="center" class="theme-switch-row">
      <el-col :span="20" class="title-theme-controls">
        <button
          class="theme-toggle"
          type="button"
          @click="toggleTheme"
          :aria-label="`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`"
        >
          <span class="theme-track" :class="{ dark: currentTheme === 'dark' }">
            <span class="theme-thumb"></span>
          </span>
        </button>
        <span class="theme-mode-label">Light Mode</span>
      </el-col>
    </el-row>

    <!-- 作者名单 -->
    <el-row justify="center">
      <a :href=author.homepage v-for="author in authors">
        <el-button class="title-button" type="primary" text>
          <el-avatar v-if="author.icon" :size="40" :src="author.icon" />
          <span class="author">
            {{ author.name }}<sup v-if="author.address_flag" class="name_sup">{{ author.address_flag }}</sup>
          </span>
        </el-button>
      </a>
    </el-row>

    <!-- 地址名单 -->
    <el-row justify="center">
      <a :href=address.homepage v-for="address in addresses">
        <el-button class="title-button" type="primary" text>
          <el-avatar v-if="address.icon" :size="40" :src="address.icon" />
          <span class="address">
            <sup v-if="address.address_flag" class="address_sup">{{ address.address_flag }}</sup>{{ address.name }}
          </span>
        </el-button>
      </a>
    </el-row>

    <!-- 共一和通讯提示内容 -->
    <el-row justify="center" class="con-cor">
        {{ con_and_corresponding_author }}
    </el-row>

    <!-- 强调内容 -->
    <el-row justify="center" class="emphasis" v-for="emphasis in emphases">
        {{ emphasis }}
    </el-row>

    <!-- 提供引导按钮 -->
    <el-row justify="center" style="margin-bottom: 20px;">
      <el-col :span="20">
        <el-row justify="center">
          <a :href=button.link v-for="button in buttons">
            <el-button class="guidance-button" size="default" :color="btn_color" :disabled="button.disabled" round>
              <el-icon :size="18">
                <component :is="button.component" />
              </el-icon>
              <span class="btn-text">{{ button.name }}</span>
            </el-button>
          </a>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<style scoped>

/* 文章标题字体、字间距、居中排布、字号 */
.paper-title {
  font-family: "MyFont", Verdana, sans-serif;
  letter-spacing: 2px;
  font-size: 42px;
  margin: 32px;
  text-align: center;
}

/* 姓名和地址按钮 */
.title-button {
  margin: 10px 3px;
}

/* 姓名和地址按钮光标悬浮 */
.title-button:hover {
  margin: 10px 8px;
}

/* 引导材料按钮 */
.guidance-button {
  margin: 8px 5px;
  box-shadow: #d8d8d8 1px 1px 1px 1px;
}

/* 姓名属性 */
.author {
  font-size: 18px;
  margin-left: 3px;
}

/* 姓名上标属性 */
.name_sup {
  color: #606266; 
  margin-left: 3px;
}

/* 地址属性 */
.address {
  font-size: 18px;
}

/* 地址上标属性 */
.address_sup {
  color: #606266; 
  margin-right: 1px;
}

/* 头像属性 */
.el-avatar {
  margin-right: 6px;
  box-shadow: #b7b7b7 0px 0px 3px 1px;
}

/* 共一和通讯文字属性 */
.con-cor {
  font-family: Arial;
  font-size: 14px;
  margin: 18px 0px;
  text-align: center;
}

/* 强调信息属性 */
.emphasis {
  color: chocolate;
  font-weight: bold;
  margin: 8px;
  font-size: 22px;
  text-align: center;
}

/* 引导材料按钮文字属性 */
.btn-text {
  font-size: 18px;
  color: #ffffff;
}

.el-alert {
  margin: 10px 0 0;
  background-color: #d8eed1 !important;
  border-color: #d8eed1 !important;
}

.el-alert:first-child {
  margin: 0;
}

.logo {
  width: 520px;
  height: 420px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
  border: 1px solid rgba(0,0,0,0.06);
  margin-top: 24px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  display: inline-block;
}
/* 让 el-image 内部图片铺满容器并保持裁切 */
.logo .el-image__inner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.logo:hover {
  transform: translateY(-4px) scale(1.03);
  box-shadow: 0 14px 34px rgba(0,0,0,0.12), 0 4px 10px rgba(0,0,0,0.06);
}

.title-theme-controls{
  display:flex;
  justify-content:center;
  align-items: center;
  gap: 10px;
}

.theme-switch-row {
  margin-bottom: 14px;
}

.theme-toggle {
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.theme-track {
  width: 78px;
  height: 36px;
  display: inline-flex;
  align-items: center;
  padding: 4px;
  border-radius: 999px;
  background: #20bf15;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12), 0 8px 20px rgba(15, 23, 42, 0.1);
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.theme-track.dark {
  background: #515953;
  box-shadow: inset 0 0 0 1px rgba(203, 213, 225, 0.2), 0 10px 22px rgba(2, 6, 23, 0.35);
}

.theme-thumb {
  width: 28px;
  height: 28px;
  border-radius: 999px;
  display: inline-block;
  background: #cbcfc4;
  box-shadow: 0 3px 10px rgba(2, 6, 23, 0.18);
  transform: translateX(0);
  transition: transform 0.25s ease, background 0.25s ease;
}

.theme-track.dark .theme-thumb {
  transform: translateX(42px);
  background: #cbcfc4;
}

.theme-mode-label {
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.01em;
  color: var(--text-color);
  transition: color 0.25s ease;
}

.theme-toggle:focus-visible .theme-track {
  outline: 2px solid #60a5fa;
  outline-offset: 2px;
}

@media (max-width: 600px) {
  .logo {
    width: 140px;
    height: 140px;
  }
  .paper-title {
    font-size: 32px;
  }
}

/* 手机端链接样式处理 */
a:-webkit-any-link {
  text-decoration: none;
}

/* 取消鼠标焦点悬浮在链接上的颜色装饰 */
a:hover {
  color: inherit;
  border-bottom: none;
}

/* 链接装饰，取消下划线和链接颜色 */
a {
	text-decoration: None;
	color: inherit;
}

</style>