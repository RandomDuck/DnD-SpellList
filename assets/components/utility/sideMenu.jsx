import React, { useEffect } from "react";
import { TouchableWithoutFeedback } from "react-native";

const SideModal = ({ children, targetRef, active, stateController }) => {
  const slideIn = () => { };
  const slideOut = () => { };
  useEffect(() => { active ? slideIn() : slideOut; }, [active]);

  return (
    <TouchableWithoutFeedback onPress={stateController(false)}>
      {children}
    </TouchableWithoutFeedback>
  );
}
export { SideModal };