export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ian Mitchell",
  description:
    "Portfolio page of Ian Mitchell, Full Stack Web developer & Artist",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "About Me",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "About Me",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/ianmitch90",
    linkdin: "https://www.linkedin.com/in/ianmitch90",
  },
  projects: [
    {
      isFeatured: false,
      title: "Task Tracker",
      description: "A simple full stack todo app using react saga pattern",
      footerDesc: "",
      link: "https://ianmitch90.github.io/todo/",
      githubLink: "https://github.com/ianmitch90/todo",
      picURL:
        "https://images.unsplash.com/photo-1522199670076-2852f80289c3?q=80&w=1744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      isFeatured: true,
      title: "HTML/CSS Showcase",
      description: "Plain HTML/CSS showcase informational site",
      footerDesc: "",
      link: "https://ianmitch90.github.io/HTMLCSS/",
      githubLink: "https://github.com/ianmitch90/HTMLCSS",
      picURL:
        "https://images.unsplash.com/photo-1626544827819-6ced2af2346c?q=80&w=1567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      isFeatured: false,
      title: "Cloud Sound",
      description: "SoundCloud player",
      footerDesc: "",
      link: "https://ianmitch90.github.io/soundcloud/",
      githubLink: "https://github.com/ianmitch90/soundcloud",
      picURL:
        "https://images.unsplash.com/photo-1621544170639-fb0189e518ba?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    // {
    //   isFeatured: true,
    //   title: "",
    //   description: "",
    //   footerDesc: "",
    //   link: "",
    //   githubLink: "",
    //   picURL: "",
    // },
  ],
};
