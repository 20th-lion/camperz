import React, { useContext } from "react";
import {
  ModalsStateContext,
  ModalsDispatchContext,
} from "../context/ModalsContext";
import MyModal1 from "./MyModal1";
import ProductEditModal from "./ProductEditModal";

export const modals = {
  myModal1: MyModal1,
  productEditModal: ProductEditModal,
};

export default function Modals() {
  const openedModals = useContext(ModalsStateContext);
  const { close } = useContext(ModalsDispatchContext);

  return openedModals.map((modal, index) => {
    const { Component, props } = modal;
    const onClose = () => {
      close(Component);
    };

    return <Component {...props} key={index} onClose={onClose} />;
  });
}
