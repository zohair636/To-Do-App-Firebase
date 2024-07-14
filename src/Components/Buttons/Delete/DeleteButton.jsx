const DeleteButton = ({ title, onClick }) => {
  return (
    <div>
      <button
        className="bg-red-600 hover:bg-red-700 text-white p-2 px-4 rounded-full"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
};

export default DeleteButton;
