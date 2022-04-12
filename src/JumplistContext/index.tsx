import { createContext, useContext } from 'react';
import { IJumplistContext } from './types';

export const JumplistContext = createContext<IJumplistContext>({} as IJumplistContext);

export const useJumplist = (): IJumplistContext => useContext(JumplistContext);
