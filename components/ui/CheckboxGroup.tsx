import { FieldErrors, UseFormRegister } from 'react-hook-form';

type CheckboxGroupProps = {
  title: string;
  name: 'events' | 'drinks';
  options: string[];
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  required?: boolean;
};

export default function CheckboxGroup({
  title,
  name,
  options,
  register,
  errors,
  required = false,
}: CheckboxGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-medium text-zinc-800">
        {title}
        {required && <span className="ml-1">*</span>}
      </p>

      <div className="flex flex-col gap-2 ">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition hover:bg-zinc-100"
          >
            <div className="relative flex items-center justify-center">
              <input
                type="checkbox"
                value={option}
                {...register(name, {
                  required: required ? 'Выберите хотя бы один вариант' : false,
                })}
                className="peer absolute h-5 w-5 cursor-pointer opacity-0"
              />
              <div className="flex h-5 w-5 items-center justify-center rounded-md 
                    border border-zinc-300 bg-white transition-all 
                    peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus:ring-2 peer-focus:ring-zinc-300 peer-focus:border-zinc-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="white"
                  viewBox="0 0 256 256"
                  className="transition-opacity peer-checked:opacity-100"  
                >
      <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
    </svg>
  </div>
</div>

            <span className="text-sm text-zinc-700">{option}</span>
          </label>
        ))}
      </div>

      {errors?.[name] && (
        <p className="text-sm text-red-500">Выберите хотя бы один вариант</p>
      )}
    </div>
  );
}