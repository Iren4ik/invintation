import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TextFieldProps = {
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
};

export default function TextField({
  label,
  placeholder,
  registration,
  error,
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-zinc-800">
        {label}
        <span className="ml-1">*</span>
      </label>

      <input
        {...registration}
        placeholder={placeholder}
        className={`rounded-xl border px-4 py-3 text-zinc-900 outline-none transition-all duration-200 placeholder:text-zinc-400
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100'
              : 'border-zinc-300 focus:border-zinc-900 focus:ring-4 focus:ring-zinc-200'
          }`}
      />

      {error && (
        <p className="text-sm text-red-500">Это поле обязательно</p>
      )}
    </div>
  );
}