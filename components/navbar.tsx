"use client"

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation"; // Use usePathname to determine active link

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { HeartFilledIcon, Logo, InstagramIcon } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      {/* Left-aligned Logo */}
      <NavbarContent className="basis-1/5" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">MIMC</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Centered Navigation Links with Transition Effects */}
      <NavbarContent className="hidden lg:flex basis-3/5 justify-center">
        <ul className="flex gap-10">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "transition-all duration-300 ease-in-out relative", // Smooth transition for all properties, including font weight
                  pathname === item.href
                    ? "text-white font-bold" // Active tab: bold and white text
                    : "text-default-500 font-normal hover:text-white", // Normal tabs
                )}
                href={item.href}
              >
                {item.label}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 w-full h-[2px] bg-white transform transition-transform duration-300 ease-in-out",
                    pathname === item.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Right-aligned Icons */}
      <NavbarContent className="basis-1/5" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="Instagram"
            href={siteConfig.links.instagram}
          >
            <InstagramIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-default-100"
            href={siteConfig.links.instagram}
            variant="flat"
          >
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu (For small screens) */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link
          isExternal
          aria-label="Instagram"
          href={siteConfig.links.instagram}
        >
          <InstagramIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Collapsible Menu for mobile */}
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={clsx(
                  "transition-colors duration-300 ease-in-out relative", // Smooth color transition
                  pathname === item.href
                    ? "text-white font-bold"
                    : "text-default-500 hover:text-white"
                )}
                href={item.href}
                size="lg"
              >
                {item.label}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 w-full h-[2px] bg-white transform transition-transform duration-300 ease-in-out",
                    pathname === item.href ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};