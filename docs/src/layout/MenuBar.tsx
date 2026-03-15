import "../styles/menubar.css"
export default function MenuBar() {
    const menus = ["File", "Edit", "View", "Insert", "Format", "Tools", "Extensions", "Help"];
    return (
        <div className="menubar">
            {menus.map(menu => (
                <button key={menu} className="menu-btn">
                    {menu}
                </button>
            ))}
        </div>
    )
}