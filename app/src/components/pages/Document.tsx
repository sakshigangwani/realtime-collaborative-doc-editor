import { useState } from "react";
import { LuFileText } from "react-icons/lu";

export default function Document() {
    const [title, setTitle] = useState("Untitled Document");

    return (
        <main className="docs-app">
            <header className="docs-topbar">
                <div className="docs-brand">
                    <span className="docs-brand-icon" aria-hidden="true">
                        <LuFileText />
                    </span>
                    <div className="docs-title-group">
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="doc-title-input"
                            aria-label="Document title"
                        />
                        <p className="doc-subtitle">All changes saved in this session</p>
                    </div>
                </div>
            </header>
        </main>
    )
}