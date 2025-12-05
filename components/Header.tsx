"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  GraduationCap,
  Linkedin,
  Instagram,
  Mail,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navItems: Array<{ name: string; href: string; isExternal?: boolean }> = [
  { name: "About Me", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Projects", href: "/projects" },
  { name: "CV", href: "/ranjani-cv.pdf", isExternal: true },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/ranjn2",
    label: "GitHub",
  },
  {
    icon: GraduationCap,
    href: "https://scholar.google.com/citations?user=2cgue9wAAAAJ&hl=en&oi=ao",
    label: "Google Scholar",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ranjanin2/",
    label: "LinkedIn",
  },
  { icon: Mail, href: "mailto:nranj2@gmail.com", label: "Email" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-md border border-slate-200 bg-white"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white mobile-menu">
          <div className="flex flex-col h-full pt-16 px-6">
            <div className="mb-8 text-center">
              <div className="w-24 h-24 rounded-full border-2 border-slate-300 bg-slate-100 mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <Image
                  src="/headshot_ranjani.jpg"
                  alt="Ranjani Narayanan"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 25%" }}
                  priority
                />
              </div>
              <h1 className="text-2xl font-bold text-slate-900">
                Ranjani Narayanan
              </h1>
              <p className="text-sm text-slate-600 mt-1">
                PhD Candidate @ Georgia Tech
              </p>
            </div>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => {
                const linkClassName = cn(
                  "text-lg transition-colors text-center",
                  isActive(item.href)
                    ? "text-slate-900 font-bold"
                    : "text-slate-500 hover:text-slate-900"
                );

                if (item.isExternal) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavClick}
                      className={linkClassName}
                    >
                      {item.name}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick}
                    className={linkClassName}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-auto mb-8 flex justify-center space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-slate-900 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Desktop Header */}
      <header className="w-full py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 text-center">
            Ranjani Narayanan
          </h1>

          {/* Tagline */}
          <p className="text-base md:text-lg text-slate-600 mb-6 text-center">
            Expanding how agents can become teammates, not just tools.
          </p>

          {/* Profile Image - Circular */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-slate-300 bg-slate-100 mb-6 flex items-center justify-center overflow-hidden">
            <Image
              src="/headshot_ranjani.jpg"
              alt="Ranjani Narayanan"
              width={160}
              height={160}
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 25%" }}
              priority
            />
          </div>

          {/* Social Icons - Horizontal Row */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            ))}
          </div>

          {/* Navigation - Horizontal */}
          <nav className="flex justify-center items-center space-x-6 md:space-x-8">
            {navItems.map((item) => {
              const linkClassName = cn(
                "text-base md:text-lg transition-colors relative pb-1",
                isActive(item.href)
                  ? "text-slate-900"
                  : "text-slate-500 hover:text-slate-900"
              );

              if (item.isExternal) {
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    {item.name}
                    {isActive(item.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-600" />
                    )}
                  </a>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={linkClassName}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-blue-600" />
                  )}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      </header>
    </>
  );
}
