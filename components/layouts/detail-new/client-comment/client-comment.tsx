import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
type Props = {};

const ClientComment = (props: Props) => {
  const top100Films = [
    { label: "News", year: 1994 },
    { label: "OLd", year: 1972 },
  ];
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div className="clscoment">
      <div className="clscoment-content">
        <h2 className="clscoment-title">Comment</h2>
        <div className="clscoment-action">
          <h3> số bình luận 0</h3>
          <FormControl sx={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">New/Old</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="New/Old"
              onChange={handleChange}
            >
              <MenuItem value={10}>New</MenuItem>
              <MenuItem value={20}>Old</MenuItem>
            </Select>
          </FormControl>
          {/* <Autocomplete
            options={top100Films}
            size="small"
            renderInput={(params) => <TextField {...params} label="News/Old" />}
          /> */}
        </div>

        <Box
          component="form"
          sx={{
            width: "100%",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            sx={{
              width: "100%",
            }}
            id="outlined-basic"
            label="Pleased login"
            variant="outlined"
          />
        </Box>
      </div>
    </div>
  );
};

export default ClientComment;
