
const API_URL = 'http://localhost:3001/api';

export interface Contact {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  id: number;
  success: boolean;
}

export const checkServerHealth = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/health`);
    const data = await response.json();
    return data.status === 'ok';
  } catch (error) {
    console.error('Server health check failed:', error);
    return false;
  }
};

export const submitContact = async (contact: Contact): Promise<ContactResponse> => {
  try {
    const response = await fetch(`${API_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contact),
    });
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to submit contact');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Contact submission error:', error);
    throw error;
  }
};

export const getContacts = async (): Promise<Contact[]> => {
  try {
    const response = await fetch(`${API_URL}/contacts`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Failed to fetch contacts');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Get contacts error:', error);
    throw error;
  }
};
