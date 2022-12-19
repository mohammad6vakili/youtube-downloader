import Image from "next/image";
import Link from "next/link";

export default function CardExplore({ data, key, onClick, selectedCategory }) {
  if (data) {
    return (
      <div onClick={onClick} key={key}>
        <div
          style={selectedCategory === data.id ? { backgroundColor: "red" } : {}}
          className="capitalize rounded-3xl text-md dark:bg-slate-700 bg-slate-50 transition duration-150 hover:bg-gray-300 cursor-pointer flex justify-center items-center flex-col h-10"
        >
          <p className="font-medium text-sm text-center dark:text-slate-100 text-gray-700">
            {data?.category_title}
          </p>
        </div>
      </div>
    );
  }
}
