import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
const App = () => {
  const [allBrews, setAllBrews] = useState([]);
  async function getBreweries(latitude, longitude) {
    const req = await fetch(`https://api.openbrewerydb.org/breweries?by_dist=${latitude},${longitude}`);
    const data = await req.json();
    setAllBrews(data);
    console.log(data);
  }
  function getUserLocation() {
    const success = (local) => getBreweries(local.coords.latitude, local.coords.longitude);
    const error = () => alert("App will not work properly without access to your location. Please change your settings for this browser.");
    navigator.geolocation.getCurrentPosition(success, error);
  }
  useEffect(() => {
    getUserLocation();
  }, []);
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "My Brew"), allBrews.map((item) => /* @__PURE__ */ React.createElement("article", {
    className: "brewery-container",
    key: item.id
  }, /* @__PURE__ */ React.createElement("h3", null, item.name), /* @__PURE__ */ React.createElement("p", null, item.street != null ? item.street : "unknown"), /* @__PURE__ */ React.createElement("p", null, item.city != null ? item.city : "unknown", ", ", item.state), /* @__PURE__ */ React.createElement("p", null, item.postal_code != null ? item.postal_code : "unknown"))));
};
export default App;
