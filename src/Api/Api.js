import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64c7a664a1fe0128fbd515ea.mockapi.io/contacts',
});

export const requestContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const postNewUser = async contactData => {
  const { data } = await instance.post('/contacts', contactData);
  return data;
};

export const deleteUser = async contactId => {
  const { data } = await instance.delete(`/contacts/${contactId}`);
  return data;
};
