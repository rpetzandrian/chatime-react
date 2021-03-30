import React from "react";
import { logo } from "../assets/images";

function Splash() {
  return (
    <div>
      {/*  Start Splash Screen */}
      <main className="container-fluid">
        <div className="row splash-bg align-content-center">
          <img className="col splash-logo" src={logo} alt="Logo Chatime" />
        </div>
      </main>
      {/* End Splash Screen */}
    </div>
  );
}

export default Splash;
