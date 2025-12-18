import { z } from "zod";

// 회원가입 유효성 검사를 위한 zod shema
export const signupSchema = z
  .object({
    id: z
      .string()
      .min(4, "아이디는 4자 이상만 가능합니다.")
      .max(12, "아이디는 12자 이하만 가능합니다."),
    password: z.string().min(8, "비밀번호는 8자 이상"),
    passwordConfirm: z.string(),
    email: z.email("이메일 형식이 아닙니다"),
    emailConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    // password와 일치하는지 검사
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirm"],
  })
  .refine((data) => data.email === data.emailConfirm, {
    // 이메일이 일치하는지 검사
    message: "이메일이 일치하지 않습니다",
    path: ["emailConfirm"],
  });
