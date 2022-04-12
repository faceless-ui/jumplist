import { JumplistNode, JumplistNodes } from "../JumplistContext/types";

// TODO: add a current intersection status to each jumplist node,
// which be be synced by the JumplistNode component using the intersection observer API

export const jumplistReducer = (state: JumplistNodes, action: {
  type: 'add' | 'remove' | 'reset'
  payload: Partial<JumplistNode>
}) => {
  let newState = state;

  switch (action.type) {
    case 'reset': {
      newState = action.payload as JumplistNodes; // TODO: type this better
      break;
    }
    case 'add': {
      const {
        payload: {
          id: incomingID,
          label
        }
      } = action;

      const indexOfItem = newState.findIndex(item => item.id === incomingID);
      const foundItem = indexOfItem > -1;

      if (!foundItem) {
        // if not found, add it in
        newState.push({
          id: incomingID,
          label
        })
      } else {
        // if it already exists, update it
        newState = newState.splice(indexOfItem, 1, {
          id: incomingID,
          label
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
