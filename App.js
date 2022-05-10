// react & misc
import * as React from "react";
import { SafeAreaView } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";
import configureStore from "./utils/redux/store/index";
import { Provider } from "react-redux";

// theme
import { Provider as PaperProvider } from "react-native-paper";
import { theme } from "./utils/theme";

// stack navigator
import Navigation from "./container/stackNavigator/";

const store = configureStore();

export default function AppRoot() {
  return (
    <>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <ToastProvider>
            <SafeAreaView style={{ flex: 1 }}>
              <Navigation />
            </SafeAreaView>
          </ToastProvider>
        </PaperProvider>
      </Provider>
    </>
  );
}
