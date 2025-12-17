import { Button, ButtonProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type LinkButtonProps = ButtonProps & {
  to: string;
};

const LargeButton = ({ children, to, ...props }: LinkButtonProps) => {
  return (
    <Button
      component={RouterLink}
      to={to}
      variant="contained"
      size="large"
      {...props}
    >
      {children}
    </Button>
  );
};

export default LargeButton;
