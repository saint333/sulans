import React, { forwardRef, useId } from 'react';
import { LucideIcon } from 'lucide-react';

/**
 * Función para combinar clases CSS
 */
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Props para el componente Textarea
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'filled' | 'outlined';
  textareaSize?: 'sm' | 'md' | 'lg';
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}

/**
 * Componente Textarea reutilizable
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText, 
    icon: Icon, 
    variant = 'default',
    textareaSize = 'md',
    resize = 'vertical',
    id,
    rows = 4,
    ...props 
  }, ref) => {
    const generatedId = useId();
    const textareaId = id || `textarea-${generatedId}`;
    
    const sizeClasses = {
      sm: 'py-2 px-3 text-sm',
      md: 'py-3 px-4',
      lg: 'py-4 px-4 text-lg',
    };

    const variantClasses = {
      default: 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700',
      filled: 'border-0 bg-gray-100 dark:bg-gray-700',
      outlined: 'border-2 border-gray-300 dark:border-gray-600 bg-transparent',
    };

    const resizeClasses = {
      none: 'resize-none',
      both: 'resize',
      horizontal: 'resize-x',
      vertical: 'resize-y',
    };

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={textareaId} 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          )}
          <textarea
            id={textareaId}
            rows={rows}
            className={cn(
              'w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:text-white transition-all duration-200',
              Icon ? 'pl-10' : '',
              sizeClasses[textareaSize],
              variantClasses[variant],
              resizeClasses[resize],
              error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
