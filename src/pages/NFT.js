import { Typography } from "@material-ui/core";
import SideBar from "../component/NFT/SideBar";
import Portfolio from "../component/NFT/Portfolio";
import FooterPage from "../component/FooterPage";

function NFT() {
  return (
    <div className="main-content">
      <div style={{ background: "rgb(33 33 76)", display: 'flex', marginBottom: 4, padding: 15}}>
        <SideBar />
        <Portfolio />
      </div>
    </div>
  );
}
export default NFT;
