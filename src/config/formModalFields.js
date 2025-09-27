// src/config/formFields.js
// start to show UI
export const courseFields = [
  {
    id: 1,
    name: "coursesName",
    label: "Course Name",
    type: "text",
    placeholder: "Enter course name",
  },
  {
    id: 2,
    name: "descriptionName",
    label: "Description",
    type: "text",
    placeholder: "Enter Description",
  },
  {
    id: 3,
    name: "tagsName",
    label: "Tags",
    type: "text",
    placeholder: "Enter tags like this : tag1, tag2, tag3 ...",
  },
  {
    id: 4,
    name: "chapterIdSelect",
    label: "Select Chapter",
    type: "select",
    placeholder: "Enter chapter",
  },
];

export const chaptersFields = [
  {
    id: 1,
    name: "name",
    label: "Chapter Name",
    type: "text",
    placeholder: "Enter chapter name",
  },
  {
    id: 2,
    name: "description",
    label: "Description",
    type: "text",
    placeholder: "Enter Description",
  },
  {
    id: 3,
    name: "courseIdSelect",
    label: "Select Course",
    type: "text",
    placeholder: "Enter course",
  },
];

export const assistantsFields = [
  {
    id: 1,
    name: "address",
    label: "Assistant Address",
    type: "text",
    placeholder: "Enter assistant address",
  },
  {
    id: 2,
    name: "assistantName",
    label: "Assistant Name",
    type: "text",
    placeholder: "Enter Assistant Name",
  },
  {
    id: 3,
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter Email",
  },
  {
    id: 4,
    name: "password",
    label: "password",
    type: "password",
    placeholder: "Enter Password",
  },
  {
    id: 5,
    name: "phone1",
    label: "phone1",
    type: "number",
    placeholder: "Enter phone1",
  },

  {
    id: 6,
    name: "phone2",
    label: "phone2",
    type: "number",
    placeholder: "Enter phone2",
  },
  // Edit here to add select options
  {
    id: 7,
    name: "authorities",
    label: "Authorities",
    type: "select",
    placeholder: "Select Authorities",
  },
];
// End to show UI

// start to send data to backend
export const formDataCourse = {
  course_name: "",
  course_description: "",
  course_tags: [],
  course_background_image_base64: "",
  chapters_ids: [],
};
export const formDataChapter = {
  chapter_name: "",
  chapter_description: "",
  courses_ids: [],
};

export const formDataAssistant = {
  address: "",
  assistant_name: "",
  assistant_email: "",
  assistant_password: "",
  phone1: "",
  phone2: "",
  authorities: [],
};
