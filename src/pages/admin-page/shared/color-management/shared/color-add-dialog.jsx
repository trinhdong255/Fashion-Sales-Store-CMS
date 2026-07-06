import { TextField } from "@mui/material";
import AddDialog from "@/components/dialog/add-dialog";

const ColorAddDialog = ({
  open,
  onClose,
  onSubmit,
  newColor,
  setNewColor,
  submitted,
}) => {
  return (
    <AddDialog
      open={open}
      onClose={onClose}
      onSubmit={onSubmit}
      title="Thêm màu sắc"
    >
      <TextField
        required
        label="Tên màu sắc"
        value={newColor.name}
        onChange={(e) =>
          setNewColor({
            newColor,
            name: e.target.value,
          })
        }
        fullWidth
        sx={{ mt: 2 }}
        error={submitted && !newColor.name}
        helperText={
          submitted && !newColor.name ? "name không được để trống" : ""
        }
      />
    </AddDialog>
  );
};

export default ColorAddDialog;
