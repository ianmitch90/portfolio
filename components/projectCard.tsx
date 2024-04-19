"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Divider,
  CardBody,
  Link,
} from "@nextui-org/react";
import { GithubIcon } from "./icons";

type Props = {
  isFeatured: boolean;
  title: string;
  description: string;
  link: string;
  githubLink: string;
  picURL: string;
  footerDesc: string;
};

export default function ProjectCard({
  isFeatured,
  title,
  description,
  link,
  githubLink,
  picURL,
  footerDesc,
}: Props) {
  return isFeatured ? (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-6"
    >
      <CardHeader className="absolute z-10 flex-col items-start bg-gradient-to-r from-sky-900 from-10% text-white">
        <p className="text-tiny text-white/60 uppercase font-bold">
          Featured Project
        </p>
        <h4 className="text-white font-medium text-2xl">{title}</h4>
        <p className="text-tiny text-white/80">{description}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt={`Background card image for ${title}`}
        className="z-0 w-full h-full object-cover brightness-50 blur-sm"
        src={picURL}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{footerDesc}</p>
          </div>
        </div>
        <Button
          isIconOnly
          as={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={githubLink}
          radius="full"
          size="sm"
          className="mr-4"
        >
          <GithubIcon size={20} />
        </Button>
        <Button
          as={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          color="primary"
          radius="full"
          size="sm"
        >
          Open App
        </Button>
      </CardFooter>
    </Card>
  ) : (
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-6"
    >
      <CardHeader className="absolute z-10 flex-col items-start bg-gradient-to-r from-slate-800 from-10% text-white">
        <p className="text-tiny text-white/60 uppercase font-bold">Project</p>
        <h4 className="text-white font-medium text-2xl">{title}</h4>
        <p className="text-tiny text-white/80">{description}</p>
      </CardHeader>
      <Image
        removeWrapper
        alt={`Background card image for ${title}`}
        className="z-0 w-full h-full object-cover brightness-50 blur-sm"
        src={picURL}
      />
      <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center">
          <div className="flex flex-col">
            <p className="text-tiny text-white/60">{footerDesc}</p>
          </div>
        </div>
        <Button
          isIconOnly
          as={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={githubLink}
          radius="full"
          size="sm"
          className="mr-4"
        >
          <GithubIcon size={20} />
        </Button>
        <Button
          as={Link}
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          color="secondary"
          radius="full"
          size="sm"
        >
          Open App
        </Button>
      </CardFooter>
    </Card>
  );
}
