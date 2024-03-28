import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Image from "next/image";

export const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about-us",
  },
  {
    name: "Islam-Guide",
    href: "/islam-guide",
  },
  {
    name: "Videos",
    href: "/videos",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
  {
    name: "Donate",
    href: "/donate",
  },
];

export function NavBar() {
  const logo = <Image src="/omf.png" alt="omf" width={50} height={40} />;
  return (
    <header className="sticky top-0 flex justify-between h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <div className="flex md:hidden">
        <Link href="/">{logo}</Link>
      </div>
      <nav className="justify-between flex-1 hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link href="/">{logo}</Link>
        <div className="flex gap-6 items-center">
          {navItems.map((navItem, i) => (
            <Link
              key={i}
              href={navItem.href}
              className="text-foreground transition-colors hover:text-foreground"
            >
              {navItem.name}
            </Link>
          ))}
          <Link href="/get-free-quran">
            <Button>Get Free Quran</Button>
          </Link>
        </div>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link href="/">{logo}</Link>
            {navItems.map((navItem, i) => (
              <Link
                key={i}
                href={navItem.href}
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
    </header>
  );
}
