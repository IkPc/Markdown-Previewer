import React, { useEffect } from 'react';
import "./Homepage.scss";
import updatePreview from "../components/updatePreview.jsx";
import preload from '../utils/PreLoad.jsx';

const Homepage = () => {
    useEffect(() => {
        document.getElementById("editor").value = preload;
        updatePreview();
      }, []);
    return (
        <div className="box">
            <div className="editor-container">
                <div id="editor-title">
                    <h2>Text Editor</h2>
                </div>
                <textarea id="editor"
                    onChange={updatePreview}
                    defaultValue={preload}
                />
            </div>
            <div className="preview-container">
                <div id="preview-title">
                    <h2>Previewer</h2>
                </div>
                <div id="preview">
                </div>
            </div>
        </div>
    );
};

  
export default Homepage;