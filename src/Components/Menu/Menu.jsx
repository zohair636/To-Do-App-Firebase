import moment from "moment";

const Menu = ({ title }) => {
  const date = moment().format("MMMM Do YYYY");
  return (
    <div>
      <h1 className="text-sky-700 text-2xl font-semibold">{title}</h1>
      <h6 className="text-sky-700 text-sm mt-1">{date}</h6>
    </div>
  );
};

export default Menu;
