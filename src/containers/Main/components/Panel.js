import React, { memo } from "react";
import RefreshIcon from "../../../assets/images/refresh.svg";
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from "../../../components";
import COUNTRIES from "../../../commons/constants/countries";
import { CardPanelContentStyled, ItemStyled } from "./style";

const navigatorHasShare = navigator.share;

function Panel({ onChange, data, country, getCovidData }) {
  const { cases, todayDeaths, recovered, deaths, todayCases } = data;

  const renderCountries = (country, index) => (
    <MenuItem key={`country.${index}`} value={country.value}>
      <ItemStyled>
        <div> {country.label}</div>
        <img src={country.flag} alt={`bandeira pais ${country.label}`} />
      </ItemStyled>
    </MenuItem>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <div>
          <Typography variant="h5" component="span" color="primary">
            COVID19
          </Typography>
          <Typography variant="h65" component="span" color="primary">
            Painel Corona virus
          </Typography>
          <Typography variant="body2" component="span" color="primary">
            COVID19
          </Typography>
          <div className="pt-2">
            <Select onChange={onChange} value={country}>
              {COUNTRIES.map(renderCountries)}
            </Select>
          </div>
        </div>
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
