// react & misc
import * as React from "react";
import { SafeAreaView } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import configureStore from "./utils/redux/store/index";
import { Provider } from "react-redux";

// stack navigator
import Navigation from "./container/stackNavigator/";

const store = configureStore();

export default function AppRoot() {
  return (
    <>
      <Provider store={store}>
        <ToastProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Navigation />
          </SafeAreaView>
        </ToastProvider>
      </Provider>
    </>
  );
}
