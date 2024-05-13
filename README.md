# Notion-Pregress-Heatmap

[中文 Readme](README.md)

[English Readme](README_EN.md)

## 一键部署
[![Vercel一键部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZippland%2FNotion-Progress-Heatmap&env=ENV_DATABASE_ID&env=ENV_NOTION_TOKEN&project-name=notion-progress-heatmap&repository-name=notion-progress-heatmap)

## 项目简介

Notion-Pregress-Heatmap用于多个任务共同完成率的跟踪。是一个基于 Notion API 和 Vercel 平台的云端部署应用。该项目的主要功能是从 Notion 数据库中获取数据，并在网页上以热图的形式展示每天的进度记录。

对于单个任务完成情况的跟踪，可使用：[Notion-Checkbox-Heatmap](https://github.com/Zippland/Notion-Checkbox-Heatmap)

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/63b0375e-7526-4863-8a87-cf56dcf75047)

**自动切换到夜间模式**：
![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/fef9ffdc-9509-4980-8f03-05f1210a35d2)









## 技术栈

- **HTML/CSS**: 前端页面展示。
- **JavaScript**: 前端逻辑处理。
- **Node.js**: 后端API服务。
- **Vercel**: 云端部署和托管服务。
- **Notion API**: 数据来源。

## 项目结构

```
/
├── api
│   └── database.js       # 无服务器函数，处理与Notion API的交互
├── public
│   └── index.html        # 主页面
├── package.json          # 项目依赖和脚本
└── README.md             # 项目文档
```

## 功能描述

- **数据展示**：通过 Notion API 获取数据并在网页上以热图形式展示。
- **自动刷新**：页面会定时从 Notion 数据库更新数据，确保数据的实时性。

## 如何使用

### 一、准备工作

1. **注册 Notion 账号**：如果还没有 Notion 账号，请先在 [Notion 官网](https://www.notion.so/) 注册一个账号。
2. **创建 Notion 数据库**：创建一个至少包含`Date`和`Progress`两个属性的任务表，`Date`属性用于记录每天的日期，`Progress`用来表示当天的任务完成率（数值区间为0-1）。
3. **获取 Notion API 密钥**：为了让应用能够访问 Notion 数据库，你需要创建一个集成并获取相应的密钥。进入 Notion 设置中的“Integration”部分，创建一个新的集成并记录下生成的“内部集成令牌”（Internal Integration Token）。
4. **获取数据库ID**：在你的 Notion 数据库页面的URL中，复制“`https://www.notion.so/`”后面的部分（直到`?`，不包括`?`)，这部分URL是你的数据库ID。

### 二、部署到 Vercel

1. **注册 Vercel 账号**：访问 [Vercel 官网](https://vercel.com/) 并注册账号。
2. **新建 Vercel 项目**：在 Vercel 控制台中，选择“New Project”，然后通过导入 GitHub上的仓库来创建项目。
3. **配置环境变量**：在 Vercel 项目的设置中找到“Environment Variables”部分，添加以下两个变量：
   - `ENV_NOTION_TOKEN`：你的 Notion 内部集成令牌。
   - `ENV_DATABASE_ID`：你的 Notion 数据库ID。
4. **部署项目**：完成环境变量配置后，回到项目仪表板，点击“Deploy”按钮，Vercel 会自动部署你的应用。

### 三、访问和使用

部署完成后，Vercel 会提供一个 URL 供你访问你的 Notion 进度热图。打开这个 URL，你就可以看到从 Notion 数据库获取的数据以热图形式展示在网页上。

在notion中通过`\embed`命令插入网页视图。

![image](https://github.com/Zippland/Notion-Progress-Heatmap/assets/126135306/9298c5aa-bd5e-49d2-979f-546f3bf469f0)


## 常见问题解答

**Q1: 如何确保我的 Notion 数据安全？**

A1: 确保你的 Notion API 密钥和数据库ID只在需要时使用，并妥善保管。不要分享给不信任的第三方。

**Q2: 如何更新数据显示？**

A2: 网页会自动每30秒刷新一次数据。你也可以通过简单地刷新网页来手动更新显示的数据。

**Q3: 如果数据没有更新怎么办？**

A3: 确认你的 Notion 数据库有新的数据输入，检查 Vercel 项目的日志以确定后端是否有错误。
