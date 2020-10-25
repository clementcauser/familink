import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, View } from "react-native";
import TasksList from "../components/TasksList";
import Text from "../components/Text";

const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Text variant="h3">Bienvenue,</Text>
      <Text variant="h2" status="primary-light">
        Francis
      </Text>
      <TasksList />

      <Button title="Go to Details" onPress={() => navigate("Details")} />
    </View>
  );
};

export default HomeScreen;
