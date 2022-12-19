import Sidebar from "@/components/layouts/Sidebar";
import NavBar from "@/components/NavBar";

export default function Main({
  children,
  hiddenSidebar = false,
  withoutPadding = false,
  dir = "rtl",
}) {
  if (withoutPadding) {
    return (
      <div dir={dir} className="w-full">
        <NavBar />
        <div className="flex w-full">
          <Sidebar hidden={hiddenSidebar} />
          <div
            className={`${
              hiddenSidebar ? "w-full lg:p-0 p-4" : `lg:w-10/12 w-full p-2`
            } flex-col dark:bg-stone-800  bg-gray-100 mx-auto flex pt-6`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div dir={dir} className="w-full">
        <NavBar />
        <div className="flex w-full">
          <div
            className={`${
              hiddenSidebar ? "w-full lg:px-16 p-4" : `p-4 w-full`
            } flex-col dark:bg-stone-800 bg-gray-100 mx-auto flex pt-6`}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
