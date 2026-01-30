import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Odher Assistant, a friendly and knowledgeable AI expert on the Odher ($ODR) cryptocurrency.
Your goal is to help users understand Odher's features, how to get started, and its mission.

Key facts about Odher:
- Name: Odher ($ODR)
- Purpose: A decentralized digital currency for the modern age, focusing on low fees and high security.
- Ecosystem: Includes a secure wallet, a decentralized exchange (ODEX), and community-governed systems.
- Security: Uses advanced cryptographic proofs.
- Philosophy: "Financial freedom for everyone, everywhere."

Keep your answers professional, concise, and helpful. If asked about price predictions, remain neutral and state that you are an AI assistant and not a financial advisor.
`;

export async function askSmartGuide(prompt: string): Promise<string> {
  try {
    // Initializing GoogleGenAI using process.env.API_KEY directly as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    // Accessing response.text as a property, not a method
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Odher network is busy, please try again later.";
  }
}