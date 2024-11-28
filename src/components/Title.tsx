import {ReactNode} from "react";

interface TitleProps {
  size?: "s"| "m" | "l";
  children: ReactNode;
}

export const Title = ({size = "l", children}: TitleProps) => {
  const commonClasses = "self-stretch text-gray-950 dark:text-gray-50 font-['Roboto']";

  switch (size) {
    case "s":
      return <h3 className={`text-2xl font-bold leading-8 ${commonClasses}`}>{children}</h3>
    case "m":
      return <h2 className={`text-3xl font-normal leading-9 ${commonClasses}`}>{children}</h2>;
    case "l":
    default:
      return <h1 className={`text-4xl font-bold leading-10 ${commonClasses}`}>{children}</h1>;
  }
}