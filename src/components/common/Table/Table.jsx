import {Edit,Delete} from "../../../assets"
import styles from "./styles.module.css";

export default function CourseTable() {
  const { container,mainTable,actions} = styles;
  const courses = [
    {
      name: "React Basics",
      description: "Learn fundamentals of React",
      tags: ["React", "Frontend"],
    },
    {
      name: "JavaScript Advanced",
      description: "Deep dive into JS concepts",
      tags: ["JavaScript", "ES6"],
    },
  ];

  return (
    <div className={container}>
      <table className={mainTable}>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.name}</td>
              <td>{course.description}</td>
              <td>
                {course.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                     </span>
                ))}
              </td>
              <td>
                <div className={actions}>
                   <img src={Edit} alt="Edit"/>
                   <img src={Delete} alt="Delete"/>
          
          
                </div>   
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
