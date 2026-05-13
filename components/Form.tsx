'use client';

import { useState } from 'react';
import { SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import TextField from '@/components/ui/TextField';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import TextAreaField from '@/components/ui/TextAreaField';
import { sendDataToTelegram } from '@/lib/telegram';
import { gooeyToast } from '@/components/ui/goey-toaster';

type Child = {
  name: string;
  age: string;
};

type Inputs = {
  name: string;
  events: string[];
  drinks: string[];
  allergies?: string;
  children: Child[];
};

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      events: [],
      drinks: [],
      children: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'children',
  });

  const name = watch('name');
  const events = watch('events');

  const addChild = () => {
    append({ name: '', age: '' });
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    
    try {
      const result = await sendDataToTelegram(data);
      
      if (result.ok) {
        gooeyToast.success('Анкета отправлена!', {
          description: 'Спасибо! Мы получили Ваши данные.',
          action: {
            label: 'Отлично',
            onClick: () => {},
            successLabel: '✓',
          },
          duration: 4000,
        });
        
        reset();
      } else {
        gooeyToast.error('Ошибка при отправке', {
          description: 'Пожалуйста, попробуйте еще раз.',
          action: {
            label: 'Понятно',
            onClick: () => {},
          },
        });
      }
    } catch (error) {
      console.error('Ошибка:', error);
      gooeyToast.error('Не удалось отправить', {
        description: 'Проверьте подключение к интернету.',
        action: {
          label: 'Повторить',
          onClick: () => {
            handleSubmit(onSubmit)();
          },
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6"
    >
      <div className="flex gap-3 lg:gap-4 bg-beige rounded-xl py-3 lg:py-4 px-4 mb-[10px] lg:mb-[20px]">
        <div className="lg:text-[24px]">☝️</div>
        <span className="text-left text-[12px] lg:text-[17px] leading-[1.4]">
          Информация из этой формы отправляется в&nbsp;Телеграм-бот. 
          Пожалуйста, <b>включите VPN </b> 
          перед отправкой данных, либо пришлите указанную информацию 
          нам в&nbsp;личные сообщения.
        </span>
      </div>

      <div className="flex flex-col gap-6 lg:gap-8">
        <TextField
          label="Как Вас зовут?"
          placeholder="Ваше ФИО"
          registration={register('name', { required: true })}
          error={errors.name}
        />

        <CheckboxGroup
          title="На каких частях праздника вы планируете присутствовать?"
          name="events"
          options={['Регистрация', 'Теплоход']}
          register={register}
          errors={errors}
          required
        />

        <CheckboxGroup
          title="Какие напитки Вы предпочитаете?"
          name="drinks"
          options={[
            'Красное вино',
            'Белое вино',
            'Игристое',
            'Настойка',
            'Виски',
            'Коньяк',
            'Водка',
            'Безалкогольные напитки',
          ]}
          register={register}
          errors={errors}
        />

        <TextAreaField
          label="Есть ли у Вас пищевые аллергии, о которым нам стоит знать?"
          name="allergies"
          register={register}
          errors={errors}
          placeholder="Например: орехи, морепродукты..."
        />

        {/* Блок с детьми */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {fields.map((field, index) => (
            <div key={field.id} className="flex flex-col gap-6 lg:gap-8">
              {/* <div className="flex-1"> */}
                <TextField
                  label="Имя ребенка"
                  placeholder="Введите имя ребенка"
                  registration={register(`children.${index}.name`)}
                  error={errors.children?.[index]?.name}
                  required={false}
                />
                <TextField
                  label="Возраст ребенка"
                  placeholder="Укажите возраст"
                  registration={register(`children.${index}.age`)}
                  error={errors.children?.[index]?.age}
                  required={false}
                />
              {/* </div> */}
              {/* <button
                type="button"
                onClick={() => remove(index)}
                className="flex items-center justify-center cursor-pointer  bg-zinc-100 rounded-[50%] h-[36px] w-[36px] mb-[6.5px]"
                aria-label="Удалить ребенка"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#000000" viewBox="0 0 256 256"><path d="M216,48H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM192,208H64V64H192ZM80,24a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H88A8,8,0,0,1,80,24Z"></path></svg>
              </button> */}
            </div>
          ))}
          <div className="w-full lg:flex lg:justify-center">
            <button
              type="button"
              onClick={addChild}
              className="w-full rounded-[50px] cursor-pointer bg-zinc-100 px-5 py-3 lg:py-3
              transition-all duration-200 text-[13px] lg:text-[16px] hover:scale-105 
              "
            >
              + Добавить ребенка
            </button>
          </div>
          
        </div>
      </div>
      
      <div className="w-full lg:flex lg:justify-center">
        <button
          type="submit"
          disabled={isSubmitting || !name || !events.length}
          className="w-full  mt-[10px] rounded-[50px] cursor-pointer bg-dark-gray-sec px-5 py-3 lg:py-3.5 
          text-white transition-all duration-200
          hover:scale-105 
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Отправка...' : 'Отправить'}
        </button>
      </div>
      
    </form>
  );
}