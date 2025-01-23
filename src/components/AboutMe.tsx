"use client";
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card";
import ThemeSwitcher from "@/components/ui/ThemeSwitcher";
import useMediaQuery from "@/hook/useMediaQuery";

export const AboutMe = () => {
  const isDesktopOrLaptop = useMediaQuery("(min-width: 1224px)");
  return (
    <Card className="mb-6">
      <CardHeader className="flex flex-row justify-between items-baseline">
        <CardTitle>About Me</CardTitle>
        {isDesktopOrLaptop && <ThemeSwitcher />}
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          {/* Write 1-2 sentences about yourself */}A Computer Science student
          proficient in C++, Python, SQL, Python, SQL, and full-stack
          development, with experience in AI-driven solutions, data analysis,
          and Salesforce. Passionate about building innovative, user-focused
          applications.
        </p>
      </CardContent>
    </Card>
  );
};
