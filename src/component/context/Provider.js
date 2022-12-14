import React, { useState, useMemo } from "react";
import { ModalsStateContext, ModalsDispatchContext } from "./ModalsContext";

export default function Provider({ children }) {
  const [openedModals, setOpenedModals] = useState([]);

  const open = (Component, props) => {
    setOpenedModals((modals) => {
      return [...modals, { Component, props }];
    });
  };

  const close = (Component) => {
    setOpenedModals((modals) => {
      return modals.filter((modal) => {
        return modal.Component !== Component;
      });
    });
  };
  const dispatch = useMemo(() => ({ open, close }), []);

  return (
    <ModalsStateContext.Provider value={openedModals}>
      <ModalsDispatchContext.Provider value={dispatch}>
        {children}
      </ModalsDispatchContext.Provider>
    </ModalsStateContext.Provider>
  );
}
