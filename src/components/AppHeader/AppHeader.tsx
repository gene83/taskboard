import "./AppHeader.scss";

const AppHeader = () => {
  return (
    <div className="app-header">
      <h1 className="title">Task Board</h1>
      <input type="text" className="search" placeholder="Search" />
      <div className="right">username</div>
    </div>
  );
};

export default AppHeader;
