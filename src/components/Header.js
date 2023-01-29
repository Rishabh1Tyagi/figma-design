import React from "react";
// import header c.s.s
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>Referral Status</h1>
        <input type="text" placeholder="Search" />
      </header>
      <div className="card">
        <div className="container">
          <table className="candidate-list">
            <tbody>
              <tr>
                <th>Candidate</th>
                <th>Referred</th>
                <th>Interviewed</th>
                <th>Hired</th>
                <th>Joined</th>
                <th>Reward</th>
              </tr>
            </tbody>
          </table>
        </div>
        {/* first div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Engineer</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>3</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle done">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* first div ends here */}
        {/* second div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* second div ends here */}
        {/* third div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>3</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* third div ends here */}
        {/* fourth div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* fourth div ends here */}
        {/* fifth div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step ">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* fifth div ends here */}
        {/* sixth div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* sixth div ends here */}
        {/* seventh div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* seventh div ends here */}
        {/* eighth div start here */}
        <div className="md-stepper-horizontal green">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div style={{ marginLeft: "25px" }}>
              <h2 style={{ fontSize: "20px" }}>Anmol Mahajan</h2>
              <p>Sr. Eng</p>
            </div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>1</span>
            </div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>2</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step active done">
            <div className="md-step-circle">
              <span>3</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <div className="md-step-circle">
              <span>.</span>
            </div>
            <div className="md-step-bar-left"></div>
            <div className="md-step-bar-right"></div>
          </div>
          <div className="md-step">
            <h2>$2000</h2>
            <div className="md-step-bar-right"></div>
          </div>
        </div>
        {/* eighth div ends here */}
      </div>
    </>
  );
};

export default Header;
