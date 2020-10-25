import { AntDesign } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { notificationAsync, NotificationFeedbackType } from "expo-haptics";
import React, { useContext, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Modal from "react-native-modal";
import styled from "styled-components/native";

import { SafeAreaColorContext } from "../contexts/SafeAreaProvider";
import { MOCK_TASKS } from "../mock/tasks";
import {
  MAP_PALETTE_VARIANTS,
  COLORS_WITH_VARIANTS_KEYS,
} from "../theme/palette";
import { Task } from "../types";
import DetailledTaskItem from "./DetailledTaskItem";
import TaskItem from "./TaskItem";

const ActionContainer = styled.View<{ color?: COLORS_WITH_VARIANTS_KEYS }>`
  background-color: ${({ color }) =>
    MAP_PALETTE_VARIANTS[color || "grey-dark"]};
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
  margin: 0 10px;
`;

const TaskContainer = styled.View`
  margin-top: 10px;
  margin-right: 20px;
  margin-left: 10px;
`;

const BlurBackdrop = styled(BlurView)`
  flex: 1;
  background-color: ${({ theme }) => theme.palette.white.light};
  margin-bottom: 30px;
`;

type ActionButton = { status?: COLORS_WITH_VARIANTS_KEYS };

const RightAction = ({ status }: ActionButton) => (
  <ActionContainer color={status}>
    <AntDesign name="check" size={24} color="white" />
  </ActionContainer>
);

const LeftAction = ({ status }: ActionButton) => (
  <ActionContainer color={status}>
    <AntDesign name="edit" size={24} color="white" />
  </ActionContainer>
);

const TasksList = () => {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const { setSafeAreaColor, safeAreaColor } = useContext(SafeAreaColorContext);

  const onMarkAsDone = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
    notificationAsync(NotificationFeedbackType.Success);
  };

  const onModalClose = () => {
    setSafeAreaColor({ ...safeAreaColor, bottom: "white-light" });
    setSelectedTask(null);
  };

  return (
    <>
      <View style={{ marginVertical: 40 }}>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => setTasks(MOCK_TASKS)}
            />
          }
          data={tasks}
          renderItem={({ item }) => (
            <TaskContainer>
              <Swipeable
                onSwipeableLeftOpen={console.log}
                onSwipeableRightOpen={() => onMarkAsDone(item.id)}
                renderRightActions={() => <RightAction status="success-dark" />}
                renderLeftActions={() => <LeftAction status="info-dark" />}
              >
                <TaskItem task={item} onSelect={setSelectedTask} />
              </Swipeable>
            </TaskContainer>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal
        style={{ margin: 0, justifyContent: "flex-end", paddingBottom: 30 }}
        isVisible={!!selectedTask}
        onSwipeComplete={onModalClose}
        swipeDirection="down"
        customBackdrop={<BlurBackdrop intensity={80} />}
      >
        <View>{selectedTask && <DetailledTaskItem task={selectedTask} />}</View>
      </Modal>
    </>
  );
};

export default TasksList;
