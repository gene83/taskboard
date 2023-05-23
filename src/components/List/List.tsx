import "../List/List.scss";
import { Key } from "react";
import ListItem from "../ListItem/ListItem";

export type List = {
  id: String;
  title: String;
  listItems: ListItem[];
};

export type ListItem = {
  id: String;
  description: String;
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
