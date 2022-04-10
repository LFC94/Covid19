const path = "https://coronavirus-19-api.herokuapp.com/countries";

const headers = {
  method: "GET",
  node: "no-cors",
  caches: "default",
};

function getCountryData($country) {
  return fetch(`${path}/${$country}`, headers).then((response) =>
    response.json()
  );
}

export default { getCountryData };
