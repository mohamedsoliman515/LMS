// src/config/formFields.js
// start to show UI
export const courseFields = [
  {
    id: 1,
    name: "courses_name",
    label: "Course Name",
    type: "text",
    placeholder: "Enter course name",
  },
  {
    id: 2,
    name: "courses_description",
    label: "Description",
    type: "text",
    placeholder: "Enter Description",
  },
  {
    id: 3,
    name: "courses_tags",
    label: "Tags",
    type: "text",
    placeholder: "Enter tags like this : tag1, tag2, tag3 ...",
  },
  {
    id: 4,
    name: "chapters_ids", // validation if !type return null
    // label: "Select Chapter",
    // type: "select",
    // placeholder: "Enter chapter",
  },
  {
    id: 5,
    name: "is_public",
    label: "Is Public",
    type: "checkbox",
  },
];

export const chaptersFields = [
  {
    id: 1,
    name: "chapter_name",
    label: "Chapter Name",
    type: "text",
    placeholder: "Enter chapter name",
  },
  {
    id: 2,
    name: "chapter_description",
    label: "Description",
    type: "text",
    placeholder: "Enter Description",
  },
  {
    id: 3,
    name: "courses_ids",
    label: "Select Course",
    type: "select",
    placeholder: "Enter course",
    options: [1, 2, 3, 4, 5],
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
    name: "assistant_name",
    label: "Assistant Name",
    type: "text",
    placeholder: "Enter Assistant Name",
  },
  {
    id: 3,
    name: "assistant_email",
    label: "Email",
    type: "email",
    placeholder: "Enter Email",
  },
  {
    id: 4,
    name: "assistant_password",
    label: "password",
    type: "password",
    placeholder: "Enter Password",
  },
  {
    id: 5,
    name: "assistant_phone1",
    label: "phone1",
    type: "number",
    placeholder: "Enter phone1",
  },

  {
    id: 6,
    name: "assistant_phone2",
    label: "phone2",
    type: "number",
    placeholder: "Enter phone2",
  },
  // Edit here to add select options
  {
    id: 7,
    name: "assistant_authorities",
    label: "Authorities",
    type: "select",
    placeholder: "Select Authorities",
  },
];
// End to show UI
