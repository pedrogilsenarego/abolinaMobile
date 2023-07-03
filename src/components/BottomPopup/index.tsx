import { Modal, Dimensions, View, StyleSheet } from "react-native";
import React, { ReactNode, useState } from "react";

interface IProps {
  children: ReactNode;
  onClose?: () => void;
  openModal: boolean;
}

const BottomPopup = ({ children, onClose, openModal }: IProps) => {
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={openModal}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalContent}>
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0)",
    },
    modalContent: {
      backgroundColor: "#FFF",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      paddingVertical: 50,
      elevation: 7, // Add elevation for shadow effect
      shadowColor: "#000", // Set shadow color
      shadowOffset: { width: 0, height: 2 }, // Set shadow offset
      shadowOpacity: 0.25, // Set shadow opacity
      shadowRadius: 10, // Set shadow radius
    },
  });

export default BottomPopup;
