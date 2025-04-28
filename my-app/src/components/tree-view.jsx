import MenuList from "./menulist";

function TreeView({ menu = [] }) {
    return (
        <div className="tree-view">
            <MenuList list={menu} />
        </div>
    );
}

export default TreeView;