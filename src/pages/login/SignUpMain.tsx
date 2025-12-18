import { signupSchema } from "@/types/login/signupSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import z from "zod";

type FormData = z.infer<typeof signupSchema>;

const SignUpMain = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(signupSchema) });

  return (
    <form onSubmit={handleSubmit(console.log)}>
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
          width={600}
          sx={{ backgroundColor: "aqua" }}
        >
          <Typography variant="h4">KotsuKotsu에 회원가입</Typography>
          <TextField
            label="아이디"
            variant="outlined"
            error={!!errors.id}
            helperText={errors.id?.message}
            {...register("id")}
          />
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            error={!!errors.password}
            helperText={errors.password?.message}
            {...register("password")}
          />
          <TextField
            label="비밀번호 확인"
            type="password"
            variant="outlined"
            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
            {...register("passwordConfirm")}
          />
          <TextField
            label="이메일"
            variant="outlined"
            error={!!errors.email}
            helperText={errors.email?.message}
            {...register("email")}
          />
          <TextField
            label="이메일 확인"
            variant="outlined"
            error={!!errors.emailConfirm}
            helperText={errors.emailConfirm?.message}
            {...register("emailConfirm")}
          />
          <TextField label="전화번호" variant="outlined" />
          <Button type="submit" variant="contained" size="large">
            등록
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default SignUpMain;
