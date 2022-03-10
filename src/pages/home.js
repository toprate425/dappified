import { Typography } from "@material-ui/core";
import Welcomepage from "../component/Welcomepage";
import PlacePage from "../component/PlacePage";
import ExplorerPage from "../component/ExplorerPage";
import ControlPage from "../component/ControlPage";
import LearnPage from "../component/LearnPage";
import CommunityPage from "../component/CommunityPage";
import FooterPage from "../component/FooterPage";

function About() {
  return (
    <div className="main-content">
      <Welcomepage />
      <PlacePage />
      <ExplorerPage />
      <ControlPage />
      <LearnPage />
      <CommunityPage />
      <FooterPage />
    </div>
  );
}
export default About;