import React from 'react';
import { ChefHatIcon } from './icons/ChefHatIcon';
import { useI18n } from '../contexts/I18nContext';

export const LoadingSpinner: React.FC = () => {
  const { t } = useI18n();
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <div className="relative">
        <ChefHatIcon className="h-16 w-16 text-orange-400 animate-bounce" />
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
        {t('loading.title')}
      </p>
      <p className="text-gray-500 dark:text-gray-400">{t('loading.subtitle')}</p>
    </div>
  );
};