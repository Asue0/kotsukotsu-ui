export const modalBoxSx = {
  border: "1px solid gray",
  borderRadius: "3px",
  position: "relative",
  "&:hover": {
    boxShadow: "4px 4px 12px rgba(0, 0, 0, 0.25)",
  },
  cursor: "pointer",
  transition: "box-shadow 0.2s ease-in-out",
};

export const modalPaperPropsSx = {
  backgroundColor: "#FFF9C4",
  padding: 2,
  width: 300,
  maxHeight: 400, // 최대 높이 제한
  overflowY: "auto", // 세로 스크롤
  overflowX: "hidden",
};

export const memoBoxSx = {
  minWidth: 0, // Flex layout에서 가끔 minWidth 때문에 발생하는 overflow 오류 방지용
  textAlign: "center",
};

// 강제 줄바꿈을 위한 설정
export const modalMemoSx = {
  whiteSpace: "pre-wrap", // 줄바꿈 유지
  wordBreak: "break-word", // 긴 단어 강제 줄바꿈
  overflowWrap: "break-word", // width 넘어가기 방지
};
