const Card = ({ title, price, grow }) => {
  return (
    <div className="flex flex-grow">
    <div className="rounded-lg py-5 px-4 bg-white flex flex-col gap-4 shadow-md max-w-[full] w-full overflow-hidden border-t-2 border-blue-700">
  <h3 className="font-semibold text-[#96969D]">{title}</h3>
  <div className="flex gap-4 items-center">
    <p className="text-3xl font-bold text-[#2E2F39]">{price}</p>
    <div className="flex items-center gap-2 text-[#35C757] text-xl">
      <i>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"></path>
        </svg>
      </i>
      <p
        className={`text-sm font-bold ${
          grow < 3 ? "text-red-600" : "text-[#35C757]"
        }`}
      >
        {grow}
      </p>
    </div>
  </div>
  </div>
</div>

  );
};

export default Card;