import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import {Filter} from "./comps/Filter.js";
import {Loading} from "./comps/Loading.js";
const App = () => {
  const [allBrews, setAllBrews] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  async function getBreweries(latitude, longitude) {
    const req = await fetch(`https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}`);
    const data = await req.json();
    setAllBrews(data);
    setLoading(!loading);
  }
  function getUserLocation() {
    const success = (local) => getBreweries(local.coords.latitude, local.coords.longitude);
    const error = () => alert("App will not work properly without access to your location. Please change your privacy settings for this browser.");
    navigator.geolocation.getCurrentPosition(success, error);
  }
  useEffect(() => {
    getUserLocation();
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, loading ? /* @__PURE__ */ React.createElement(Loading, null) : /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "headline-wrapper"
  }, /* @__PURE__ */ React.createElement("h1", null, "My Brew"), /* @__PURE__ */ React.createElement(Filter, {
    currentFilter: filter,
    changeFilter: setFilter
  })), allBrews.filter((item) => filter === "All" ? item : item.brewery_type === filter.toLowerCase()).map((item) => /* @__PURE__ */ React.createElement("article", {
    className: "brewery-wrapper",
    key: item.id
  }, /* @__PURE__ */ React.createElement("h3", null, item.name), /* @__PURE__ */ React.createElement("p", null, item.street != null ? item.street : "unknown"), /* @__PURE__ */ React.createElement("p", null, item.city != null ? item.city : "unknown", ", ", item.state), /* @__PURE__ */ React.createElement("p", null, item.postal_code != null ? item.postal_code : "unknown"), /* @__PURE__ */ React.createElement("p", null, "Type: ", item.brewery_type)))));
};
export default App;
