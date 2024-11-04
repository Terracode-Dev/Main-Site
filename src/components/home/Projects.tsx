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
    <div className='container mx-auto px-4 md:px-10'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
        {/* Icon Cloud */}
        <div className="relative flex items-center justify-center md:w-1/2 px-4 md:px-20 pt-8 pb-20 overflow-hidden rounded-lg bg-background">
          <IconCloud iconSlugs={slugs} />
        </div>

        {/* Text Content */}
        <div className='md:w-1/2 space-y-20'>
          <h1 className='text-4xl md:text-4xl font-bold bg-gradient-to-r from-[#EF3D00] to-[#FDA40A] bg-clip-text text-transparent'>
            Our tech stack
          </h1>
          <p className='text-lg md:text-xl line-clamp-5 overflow-hidden'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatem suscipit ab placeat eius? Odit, suscipit repellat ipsum nisi accusamus dolor aliquid animi ipsam laboriosam quidem sit nesciunt omnis aut?
          </p>
        </div>
      </div>
    </div>
  )
}