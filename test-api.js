// Simple test for Gemini API
import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = "AIzaSyBgi33jqTGyrKRK4BiNxJU_i-TRcusbsAg";

async function testAPI() {
    try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = "Generate a simple flowchart for making tea using Mermaid.js syntax";
        
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        
        console.log('API Response:', text);
    } catch (error) {
        console.error('API Test Error:', error);
    }
}

testAPI();