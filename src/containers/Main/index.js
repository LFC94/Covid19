import React, { memo, useCallback, useEffect } from "react";
import Api from "../../commons/constants/Api";
import Board from "./components/Board";
import { ContainerStyled } from "./style";

function Main() {
  const [data, setData] = React.useState([]);
  const [country, setCountry] = React.useState("Brazil");
  console.log(data);
  const getCovidData = useCallback((country) => {
    Api.getCountryData(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  return (
    <ContainerStyled>
      <Board data={data} />
    </ContainerStyled>
  );
}

export default memo(Main);
