import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");
  const [datas, setData] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const resCategory = await fetch(
        `https://rasmlink.ir/api-v1/youtube_videos?is_special=true`,
        {
          headers: {
            Authorization: "010486ba-0e8a-4382-a47f-d888baac5b5c",
          },
        }
      );
      const allcagegory = await resCategory.json();
      setData(allcagegory);
    };
    getCategory();
  }, [setData]);
  const filteredPeople =
    query === ""
      ? datas
      : datas?.filter((person) =>
          person.video_title
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  const handleSubmitSearchEngine = (e) => {
    e.preventDefault();
    // if (.length > 3) {
    router.replace(`/video/${selected?.video_id}`);
    // }
  };

  return (
    <div className="text-sm relative z-50" dir="ltr">
      <Combobox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <div className="relative w-full rounded-lg cursor-default overflow-hidden bg-white  sm:text-sm">
            <Combobox.Input
              placeholder={"Search"}
              className="py-2 h-11 sm:w-[450px] lg:w-[600px] border text-left focus:outline-none rounded-lg bg-gray-100 dark:bg-stone-800
                focus:border-gray-300 dark:focus:border-stone-700 transition text-md placeholder:text-base w-[600px] duration-200 dark:border-stone-700 border-gray-300 pl-4 pr-10"
              displayValue={(person) => person?.video_title}
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button
              onClick={handleSubmitSearchEngine}
              className="absolute w-14 rounded-r-lg flex justify-center items-center h-full right-0 top-0 bottom-0 dark:bg-stone-700 bg-gray-100 border-gray-300 dark:border-stone-700 border"
            >
              <IconSearch />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 px-1 focus:outline-none sm:text-sm">
              {filteredPeople.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredPeople.map((person) => (
                  <Combobox.Option
                    key={person.id}
                    className={({ active }) =>
                      `relative cursor-pointer rounded-md select-none py-2 px-4 ${
                        active ? "bg-red-500 text-white" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block text-md truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.video_title}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
      {/* <input type={'text'} placeholder={'Search'}
                className='py-2 h-11 border text-left focus:outline-none rounded-lg bg-gray-100 dark:bg-stone-800
                focus:border-gray-300 dark:focus:border-stone-700 transition text-lg placeholder:text-base w-[600px] duration-200 dark:border-stone-700 border-gray-300 pl-4 pr-10'
                autoComplete={'off'}
            />
            <button className="absolute w-14 rounded-r-lg flex justify-center items-center h-11 right-0
             top-0 bottom-0 dark:bg-stone-700 bg-gray-100 border-gray-300 dark:border-stone-700 border">
                <IconSearch />
            </button> */}
    </div>
  );
}

const IconSearch = () => {
  return (
    <div>
      <svg
        className="w-5 h-5 dark:text-stone-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};
