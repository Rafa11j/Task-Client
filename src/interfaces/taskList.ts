import ITaskItem from './taskItem';

export default interface ITaskList {
  id: string;
  name: string;
  items: ITaskItem[];
}
