"use client";

import { socials } from "@/lib/data";
import Magnetic from "@/components/shared/Magnetic";

export default function MagneticSocials() {
  return (
    <div className="flex flex-wrap gap-4">
      {socials.map((social) => {
        const Icon = social.icon;
        return (
          <Magnetic key={social.id} strength={0.4}>
            <a
              href={social.href}
              target={social.id === "email" ? undefined : "_blank"}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-elevated px-5 py-3 text-sm text-ink transition-colors hover:border-cyan/50 hover:text-cyan"
            >
              <Icon className="h-4 w-4" />
              {social.label}
            </a>
          </Magnetic>
        );
      })}
    </div>
  );
}
