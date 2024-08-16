import { homeText } from "../../Global/text";

const CreateTodoHelperFunction = () => {
  return [
    {
      id: crypto.randomUUID(),
      title: homeText.TASK_NAME_LABEL,
      placeholder: homeText.TASK_NAME_PLACEHOLDER,
      value: "",
    },
    {
      id: crypto.randomUUID(),
      title: homeText.TASK_DESCRIPTION_LABEL,
      placeholder: homeText.TASK_DESCRIPTION_PLACEHOLDER,
      value: "",
    },
  ];
};

export { CreateTodoHelperFunction };
