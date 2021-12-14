import React, {useState} from "../../_snowpack/pkg/react.js";
export const Filter = ({currentFilter, changeFilter}) => {
  const [toggle, setToggle] = useState(false);
  return /* @__PURE__ */ React.createElement("div", {
    onClick: () => setToggle(!toggle),
    className: "filter-button-wrapper"
  }, /* @__PURE__ */ React.createElement("p", null, "Sort by: ", currentFilter), /* @__PURE__ */ React.createElement("div", {
    className: "dropdown-wrapper",
    style: {visibility: `${toggle ? "visible" : "hidden"}`}
  }, /* @__PURE__ */ React.createElement("p", {
    onClick: (e) => changeFilter(e.currentTarget.innerText)
  }, currentFilter === "Micro" ? "All" : "Micro"), /* @__PURE__ */ React.createElement("p", {
    onClick: (e) => changeFilter(e.currentTarget.innerText)
  }, currentFilter === "Brewpub" ? "All" : "Brewpub")));
};
