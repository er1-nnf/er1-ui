import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-brand-navy mb-1.5"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 rounded-xl border bg-white
            text-brand-navy placeholder:text-brand-slate/60
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green
            disabled:bg-brand-mist disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' : 'border-brand-mist'}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
        {hint && !error && (
          <p className="mt-1.5 text-sm text-brand-slate">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, className = '', id, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-brand-navy mb-1.5"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={`
            w-full px-4 py-3 rounded-xl border bg-white
            text-brand-navy placeholder:text-brand-slate/60
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green
            disabled:bg-brand-mist disabled:cursor-not-allowed
            resize-y min-h-[120px]
            ${error ? 'border-red-500 focus:ring-red-500/30 focus:border-red-500' : 'border-brand-mist'}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-red-600">{error}</p>
        )}
        {hint && !error && (
          <p className="mt-1.5 text-sm text-brand-slate">{hint}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
