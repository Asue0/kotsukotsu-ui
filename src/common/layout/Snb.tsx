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
        r.children ? (
          r.children.map((s) => (
            // <ListItemButton key={s.path}>
            //   <ListItemText primary={s.handle.title} />
            // </ListItemButton>

            <ListItemButton
              key={s.path}
              component={NavLink}
              to={s.path}
              sx={{
                "&.active": {
                  bgcolor: "primary.main",
                  color: "primary.contrastText",
                },
              }}
            >
              <ListItemText primary={s.handle.title} />
            </ListItemButton>
          ))
        ) : (
          <></>
        )
      )}
    </List>
  );
};

export default Snb;
