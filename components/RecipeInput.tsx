import React from 'react';
import { useI18n } from '../contexts/I18nContext';

interface RecipeInputProps {
  url: string;
  setUrl: (url: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

export const RecipeInput: React.FC<RecipeInputProps> = ({ url, setUrl, handleSubmit, isLoading }) => {
  const { t } = useI18n();
  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row items-center gap-2">
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder={t('home.inputPlaceholder')}
        className="w-full px-5 py-3 text-lg text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-orange-200 transition duration-300 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-400 dark:focus:ring-orange-500/50"
        required
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 text-lg font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 transition-all duration-300 disabled:bg-orange-300 disabled:cursor-not-allowed transform hover:scale-105 dark:focus:ring-orange-700 dark:disabled:bg-orange-800"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {t('home.brewingButton')}
          </>
        ) : (
          t('home.getRecipeButton')
        )}
      </button>
    </form>
  );
};