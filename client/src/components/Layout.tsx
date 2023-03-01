import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

import { useTheme } from "next-themes";

function FullLogo() {
  return (
    <svg
      className="h-full fill-stormy dark:fill-oyster"
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.5 5C20.2019 5 17.9262 5.46389 15.803 6.36518C13.6798 7.26647 11.7507 8.58752 10.1256 10.2529C6.84374 13.6163 5 18.178 5 22.9345C5 30.8615 10.0225 37.5869 16.97 39.9722C17.845 40.1157 18.125 39.5597 18.125 39.0755V36.0446C13.2775 37.1206 12.245 33.6413 12.245 33.6413C11.44 31.561 10.3025 31.005 10.3025 31.005C8.71 29.893 10.425 29.9289 10.425 29.9289C12.175 30.0545 13.1025 31.7762 13.1025 31.7762C14.625 34.5022 17.1975 33.6952 18.195 33.2647C18.3525 32.099 18.8075 31.3099 19.2975 30.8615C15.4125 30.4131 11.335 28.8708 11.335 22.0377C11.335 20.047 12 18.4509 13.1375 17.1775C12.9625 16.7291 12.35 14.864 13.3125 12.4428C13.3125 12.4428 14.7825 11.9586 18.125 14.2721C19.5075 13.8776 21.0125 13.6803 22.5 13.6803C23.9875 13.6803 25.4925 13.8776 26.875 14.2721C30.2175 11.9586 31.6875 12.4428 31.6875 12.4428C32.65 14.864 32.0375 16.7291 31.8625 17.1775C33 18.4509 33.665 20.047 33.665 22.0377C33.665 28.8887 29.57 30.3952 25.6675 30.8436C26.2975 31.3995 26.875 32.4935 26.875 34.1615V39.0755C26.875 39.5597 27.155 40.1336 28.0475 39.9722C34.995 37.569 40 30.8615 40 22.9345C40 20.5793 39.5474 18.2472 38.6679 16.0712C37.7884 13.8953 36.4994 11.9183 34.8744 10.2529C33.2493 8.58752 31.3202 7.26647 29.197 6.36518C27.0738 5.46389 24.7981 5 22.5 5Z" />
    </svg>
  );
}

function Moon() {
  return (
    <svg
      className="hidden h-8 dark:block"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="35" height="35" rx="5" fill="#D0D0D0" />
      <path
        d="M12.8223 13.9315C16.3404 13.9315 17.7297 15.3257 17.7297 18.863C17.7297 15.3426 19.1245 13.9315 22.6426 13.9315C19.1245 13.9315 17.7297 12.5314 17.7297 9C17.7297 12.5314 16.3404 13.9315 12.8223 13.9315Z"
        fill="#121212"
      />
      <path
        d="M17.9159 24.0159C15.5895 24.0159 14.6689 23.0918 14.6689 20.7506C14.6689 23.0918 13.7428 24.0155 11.416 24.0159C13.7428 24.0159 14.6689 24.9399 14.6689 27.2752C14.6689 24.9399 15.5895 24.0159 17.9159 24.0159Z"
        fill="#121212"
      />
      <path
        d="M11.0918 29.6817C11.1983 29.5578 11.3748 29.5109 11.534 29.5645C14.1835 30.4617 17.0767 30.4067 19.6715 29.4099C22.2664 28.4133 24.3846 26.5434 25.6295 24.1506C26.8742 21.7578 27.1602 19.0062 26.4335 16.4117C26.1603 15.4479 25.7531 14.5227 25.223 13.6606C25.1383 13.5213 25.1526 13.3471 25.259 13.2236C25.3654 13.1002 25.5413 13.0536 25.7003 13.1067C28.2125 13.9555 30.3768 15.5558 31.8703 17.6692C33.3638 19.7824 34.1065 22.2956 33.9877 24.8331C33.8688 27.371 32.8949 29.7978 31.2111 31.7514C29.5272 33.7051 27.2237 35.0812 24.6441 35.6745C22.0644 36.2677 19.347 36.0461 16.8968 35.0428C14.4465 34.0396 12.3952 32.3085 11.0478 30.1077C10.9707 29.9697 10.988 29.8012 11.0918 29.6817Z"
        fill="#121212"
      />
    </svg>
  );
}

