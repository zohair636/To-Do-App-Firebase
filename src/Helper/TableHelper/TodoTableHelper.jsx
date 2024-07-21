import { homeText } from "../../Global/text";

const TableHeaderFunction = () => {
  return [
    {
      id: crypto.randomUUID(),
      title: homeText.SERIAL_NUMBER,
    },
    {
      id: crypto.randomUUID(),
      title: homeText.TABLE_TODO_LABEL,
    },
    {
      id: crypto.randomUUID(),
      title: homeText.TABLE_DESCRIPTION_LABEL,
    },
    {
      id: crypto.randomUUID(),
      title: homeText.TABLE_STATUS_LABEL,
    },
    {
      id: crypto.randomUUID(),
      title: homeText.TABLE_CREATED_BY_LABEL,
    },
    {
      id: crypto.randomUUID(),
      title: homeText.TABLE_ACTIONS_LABEL,
    },
  ];
};

export { TableHeaderFunction };
