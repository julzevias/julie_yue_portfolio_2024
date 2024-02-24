import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["", ":transition-colors"], {
  variants: {
    variant: {
      default: [
        "bg-secondary",
        "hover:bg-secondary-hover",
        "hover:text-primary-dark",
      ],
      ghost: ["hover:bg-gray-100"],
    },
    size: {
      default: ["rounded-lg", "p-2"],
      icon: [
        "rounded-lg",
        "w-100",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
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
