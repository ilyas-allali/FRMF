import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { BrandMark } from "./BrandMark";

const links = [
  ["Selected", "#selected"],
  ["Legacy", "#legacy"],
  ["The 26", "#roster"],
];

export function Nav() {
  return (
    <header className="nav-shell">
      <a href="#top" className="nav-brand" aria-label="Atlas 26 home">
        <BrandMark />
      </a>
      <nav className="nav-links" aria-label="Primary navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <span className="nav-edition">World Cup · 2026</span>
      <Dialog.Root>
        <Dialog.Trigger className="menu-trigger" aria-label="Open menu"><Menu /></Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="menu-overlay" />
          <Dialog.Content className="menu-content">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <Dialog.Close className="menu-close" aria-label="Close menu"><X /></Dialog.Close>
            <BrandMark />
            <div className="menu-links">
              {links.map(([label, href], index) => (
                <Dialog.Close asChild key={href}>
                  <a href={href}><span>0{index + 1}</span>{label}</a>
                </Dialog.Close>
              ))}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}
