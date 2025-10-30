import { GoogleGenAI, Type } from "@google/genai";
import type { Recipe } from '../types';

const languageMap: { [key: string]: string } = {
  en: 'English',
  fr: 'French',
  ar: 'Arabic',
  ma: 'Moroccan Darija',
};

const getRecipeFromUrl = async (url: string, language: string): Promise<Recipe> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const languageName = languageMap[language] || 'English';

  const prompt = `
    You are an expert chef who can analyze cooking videos and extract recipes.
    A user has provided the following URL from a social media platform like Instagram or TikTok: ${url}

    While you cannot access the URL directly, assume it's a popular and clear cooking video for a specific dish. 
    Based on what a typical viral food video from that platform would show, generate a plausible recipe in ${languageName}.

    Provide a catchy, descriptive name for the recipe, a brief, enticing description, the ingredients, and step-by-step instructions, ALL in ${languageName}.

    Return the response ONLY as a single, valid JSON object that adheres to the provided schema. Do not include any markdown formatting like \`\`\`json.
  `;
  
  const recipeSchema = {
    type: Type.OBJECT,
    properties: {
      recipeName: {
        type: Type.STRING,
        description: "A creative and descriptive name for the recipe."
      },
      description: {
        type: Type.STRING,
        description: "A brief, one or two-sentence summary of the dish."
      },
      ingredients: {
        type: Type.ARRAY,
        description: "A list of all ingredients required, including quantities.",
        items: {
          type: Type.STRING
        }
      },
      instructions: {
        type: Type.ARRAY,
        description: "A list of step-by-step instructions for preparing the dish.",
        items: {
          type: Type.STRING
        }
      }
    },
    required: ["recipeName", "description", "ingredients", "instructions"]
  };

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: recipeSchema,
        temperature: 0.5,
      },
    });

    const jsonText = response.text.trim();
    const recipeData: Recipe = JSON.parse(jsonText);
    return recipeData;

  } catch (error) {
    console.error("Error generating content from Gemini:", error);
    throw new Error("Failed to parse recipe from AI response.");
  }
};

export { getRecipeFromUrl };