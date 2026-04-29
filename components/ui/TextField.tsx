import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TextFieldProps = {
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: FieldError;
  required?: boolean; // Добавляем пропс для указания обязательности
};

export default function TextField({
  label,
  placeholder,
  registration,
  error,
  required = false, // По умолчанию поле необязательное
}: TextFieldProps) {
  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <label className="text-[16px] font-semibold text-left leading-[1.2] lg:text-[20px]">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        {...registration}
        placeholder={placeholder}
        className={`rounded-[8px] text-[14px] lg:text-[18px] border px-3.5 py-3 lg:py-3.5 outline-none transition-all duration-200
                  placeholder:text-zinc-400
                    lg:rounded-[12px]
          ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-4 focus:ring-red-100'
              : 'border-zinc-300 focus:border-black focus:ring-4 focus:ring-zinc-100'
          }`}
      />

      {error && (
        <p className="text-[14px] text-red-500">Это поле обязательно</p>
      )}
    </div>
  );
}