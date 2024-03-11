"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import './styles.css'

type Props = {
  children: ReactNode;
};

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];
export default function AuthLayout({ children }: Props) {
  const pathname = usePathname();
  return (
    <>
      <div>
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <Link
              className={isActive ? "font-bold mr-4 text-red-500" : "text-blue-500 mr-4"}
              href={link.href}
              key={link.name}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
      {children}
    </>
  );
}
