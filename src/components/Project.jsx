import React from 'react';

export default function Projectsocial() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32  bg-white">
      <div className="container grid items-start gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Project Overview</h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Dive into the details of our latest project, showcasing our expertise in design and development.
          </p>
          <div className="grid gap-4">
            <div>
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                  Responsive and mobile-friendly design
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                  Intuitive user interface with smooth interactions
                </li>
                <li className="flex items-center">
                  <CheckIcon className="mr-2 h-4 w-4 text-primary" />
                  Optimized for performance and scalability
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Project Details</h3>
              <ul className="mt-2 space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CalendarIcon className="mr-2 h-4 w-4 text-primary" />
                  Completed: April 2023
                </li>
                <li className="flex items-center">
                  <UserIcon className="mr-2 h-4 w-4 text-primary" />
                  Client: Acme Inc.
                </li>
                <li className="flex items-center">
                  <TagIcon className="mr-2 h-4 w-4 text-primary" />
                  Category: Web Application
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid gap-4">
          <img
            alt="Project Screenshot"
            className="aspect-[3/2] overflow-hidden rounded-xl object-cover"
            height={400}
            src="/placeholder.svg"
            width={600}
          />
           
        </div>
      </div>
    </section>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function TagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
