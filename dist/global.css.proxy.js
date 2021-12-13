// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  background-color: rgb(150, 111, 5);\n}\n\nmain {\n  display: grid;\n  gap: 24px;\n\n  background-color: wheat;\n\n  padding: 20px;\n  margin: 15px;\n}\n\n.headline-wrapper {\n  display: grid;\n  gap: 20px;\n}\n\n.filter-button-wrapper,\n.dropdown-wrapper {\n  background: linear-gradient(120deg, rgb(170, 75, 31), rgba(150, 22, 5));\n\n  width: 180px;\n  border-radius: 5px;\n  padding: 15px 20px;\n}\n\n.filter-button-wrapper {\n  position: relative;\n\n  display: grid;\n  place-content: center;\n\n  color: white;\n  font-weight: 700;\n}\n.filter-wrapper:hover {\n  cursor: pointer;\n}\n\n.dropdown-wrapper {\n  position: absolute;\n  top: 60px;\n\n  display: grid;\n  gap: 28px;\n}\n.dropdown-wrapper p:hover {\n  text-decoration: underline white;\n}\n\n@media (min-width: 756px) {\n  main {\n    max-width: 600px;\n    margin: 25px auto;\n  }\n  .headline-wrapper {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}