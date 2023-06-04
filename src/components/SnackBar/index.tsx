import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { clearNotification } from "../../slicer/general/general.actions";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/pallete";

interface SnackbarState {
  open: boolean;
  message: string;
  type: null | "success" | "fail";
  color: string;
  bgcolor: string;
  icon: any;
}

const INITIALSTATE = {
  open: false,
  message: "",
  type: null,
  icon: null,
  color: "white",
  bgcolor: Colors.darkGrey,
};

const Snackbar = () => {
  const mapState = (state: any) => ({
    general: state.general,
  });
  const dispatch = useDispatch();
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    ...INITIALSTATE,
  });

  const { general } = useSelector(mapState);
  const { notificationMessage, notificationType } = general;

  const getSnackbarElements = (type: string) => {
    switch (type) {
      case "information":
        return {
          icon: <Ionicons name="arrow-back-outline" size={17} color="white" />,

        };
      case "fail":
        return {
          icon: <Ionicons name="warning-outline" size={20} color="red" />,

        };
      case "success":
        return {
          icon: <Ionicons name="checkbox-outline" size={20} color="green" />,

        };
      default:
        return {
          icon: <Ionicons name="arrow-back-outline" size={17} color="white" />,

        };
    }
  };

  React.useEffect(() => {
    if (notificationType !== null) {
      const { icon } = getSnackbarElements(notificationType);
      setSnackbar({
        ...snackbar,
        open: true,
        icon: icon,
        message: notificationMessage,
        type: notificationType,
      });

      const timer = setTimeout(() => {
        handleClose();
      }, 4000);

      return () => {
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [general]);

  const handleClose = () => {
    dispatch(clearNotification());
    setSnackbar({ ...INITIALSTATE });
  };


  return (
    <>
      {snackbar.open && (<View
        style={{
          position: "absolute",
          borderRadius: 6,
          zIndex: 2000,
          bottom: 60,
          right: 20,
          left: 20,
          backgroundColor: snackbar.bgcolor,
          padding: 16,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <Text style={{ color: "white", marginRight: 8 }}>
          {snackbar.icon}
        </Text>
        <Text style={{ color: "#ffffffde", marginTop: 0 }}>
          {snackbar.message}
        </Text>
      </View>)}


    </>


  );
};

export default Snackbar;
