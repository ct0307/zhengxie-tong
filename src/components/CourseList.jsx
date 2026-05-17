import CourseCard from "./CourseCard";
import React from "react";

function CourseList({ courses, onLearn, onDelete }) {
  if (courses.length === 0) {
    return <div className="empty-tip">暂无课程，快去添加吧！</div>;
  }
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          desc={course.desc}
          category={course.category}
          status={course.status}
          onLearn={onLearn}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default React.memo(CourseList);
