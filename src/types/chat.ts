export type Sender = "user" | "bot";

export type ChatMessage = {
  id: string;
  sender: Sender;
  text: string;
  flowId?: string;      // which flow this message belongs to, if any
  flowTurnId?: string;  // which turn within the flow
  relatedLinks?: { label: string; url: string }[];
};



