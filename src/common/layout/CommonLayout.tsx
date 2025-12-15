import { ExtendedMatch } from "@/types/common/ExtendedMatch";
import { Outlet, useMatches } from "react-router-dom";
import Snb from "./Snb";
import "@styles/mainTitle.scss";
import { Box, Card } from "@mui/material";

const CommonLayout = () => {
  const matches = useMatches() as ExtendedMatch[];
  const title =
    matches.reverse().find((match) => match.handle?.title)?.handle?.title ||
    "Default Title";
  return (
    <>
      {/*<Header/>*/}
      {/*<main>*/}
      {/* <Outlet/>*/}
      {/*</main>*/}
      <main>
        <div className="main_title_box">
          <span className="title_name">KotsuKotsu</span>
        </div>

        <Box display="flex">
          <Snb />
          <Card sx={{ height: 800, width: "100%", m: 1, p: 3 }}>
            <Outlet />
          </Card>
        </Box>

        <div style={{ clear: "both" }} />

        {title}
      </main>
    </>
  );
};
export default CommonLayout;
