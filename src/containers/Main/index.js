import React, { memo, useCallback, useEffect } from "react";
import Api from "../../commons/constants/Api";
import Board from "./components/Board";
import Painel from "./components/Panel";
import { ContainerStyled } from "./style";

function Main() {
  const [data, setData] = React.useState([]);
  const [country, setCountry] = React.useState("brazil");

  const getCovidData = useCallback((country) => {
    Api.getCountryData(country).then((data) => setData(data));
  }, []);

  const handleChange = ({ target }) => {
    const country = target.value;
    setCountry(country);
  };

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  return (
    <ContainerStyled>
      <div className="mb-2">
        <Painel
          data={data}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
}

export default memo(Main);
