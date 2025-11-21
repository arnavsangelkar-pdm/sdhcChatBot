import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import type { ChatMessage, Sender } from "../types/chat";
import { MessageList } from "./MessageList";
import { MessageInput } from "./MessageInput";
import { SDHC_FLOWS } from "../data/sdhcFlows";
import { findBestFAQMatch, getFallbackMessage } from "../utils/matchQuestion";
import { getNextTurn, isFollowUpMatch } from "../utils/flowNavigator";

interface ChatProps {}

export interface ChatHandle {
  startFlow: (flowId: string) => void;
  askQuestion: (question: string) => void;
}

export const Chat = forwardRef<ChatHandle, ChatProps>((_props, ref) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [activeFlowId, setActiveFlowId] = useState<string | null>(null);
  const [currentTurnIndex, setCurrentTurnIndex] = useState<number>(-1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message
  useEffect(() => {
    const welcomeMessage: ChatMessage = {
      id: "welcome",
      sender: "bot",
      text: "Hi! I'm your SDHC website assistant. You can:\n\n• Type any question in the input box below\n• Click 'Start this conversation' buttons for multi-turn flows\n• Use quick question buttons for common questions\n\nI can help with rent assistance, affordable rentals, landlord resources, homelessness programs, homebuyer assistance, and more. Try asking me anything!",
    };
    setMessages([welcomeMessage]);
  }, []);

  const addMessage = (sender: Sender, text: string, flowId?: string, flowTurnId?: string, relatedLinks?: { label: string; url: string }[]) => {
    const newMessage: ChatMessage = {
      id: `msg-${Date.now()}-${Math.random()}`,
      sender,
      text,
      flowId,
      flowTurnId,
      relatedLinks,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleStartFlow = (flowId: string) => {
    const flow = SDHC_FLOWS.find((f) => f.id === flowId);
    if (!flow || flow.turns.length === 0) return;

    // Reset any active flow and start new one
    setActiveFlowId(flowId);
    setCurrentTurnIndex(0);

    const firstTurn = flow.turns[0];
    
    // Add user question
    addMessage("user", firstTurn.userQuestion, flowId, firstTurn.id);
    
    // Add bot answer after a short delay to simulate thinking
    setTimeout(() => {
      addMessage("bot", firstTurn.botAnswer, flowId, firstTurn.id, firstTurn.relatedLinks);
    }, 300);
  };

  const handleUserMessage = (userText: string) => {
    // Add user message immediately
    addMessage("user", userText);

    // Process response after a short delay
    setTimeout(() => {
      if (activeFlowId) {
        const flow = SDHC_FLOWS.find((f) => f.id === activeFlowId);
        if (flow) {
          const nextTurn = getNextTurn(flow, currentTurnIndex);
          
          if (nextTurn && isFollowUpMatch(userText, nextTurn)) {
            // Matched next turn in flow
            const newIndex = currentTurnIndex + 1;
            setCurrentTurnIndex(newIndex);
            addMessage("bot", nextTurn.botAnswer, activeFlowId, nextTurn.id, nextTurn.relatedLinks);
            return;
          } else {
            // Didn't match next turn, check if flow is complete
            if (currentTurnIndex >= flow.turns.length - 1) {
              // Flow is complete, fall back to FAQ
              const faqMatch = findBestFAQMatch(userText);
              if (faqMatch) {
                addMessage("bot", faqMatch.answer, undefined, undefined, faqMatch.relatedLinks);
              } else {
                addMessage("bot", getFallbackMessage());
              }
              setActiveFlowId(null);
              setCurrentTurnIndex(-1);
              return;
            }
          }
        }
      }

      // Check if user's question matches the first turn of any flow (especially eviction flow)
      for (const flow of SDHC_FLOWS) {
        if (flow.turns.length > 0) {
          const firstTurn = flow.turns[0];
          if (isFollowUpMatch(userText, firstTurn)) {
            // Start this flow
            setActiveFlowId(flow.id);
            setCurrentTurnIndex(0);
            addMessage("bot", firstTurn.botAnswer, flow.id, firstTurn.id, firstTurn.relatedLinks);
            return;
          }
        }
      }

      // FAQ mode or no active flow
      const faqMatch = findBestFAQMatch(userText);
      if (faqMatch) {
        addMessage("bot", faqMatch.answer, undefined, undefined, faqMatch.relatedLinks);
      } else {
        addMessage("bot", getFallbackMessage());
      }
      
      // Reset flow state if we're in FAQ mode
      setActiveFlowId(null);
      setCurrentTurnIndex(-1);
    }, 300);
  };

  // Expose methods to parent via ref
  useImperativeHandle(ref, () => ({
    startFlow: handleStartFlow,
    askQuestion: handleUserMessage,
  }));

  // Get next suggested question
  const getNextSuggestedQuestion = (): string | undefined => {
    if (activeFlowId) {
      const flow = SDHC_FLOWS.find((f) => f.id === activeFlowId);
      if (flow) {
        const nextTurn = getNextTurn(flow, currentTurnIndex);
        return nextTurn?.userQuestion;
      }
    }
    return undefined;
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="border-b border-gray-200 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
        <h2 className="text-xl font-semibold text-gray-900">SDHC Website Assistant</h2>
        <p className="text-xs text-gray-500 mt-1">Ask questions or start a conversation from the sidebar</p>
      </div>
      
      <div className="flex-1 overflow-hidden">
        <MessageList
          messages={messages}
          nextSuggestedQuestion={getNextSuggestedQuestion()}
          onSuggestedQuestionClick={handleUserMessage}
        />
        <div ref={messagesEndRef} />
      </div>
      
      <MessageInput onSendMessage={handleUserMessage} />
    </div>
  );
});

Chat.displayName = "Chat";

