import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import ProjectCard from "@/components/projectCard";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Hey! My name is&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Ian&nbsp;</h1>
        <br />
        <h1 className={title()}>
          I am a full stack developer, artist, and music and technology curator
          and creator.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Take a look around at some of my projects
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          href={"../public/IanMitchellResume.docx"}
          download={"Ian Mitchell Resume"}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Download CV
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div>

      <div className="mt-8">
        <div className="max-w-[900px] gap-8 grid grid-cols-12 auto-rows px-8">
          {siteConfig.projects.map((projectItem: any, index: any) => (
            <ProjectCard key={index + "project"} {...projectItem} />
          ))}
        </div>
      </div>
    </section>
  );
}
