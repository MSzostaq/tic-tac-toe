import { createContext } from "react";

const ModalContext = createContext({
  modals: [],
  onOpen: () => {},
  onClose: () => {},
  onDestroy: () => {},
});

export default ModalContext;
