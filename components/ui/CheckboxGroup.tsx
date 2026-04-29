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
    <div className="flex flex-col gap-3 lg:gap-4.5">
      <p className="text-[16px] font-semibold text-left leading-[1.2] lg:text-[20px]">
        {title}
        {required && <span className="ml-1">*</span>}
      </p>

      <div className="flex flex-col gap-0.5 lg:gap-2">
        {options.map((option) => (
          <label
            key={option}
            className="flex cursor-pointer items-center gap-3 lg:gap-4 rounded-[8px] lg:rounded-[12px] py-2 lg:p-2 transition
            lg:hover:bg-zinc-50"
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
              <div className="flex h-5 w-5 items-center justify-center rounded-[4px] 
                    border border-zinc-300 bg-white transition-all 
                    peer-checked:border-zinc-900 peer-checked:bg-zinc-900 peer-focus:ring-2 peer-focus:ring-zinc-100 peer-focus:border-zinc-900">
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
            <span className="text-[14px] lg:text-[18px]">{option}</span>
          </label>
        ))}
      </div>

      {errors?.[name] && (
        <p className="text-[14px] text-red-500">Выберите хотя бы один вариант</p>
      )}
    </div>
  );
}