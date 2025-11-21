import { useState } from "react";
import { SDHC_FAQ } from "../data/sdhcFaq";

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export function MessageInput({ onSendMessage, disabled }: MessageInputProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput("");
    }
  };

  const quickQuestions = [
    SDHC_FAQ[0].question,
    SDHC_FAQ[3].question,
    SDHC_FAQ[5].question,
  ];

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question here... (e.g., 'How do I apply?', 'What programs do you offer?')"
          disabled={disabled}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              if (input.trim() && !disabled) {
                onSendMessage(input.trim());
                setInput("");
              }
            }
          }}
        />
        <button
          type="submit"
          disabled={disabled || !input.trim()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium shadow-sm"
        >
          Send
        </button>
      </form>
      
      <div className="mt-3 flex flex-wrap gap-2">
        <span className="text-xs text-gray-500">Try asking:</span>
        {quickQuestions.map((question, idx) => (
          <button
            key={idx}
            onClick={() => {
              setInput(question);
              onSendMessage(question);
              setInput("");
            }}
            disabled={disabled}
            className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors disabled:bg-gray-50 disabled:text-gray-400"
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}

