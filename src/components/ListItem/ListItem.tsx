import "./ListItem.scss";
import { ListItem as ListItemType } from "../List/List";
import { useState } from "react";

const ListItem = ({ listItem }: { listItem: ListItemType }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [description, setDescription] = useState(listItem.description);

  function updateListItem() {
    // TODO: Persist update
    setIsEdit(false);
    console.log("hit");
  }

  return (
    <div className="list-item">
      <input type="radio" />
      {isEdit ? (
        <input
          autoFocus
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          onBlur={updateListItem}
        />
      ) : (
        <span onClick={(e) => setIsEdit(true)}>{listItem.description}</span>
      )}
    </div>
  );
};

export default ListItem;
