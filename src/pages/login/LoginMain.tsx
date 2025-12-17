import LargeButton from "@/common/component/LargeButton";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LoginMain = () => {
  return (
    <Box
      display="flex"
      sx={{ width: "100%", height: "100%" }}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flexDirection="column"
        textAlign="center"
        mx="auto"
        p={1}
        gap={2}
        width={400}
        sx={{ backgroundColor: "aqua" }}
      >
        <Typography variant="h5">KotsuKotsu에 로그인</Typography>
        <TextField label="아이디" variant="outlined" />
        <TextField label="비밀번호" type="password" variant="outlined" />
        <LargeButton to="/test2">로그인</LargeButton>
        <LargeButton to="/test">회원가입</LargeButton>
        <Button component={RouterLink} to="test">
          로그인
        </Button>
        <Button component={RouterLink} to="test2">
          회원가입
        </Button>

        <Box display="flex" mx="auto" gap={2}>
          {/* <Typography>아이디 찾기</Typography> */}
          <Link
            component={RouterLink}
            to="/test"
            variant="body2"
            underline="hover"
            color="text.secondary"
          >
            아이디 찾기
          </Link>
          <Link
            component={RouterLink}
            to="/test2"
            variant="body2"
            underline="hover"
            color="text.secondary"
          >
            비밀번호 찾기
          </Link>
        </Box>
        <Box display="flex" mx="auto" mt={2} gap={2}>
          <Button variant="contained" size="large">
            구글 아이디로 로그인
          </Button>
          <Button variant="contained" size="large">
            네이버 아이디로 로그인
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginMain;
