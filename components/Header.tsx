import React from 'react';
import { ChefHatIcon } from './icons/ChefHatIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useI18n } from '../contexts/I18nContext';

interface HeaderProps {
  currentView: 'home' | 'saved';
  onToggleView: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onToggleView }) => {
  const { t } = useI18n();
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <ChefHatIcon className="h-8 w-8 text-orange-500 mr-3 rtl:mr-0 rtl:ml-3" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
            CAVNN 9osouss
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSelector />
          <ThemeToggle />
          <button
            onClick={onToggleView}
            className="flex items-center gap-2 px-4 py-2 text-md font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-300 dark:focus:ring-orange-700 transition-all duration-300 transform hover:scale-105"
          >
            <BookOpenIcon className="h-5 w-5" />
            <span className="hidden sm:inline">
              {currentView === 'home' ? t('header.myRecipes') : t('header.home')}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};