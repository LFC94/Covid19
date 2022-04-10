import { StylesProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import GlobalStyles from "./commons/styles/global-styles";

function App() {
  return (
    <StylesProvider>
      <CssBaseline />
      <GlobalStyles />
      <div>Hello World</div>
    </StylesProvider>
  );
}

export default App;
