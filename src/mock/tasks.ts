import { Task, TaskStatus } from "../types";
import { MOCK_CATEGORIES } from "./categories";

export const MOCK_TASKS: Task[] = [
  {
    id: "fsofsdj",
    status: TaskStatus.TO_DO,
    title: "Faire la vaisselle",
    category: MOCK_CATEGORIES[3],
    description:
      "Today we are going to implement the swipe gesture in a cell inside a FlatList component in order to update our “to-do items” from our array of “to-do’s.",
  },
  {
    id: "fsofsd5654j",
    status: TaskStatus.TO_DO,
    title: "Participer au tournoi interne",
    category: MOCK_CATEGORIES[1],
    description:
      "We are going to start with some set up code that displays the list with some styling applied to it.",
  },
  {
    id: "fsjuyksd5654j",
    status: TaskStatus.TO_DO,
    title: "Faire une randonnée",
    category: MOCK_CATEGORIES[0],
    description:
      "Now, let’s import Swipeable from ‘react-native-gesture-handler’ and wrap the component inside renderItem.",
  },
  {
    id: "984vcvsd5654j",
    status: TaskStatus.TO_DO,
    title: "Faire du shopping",
    category: MOCK_CATEGORIES[0],
    description:
      "And to trigger a function on swipe we have to pass a function definition to onSwipeableLeftOpen and/or onSwipeableRightOpen.",
  },
  {
    id: "9879fsdf",
    status: TaskStatus.TO_DO,
    title: "Réunion développeurs",
    category: MOCK_CATEGORIES[2],
    description:
      "And to trigger a function on swipe we have to pass a function definition to onSwipeableLeftOpen and/or onSwipeableRightOpen.",
  },
  {
    id: "65poj4",
    status: TaskStatus.TO_DO,
    title: "Réunion client",
    category: MOCK_CATEGORIES[2],
    description:
      "Web and Mobile Developer. Software Engineering Student at Flatiron School, Sports Lover, From Planet Earth.",
  },
];
