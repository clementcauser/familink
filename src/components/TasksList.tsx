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

const ActionContainer = styled.View<{ color?: "success" | "info" }>`
  background-color: ${({ theme, color }) =>
    color ? theme.palette[color].dark : "transparent"};
  justify-content: center;
  padding: 20px;
  border-radius: 20px;
  margin: 0 10px;
`;

const ColoredActionContainer = styled(ActionContainer)`
  background-color: ${({ theme }) => theme.palette.white.dark};
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

const CheckIcon = styled(AntDesign)<{ status?: COLORS_WITH_VARIANTS_KEYS }>`
  color: ${({ status }) => MAP_PALETTE_VARIANTS[status || "success-dark"]};
`;

const EditIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.palette.info.dark};
`;

const RightAction = ({ status }: { status?: COLORS_WITH_VARIANTS_KEYS }) => (
  <ActionContainer>
    <CheckIcon name="checkcircleo" size={24} status={status} />
  </ActionContainer>
);

const LeftAction = () => (
  <ColoredActionContainer>
    <EditIcon name="edit" size={24} />
  </ColoredActionContainer>
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
                renderRightActions={() => (
                  <RightAction status={item.category?.color} />
                )}
                renderLeftActions={LeftAction}
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
