import type { QAItem } from "../data/sdhcFaq";
import { SDHC_FAQ } from "../data/sdhcFaq";

// Common typos and variations
const typoMap: Record<string, string[]> = {
  "apply": ["aplly", "appy", "aplie", "applyy"],
  "application": ["aplication", "applicaton", "apllication"],
  "housing": ["housng", "housin", "houssing", "houing"],
  "assistance": ["asistance", "assistnce", "assitence", "assitance"],
  "contact": ["contat", "contac", "contatc", "conatct"],
  "affordable": ["affordble", "affordabel", "afforadable"],
  "rental": ["rentl", "rentel", "rentle"],
  "tenant": ["tenat", "tenent", "tennant"],
  "homeless": ["homles", "homless", "homeles"],
  "income": ["incom", "incone", "incme"],
  "requirements": ["requirments", "reqirements", "requirments"],
  "programs": ["programms", "progams", "progrms"],
  "landlord": ["landord", "landloard", "landlordd"],
  "homebuyer": ["homebuyr", "homebuyer", "homebyer"],
};

// Normalize text: fix common typos, remove extra spaces, handle abbreviations
function normalizeText(text: string): string {
  let normalized = text.toLowerCase().trim();
  
  // Fix common typos
  for (const [correct, typos] of Object.entries(typoMap)) {
    for (const typo of typos) {
      normalized = normalized.replace(new RegExp(`\\b${typo}\\b`, 'gi'), correct);
    }
  }
  
  // Handle common abbreviations
  const abbreviations: Record<string, string> = {
    "app": "application",
    "apps": "applications",
    "apt": "apartment",
    "apts": "apartments",
    "info": "information",
    "req": "requirements",
    "reqs": "requirements",
    "prog": "program",
    "progs": "programs",
    "asst": "assistance",
    "hous": "housing",
    "rent": "rental",
    "cont": "contact",
  };
  
  for (const [abbr, full] of Object.entries(abbreviations)) {
    normalized = normalized.replace(new RegExp(`\\b${abbr}\\b`, 'gi'), full);
  }
  
  // Remove extra spaces and punctuation
  normalized = normalized.replace(/[?.,!;:]/g, '');
  normalized = normalized.replace(/\s+/g, ' ').trim();
  
  return normalized;
}

// Simple fuzzy matching - check if words are similar (handles 1-2 character differences)
function isSimilar(word1: string, word2: string): boolean {
  if (word1.length < 4 || word2.length < 4) return word1 === word2;
  
  // Exact match
  if (word1 === word2) return true;
  
  // Check if one contains the other (handles missing characters)
  if (word1.includes(word2) || word2.includes(word1)) return true;
  
  // Simple Levenshtein-like check for typos (1-2 char difference)
  const len1 = word1.length;
  const len2 = word2.length;
  if (Math.abs(len1 - len2) > 2) return false;
  
  let differences = 0;
  const minLen = Math.min(len1, len2);
  for (let i = 0; i < minLen; i++) {
    if (word1[i] !== word2[i]) differences++;
    if (differences > 2) return false;
  }
  
  return differences <= 2;
}

