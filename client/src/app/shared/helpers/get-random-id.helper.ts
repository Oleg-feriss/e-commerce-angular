import { v4 as uuidv4 } from 'uuid';

export const getRandomId = (): string => {
  return uuidv4();
};
