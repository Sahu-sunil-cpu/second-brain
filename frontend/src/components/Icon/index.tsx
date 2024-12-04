import { ReactElement } from "react";



export interface IconProps {
  size: "sm" | "lg" | "md";
  Icon?: ReactElement

}

export const sizeVariants = {
    "sm": "size-2",
    "md": "size-4",
    "lg": "size-6"
}