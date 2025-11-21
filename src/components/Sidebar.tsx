import { SDHC_FLOWS } from "../data/sdhcFlows";
import { SDHC_FAQ } from "../data/sdhcFaq";

interface SidebarProps {
  onStartFlow: (flowId: string) => void;
  onAskQuestion: (question: string) => void;
}

export function Sidebar({ onStartFlow, onAskQuestion }: SidebarProps) {
  const quickQuestions = [
    SDHC_FAQ[0], // Contact
    SDHC_FAQ[3], // Affordable housing
    SDHC_FAQ[4], // Homebuyer assistance
  ];

  return (
    <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">SDHC Chat Demo</h1>
        <p className="text-xs text-gray-600 leading-relaxed bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          This is a demo assistant based on publicly available info from sdhc.org. 
          It is not an official SDHC tool.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Popular Multi-Turn Conversations
        </h2>
        <div className="space-y-3">
          {SDHC_FLOWS.map((flow) => (
            <div
              key={flow.id}
              className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <h3 className="font-medium text-gray-900 mb-1">{flow.title}</h3>
              <p className="text-xs text-gray-600 mb-3">{flow.description}</p>
              <button
                onClick={() => onStartFlow(flow.id)}
                className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
              >
                Start this conversation
              </button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Quick Single Questions
        </h2>
        <div className="space-y-2">
          {quickQuestions.map((item) => (
            <button
              key={item.id}
              onClick={() => onAskQuestion(item.question)}
              className="w-full text-left px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-blue-300 transition-colors text-sm text-gray-700"
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

