import {
  Poppins_300Light,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { AppLoading } from "expo";
import React from "react";
import RootContextProvider from "./src/contexts";
import Navigator from "./src/navigation";

const App = () => {
  const [fontsLoaded] = useFonts({
    poppins_medium: Poppins_500Medium,
    poppins_light: Poppins_300Light,
    poppins_bold: Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <RootContextProvider>
      <Navigator />
    </RootContextProvider>
  );
};

export default App;
