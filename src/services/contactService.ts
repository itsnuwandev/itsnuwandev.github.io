export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  user_id: string | null;
  created_at: string;
  is_read: boolean;
}

export type ContactMessageInsert = Omit<
  ContactMessage,
  "id" | "created_at" | "is_read"
>;

const STORAGE_KEY = "contact_messages";

// Helper function to get messages from localStorage
const getStoredMessages = (): ContactMessage[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Error reading from localStorage:", error);
    return [];
  }
};

// Helper function to save messages to localStorage
const saveMessages = (messages: ContactMessage[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
};

// Generate unique ID
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export const contactService = {
  async getAllMessages(): Promise<{
    data: ContactMessage[] | null;
    error: Error | null;
  }> {
    try {
      console.log("=== FETCHING ALL MESSAGES ===");

      const messages = getStoredMessages().sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );

      console.log("✅ Successfully fetched messages:", messages.length);
      return { data: messages, error: null };
    } catch (error) {
      console.error("❌ Error fetching messages:", error);
      return { data: null, error: error as Error };
    }
  },

  async insertMessage(
    message: ContactMessageInsert
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      console.log("=== INSERTING MESSAGE ===");
      console.log("Message data:", message);

      const newMessage: ContactMessage = {
        ...message,
        id: generateId(),
        created_at: new Date().toISOString(),
        is_read: false,
      };

      const messages = getStoredMessages();
      messages.push(newMessage);
      saveMessages(messages);

      console.log("✅ Message insert completed successfully");
      return { data: newMessage, error: null };
    } catch (error) {
      console.error("❌ Error inserting message:", error);
      return { data: null, error: error as Error };
    }
  },

  async markAsRead(
    id: string
  ): Promise<{ data: ContactMessage | null; error: Error | null }> {
    try {
      console.log("=== MARKING MESSAGE AS READ ===");
      console.log("Message ID:", id);

      const messages = getStoredMessages();
      const messageIndex = messages.findIndex((msg) => msg.id === id);

      if (messageIndex === -1) {
        throw new Error("Message not found");
      }

      messages[messageIndex].is_read = true;
      saveMessages(messages);

      console.log("✅ Message marked as read successfully");
      return { data: messages[messageIndex], error: null };
    } catch (error) {
      console.error("❌ Error marking message as read:", error);
      return { data: null, error: error as Error };
    }
  },

  async deleteMessage(id: string): Promise<{ error: Error | null }> {
    try {
      console.log("=== DELETING MESSAGE ===");
      console.log("Message ID:", id);

      const messages = getStoredMessages();
      const filteredMessages = messages.filter((msg) => msg.id !== id);
      saveMessages(filteredMessages);

      console.log("✅ Message deleted successfully");
      return { error: null };
    } catch (error) {
      console.error("❌ Error deleting message:", error);
      return { error: error as Error };
    }
  },
};