function Sun() {
  return (
    <svg
      className="block h-8 dark:hidden"
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="5" y="5" width="35" height="35" rx="5" fill="#121212" />
      <path
        d="M22.2917 16.25C18.9567 16.25 16.25 18.9567 16.25 22.2917C16.25 25.6267 18.9567 28.3333 22.2917 28.3333C25.6267 28.3333 28.3333 25.6267 28.3333 22.2917C28.3333 18.9567 25.6267 16.25 22.2917 16.25ZM10.2083 23.5H12.625C13.2896 23.5 13.8333 22.9563 13.8333 22.2917C13.8333 21.6271 13.2896 21.0833 12.625 21.0833H10.2083C9.54375 21.0833 9 21.6271 9 22.2917C9 22.9563 9.54375 23.5 10.2083 23.5ZM31.9583 23.5H34.375C35.0396 23.5 35.5833 22.9563 35.5833 22.2917C35.5833 21.6271 35.0396 21.0833 34.375 21.0833H31.9583C31.2938 21.0833 30.75 21.6271 30.75 22.2917C30.75 22.9563 31.2938 23.5 31.9583 23.5ZM21.0833 10.2083V12.625C21.0833 13.2896 21.6271 13.8333 22.2917 13.8333C22.9563 13.8333 23.5 13.2896 23.5 12.625V10.2083C23.5 9.54375 22.9563 9 22.2917 9C21.6271 9 21.0833 9.54375 21.0833 10.2083ZM21.0833 31.9583V34.375C21.0833 35.0396 21.6271 35.5833 22.2917 35.5833C22.9563 35.5833 23.5 35.0396 23.5 34.375V31.9583C23.5 31.2938 22.9563 30.75 22.2917 30.75C21.6271 30.75 21.0833 31.2938 21.0833 31.9583ZM15.0296 13.3258C14.9178 13.2138 14.785 13.1249 14.6388 13.0643C14.4927 13.0037 14.336 12.9725 14.1777 12.9725C14.0195 12.9725 13.8628 13.0037 13.7166 13.0643C13.5704 13.1249 13.4376 13.2138 13.3258 13.3258C13.2138 13.4376 13.1249 13.5704 13.0643 13.7166C13.0037 13.8628 12.9725 14.0195 12.9725 14.1777C12.9725 14.336 13.0037 14.4927 13.0643 14.6388C13.1249 14.785 13.2138 14.9178 13.3258 15.0296L14.6067 16.3104C15.0779 16.7817 15.8513 16.7817 16.3104 16.3104C16.7696 15.8392 16.7817 15.0658 16.3104 14.6067L15.0296 13.3258ZM29.9767 28.2729C29.8649 28.1609 29.7321 28.072 29.5859 28.0114C29.4397 27.9508 29.283 27.9195 29.1248 27.9195C28.9665 27.9195 28.8098 27.9508 28.6637 28.0114C28.5175 28.072 28.3847 28.1609 28.2729 28.2729C28.1609 28.3847 28.072 28.5175 28.0114 28.6637C27.9508 28.8098 27.9195 28.9665 27.9195 29.1248C27.9195 29.283 27.9508 29.4397 28.0114 29.5859C28.072 29.7321 28.1609 29.8649 28.2729 29.9767L29.5538 31.2575C30.025 31.7288 30.7983 31.7288 31.2575 31.2575C31.3695 31.1457 31.4584 31.0129 31.519 30.8668C31.5797 30.7206 31.6109 30.5639 31.6109 30.4056C31.6109 30.2474 31.5797 30.0907 31.519 29.9445C31.4584 29.7983 31.3695 29.6655 31.2575 29.5538L29.9767 28.2729ZM31.2575 15.0296C31.3695 14.9178 31.4584 14.785 31.519 14.6388C31.5797 14.4927 31.6109 14.336 31.6109 14.1777C31.6109 14.0195 31.5797 13.8628 31.519 13.7166C31.4584 13.5704 31.3695 13.4376 31.2575 13.3258C31.1457 13.2138 31.0129 13.1249 30.8668 13.0643C30.7206 13.0037 30.5639 12.9725 30.4056 12.9725C30.2474 12.9725 30.0907 13.0037 29.9445 13.0643C29.7983 13.1249 29.6655 13.2138 29.5538 13.3258L28.2729 14.6067C27.8017 15.0779 27.8017 15.8513 28.2729 16.3104C28.7442 16.7696 29.5175 16.7817 29.9767 16.3104L31.2575 15.0296ZM16.3104 29.9767C16.4224 29.8649 16.5113 29.7321 16.5719 29.5859C16.6326 29.4397 16.6638 29.283 16.6638 29.1248C16.6638 28.9665 16.6326 28.8098 16.5719 28.6637C16.5113 28.5175 16.4224 28.3847 16.3104 28.2729C16.1986 28.1609 16.0658 28.072 15.9197 28.0114C15.7735 27.9508 15.6168 27.9195 15.4585 27.9195C15.3003 27.9195 15.1436 27.9508 14.9974 28.0114C14.8512 28.072 14.7185 28.1609 14.6067 28.2729L13.3258 29.5538C12.8546 30.025 12.8546 30.7983 13.3258 31.2575C13.7971 31.7167 14.5704 31.7288 15.0296 31.2575L16.3104 29.9767Z"
        fill="#D0D0D0"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      className="h-8 fill-stormy dark:fill-oyster"
      viewBox="0 0 45 45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="21" y="5" width="4" height="35" rx="2" />
      <rect
        x="41"
        y="21"
        width="3"
        height="36"
        rx="1.5"
        transform="rotate(90 41 21)"
      />
    </svg>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  const [output, setOutput] = useState(0);
  const [outputY, setOutputY] = useState(0);
  const [outputX, setOutputX] = useState(0);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setOutput(0.4);
        setOutputX(-40);
        setOutputY(-110);
      } else {
        setOutput(0.3);
        setOutputX(-95);
        setOutputY(-110);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize);
  }, []);

  useEffect(() => {
    function handelBodyScroll() {
      if (isMenuOpen === true) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
    }

    window.addEventListener("click", handelBodyScroll);
  }, [isMenuOpen]);

  const nameY = useTransform(scrollY, [20, 40], [1, outputY]);
  const nameX = useTransform(scrollY, [20, 40], [1, outputX]);
  const nameScale = useTransform(scrollY, [20, 40], [1, output]);

  const { theme, setTheme } = useTheme();

  const container = {
    hidden: {
      display: "none",
      transition: {
        when: "afterChildren",
        duration: 0.01,
        staggerChildren: 0.08,
        delayChildren: 0.02,
        staggerDirection: -1,
      },
    },
    show: {
      display: "grid",
      transition: {
        duration: 0.01,
        staggerChildren: 0.1,
        delayChildren: 0.02,
        staggerDirection: 1,
      },
    },
  };

  const item = {
    hidden: {
      y: "-100vh",

      transition: {
        ease: "easeInOut",
        duration: 0.08,
      },
    },
    show: {
      y: "0vh",

      transition: {
        ease: "easeInOut",
        duration: 0.08,
      },
    },
  };

  const socials = {
    hidden: {
      opacity: [0],
      transition: {
        delay: 0.2,
      },
    },
    show: {
      opacity: [1],
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <div className="transition-colors">
      <Head>
        <title>github user finder</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Siddhant Vij" />
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="fixed top-0 z-30 flex h-14 w-full justify-center bg-oyster  dark:bg-stormy">
        <div className=" flex w-full max-w-screen-2xl items-center justify-between  p-2">
          <Link className="flex h-full" href="/">
            <div className="relative z-30 ">
              <FullLogo />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="  absolute  top-24  flex flex-col bg-opacity-0  dark:bg-opacity-0   md:top-20   "
              style={{ y: nameY, x: nameX, scale: nameScale }}
            >
              <span className="text-5xl font-bold text-black dark:text-white md:text-7xl">
                Github User
              </span>
              <span className="-mt-0.5  pl-2  text-4xl  font-semibold  text-stormy dark:text-oyster md:text-5xl  ">
                Finder
              </span>
            </motion.div>
          </Link>

          <div className="flex">
            <div className="relative z-30 flex gap-2">
              <div
                className="cursor-pointer"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <Sun />
                <Moon />
              </div>
            </div>

            <motion.div
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=" relative z-30 ml-4 cursor-pointer"
              initial={{ rotate: 0 }}
              animate={{ rotate: isMenuOpen ? -135 : 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <MenuIcon />
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate={isMenuOpen ? "show" : "hidden"}
          className="absolute  z-20 grid w-screen grid-cols-4 overflow-hidden "
        >
          <motion.div
            variants={item}
            className=" h-screen w-full bg-white  dark:bg-black"
          ></motion.div>
          <motion.div
            variants={item}
            className=" h-screen w-full bg-white  dark:bg-black"
          ></motion.div>
          <motion.div
            variants={item}
            className=" h-screen w-full bg-white  dark:bg-black"
          ></motion.div>
          <motion.div
            variants={item}
            className="h-screen w-full bg-white  dark:bg-black"
          ></motion.div>
          <motion.div
            variants={socials}
            className="absolute flex  h-screen w-screen items-center justify-center align-middle"
          >
            <Link href="https://www.glitchnobody.com/" target="_blank">
              <h1>Made by Siddhant</h1>
            </Link>
          </motion.div>
        </motion.div>
      </nav>

      {children}
      <footer></footer>
    </div>
  );
}

export default Layout;
