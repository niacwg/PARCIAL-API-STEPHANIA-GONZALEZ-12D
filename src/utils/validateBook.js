export const validateBook = (bookData) => {
  if (!bookData.title || typeof bookData.title !== 'string') {
    throw new Error('El título es obligatorio y debe ser una cadena');
  }
  if (!bookData.author || typeof bookData.author !== 'string') {
    throw new Error('El autor es obligatorio y debe ser una cadena');
  }
  return true;  
};