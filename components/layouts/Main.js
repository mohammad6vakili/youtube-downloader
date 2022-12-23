import Sidebar from "@/components/layouts/Sidebar";
import NavBar from "@/components/NavBar";

export default function Main({
  children,
  withoutPadding = false,
  dir = "rtl",
}) {
  if (withoutPadding) {
    return (
      <div dir={dir} className="w-full">
        <NavBar />
        <div className="flex w-full">
          <div
            className={
              "w-full p-2 flex-col dark:bg-stone-800 bg-gray-100 mx-auto flex pt-6"
            }
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
            className={
              "p-4 w-full flex-col dark:bg-stone-800 bg-gray-100 mx-auto flex pt-6"
            }
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}
