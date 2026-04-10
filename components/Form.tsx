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
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    defaultValues: {
      events: [],
      drinks: [],
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    
    try {
      const result = await sendDataToTelegram(data);
      
      if (result.ok) {
        gooeyToast.success('Анкета отправлена!', {
          description: 'Спасибо! Мы получили ваши данные.',
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
      className="flex w-full max-w-md flex-col gap-6"
    >
      <div>
      <TextField
          label="Имя"
          placeholder="Ваше имя"
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
          title="Какие напитки вы предпочитаете?"
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
          label="Есть ли у вас пищевые аллергии, о которых нам стоит знать?"
          name="allergies"
          register={register}
          errors={errors}
          placeholder="Например: орехи, морепродукты..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-zinc-900 px-5 py-3 text-white transition-all duration-200 hover:bg-zinc-800 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-zinc-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Отправка...' : 'Отправить'}
      </button>
    </form>
  );
}