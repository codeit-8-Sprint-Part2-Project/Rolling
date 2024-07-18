import { MessageCreate } from "../DTO/message/MessageCreate";

export const createMessage = async (id: number, message: MessageCreate): Promise<void> => {
  try {
    const response = await fetch(`rolling-api.vercel.app/8-1/recipients/${id}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Message created successfully:', data);
  } catch (error) {
    console.error('Error creating message:', error);
  }
};