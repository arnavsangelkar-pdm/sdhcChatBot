import type { ChatMessage } from "../types/chat";

interface MessageListProps {
  messages: ChatMessage[];
  onSuggestedQuestionClick?: (question: string) => void;
  nextSuggestedQuestion?: string;
}

export function MessageList({ messages, onSuggestedQuestionClick, nextSuggestedQuestion }: MessageListProps) {
  const getSenderLabel = (message: ChatMessage): string | null => {
    if (message.sender === "bot" && message.flowId === "eviction-notice-help") {
      return "Housing Support";
    }
    return null;
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message) => {
        const senderLabel = getSenderLabel(message);
        return (
          <div
            key={message.id}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className="flex flex-col max-w-[80%]">
              {senderLabel && (
                <span className="text-xs text-gray-500 mb-1 px-1">{senderLabel}</span>
              )}
              <div
                className={`rounded-lg px-4 py-3 shadow-sm ${
                  message.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.text}</p>
            
                {message.relatedLinks && message.relatedLinks.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-gray-300 flex flex-wrap gap-2">
                    {message.relatedLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-xs px-2 py-1 rounded ${
                          message.sender === "user"
                            ? "bg-blue-500 text-white hover:bg-blue-400"
                            : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                        } transition-colors`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      
      {nextSuggestedQuestion && onSuggestedQuestionClick && (
        <div className="flex justify-start mt-3 mb-2">
          <button
            onClick={() => onSuggestedQuestionClick(nextSuggestedQuestion)}
            className="text-xs px-4 py-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors border border-blue-200 font-medium shadow-sm"
          >
            💡 Suggested: {nextSuggestedQuestion}
          </button>
        </div>
      )}
    </div>
  );
}

