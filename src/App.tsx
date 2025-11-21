import { useRef } from "react";
import { Sidebar } from "./components/Sidebar";
import { Chat } from "./components/Chat";
import type { ChatHandle } from "./components/Chat";

function App() {
  const chatRef = useRef<ChatHandle>(null);

  const handleStartFlow = (flowId: string) => {
    chatRef.current?.startFlow(flowId);
  };

  const handleAskQuestion = (question: string) => {
    chatRef.current?.askQuestion(question);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar onStartFlow={handleStartFlow} onAskQuestion={handleAskQuestion} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Chat ref={chatRef} />
      </div>
    </div>
  );
}

export default App;
