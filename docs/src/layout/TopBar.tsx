import "../styles/topbar.css"
export default function TopBar() {
    return (
        <div className="topbar">
            <div className="topbar-left">
                <img
                    src="https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico"
                    className="docs-logo"
                />
                <input
                    className="document-title"
                    defaultValue="Untitled document"
                />
            </div>
            <button className="share-btn">
                Share
            </button>
        </div>
    )
}