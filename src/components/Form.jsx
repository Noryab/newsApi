import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
} from "@mui/material";
import useNews from "../hooks/useNews";

const CATEGORIES = [
  { value: "0", label: "Colonias" },
  { value: "General", label: "General" },
  { value: "2", label: "Bussiness" },
  { value: "3", label: "Science" },
  { value: "4", label: "Polit" },
];

const Form = () => {
  const { category, handleChangeCategory } = useNews();
  return (
    <form>
      <FormControl fullWidth>
        <InputLabel>Category</InputLabel>
        <Select
          label="Category"
          onChange={handleChangeCategory}
          value={category}
        >
          {CATEGORIES.map((category) => (
            <MenuItem key={category.value} value={category.value}>
              {category.label}
            </MenuItem>
          ))}
        </Select>

        <Box sx={{ marginTop: 2 }}>
          <Button fullWidth variant="contained" color="primary">
            Search news
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default Form;
