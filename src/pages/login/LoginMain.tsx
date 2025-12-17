import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const LoginMain = () => {
  return (
    <Box
      display="flex"
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        direction="column"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
        rowSpacing={2}
      >
        <Grid>
          <Typography>KotsuKotsu에 로그인</Typography>
        </Grid>
        <Grid>
          <TextField label="아이디" variant="outlined" />
        </Grid>
        <Grid>
          <TextField label="비밀번호" type="password" variant="outlined" />
        </Grid>
        <Grid>
          <Button variant="contained">로그인</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginMain;
