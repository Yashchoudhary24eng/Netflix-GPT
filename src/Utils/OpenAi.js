import { OpenAi_Key } from './constant';
import {GoogleGenAI} from '@google/genai';


const GEMINI_API_KEY = OpenAi_Key;

export const ai = new GoogleGenAI({apiKey: GEMINI_API_KEY});

