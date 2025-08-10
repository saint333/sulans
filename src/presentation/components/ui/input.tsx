'use client';
import React, { forwardRef, useState, useId } from 'react';
import { LucideIcon, Eye, EyeOff } from 'lucide-react';

/**
 * Función para combinar clases CSS
 */
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Props base para el componente Input
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: LucideIcon;
  variant?: 'default' | 'filled' | 'outlined';
  inputSize?: 'sm' | 'md' | 'lg';
}

/**
 * Componente Input básico
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    type, 
    label, 
    error, 
    helperText, 
    icon: Icon, 
    variant = 'default',
    inputSize = 'md',
    id,
    ...props 
  }, ref) => {
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;
    
    const sizeClasses = {
      sm: 'py-2 text-sm',
      md: 'py-3',
      lg: 'py-4 text-lg',
    };

    const variantClasses = {
      default: 'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700',
      filled: 'border-0 bg-gray-100 dark:bg-gray-700',
      outlined: 'border-2 border-gray-300 dark:border-gray-600 bg-transparent',
    };

    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          )}
          <input
            type={type}
            id={inputId}
            className={cn(
              'w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:text-white transition-all duration-200',
              Icon ? 'pl-10' : 'pl-4',
              'pr-4',
              sizeClasses[inputSize],
              variantClasses[variant],
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

Input.displayName = 'Input';

/**
 * Props para el componente PasswordInput
 */
export interface PasswordInputProps extends Omit<InputProps, 'type'> {
  showPasswordToggle?: boolean;
}

/**
 * Componente Input para contraseñas con toggle de visibilidad
 */
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showPasswordToggle = true, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    if (!showPasswordToggle) {
      return <Input {...props} type="password" ref={ref} />;
    }

    return (
      <div className="w-full">
        {props.label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {props.label}
          </label>
        )}
        <div className="relative">
          {props.icon && (
            <props.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          )}
          <input
            {...props}
            type={showPassword ? "text" : "password"}
            className={cn(
              'w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:text-white transition-all duration-200',
              props.icon ? 'pl-10' : 'pl-4',
              'pr-12',
              props.inputSize === 'sm' ? 'py-2 text-sm' : props.inputSize === 'lg' ? 'py-4 text-lg' : 'py-3',
              props.variant === 'filled' ? 'border-0 bg-gray-100 dark:bg-gray-700' : 
              props.variant === 'outlined' ? 'border-2 border-gray-300 dark:border-gray-600 bg-transparent' :
              'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700',
              props.error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              props.className
            )}
            ref={ref}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        {props.error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {props.error}
          </p>
        )}
        {props.helperText && !props.error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {props.helperText}
          </p>
        )}
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

/**
 * Props para el componente SearchInput
 */
export interface SearchInputProps extends Omit<InputProps, 'type'> {
  onSearch?: (value: string) => void;
  showSearchButton?: boolean;
}

/**
 * Componente Input para búsquedas
 */
export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, showSearchButton = false, ...props }, ref) => {
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(e.currentTarget.value);
      }
      props.onKeyPress?.(e);
    };

    const handleSearchClick = () => {
      if (onSearch && ref && typeof ref === 'object' && ref.current) {
        onSearch(ref.current.value);
      }
    };

    return (
      <div className="w-full">
        {props.label && (
          <label 
            htmlFor={props.id} 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {props.label}
          </label>
        )}
        <div className="relative">
          {props.icon && (
            <props.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          )}
          <input
            {...props}
            type="search"
            onKeyPress={handleKeyPress}
            className={cn(
              'w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#36d6fa] focus:border-[#36d6fa] dark:text-white transition-all duration-200',
              props.icon ? 'pl-10' : 'pl-4',
              showSearchButton ? 'pr-20' : 'pr-4',
              props.inputSize === 'sm' ? 'py-2 text-sm' : props.inputSize === 'lg' ? 'py-4 text-lg' : 'py-3',
              props.variant === 'filled' ? 'border-0 bg-gray-100 dark:bg-gray-700' : 
              props.variant === 'outlined' ? 'border-2 border-gray-300 dark:border-gray-600 bg-transparent' :
              'border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700',
              props.error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
              props.className
            )}
            ref={ref}
          />
          {showSearchButton && (
            <button
              type="button"
              onClick={handleSearchClick}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-[#36d6fa] text-white rounded-md text-sm hover:bg-[#2bc5e8] transition-colors"
            >
              Buscar
            </button>
          )}
        </div>
        {props.error && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">
            {props.error}
          </p>
        )}
        {props.helperText && !props.error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {props.helperText}
          </p>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';
