function DeleteBtn({ onDelete, onDeliver, status }) {
  return (
    <div>
      <button
        onClick={onDelete}
        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
      >
        Delete
      </button> 
      {status === "PENDING" && (
        <button
          onClick={onDeliver}
          className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
        >
          DELIVER
        </button>
      )}
    </div>
  );
}

export default DeleteBtn;
