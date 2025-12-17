import { List, ListItemButton, ListItemText } from "@mui/material";
import UserRoutes from "@/routes/user/UserRoutes";
import { NavLink } from "react-router-dom";

const Snb = () => {
  /** hooks */
  //   const [open, setOpen] = useState(false);
  const routes = UserRoutes;

  return (
    <List sx={{ width: 200 }}>
      {routes.map((r) =>
        r.children?.map((s) =>
          // <ListItemButton key={s.path}>
          //   <ListItemText primary={s.handle.title} />
          // </ListItemButton>

          // Router 페이지의 showSnb 속성이 ture면 노출
          s.handle?.showSnb ? (
            <ListItemButton
              key={s.path}
              component={NavLink}
              to={s.path ? s.path : "/"} // 타입 오류를 없애기 위한 임시방편
              sx={{
                "&.active": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
            >
              <ListItemText primary={s.handle.title} />
            </ListItemButton>
          ) : (
            <></>
          )
        )
      )}
    </List>
  );
};

export default Snb;
