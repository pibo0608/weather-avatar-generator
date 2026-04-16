🌤️ Weather Avatar Generator | 天气头像生成器

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-blue)](https://pibo0608.github.io/weather-avatar-generator)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

> A bilingual avatar generator with weather-themed colors and animated effects.
> 双语天气头像生成器，支持动态天气特效和专业级 RGB 调色。

🚀 **[Live Demo | 在线演示](https://pibo0608.github.io/weather-avatar-generator)**

---

## ✨ Features | 特性

| Feature | 中文说明 |
|---------|---------|
| 🌐 **Bilingual** | 一键切换 中文/English |
| 🌤️ **5 Weather Themes** | 晴天/多云/雨天/雪天/雷暴，自动配色+动画 |
| 🎨 **RGB Color Picker** | HSV 三维调色盘，色相/饱和度/明度精准调节 |
| 🔤 **32 Fonts** | 8 中文字体 + 24 英文字体 |
| 💎 **3 Styles** | 写实风/扁平风/玻璃风 |
| 🔢 **Download Counter** | 下载计数器，云端同步总下载次数 ✨新增 |
| 💾 **Export** | 高清 PNG 下载 (400x400) |

---

## 🚀 Quick Start | 快速开始

### 在线使用
直接访问：https://pibo0608.github.io/weather-avatar-generator

### 本地使用
1. 下载 `index.html` 和 `work.js`
2. 需要配合 Cloudflare Worker 使用计数功能（可选）

---

## 📁 File Structure | 文件结构

```

weather-avatar-generator/
├── index.html   # 主程序（双语版 + 下载计数器）
├── work.js      # Cloudflare Worker 后端计数服务 ✨新增
├── README.md    # 项目说明
└── LICENSE      # MIT 开源协议

```

---

## 🔧 Backend Setup | 后端配置（可选）

下载计数器需要 Cloudflare Worker 支持：

1. 部署 `work.js` 到 Cloudflare Workers
2. 绑定 KV 命名空间：`AVATAR_COUNTER`
3. 修改 `index.html` 中的 `COUNTER_API` 地址

无需计数功能可跳过此步骤。

---

## 📝 Update Log | 更新日志

### v5.1 (2026-04-17) - 热更新
- ✨ 新增下载计数器功能
- ✨ 新增 Cloudflare Worker 后端服务
- 🐛 优化移动端适配

### v5.0
- 🎉 首次发布
- 双语切换 + 天气主题 + RGB 调色

---

## 🤝 Credits | 致谢

**构想者 | Conceptor**: Pibo

**开发协助 | Development**: AI Assistant

**字体来源 | Fonts**:
- [Google Fonts](https://fonts.google.com)
- [霞鹜文楷](https://github.com/lxgw/LxgwWenKai) by lxgw
- [优设标题黑](https://www.uisdc.com/uisdc-title-font) by 优设
- [得意黑](https://github.com/atelier-anchor/smiley-sans) by atelier-anchor

---

## 📄 License | 开源协议

[MIT License](LICENSE) © 2024-2026 Weather Avatar Generator

免费用于个人和商业用途 | Free for personal and commercial use.