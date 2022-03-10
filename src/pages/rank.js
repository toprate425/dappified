import { Typography } from "@material-ui/core";
import FooterPage from "../component/FooterPage";
import DappRanking from "../component/Rank/DappRanking";

function About() {
  return (
    <div className="main-content">
        <DappRanking />
        <FooterPage />
    </div>
  );
}
export default About;