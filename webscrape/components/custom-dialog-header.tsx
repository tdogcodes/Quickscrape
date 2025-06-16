import React from "react";
import { DialogTitle, DialogHeader } from "@/components/ui/dialog";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";

interface Props {
  icon?: LucideIcon | React.ReactNode;
  title?: string;
  subTitle?: string;

  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

const CustomDialogHeader = ({
  icon,
  title,
  subTitle,
  iconClassName,
  titleClassName,
  subTitleClassName,
}: Props) => {
  // taking in the icon as a LucideIcon and styling it
  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon) && typeof icon.type !== "string") {
      return React.cloneElement(
        icon as React.ReactElement<{ className?: string; size?: number }>,
        {
          className: cn(
            "stroke-primary",
            (icon.props as any).className,
            iconClassName
          ),
          size: 30,
        }
      );
    }
    return null;
  };

  return (
    <DialogHeader className="py-6">
      <DialogTitle className="flex flex-col mb-2 items-center gap-2">
        {renderIcon()}
        {title && (
          <h2 className={cn("text-xl text-primary", titleClassName)}>{title}</h2>
        )}
        {subTitle && (
          <p className={cn("text-muted-foreground text-sm", subTitleClassName)}>
            {subTitle}
          </p>
        )}
      </DialogTitle>
      <Separator/>
    </DialogHeader>
  );
};

export default CustomDialogHeader;
