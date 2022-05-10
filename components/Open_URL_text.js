import React, { useCallback } from "react";
import { Alert, Linking } from "react-native";
import { Text } from "react-native";

const OpenURLText = (props) => {
  const { url, children } = props;
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Text {...props} onPress={handlePress}>
      {children}
    </Text>
  );
};

export default OpenURLText;
