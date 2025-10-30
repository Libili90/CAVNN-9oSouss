import React, { useState } from 'react';
import type { Recipe } from '../types';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { BookmarkIcon } from './icons/BookmarkIcon';
import { useI18n } from '../contexts/I18nContext';

interface RecipeDisplayProps {
  recipe: Recipe;
  onSave: (recipe: Recipe, customName: string) => void;
}

const CopyButton: React.FC<{ textToCopy: string }> = ({ textToCopy }) => {
    const [copied, setCopied] = React.useState(false);
    const { t } = useI18n();

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <button
            onClick={handleCopy}
            className="absolute top-2 right-2 rtl:right-auto rtl:left-2 p-2 rounded-full bg-gray-100 hover:bg-orange-100 text-gray-500 hover:text-orange-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-orange-400"
            title={t('recipe.copyTooltip')}
        >
            <ClipboardIcon className="h-5 w-5" />
            {copied && <span className="absolute -top-8 right-0 bg-gray-700 text-white text-xs rounded px-2 py-1 dark:bg-gray-900">{t('recipe.copied')}</span>}
        </button>
    );
};


export const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe, onSave }) => {
  const { recipeName, description, ingredients, instructions } = recipe;
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [customName, setCustomName] = useState(recipeName);
  const { t } = useI18n();

  const ingredientsText = ingredients.join('\n');
  const instructionsText = instructions.map((step, index) => `${index + 1}. ${step}`).join('\n');
  
  const handleSaveClick = () => {
    onSave(recipe, customName);
    setShowSaveForm(false);
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-2xl shadow-lg animate-fade-in">
      <div className="relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">{recipeName}</h2>
        
        {!showSaveForm && (
            <button
              onClick={() => {
                setCustomName(recipeName);
                setShowSaveForm(true);
              }}
              className="absolute top-0 -right-2 rtl:right-auto rtl:-left-2 flex items-center gap-2 px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 rounded-full hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all dark:bg-orange-900/50 dark:text-orange-300 dark:hover:bg-orange-900/80 dark:focus:ring-orange-600"
              title={t('recipe.saveTooltip')}
            >
              <BookmarkIcon className="h-4 w-4" />
              {t('recipe.saveButton')}
            </button>
        )}
      </div>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 italic">{description}</p>
      
      {showSaveForm && (
        <div className="bg-orange-50 dark:bg-gray-700/50 border border-orange-200 dark:border-orange-800/50 rounded-lg p-4 mb-8 animate-fade-in">
          <h4 className="font-semibold text-lg text-gray-700 dark:text-gray-200 mb-2">{t('recipe.saveFormTitle')}</h4>
          <div className="flex flex-col sm:flex-row gap-2">
            <input 
              type="text"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder={t('recipe.saveFormPlaceholder')}
              className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:focus:ring-orange-500"
            />
            <div className="flex gap-2">
              <button onClick={handleSaveClick} className="w-full sm:w-auto px-4 py-2 font-semibold text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400">
                {t('recipe.saveFormButton')}
              </button>
              <button onClick={() => setShowSaveForm(false)} className="w-full sm:w-auto px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500">
                {t('recipe.cancelButton')}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-orange-400 border-b-2 border-orange-200 dark:border-orange-800 pb-2">{t('recipe.ingredients')}</h3>
          <div className="relative bg-orange-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <CopyButton textToCopy={ingredientsText} />
            <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="md:col-span-3">
          <h3 className="text-2xl font-semibold mb-4 text-orange-600 dark:text-orange-400 border-b-2 border-orange-200 dark:border-orange-800 pb-2">{t('recipe.instructions')}</h3>
          <div className="relative bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <CopyButton textToCopy={instructionsText} />
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              {instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 bg-orange-500 text-white rounded-full h-6 w-6 text-sm font-bold flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3 mt-1">{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.innerHTML = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
  }
`;
document.head.appendChild(style);