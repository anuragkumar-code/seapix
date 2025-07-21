import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  className?: string;
  size?: "sm" | "default" | "lg";
}

export const LoadingSpinner = ({ className, size = "default" }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    default: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex items-center justify-center min-h-[100px] w-full">
      <Loader2 className={cn(
        "animate-spin text-primary",
        sizeClasses[size],
        className
      )} />
    </div>
  );
}; 