import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { X } from "lucide-react"; // Close button

const alertVariants = cva(
  "relative w-fit mx-auto my-[10px] rounded-lg border px-8 py-3 text-sm flex",
  {
    variants: {
      type: {
        success: "bg-green-50 text-green-900 border-green-400",
        error: "bg-red-50 text-red-900 border-red-400",
        warning: "bg-orange-50 text-orange-900 border-orange-400",
        info: "bg-blue-50 text-grey-900 border-grey-400",
      },
      variant: {
        subtle: "bg-opacity-50",
        solid: "bg-opacity-100",
        outlined: "bg-transparent border-2",
      },
    },
    defaultVariants: {
      type: "success",
      variant: "solid",
    },
  }
);

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "success" | "error" | "warning" | "info";
  variant?: "subtle" | "solid" | "outlined";
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const Alert = ({
  type = "info",
  variant = "subtle",
  title,
  description,
  icon,
  onClose,
  children,
  className,
  ...props
}: AlertProps) => {
  const [isVisible, setIsVisible] = React.useState(true)
  if (!isVisible) return null

  const handleClose = () => {
    if (onClose)
      onClose()
    setIsVisible(false)
  }

  return (
    <div
      role="alert"
      aria-label={title ? `${type} alert: ${title}` : `${type} alert`}
      className={cn(alertVariants({ type, variant }), "relative p-4", className)}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      <div>
        {title && <h5 className="font-medium leading-none">{title}</h5>}
        {description && <p className="text-sm">{description}</p>}
        {children} {/* Allows additional content */}
      </div>
      {onClose && (
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={handleClose}
          aria-label="Close alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export { Alert };
