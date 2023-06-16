"use client"

const CardTitle = ({title}) => {
  return (
    <div className="flex flex-wrap absolute left-0 w-[100%] bg-[#eaeeb2] justify-center items-center py-3 px-0 text-[12px] bottom-[26.3%] bg-[rgb(29 29 33 / 48%)] text-white font-normal">
      {title}
    </div>
  );
};

export default CardTitle;