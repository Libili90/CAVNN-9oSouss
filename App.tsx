import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { RecipeInput } from './components/RecipeInput';
import { RecipeDisplay } from './components/RecipeDisplay';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SavedRecipes } from './components/SavedRecipes';
import { getRecipeFromUrl } from './services/geminiService';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useI18n } from './contexts/I18nContext';
import type { Recipe, SavedRecipe } from './types';

const App: React.FC = () => {
  const [url, setUrl] = useState<string>('');
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  const [savedRecipes, setSavedRecipes] = useLocalStorage<SavedRecipe[]>('savedRecipes', []);
  const [view, setView] = useState<'home' | 'saved'>('home');
  const { t, language } = useI18n();

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!url.trim()) {
      setError(t('error.invalidUrl'));
      return;
    }

    setIsLoading(true);
    setRecipe(null);
    setError(null);

    try {
      const result = await getRecipeFromUrl(url, language);
      setRecipe(result);
      setUrl('');
    } catch (err) {
      console.error(err);
      setError(t('error.fetchRecipe'));
    } finally {
      setIsLoading(false);
    }
  }, [url, language, t]);

  const handleSaveRecipe = (recipeToSave: Recipe, customName: string) => {
    const newSavedRecipe: SavedRecipe = {
      ...recipeToSave,
      id: Date.now().toString(),
      customName: customName.trim() || recipeToSave.recipeName,
    };
    setSavedRecipes(prev => [...prev, newSavedRecipe]);
    showNotification(t('notification.recipeSaved'));
  };

  const handleDeleteRecipe = (id: string) => {
    setSavedRecipes(prev => prev.filter(r => r.id !== id));
    showNotification(t('notification.recipeDeleted'));
  };

  const handleViewRecipe = (recipeToView: Recipe) => {
    setRecipe(recipeToView);
    setView('home');
    window.scrollTo(0, 0);
  };

  const handleToggleView = () => {
    setView(prev => (prev === 'home' ? 'saved' : 'home'));
    setRecipe(null);
    setError(null);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200">
      <Header currentView={view} onToggleView={handleToggleView} />
      
      {notification && (
        <div className="fixed top-20 right-5 bg-green-500 text-white px-6 py-2 rounded-full shadow-lg animate-fade-in z-50">
          {notification}
        </div>
      )}

      {view === 'home' ? (
        <main className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              {t('home.description')}
            </p>
            <RecipeInput 
              url={url} 
              setUrl={setUrl} 
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            {isLoading && <LoadingSpinner />}
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 dark:bg-red-900/20 dark:border-red-600 dark:text-red-300 px-4 py-3 rounded-lg relative text-center" role="alert">
                <strong className="font-bold">{t('error.oops')} </strong>
                <span className="block sm:inline">{error}</span>
              </div>
            )}
            {recipe && !isLoading && <RecipeDisplay recipe={recipe} onSave={handleSaveRecipe} />}
          </div>
        </main>
      ) : (
        <SavedRecipes recipes={savedRecipes} onView={handleViewRecipe} onDelete={handleDeleteRecipe} />
      )}
      
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        <p>{t('footer.poweredBy')}</p>
      </footer>
    </div>
  );
};

export default App;