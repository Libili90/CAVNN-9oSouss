const en = {
  header: {
    myRecipes: "My Recipes",
    home: "Home",
  },
  home: {
    description: "Saw a delicious recipe on Instagram or TikTok? Paste the video link below, and let AI whip up the ingredients and instructions for you!",
    inputPlaceholder: "https://www.instagram.com/reel/...",
    getRecipeButton: "Get Recipe",
    brewingButton: "Brewing...",
  },
  recipe: {
    saveButton: "Save Recipe",
    saveTooltip: "Save this recipe",
    saveFormTitle: "Save this Recipe",
    saveFormPlaceholder: "Enter a name for your recipe",
    saveFormButton: "Save",
    cancelButton: "Cancel",
    copyTooltip: "Copy to clipboard",
    copied: "Copied!",
    ingredients: "Ingredients",
    instructions: "Instructions",
  },
  saved: {
    title: "My Saved Recipes",
    emptyState: {
      title: "You haven't saved any recipes yet.",
      subtitle: "Go back home to generate and save a new recipe!",
    },
    viewButton: "View Recipe",
    deleteTooltip: "Delete recipe",
  },
  loading: {
    title: "AI Chef is thinking...",
    subtitle: "Extracting recipe details from the video.",
  },
  error: {
    oops: "Oops!",
    invalidUrl: "Please enter a valid video URL.",
    fetchRecipe: "Sorry, I couldn't get the recipe. The video might not be a food recipe, or there was an issue with the AI. Please try another URL.",
  },
  notification: {
    recipeSaved: "Recipe saved successfully!",
    recipeDeleted: "Recipe deleted.",
  },
  footer: {
    poweredBy: "Powered by Generative AI",
  },
};

const fr: typeof en = {
  header: {
    myRecipes: "Mes Recettes",
    home: "Accueil",
  },
  home: {
    description: "Vous avez vu une recette délicieuse sur Instagram ou TikTok ? Collez le lien de la vidéo ci-dessous et laissez l'IA vous préparer les ingrédients et les instructions !",
    inputPlaceholder: "https://www.instagram.com/reel/...",
    getRecipeButton: "Obtenir la recette",
    brewingButton: "Préparation...",
  },
  recipe: {
    saveButton: "Enregistrer",
    saveTooltip: "Enregistrer cette recette",
    saveFormTitle: "Enregistrer cette recette",
    saveFormPlaceholder: "Entrez un nom pour votre recette",
    saveFormButton: "Sauvegarder",
    cancelButton: "Annuler",
    copyTooltip: "Copier dans le presse-papiers",
    copied: "Copié !",
    ingredients: "Ingrédients",
    instructions: "Instructions",
  },
  saved: {
    title: "Mes recettes enregistrées",
    emptyState: {
      title: "Vous n'avez pas encore enregistré de recettes.",
      subtitle: "Retournez à l'accueil pour générer et enregistrer une nouvelle recette !",
    },
    viewButton: "Voir la recette",
    deleteTooltip: "Supprimer la recette",
  },
  loading: {
    title: "Le chef IA réfléchit...",
    subtitle: "Extraction des détails de la recette de la vidéo.",
  },
  error: {
    oops: "Oups !",
    invalidUrl: "Veuillez entrer une URL de vidéo valide.",
    fetchRecipe: "Désolé, je n'ai pas pu obtenir la recette. La vidéo n'est peut-être pas une recette de cuisine, ou il y a eu un problème avec l'IA. Veuillez essayer une autre URL.",
  },
  notification: {
    recipeSaved: "Recette enregistrée avec succès !",
    recipeDeleted: "Recette supprimée.",
  },
  footer: {
    poweredBy: "Propulsé par l'IA Générative",
  },
};

