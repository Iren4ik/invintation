'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextField from '@/components/ui/TextField';
import CheckboxGroup from '@/components/ui/CheckboxGroup';
import TextAreaField from '@/components/ui/TextAreaField';
import { sendDataToTelegram } from '@/lib/telegram';

type Inputs = {
  name: string;
  events: string[];
  drinks: string[];
};

export default function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Отправляем данные в Telegram
      const result = await sendDataToTelegram(data);
      
      if (result.ok) {
        setSubmitStatus('success');
        reset(); // Очищаем форму после успешной отправки
        // Через 3 секунды убираем сообщение об успехе
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full max-w-md flex-col gap-6"
    >
       {/* Статус отправки */}
      {submitStatus === 'success' && (
        <div className="rounded-xl bg-green-50 p-4 text-green-800">
          ✅ Анкета успешно отправлена!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="rounded-xl bg-red-50 p-4 text-red-800">
          ❌ Ошибка при отправке. Пожалуйста, попробуйте еще раз.
        </div>
      )}

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
        required
        placeholder="Например: орехи, морепродукты..."
      />

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