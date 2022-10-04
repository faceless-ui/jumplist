import { JumplistNode, JumplistNodes } from "./context";

type Action = {
  type: 'sync'
  payload: JumplistNode
} | {
  type: 'remove',
  payload: JumplistNode
} | {
  type: 'reset',
  payload: JumplistNodes
} | {
  type: 'clear'
}

export const jumplistReducer = (
  state: JumplistNodes,
  action: Action
): JumplistNodes => {
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
          nodeID: incomingID,
        }
      } = action;

      const indexOfItem = newState.findIndex(item => item.nodeID === incomingID);
      const itemExists = indexOfItem > -1;

      if (itemExists) {
        const foundItem = newState[indexOfItem];
        newState.splice(indexOfItem, 1, {
          ...foundItem,
          ...action.payload
        });
      } else {
        newState.push(action.payload);
      }
      break;
    }

    case 'remove': {
      const {
        payload: {
          nodeID: incomingID
        }
      } = action;
      const indexOfItem = newState.findIndex(item => item.nodeID === incomingID);
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
