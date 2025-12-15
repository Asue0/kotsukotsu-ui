import { AxiosInstance, AxiosResponse } from "axios";
// import ApiResponse from "@/types/utils/ApiResponse.type.ts";
// import { ResponseCode } from "@/common/utils/ResponseCodeUtil.ts";

/** 로그인 시스템이 있는 경우 (로그인 확인 절차를 포함한 코드) */
// export const setResponseInterceptor = (instance: AxiosInstance) => {
//   instance.interceptors.response.use(
//     (response: AxiosResponse) => {
//       return response;
//     },
//     async (error) => {
//       const prevRequest = error?.config;
//       if (error.response.status == 401 && !prevRequest.sent) {
//         prevRequest.sent = true;

//         try {
//           const response: ApiResponse<unknown> = await postRefreshToken();

//           if (
//             response.status == 200 &&
//             response.code == ResponseCode.SUCCESS.code
//           ) {
//             return instance(prevRequest);
//           } else {
//             await postLogoutRequest();
//             return Promise.reject(error);
//           }
//         } catch (e) {
//           await postLogoutRequest();
//           return Promise.reject(e);
//         }
//       }
//       return Promise.reject(error);
//     }
//   );
// };

export const setResponseInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
