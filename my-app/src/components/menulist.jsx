import MenuItem from "./menuitem";

function MenuList({ list = [] }) {
    return (<>
        <ul className="menu-list">
            {list && list.length ?
                list.map((listItem) => (
                    <MenuItem key={listItem.id} item={listItem} />
                )) :
                null
            }
        </ul> 
        </>
    );
}

export default MenuList;