const ar: typeof en = {
  header: {
    myRecipes: "وصفاتي",
    home: "الرئيسية",
  },
  home: {
    description: "هل شاهدت وصفة لذيذة على إنستغرام أو تيك توك؟ الصق رابط الفيديو أدناه، ودع الذكاء الاصطناعي يحضر لك المكونات والتعليمات!",
    inputPlaceholder: "https://www.instagram.com/reel/...",
    getRecipeButton: "احصل على الوصفة",
    brewingButton: "جاري التحضير...",
  },
  recipe: {
    saveButton: "حفظ الوصفة",
    saveTooltip: "حفظ هذه الوصفة",
    saveFormTitle: "حفظ هذه الوصفة",
    saveFormPlaceholder: "أدخل اسمًا لوصفتك",
    saveFormButton: "حفظ",
    cancelButton: "إلغاء",
    copyTooltip: "نسخ إلى الحافظة",
    copied: "تم النسخ!",
    ingredients: "المكونات",
    instructions: "التعليمات",
  },
  saved: {
    title: "وصفاتي المحفوظة",
    emptyState: {
      title: "لم تقم بحفظ أي وصفات بعد.",
      subtitle: "عد إلى الصفحة الرئيسية لإنشاء وحفظ وصفة جديدة!",
    },
    viewButton: "عرض الوصفة",
    deleteTooltip: "حذف الوصفة",
  },
  loading: {
    title: "الشيف الذكي يفكر...",
    subtitle: "جاري استخراج تفاصيل الوصفة من الفيديو.",
  },
  error: {
    oops: "عفوًا!",
    invalidUrl: "الرجاء إدخال رابط فيديو صالح.",
    fetchRecipe: "عذراً، لم أتمكن من الحصول على الوصفة. قد لا يكون الفيديو وصفة طعام، أو حدثت مشكلة مع الذكاء الاصطناعي. يرجى تجربة رابط آخر.",
  },
  notification: {
    recipeSaved: "تم حفظ الوصفة بنجاح!",
    recipeDeleted: "تم حذف الوصفة.",
  },
  footer: {
    poweredBy: "مدعوم بالذكاء الاصطناعي التوليدي",
  },
};

const ma: typeof en = {
  header: {
    myRecipes: "الوصفات ديالي",
    home: "الصفحة الرئيسية",
  },
  home: {
    description: "شفتي شي وصفة واعرة فأنستغرام ولا تيك توك؟ حط الليان ديال الفيديو لتحت، وخلي الذكاء الاصطناعي يوجد ليك المقادير والطريقة!",
    inputPlaceholder: "https://www.instagram.com/reel/...",
    getRecipeButton: "جيب الوصفة",
    brewingButton: "كيتصاوب...",
  },
  recipe: {
    saveButton: "سجل الوصفة",
    saveTooltip: "سجل هاد الوصفة",
    saveFormTitle: "سجل هاد الوصفة",
    saveFormPlaceholder: "دخل سمية للوصفة ديالك",
    saveFormButton: "سجل",
    cancelButton: "إلغاء",
    copyTooltip: "كوبي",
    copied: "تكوبات!",
    ingredients: "المقادير",
    instructions: "الطريقة",
  },
  saved: {
    title: "الوصفات اللي سجلت",
    emptyState: {
      title: "مازال ما سجلتي حتى وصفة.",
      subtitle: "رجع للصفحة الرئيسية باش تصاوب وتسجل وصفة جديدة!",
    },
    viewButton: "شوف الوصفة",
    deleteTooltip: "مسح الوصفة",
  },
  loading: {
    title: "الشاف AI كيفكر...",
    subtitle: "كيجبد تفاصيل الوصفة من الفيديو.",
  },
  error: {
    oops: "أوبس!",
    invalidUrl: "عافاك دخل ليان ديال الفيديو صحيح.",
    fetchRecipe: "سمحلينا، مقدرناش نجيبو الوصفة. الفيديو يقدر ميكونش ديال الطياب، ولا وقع شي مشكل فالذكاء الاصطناعي. عافاك جرب ليان آخر.",
  },
  notification: {
    recipeSaved: "تسجلات الوصفة بنجاح!",
    recipeDeleted: "تمسحات الوصفة.",
  },
  footer: {
    poweredBy: "خدّام بالذكاء الاصطناعي التوليدي",
  },
};


export const translations = { en, fr, ar, ma };

type NestedKeys<T> = T extends object ? { [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${NestedKeys<T[K]>}`}` }[keyof T] : never;
export type TranslationKey = NestedKeys<typeof en>;
