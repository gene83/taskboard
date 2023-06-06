import "../List/List.scss";
import { Key } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ListItem from "../ListItem/ListItem";

export type List = {
  id: string;
  title: string;
  listItems: ListItem[];
};

export type ListItem = {
  id: string;
  description: string;
  isCompleted: boolean;
};

const List = ({ list }: { list: List }) => {
  const incomplete: ListItem[] = [];
  const completed: ListItem[] = [];
  list.listItems.forEach((item) =>
    item.isCompleted ? completed.push(item) : incomplete.push(item)
  );

  return (
    <div className="list">
      <h4 className="list-title">{list.title}</h4>
      <div className="add-task">
        <AiOutlinePlus />
        <span>Add a Task</span>
      </div>
      {incomplete.map((listItem) => (
        <ListItem key={listItem.id as Key} listItem={listItem} />
      ))}

      <span>Completed</span>
      {completed.map((listItem) => (
        <ListItem key={listItem.id as Key} listItem={listItem} />
      ))}
    </div>
  );
};

export default List;
