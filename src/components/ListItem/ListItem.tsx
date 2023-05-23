import "./ListItem.scss";
import { ListItem as ListItemType } from '../List/List'

const ListItem = ({ listItem }: { listItem: ListItemType }) => {
    return (
        <div className="list-item">
          <input type="radio" />
          <span>{listItem.description}</span>
        </div>
      );
};

export default ListItem;