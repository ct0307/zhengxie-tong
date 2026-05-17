import React from "react";

function Header(props) {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <p className="subtitle">基于 Hooks 的 React 课程管理页面</p>
    </header>
  );
}

export default React.memo(Header);
