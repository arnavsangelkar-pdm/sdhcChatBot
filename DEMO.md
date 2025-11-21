# SDHC Chat Demo - Quick Start Guide

## Running the Demo

### Option 1: Using the Demo Script (Recommended)
```bash
./demo.sh
```

### Option 2: Manual Start
```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`

## Demo Flow

### Multi-Turn Conversations

1. **Rent Assistance Basics**
   - Click "Start this conversation" in the sidebar
   - Bot asks: "How can SDHC help me with my rent?"
   - Try follow-up: "Am I eligible for rental assistance?"
   - Then ask: "How do I apply?"

2. **Affordable Rentals**
   - Start the conversation
   - Ask: "Where can I find affordable rental housing?"
   - Follow up: "Do you have a waitlist?"
   - Then: "Can I see current listings online?"

3. **Landlord Resources**
   - Start the conversation
   - Ask: "I'm a landlord. How can I work with SDHC?"
   - Follow up: "What are the benefits of participating?"
   - Then: "Where do I sign up?"

### Single-Turn FAQ Questions

- Click any of the "Quick Single Questions" buttons in the sidebar
- Or type questions naturally - even with typos or informal language!
- Examples:
  - "How do I contact SDHC?"
  - "What is SDHC?"
  - "How do I find affordable housing?"
  - "how do i aplay?" (typo - still works!)
  - "what progams u offer?" (informal - still works!)
  - "i need help w housing" (abbreviation - still works!)
  - "where r u located?" (text speak - still works!)

## Features to Demonstrate

✅ **Multi-turn context**: The bot remembers the conversation topic  
✅ **Suggested follow-ups**: Click suggested questions to continue the flow  
✅ **Related links**: Each bot response includes relevant links  
✅ **FAQ mode**: Answers standalone questions using keyword matching  
✅ **Flow mode**: Contextual conversations following predefined scripts  
✅ **Typo tolerance**: Handles misspellings, abbreviations, and informal language  
✅ **Fuzzy matching**: Understands questions even with typos or word variations  

## Troubleshooting

If you see a white screen:
- Check the browser console for errors
- Make sure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules/.vite`

If Tailwind styles aren't loading:
- Restart the dev server
- Check that `postcss.config.cjs` exists

