#!/bin/bash

# SDHC Chat Demo - Startup Script

echo "🚀 Starting SDHC Chat Demo..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Check if .vite cache exists and optionally clear it
if [ -d "node_modules/.vite" ]; then
    echo "🧹 Clearing Vite cache..."
    rm -rf node_modules/.vite
    echo ""
fi

echo "✅ Starting development server..."
echo ""
echo "📝 Demo Instructions:"
echo "   1. The app will open at http://localhost:5173"
echo "   2. Click 'Start this conversation' buttons in the sidebar to begin multi-turn flows"
echo "   3. Try asking follow-up questions to see contextual responses"
echo "   4. Use quick question buttons for single-turn FAQ answers"
echo "   5. Type questions naturally - even with typos or informal language!"
echo ""
echo "💡 Try typing questions like:"
echo "   - 'how do i aplay?' (typo)"
echo "   - 'what progams u offer?' (informal)"
echo "   - 'i need help w housing' (abbreviation)"
echo "   - 'where r u located?' (text speak)"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

npm run dev

