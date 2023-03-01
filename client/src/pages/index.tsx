import { useState, useEffect } from "react";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const { scrollY } = useScroll();
  const [output, setOutput] = useState(0);

  const [selection, setSelection] = useState("User Id");
  const [dropdown, setDropdown] = useState(false);

  const [sortedData, setSorteddata] = useState("");

  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setOutput(-160);
      } else {
        setOutput(-160);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
  }, []);

  const nameY = useTransform(scrollY, [20, 40], [1, output]);

  const [text, setText] = useState("");
  const user = async (text: String) => {
    console.log(text);
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify({ text: text }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    let allData = await response.json();
    setUserData(allData.data.search.nodes);
  };

  const [userData, setUserData] = useState([]);

  return (
    <>
      <main className=" flex h-screen  w-full justify-center bg-oyster dark:bg-stormy">
        <div className=" fixed  h-48 w-screen bg-oyster dark:bg-stormy"></div>
        <div className=" mt-56 w-full max-w-7xl">
          <div className=" flex w-full justify-center bg-oyster  dark:bg-stormy ">
            <motion.div
              style={{ y: nameY }}
              className=" fixed w-11/12  rounded-lg border border-white border-opacity-60 bg-ghost  p-5 dark:border-black dark:bg-smoke md:w-10/12  "
            >
              <div className=" flex flex-col items-start justify-start gap-1 md:flex-row ">
                <div className=" flex w-full items-center  justify-center  gap-1 align-middle ">
                  <div className="flex h-full">
                    <svg
                      className="h-10 fill-stormy dark:fill-oyster"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18.9 20.3L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L20.325 18.925C20.5083 19.1083 20.6 19.3333 20.6 19.6C20.6 19.8667 20.5 20.1 20.3 20.3C20.1167 20.4833 19.8833 20.575 19.6 20.575C19.3167 20.575 19.0833 20.4833 18.9 20.3ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z" />
                    </svg>
                  </div>
                  <input
                    className=" w-full border-none bg-ghost bg-none text-2xl  text-stormy placeholder:text-stormy placeholder:opacity-90 focus:border-none focus:outline-0 focus:ring-0 dark:bg-smoke dark:text-oyster placeholder:dark:text-oyster "
                    placeholder="Search"
                    onChange={(e) => setText(e.target.value)}
                  ></input>
                  <button
                    className="
                  w-20 rounded  bg-white  pt-2  pb-2 text-base text-stormy hover:bg-oyster  active:bg-white  dark:bg-black dark:text-oyster  hover:dark:bg-stormy active:dark:bg-black md:w-28  md:text-2xl
                  "
                    onClick={() => [user(text)]}
                  >
                    Search
                  </button>
                </div>
                <div className=" flex w-full justify-center gap-1 md:w-min ">
                  <button
                    className="
                   w-20 rounded  bg-white  pt-2  pb-2 text-base text-stormy hover:bg-oyster  active:bg-white  dark:bg-black dark:text-oyster  hover:dark:bg-stormy active:dark:bg-black md:w-28  md:text-2xl
                  "
                    onClick={() => setDropdown(!dropdown)}
                  >
                    {selection}
                  </button>
                  <motion.div
                    className=" absolute mt-12  flex h-max flex-col justify-between rounded bg-white text-black dark:bg-black dark:text-white md:mt-16  md:w-28"
                    initial={{ opacity: 0, pointerEvents: "none" }}
                    animate={
                      dropdown
                        ? { opacity: 1, pointerEvents: "all" }
                        : { opacity: 0, pointerEvents: "none" }
                    }
                  >
                    <span
                      onClick={() => [
                        setDropdown(!dropdown),
                        setSelection("User Id"),
                      ]}
                      className="cursor-pointer p-2 text-xl font-normal hover:font-medium"
                    >
                      User Id
                    </span>
                    <span
                      onClick={() => [
                        setDropdown(!dropdown),
                        setSelection("Name"),
                      ]}
                      className="cursor-pointer p-2 text-xl font-normal hover:font-medium"
                    >
                      Name
                    </span>
                    <span
                      onClick={() => [
                        setDropdown(!dropdown),
                        setSelection("Email"),
                      ]}
                      className="cursor-pointer p-2 text-xl font-normal hover:font-medium"
                    >
                      Email
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className=" m-auto mt-40 grid w-10/12 grid-cols-1 gap-3 md:mt-32  md:grid-cols-3">
            {userData.map((user: any) => (
              <div className=" w-full  bg-ghost p-2  text-black  dark:bg-smoke dark:text-white ">
                <img
                  className="h-15 aspect-square w-full bg-black  object-contain"
                  src={user.avatarUrl}
                />
                <h1 className=" text-lg  font-bold">{user.name}</h1>
                <h2 className="mt-0.5 font-medium">{user.login}</h2>
                <p className="mt-0.5">{user.bio}</p>
                <p className="mt-0.5">{user.email}</p>
                <p className="mt-0.5">{user.websiteUrl}</p>
                <Link href={user.url + "/"} target="_blank">
                  <button
                    className=" h-15 mt-1 w-full rounded  bg-white  p-2  text-stormy hover:bg-oyster  active:bg-white  dark:bg-black dark:text-oyster  hover:dark:bg-stormy active:dark:bg-black 
              "
                  >
                    View More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
