import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "./ui/button";

export type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
function FeatureCard({  description, icon, title }: FeatureCardProps) {
  return (
    <Card className="group transition-all shadow duration-150  hover:scale-105 m-2 mx-auto min-h-80 w-sm dark:bg-gray-800/10 bg-stone-50/10 hover:shadow-md">
      <CardHeader className="flex flex-col items-center space-y-4 text-center">
        <div className="transform transition-transform duration-300 ease-in-out group-hover:scale-110">
          {icon}
        </div>
      </CardHeader>
      <CardTitle className="text-center text-3xl transition-colors duration-300">
        {title}
      </CardTitle>
      <Separator className="transition-colors duration-300 group-hover:bg-indigo-500" />
      <CardContent>
        <p className="text-center text-sm leading-5 transition-colors duration-300">
          {description}
        </p>
      </CardContent>

      <CardFooter>
        <Button
          variant={"outline"}
          className="mx-auto flex items-center justify-center gap-2 text-center transition-all duration-300"
        >
          <span>Get More Information</span>
          <FaArrowRight
            className="transition-transform duration-300 group-hover:translate-x-1"
            size={24}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}

export default FeatureCard;
