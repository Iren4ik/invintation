import { FieldErrors, UseFormRegister } from 'react-hook-form';

type TextAreaFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  required?: boolean;
  placeholder?: string;
  rows?: number;
};

export default function TextAreaField({
  label,
  name,
  register,
  placeholder,
  rows = 3,
}: TextAreaFieldProps) {

  return (
    <div className="flex flex-col gap-4 lg:gap-5">
      <label className="text-[16px] font-semibold text-left leading-[1.2] lg:text-[20px]">
        {label}
      </label>

      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className="
          rounded-[12px] w-full resize-none border border-zinc-300 
          px-3.5 py-3 lg:py-3.5 text-[14px] lg:text-[18px]
          outline-none transition
          placeholder:text-zinc-400
          focus:border-black focus:ring-4 focus:ring-zinc-100 
        "
      />
    </div>
  );
}