export function findBestFAQMatch(userText: string): QAItem | null {
  const userLower = userText.toLowerCase().trim();
  const normalizedUser = normalizeText(userText);
  
  // Remove common question words and punctuation
  const cleanedUser = normalizedUser
    .replace(/\b(what|where|when|who|how|why|can|do|does|is|are|will|would|could|should|tell|me|about|i|need|want|help|with|the|a|an|pls|please|thx|thanks|u|ur|you|your)\b/g, '')
    .trim();
  
  let bestMatch: QAItem | null = null;
  let bestScore = 0;
  
  // Keywords that map to specific FAQ items (with variations)
  const keywordMap: Record<string, string[]> = {
    "faq-1": ["contact", "phone", "email", "reach", "call", "address", "office", "located", "where", "location"],
    "faq-2": ["what is", "whats", "who is", "whos", "sdhc", "san diego housing commission", "organization", "agency"],
    "faq-3": ["tenant", "rights", "protection", "eviction", "fair housing", "renter", "renters"],
    "faq-4": ["affordable", "housing", "rental", "apartment", "unit", "property", "listings", "available", "find", "search", "looking"],
    "faq-5": ["homebuyer", "homebuying", "first time", "down payment", "mortgage", "buy", "purchase", "home", "house"],
    "faq-6": ["homeless", "homelessness", "shelter", "rapid rehousing", "housing crisis", "no home", "no house"],
    "faq-7": ["programs", "services", "offer", "provide", "what do you", "what does", "options"],
    "faq-8": ["apply", "application", "how to apply", "sign up", "register", "enroll", "get started"],
    "faq-9": ["income", "requirements", "eligibility", "qualify", "qualification", "earn", "salary", "make", "how much"],
    "faq-10": ["where", "location", "address", "office", "located", "find you"],
  };
  
  for (const item of SDHC_FAQ) {
    let score = 0;
    
    // Check keyword map first (with fuzzy matching)
    const keywords = keywordMap[item.id] || [];
    for (const keyword of keywords) {
      // Exact match
      if (userLower.includes(keyword) || normalizedUser.includes(keyword)) {
        score += 3;
      }
      // Check if keyword words appear (handles word order)
      else {
        const keywordWords = keyword.split(/\s+/);
        let matchedWords = 0;
        for (const kw of keywordWords) {
          if (kw.length > 3 && (userLower.includes(kw) || normalizedUser.includes(kw))) {
            matchedWords++;
          }
        }
        if (matchedWords === keywordWords.length) {
          score += 2.5;
        } else if (matchedWords > 0) {
          score += 1;
        }
      }
    }
    
    // Check question match with fuzzy matching
    const questionLower = item.question.toLowerCase();
    const questionWords = questionLower
      .replace(/[?.,!]/g, '')
      .split(/\s+/)
      .filter(w => w.length > 2);
    
    // Count matching significant words (with fuzzy matching)
    let matchingWords = 0;
    const userWords = cleanedUser.split(/\s+/).filter(w => w.length > 2);
    
    for (const qWord of questionWords) {
      if (qWord.length > 3) {
        // Check exact match
        if (userLower.includes(qWord) || cleanedUser.includes(qWord)) {
          score += 2;
          matchingWords++;
        } else {
          // Fuzzy match
          for (const uWord of userWords) {
            if (isSimilar(qWord, uWord)) {
              score += 1.5;
              matchingWords++;
              break;
            }
          }
        }
      }
    }
    
    // Bonus for multiple word matches
    if (matchingWords >= 2) {
      score += 1;
    }
    if (matchingWords >= 3) {
      score += 0.5;
    }
    
    // Check category match
    const categoryLower = item.category.toLowerCase();
    if (userLower.includes(categoryLower) || normalizedUser.includes(categoryLower)) {
      score += 1.5;
    }
    
    // Check answer keywords with fuzzy matching
    const answerLower = item.answer.toLowerCase();
    const answerKeywords = ["rental assistance", "voucher", "affordable", "housing", "homeless", "landlord", "tenant", "homebuyer", "program", "application"];
    for (const keyword of answerKeywords) {
      if (answerLower.includes(keyword)) {
        const keywordWords = keyword.split(/\s+/);
        let found = false;
        for (const kw of keywordWords) {
          if (userLower.includes(kw) || normalizedUser.includes(kw)) {
            score += 1;
            found = true;
            break;
          }
        }
        // Also check fuzzy match
        if (!found && keywordWords.length === 1) {
          const kw = keywordWords[0];
          for (const uWord of userWords) {
            if (isSimilar(kw, uWord)) {
              score += 0.5;
              break;
            }
          }
        }
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }
  
  // Lower threshold to be more lenient - return match if score is 1.0 or higher
  return bestScore >= 1.0 ? bestMatch : null;
}

export function getFallbackMessage(): string {
  return "I'm not sure about that specific question. I can help with topics like rent assistance, affordable rentals, tenant protections, homelessness services, landlords, and more.";
}

