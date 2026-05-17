import React from "react";

function CourseCard({ id, title, desc, category, status, onLearn, onDelete }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
        <span className={`tag tag-${category}`}>{category}</span>
      </div>
      <p className="card-desc">{desc}</p>
      <div className="card-status">状态：{status}</div>
      <div className="card-actions">
        <button className="btn btn-learn" onClick={() => onLearn(title)}>
          学习
        </button>
        <button className="btn btn-delete" onClick={() => onDelete(id)}>
          删除
        </button>
      </div>
    </div>
  );
}

export default React.memo(CourseCard);
