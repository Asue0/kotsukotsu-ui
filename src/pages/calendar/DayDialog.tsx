import { RecordDataType } from "@/types/calendar/recordTableType.type";
import { Dialog, DialogTitle } from "@mui/material";

export interface DayDialogProps {
  open: boolean;
  onClose: () => void;
  data: RecordDataType[] | null;
}

export const DayDialog = (props: DayDialogProps) => {
  const { onClose, open, data } = props;

  //   const handleClose = () => {
  //     onClose();
  //   };

  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>Set backup account</DialogTitle>
      {/* <List sx={{ pt: 0 }}>
        {emails.map((email) => (
          <ListItem disablePadding key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton
            autoFocus
            onClick={() => handleListItemClick('addAccount')}
          >
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Add account" />
          </ListItemButton>
        </ListItem>
      </List> */}
    </Dialog>
  );
};
