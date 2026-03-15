import TopBar from "../layout/TopBar";
import Toolbar from "../layout/Toolbar";
import MenuBar from "../layout/MenuBar";
import Editor from "../components/editor/Editor";
import "../styles/document.css"

export default function Document() {
    return (
        <div className="document-page">

            <TopBar />
            <MenuBar />
            <Toolbar />
            <Editor />

        </div>
    )
}