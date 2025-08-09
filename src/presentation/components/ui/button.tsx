import { cn } from "@/shared/utils/lib/utils"
import { ButtonHTMLAttributes, forwardRef } from "react"

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-lg font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
          {
            // Primary - Usando nuestro color #36d6fa
            "bg-[#36d6fa] text-white hover:bg-[#0ba0d6] focus:ring-[#36d6fa]/50 shadow-lg hover:shadow-xl transform hover:scale-105": variant === "primary",
            
            // Default
            "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 focus:ring-gray-500/20": variant === "default",
            
            // Secondary - Usando púrpura
            "bg-[#6366f1] text-white hover:bg-[#4f46e5] focus:ring-[#6366f1]/50": variant === "secondary",
            
            // Outline
            "border-2 border-[#36d6fa] text-[#36d6fa] hover:bg-[#36d6fa] hover:text-white focus:ring-[#36d6fa]/50": variant === "outline",
            
            // Ghost
            "text-[#36d6fa] hover:bg-[#36d6fa]/10 focus:ring-[#36d6fa]/50": variant === "ghost",
          },
          {
            "px-3 py-1.5 text-sm": size === "sm",
            "px-4 py-2 text-base": size === "md", 
            "px-6 py-3 text-lg": size === "lg",
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button }
