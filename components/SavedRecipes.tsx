import React from 'react';
import type { Recipe, SavedRecipe } from '../types';
import { TrashIcon } from './icons/TrashIcon';
import { useI18n } from '../contexts/I18nContext';

interface SavedRecipesProps {
  recipes: SavedRecipe[];
  onView: (recipe: Recipe) => void;
  onDelete: (id: string) => void;
}

export const SavedRecipes: React.FC<SavedRecipesProps> = ({ recipes, onView, onDelete }) => {
  const { t } = useI18n();

  return (
    <main className="container mx-auto px-4 py-8 md:py-12 animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">{t('saved.title')}</h2>
        
        {recipes.length === 0 ? (
          <div className="text-center bg-white dark:bg-gray-800 p-10 rounded-lg shadow-sm">
            <p className="text-xl text-gray-500 dark:text-gray-400">{t('saved.emptyState.title')}</p>
            <p className="text-gray-400 dark:text-gray-500 mt-2">{t('saved.emptyState.subtitle')}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {recipes.map(recipe => (
              <div key={recipe.id} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 hover:shadow-md dark:hover:bg-gray-700/50 transition-shadow duration-300">
                <div className="flex-grow text-center sm:text-left rtl:sm:text-right">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{recipe.customName}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 italic">{recipe.description}</p>
                </div>
                <div className="flex-shrink-0 flex items-center gap-2">
                  <button
                    onClick={() => onView(recipe)}
                    className="px-4 py-2 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
                  >
                    {t('saved.viewButton')}
                  </button>
                  <button
                    onClick={() => onDelete(recipe.id)}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
                    title={t('saved.deleteTooltip')}
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};