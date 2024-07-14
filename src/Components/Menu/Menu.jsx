import moment from "moment";

const Menu = ({ title }) => {
  const date = moment().format("MMMM Do YYYY");
  return (
    <div className="mx-5 m-4">
      <h1 className="text-neutral-600 text-2xl font-semibold">{title}</h1>
      <h6 className="text-neutral-600 text-sm mt-1">{date}</h6>
    </div>
  );
};

export default Menu;
