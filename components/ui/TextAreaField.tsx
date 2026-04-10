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
  rows = 4,
}: TextAreaFieldProps) {

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-zinc-800">
        {label}
      </label>

      <textarea
        {...register(name)}
        placeholder={placeholder}
        rows={rows}
        className="
          w-full resize-none rounded-xl border border-zinc-300
          px-4 py-3 text-sm text-zinc-900
          outline-none transition
          focus:border-zinc-900 focus:ring-4 focus:ring-zinc-200
        "
      />
    </div>
  );
}