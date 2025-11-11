import { GoogleGenAI } from "@google/genai";

/**
 * Calls the Gemini API to generate an image from a text prompt.
 * Implements a simple retry mechanism.
 * @param {string} prompt - The text prompt for image generation.
 * @param {number} maxRetries - Maximum number of retries.
 * @returns {Promise<string>} - A promise that resolves with the base64 image data URL.
 */
export const generateImage = async (prompt: string, maxRetries: number = 3): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
          numberOfImages: 1,
          outputMimeType: 'image/png',
          aspectRatio: '3:4', // Aspect ratio matches product cards
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0 && response.generatedImages[0].image?.imageBytes) {
        const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
        return `data:image/png;base64,${base64ImageBytes}`;
      } else {
        throw new Error("Invalid response structure from API. No image bytes found.");
      }
    } catch (error) {
      console.error(`Attempt ${attempt} failed for prompt "${prompt}":`, error);
      lastError = error as Error;
      if (attempt < maxRetries) {
        // Optional: wait before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * attempt));
      }
    }
  }
  
  throw new Error(`Image generation failed after ${maxRetries} retries. Last error: ${lastError?.message}`);
};
