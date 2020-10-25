import React, { createContext, FC, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {
  COLORS_WITH_VARIANTS_KEYS,
  MAP_PALETTE_VARIANTS,
} from "../theme/palette";

type SafeAreaColorType = {
  top: COLORS_WITH_VARIANTS_KEYS;
  bottom: COLORS_WITH_VARIANTS_KEYS;
};

type SafeAreaColorContextType = {
  safeAreaColor: SafeAreaColorType;
  setSafeAreaColor: ({ top, bottom }: SafeAreaColorType) => void;
};

export const SafeAreaColorContext = createContext<SafeAreaColorContextType>({
  safeAreaColor: { top: "white-light", bottom: "white-light" },
  setSafeAreaColor: () => {},
});

const SafeAreaProvider: FC = ({ children }) => {
  const [{ bottom, top }, setSafeAreaColor] = useState<SafeAreaColorType>({
    top: "white-light",
    bottom: "white-light",
  });

  return (
    <SafeAreaColorContext.Provider
      value={{
        setSafeAreaColor,
        safeAreaColor: { top, bottom },
      }}
    >
      <SafeAreaView
        style={{ flex: 1, backgroundColor: MAP_PALETTE_VARIANTS[top] }}
      >
        {children}
      </SafeAreaView>
      <SafeAreaView style={{ backgroundColor: MAP_PALETTE_VARIANTS[bottom] }} />
    </SafeAreaColorContext.Provider>
  );
};

export default SafeAreaProvider;
