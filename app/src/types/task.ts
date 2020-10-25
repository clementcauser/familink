import { Category } from "./category";

export enum TaskStatus {
  TO_DO,
  DONE,
  DELETED,
  INACTIVE,
}

export type Task = {
  id: string;
  title: string;
  description?: string;
  category?: Category;
  status: TaskStatus;
};
