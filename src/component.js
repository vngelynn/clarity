export default (text = "Hello, webpage Webpack!") => {
    const element = document.createElement("h1");

    element.innerHTML = text;

    return element;
}