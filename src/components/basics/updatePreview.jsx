import { marked } from "marked";

export default function updatePreview () {
    let inputText = document.getElementById("editor").value;
    let htmlContent = marked(inputText);

    document.getElementById("preview").innerHTML = htmlContent;
}
