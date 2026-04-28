import { useState, ChangeEvent } from "react";
import { Button, Box } from "@mui/material";

const ImageUpload = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 유효성 검사1 = 타입 체크
    if (!file.type.startsWith("image/")) {
      alert("이미지 파일만 업로드 가능합니다.");
      return;
    }

    // 유효성 검사2 - 용량 제한 (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("파일 크기는 5MB 이하만 가능합니다.");
      return;
    }

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <Box
      sx={{
        display: "flex",
        mt: 1,
        flexDirection: "column",
        alignItems: "end",
        gap: 1,
      }}
    >
      <Box
        sx={{
          width: 250,
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // 이미지 크기 오버시 가리기
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt="preview"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        ) : (
          <img
            src="/img/noImage.jpg"
            alt="noImage"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        )}
      </Box>
      {/* component="label"은 Button을 라벨처럼 사용하겠다는 선언 */}
      <Button variant="contained" component="label">
        이미지 업로드
        <input type="file" hidden accept="image/*" onChange={handleChange} />
      </Button>
    </Box>
  );
};

export default ImageUpload;
