import react from "react";
import AccountStatus from "./components/AccountStatus";
import Banking from "./components/Banking";
import Auth from "./components/Auth";
import Balance from "./components/Balance";

function App() {
  return (
    <div>
      <Auth></Auth>
      <Balance></Balance>
      <Banking></Banking>
      <AccountStatus></AccountStatus>
    </div>
  );
}

export default App;
