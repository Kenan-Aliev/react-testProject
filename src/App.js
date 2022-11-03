import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";
import Main from "./pages/Main/Main";
import NFT from "./pages/NFT/NFT";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/:contract_address/:token_id" element={<NFT />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
