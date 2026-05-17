# 实验7：基于 Hooks 的 React 课程管理页面

学号：2024210402078 | 姓名：陈涛

---

## 项目简介

本项目是 Web 前端开发课程的实验7，在实验5课程管理页面的基础上，使用 React Hooks 进行功能增强与代码优化。

## 技术栈

- React 19 + Vite
- React Hooks（useState、useEffect、useRef、useMemo、useCallback）
- 自定义 Hook（useLocalStorage、useDebounce）

## 功能特性

- 显示课程列表（含分类标签）
- 新增/删除课程
- 学习按钮交互
- 课程搜索（防抖优化）
- 课程数量统计
- 数据持久化（localStorage）
- 输入框自动聚焦
- 列表缓存优化（useMemo）
- 回调函数优化（useCallback + React.memo）

## 项目结构

```
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── CourseList.jsx
│   │   ├── CourseCard.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useCustomHooks.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── 实验报告7.html
└── package.json
```

## 运行方式

```bash
npm install
npm run dev
```

## 在线预览

本项目已部署到 GitHub Pages，访问链接：
https://ct0307.github.io/exp7-react-hooks/
