import { GoogleGenerativeAI } from "@google/generative-ai";

const getAI = () => new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");

export const startInterviewSession = (role: string = "Senior Software Engineer", jd: string = "", resume: string = "") => {
  const genAI = getAI();
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-pro",
    systemInstruction: `You are an executive-level technical interviewer for a top-tier Fortune 500 tech company. 
    You are interviewing a senior candidate for a ${role} position.
    
    CONTEXT:
    Job Description: ${jd || "Senior Staff Engineering Role"}
    Candidate Resume: ${resume || "Senior Professional Profile"}

    Your goals:
    1. Ask high-level architectural and leadership questions. Focus on System Design, Scalability, and Team Coordination.
    2. Use the STAR method for behavioral evaluation.
    3. AFTER EACH ANSWER: Provide specific, executive-level feedback. Highlight technical depth, communication clarity, and strategic thinking.
    4. After feedback, transition smoothly to the next question.
    5. Keep each response concise but highly impactful.
    6. Start by introducing yourself and asking the candidate to walk through their most complex architectural challenge.
    
    FINAL REPORT TRIGGER: If the user says "GENERATE_FINAL_REPORT", provide:
    - Executive Summary: [Hire/No Hire Verdict]
    - Technical Depth Score: [Score]/100
    - Strategic Leadership Score: [Score]/100
    - Top 3 Critical Strengths
    - 2 Strategic Growth Areas
    
    Tone: Professional, rigorous, and insightful.`,
  });

  return model.startChat({
    history: [],
    generationConfig: {
      maxOutputTokens: 2000,
    },
  });
};

export const sendMessageWithRetry = async (chat: any, message: string, maxRetries = 3) => {
  let lastError: any;
  for (let i = 0; i < maxRetries; i++) {
    try {
      const result = await chat.sendMessage(message);
      const response = await result.response;
      return { text: response.text() };
    } catch (error: any) {
      lastError = error;
      const errorMsg = error?.message || "";
      
      if (errorMsg.includes("429") || errorMsg.includes("RESOURCE_EXHAUSTED") || errorMsg.includes("quota")) {
        const waitTime = Math.pow(2, i) * 1000 + Math.random() * 1000;
        console.warn(`Quota exceeded. Retrying in ${Math.round(waitTime)}ms... (Attempt ${i + 1}/${maxRetries})`);
        await new Promise(resolve => setTimeout(resolve, waitTime));
        continue;
      }
      
      throw error;
    }
  }
  throw lastError;
};
