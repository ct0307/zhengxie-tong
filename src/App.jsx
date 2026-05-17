import { useState, useRef, useMemo, useCallback, useEffect } from "react";
import Header from "./components/Header";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";
import { useLocalStorage, useDebounce } from "./hooks/useCustomHooks";
import "./App.css";

// 课程分类列表
const CATEGORIES = ["前端", "后端", "数据库", "工具"];

// 初始课程数据
const defaultCourses = [
  {
    id: 1,
    title: "React 基础",
    desc: "学习 React 的核心概念，包括组件、JSX、状态管理和事件处理",
    category: "前端",
    status: "已完成",
  },
  {
    id: 2,
    title: "Node.js 入门",
    desc: "了解 Node.js 运行时环境，搭建简单的后端服务",
    category: "后端",
    status: "学习中",
  },
  {
    id: 3,
    title: "MySQL 数据库",
    desc: "学习 SQL 语法和数据库设计基础，掌握增删改查操作",
    category: "数据库",
    status: "待开始",
  },
  {
    id: 4,
    title: "Git 版本控制",
    desc: "掌握 Git 的基本命令和分支管理，学会团队协作开发流程",
    category: "工具",
    status: "已完成",
  },
  {
    id: 5,
    title: "React Hooks 进阶",
    desc: "深入学习 useEffect、useMemo、useCallback 等高级 Hook 用法",
    category: "前端",
    status: "学习中",
  },
];

function App() {
  // useState：管理课程列表（使用自定义 Hook 持久化到 localStorage）
  const [courses, setCourses] = useLocalStorage("exp7-courses", defaultCourses);

  // useState：管理输入内容和搜索关键词
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newCategory, setNewCategory] = useState("前端");
  const [searchKeyword, setSearchKeyword] = useState("");

  // useDebounce：自定义 Hook，搜索关键词防抖（300ms）
  const debouncedKeyword = useDebounce(searchKeyword, 300);

  // useRef：获取课程名称输入框的 DOM 引用，用于自动聚焦
  const titleInputRef = useRef(null);

  // useCallback：缓存学习事件处理函数
  const handleLearn = useCallback((title) => {
    alert(`正在学习 ${title}！`);
  }, []);

  // useCallback：缓存删除事件处理函数
  const handleDeleteCourse = useCallback((id) => {
    setCourses((prev) => prev.filter((c) => c.id !== id));
  }, [setCourses]);

  // useCallback：缓存添加课程事件处理函数
  const handleAddCourse = useCallback(() => {
    if (!newTitle.trim()) {
      alert("请输入课程名称！");
      return;
    }
    const newCourse = {
      id: Date.now(),
      title: newTitle.trim(),
      desc: newDesc.trim() || "暂无简介",
      category: newCategory,
      status: "待开始",
    };
    setCourses((prev) => [...prev, newCourse]);
    setNewTitle("");
    setNewDesc("");
    setNewCategory("前端");

    // 新增课程后，使用 useRef 让输入框自动获得焦点
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [newTitle, newDesc, newCategory, setCourses]);

  // useMemo：缓存搜索过滤后的课程列表，仅在 courses 或 debouncedKeyword 变化时重新计算
  const filteredCourses = useMemo(() => {
    if (!debouncedKeyword.trim()) return courses;
    const keyword = debouncedKeyword.toLowerCase();
    return courses.filter(
      (c) =>
        c.title.toLowerCase().includes(keyword) ||
        c.desc.toLowerCase().includes(keyword)
    );
  }, [courses, debouncedKeyword]);

  // useMemo：缓存统计数据
  const stats = useMemo(() => {
    return {
      total: courses.length,
      completed: courses.filter((c) => c.status === "已完成").length,
      learning: courses.filter((c) => c.status === "学习中").length,
      pending: courses.filter((c) => c.status === "待开始").length,
    };
  }, [courses]);

  // useEffect：页面首次加载时聚焦输入框
  useEffect(() => {
    if (titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, []);

  return (
    <div className="app">
      <Header title="React 课程管理" />

      {/* 统计卡片 */}
      <div className="stats-bar">
        <div className="stat-card stat-total">
          <span className="stat-num">{stats.total}</span>
          <span className="stat-label">全部课程</span>
        </div>
        <div className="stat-card stat-done">
          <span className="stat-num">{stats.completed}</span>
          <span className="stat-label">已完成</span>
        </div>
        <div className="stat-card stat-learning">
          <span className="stat-num">{stats.learning}</span>
          <span className="stat-label">学习中</span>
        </div>
        <div className="stat-card stat-pending">
          <span className="stat-num">{stats.pending}</span>
          <span className="stat-label">待开始</span>
        </div>
      </div>

      {/* 搜索栏 */}
      <div className="search-box">
        <input
          type="text"
          placeholder="搜索课程（按名称或简介）..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        {searchKeyword && (
          <span className="search-hint">
            搜索 "{debouncedKeyword}" — 找到 {filteredCourses.length} 条结果
          </span>
        )}
      </div>

      {/* 添加课程 */}
      <div className="add-box">
        <input
          ref={titleInputRef}
          type="text"
          placeholder="课程名称（必填）"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="课程简介（选填）"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
        <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <button className="btn btn-add" onClick={handleAddCourse}>
          添加课程
        </button>
      </div>

      {/* 课程列表 */}
      <CourseList
        courses={filteredCourses}
        onLearn={handleLearn}
        onDelete={handleDeleteCourse}
      />

      <Footer />
    </div>
  );
}

export default App;
