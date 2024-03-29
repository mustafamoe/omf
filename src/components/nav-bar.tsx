"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "~/lib/utils";
import Link from "next/link";
import { Book, Menu } from "lucide-react";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import { Button } from "./ui/button";
import { ScrollToTop } from "./scroll-to-top";

export const NavBar = ({
  navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Islam-Guide",
      link: "/islam-guide",
    },
    {
      name: "News",
      link: "/news",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Donate",
      link: "/donate",
    },
  ],
  className,
}: {
  navItems?: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress, scrollY } = useScroll();

  const [watch, setWatch] = useState(false);
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (current) => {
    const value = Number(current.toFixed()) ?? 0;
    if (value < 200) {
      setWatch(false);
      setVisible(true);
    } else {
      setWatch(true);
    }
  });

  const logo = (
    <Link href="/">
      <Image
        src="/omf.png"
        alt="omf"
        width={80}
        height={80}
        style={{
          filter: "drop-shadow(0px 0px 5px white)",
        }}
      />
    </Link>
  );

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            "flex justify-between container h-24 fixed top-0 inset-x-0 mx-auto border border-transparent z-[50] pr-8 pl-8 items-center",
            className
          )}
        >
          {logo}
          <div className="hidden md:flex max-w-fit h-14 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-6 items-center justify-center space-x-4">
            {navItems.map((navItem: any, idx: number) => (
              <Link
                key={`link=${idx}`}
                href={navItem.link}
                className={cn(
                  "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                )}
              >
                <span className="text-sm">{navItem.name}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/get-free-quran">
              <Button className="rounded-full">
                <Book className="w-4 h-4 mr-2" />
                Get Free Quran
              </Button>
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden rounded-full"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  {logo}
                  {navItems.map((navItem, i) => (
                    <Link
                      key={i}
                      href={navItem.link}
                      className="text-foreground transition-colors hover:text-foreground"
                    >
                      {navItem.name}
                    </Link>
                  ))}
                  <Link href="/get-free-quran">
                    <Button>Get Free Quran</Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </motion.div>
        <ScrollToTop visible={watch} />
      </AnimatePresence>
    </>
  );
};
