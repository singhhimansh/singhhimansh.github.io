import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiLinktree } from "react-icons/si";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "github",
    href: "https://github.com/singhhimansh/",
    icon: <FaGithub className="w-5 h-5 fill-lightslate hover:fill-emerald-300" />,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/singhhimansh/",
    icon: <FaLinkedin className="w-5 h-5 fill-lightslate hover:fill-emerald-300" />,
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/himanshhh_/",
    icon: <GrInstagram className="w-5 h-5 fill-lightslate hover:fill-emerald-300" />,
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/him.signum/",
    icon: <FaFacebook className="w-5 h-5 fill-lightslate hover:fill-emerald-300" />,
  },
  {
    name: "linktree",
    href: "https://linktr.ee/himanshhh_",
    icon: <SiLinktree className="w-5 h-5 fill-lightslate hover:fill-emerald-300" />,
  },
];

interface SocialLinksProps {
  className?: string;
  variant?: "sidebar" | "footer";
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  variant = "sidebar",
}) => {
  const baseClasses = "hover:text-emerald-300 transition-colors duration-200";

  if (variant === "sidebar") {
    return (
      <ul className={`w-5 flex flex-col ${className}`}>
        {socialLinks.map((link) => (
          <li key={link.name} className="py-3 moveup">
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={baseClasses}
              title={link.name}
            >
              <span className="fill-lightslate hover:fill-emerald-300">
                {link.icon}
              </span>
            </a>
          </li>
        ))}
        <li>
          <hr className="h-28 mt-4 mr-2 border-r-2 border-t-0 border-solid border-lightslate" />
        </li>
      </ul>
    );
  }

  return (
    <ul className={`flex gap-6 md:gap-16 ${className}`}>
      {socialLinks.map((link) => (
        <li key={link.name} className="py-3 moveup">
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={baseClasses}
            title={link.name}
          >
            <span className="fill-slate-500 hover:fill-emerald-300">
              {link.icon}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};
