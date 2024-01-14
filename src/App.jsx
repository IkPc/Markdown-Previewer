import React from "react";
import "./App.css";
import "./components/css/Main.scss";
import updatePreview from "./components/basics/updatePreview";

const App = () => {
    return (
        <div class="box">
            <div class="editor-container">
                <div id="editor-title"
                style={{ height: updatePreview }}
                >
                    <h2>Text Editor</h2>
                </div>
                <textarea id="editor"
                onChange={updatePreview}
                style={{ height: updatePreview }}
                />
            </div>
            <div class="preview-container">
                <div id="preview-title">
                    <h2>Previewer</h2>
                </div>
                <div id="preview">
                </div>
            </div>
        </div>
    );
};

const AppWrapper = () => {
    return (
      <div>
        <App />
      </div>
    );
  };
  
  export default AppWrapper;