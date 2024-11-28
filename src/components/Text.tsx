import {FC, ReactNode} from "react";

enum FontSizes {
  "s" = "text-sm",
  "m" = "text-base",
  "l" = "text-lg"
}
interface TextProps {
  size?: keyof typeof FontSizes;
  span?: boolean;
  bold?: boolean;
  children: ReactNode;
}
export const Text: FC<TextProps> = ({ size = "m", span, bold, children }) => {
  const Tag = span ? "span" : "p";

  return (
    <Tag
      className={`self-stretch text-gray-950 dark:text-gray-50 ${
        FontSizes[size]
      } ${bold ? 'font-bold' : 'font-normal'
      } font-['Roboto'] leading-normal`}
    >
      {children}
    </Tag>
  )
}