'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@/components/ui/TextField';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import TextAreaField from '@/components/ui/TextAreaField';
import { sendDataToTelegram } from '@/lib/telegram';
import { gooeyToast } from '@/components/ui/goey-toaster';

type Inputs = {
  name: string;
  events: string[];
  drinks: string[];
  allergies?: string;
};

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      events: [],
      drinks: [],
    },
  });

  const name = watch('name');
  const events = watch('events');

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
      <div className="flex gap-2 bg-beige rounded-xl py-3 px-4 mb-[10px]">
        <div>
          ☝️
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"></path></svg> */}
        </div>
        <span className="text-left text-[11px] leading-[1.4]">
          Информация из этой формы отправляется в&nbsp;Телеграм-бот. 
          Пожалуйста, включите VPN перед отправкой данных, либо пришлите указанную информацию 
          нам в&nbsp;личные сообщения.
          </span>
      </div>

      <div className="flex flex-col gap-6">
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
            label="Если вы будете с детьми, укажите их имена и возраст"
            name="kids"
            register={register}
            errors={errors}
            placeholder="Например: Сашенька, 5 лет"
          />
          <TextAreaField
            label="Есть ли у Вас пищевые аллергии, о которых нам стоит знать?"
            name="allergies"
            register={register}
            errors={errors}
            placeholder="Например: орехи, морепродукты..."
          />
      </div>
      <button
        type="submit"
        disabled={isSubmitting || !name || !events.length}
        className="rounded-[12px] cursor-pointer bg-dark-gray-sec px-5 py-3 
        text-white transition-all duration-200
        hover:opacity-90 
        disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
}