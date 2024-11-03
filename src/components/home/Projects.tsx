import React from 'react'
import IconCloud from '../ui/icon-cloud';

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export default function Projects() {
  return (
    <>
    <div className="relative flex items-center justify-center max-w-lg px-20 pt-8 pb-20 overflow-hidden border rounded-lg size-full bg-background ">
      <IconCloud iconSlugs={slugs} />
    </div>
    </>
  )
}
