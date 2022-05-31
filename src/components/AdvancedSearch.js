import React from "react";
import {
  Typography,
  FormLabel,
  Menu,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Box,
  Button,
  Divider,
  Slider,
  Radio,
  RadioGroup,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState, useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { myContext } from "../context/MyContext";

export default function AdvancedSearch(props) {
  const { rights, handleReusability, media, handleMedia, handleSort } =
    useContext(myContext);

  const open = props.open;
  const handleClose = props.handleClose;
  const anchorEl = props.anchor;

  const marks = [
    {
      value: 20,
      label: "20",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 60,
      label: "60",
    },
    {
      value: 80,
      label: "80",
    },
    {
      value: 100,
      label: "100",
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Box sx={{ width: "25rem" }}>
        <Box m={2}>
          <Typography variant="h6">Erweiterte Suche</Typography>
        </Box>
        <Divider textAlign="left">
          <Typography variant="body2" color="text.secondary">
            Sammlungen
          </Typography>
        </Divider>
        <Box ml={2} mb={2} style={{ display: "flex", flexDirection: "column" }}>
          <FormControlLabel
            control={<Checkbox color="secondary" size="small" defaultChecked />}
            label="Deutsche Fotothek"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" size="small" disabled />}
            label="Deutsche Welle"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" size="small" disabled />}
            label="Landesarchiv Berlin"
            size="small"
          />
        </Box>
        <Divider textAlign="left">
          <Typography variant="body2" color="text.secondary">
            Weitere Parameter
          </Typography>
        </Divider>
        <Box
          mt={2}
          ml={2}
          mb={2}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {" "}
          <Box mb={1}>
            <FormControl sx={{ width: "18rem" }} size="small">
              <InputLabel id="demo-select-large" color="secondary">
                Rechte
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={rights}
                label="Rechte"
                color="secondary"
                onChange={handleReusability}
              >
                <MenuItem value="">
                  <em>Alle</em>
                </MenuItem>
                <MenuItem value="&reusability=open">Open</MenuItem>
                <MenuItem value="&reusability=restricted">Restricted</MenuItem>
                <MenuItem value="&reusability=permission">Permission</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSort}
            >
              <FormControlLabel
                value="random+desc"
                control={<Radio color="secondary" size="small" />}
                label="Zufall"
              />
              <FormControlLabel
                value="score"
                control={<Radio color="secondary" size="small" />}
                label="Relevanz"
              />
            </RadioGroup>
          </Box>
          <Box>
            <FormControlLabel
              control={<Checkbox color="secondary" size="small" />}
              label="Medien vorhanden"
              onChange={handleMedia}
            />
          </Box>
          <Box sx={{ width: "18rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              mb={1}
            >
              <Typography variant="body2" mr={1}>
                Resultate
              </Typography>
              <Slider
                defaultValue={20}
                /* getAriaValueText={valuetext} */
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
                color="secondary"
              />
            </Box>
          </Box>
        </Box>

        <Divider />
        <Box sx={{ textAlign: "end" }} mr={11} mt={2} mb={1}>
          <Button variant="outlined" color="secondary" onClick={handleClose}>
            <CheckIcon />
          </Button>
        </Box>
      </Box>
    </Menu>
  );
}
