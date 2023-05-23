import { Key } from "react";
import List from "../List/List";
import { List as ListType } from "../List/List";
import "./Board.scss";

type Board = {
  name: string;
  lists: ListType[];
};

const Board = () => {
  const board: Board = {
    name: "MainBoard",
    lists: [
      {
        id: "listid1",
        title: "Personal",
        listItems: [
          {
            id: "1",
            description: "list item 1",
            isCompleted: false,
          },
          {
            id: "2",
            description: "list item 2",
            isCompleted: false,
          },
          {
            id: "3",
            description: "list item 3",
            isCompleted: true,
          },
        ],
      },
      {
        id: "listid2",
        title: "Work",
        listItems: [
          {
            id: "1",
            description: "work list item 1",
            isCompleted: false,
          },
          {
            id: "2",
            description: "work list item 2",
            isCompleted: false,
          },
          {
            id: "3",
            description: "work list item 3",
            isCompleted: true,
          },
          {
            id: "4",
            description: "work list item 4",
            isCompleted: true,
          },
        ],
      },
    ],
  };
  return (
    <div className="board">
      <h3 className="board-name">{board.name}</h3>
      <div className="lists-container">
        {board.lists.map((list) => (
          <List key={list.id as Key} list={list} />
        ))}
      </div>
    </div>
  );
};

export default Board;
