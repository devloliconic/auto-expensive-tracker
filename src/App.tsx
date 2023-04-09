import React from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  vim: string;
}

export const App = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<FormValues>({ mode: 'onChange' });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex align-center justify-center p-10">
      <input
        className="outline-none px-3 py-1 text-gray-800 mr-2 border-2"
        {...register('vim', { maxLength: 16, minLength: 16 })}
      />

      <button className="px-3 py-1 bg-green-500 border-2" disabled={!isValid}>
        Войти
      </button>
      <button className="px-3 py-1 bg-green-500 border-2 " type="reset" onClick={() => reset()}>
        Сбросить
      </button>
    </form>
  );
};
