import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
  {
    role: "Full-Stack Intern", // TODO: Replace with actual role
    company: "SinQlarity", // TODO: Replace with actual company name
    logo: "/sinqlarity.svg", // TODO: Replace with actual logo
    duration: "January 2025 - Present",
    description:
      "Collaborating as a Full-Stack Intern, completing structured modules to strengthen expertise in front-end and back-end development.",
    link: "https://www.triwebapi.com/",
    images: ["/SinQlarity.png"],
  },
  {
    role: "Salesforce Developer Virtual Internship", // TODO: Replace with actual role
    company: "SmartInternz", // TODO: Replace with actual company name
    logo: "/smartinternz.svg", // TODO: Replace with actual logo
    duration: "July 2024 - August 2024",
    description:
      "8-week internship involving 30 hours of live training. Completed 50 hours of self-paced learning on the Salesforce Trailhead platform. Designed custom apps using Apex programming language along with Visualforce pages and Lightning components.",
    link: "https://skillwallet.smartinternz.com/internships/salesforce_certificates/5a378f8490c8d6af8647a753812f6e31",
    images: ["/Certificate.png"],
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4 text-black dark:text-white">
        Work Experience
      </h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                    <p className="text-sm text-muted-foreground">{j.company}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p className="text-sm mt-2">{j.description}</p>
                {/* Job Images */}
                <JobImages
                  role={j.role}
                  link={j.link}
                  images={j.images}
                  duration={j.duration}
                />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
