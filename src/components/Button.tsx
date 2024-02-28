import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["", ":transition-colors"], {
  variants: {
    variant: {
      default: [
        "bg-secondary",
        "hover:text-white",
        "transition-colors duration-500 hover:bg-fuchsia-300",
      ],
    },
    size: {
      default: ["rounded-lg"],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size, className }))}
    />
  );
}
