import { JumplistNode, JumplistNodes } from "../JumplistContext/types";

export const jumplistReducer = (state: JumplistNodes, action: {
  type: 'sync' | 'remove' | 'reset' | 'clear'
  payload?: Partial<JumplistNode>
}): JumplistNodes => {
  let newState = [...state || []];

  switch (action.type) {
    case 'clear': {
      newState = [];
      break;
    }

    case 'reset': {
      newState = action.payload as JumplistNodes; // TODO: type this better
      break;
    }

    case 'sync': {
      const {
        payload: {
          id: incomingID,
        }
      } = action;

      const indexOfItem = newState.findIndex(item => item.id === incomingID);
      const itemExists = indexOfItem > -1;

      if (itemExists) {
        const foundItem = newState[indexOfItem];
        newState.splice(indexOfItem, 1, {
          ...foundItem,
          ...action.payload
        });
      }
      break;
    }

    case 'remove': {
      const {
        payload: {
          id: incomingID
        }
      } = action;
      const indexOfItem = newState.findIndex(item => item.id === incomingID);
      const foundItem = indexOfItem > -1;
      if (foundItem) {
        newState = newState.splice(indexOfItem, 1);
      }
      break;
    }
    default: {
      break;
    }
  }

  return newState
}
