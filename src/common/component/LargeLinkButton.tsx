import { Button, ButtonProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

type LargeLinkButtonProps = ButtonProps & {
  to: string;
};

const LargeLinkButton = ({ children, to, ...props }: LargeLinkButtonProps) => {
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

export default LargeLinkButton;
