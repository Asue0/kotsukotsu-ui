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
        <Box
          display="flex"
          width="100%"
          height="100px"
          alignItems="center"
          p="10px"
          sx={{ backgroundColor: "aquamarine" }}
        >
          <span className="title_name">KotsuKotsu</span>
        </Box>
        <Box display="flex" width="1700px">
          <Snb />
          <Card sx={{ height: 900, width: "100%", m: 1, p: 3 }}>
            <Outlet />
          </Card>
        </Box>

        {title}
      </main>
    </>
  );
};
export default CommonLayout;
