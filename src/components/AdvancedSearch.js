import React from "react";
import {
  Typography,
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
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { myContext } from "../context/MyContext";

export default function AdvancedSearch(props) {
  const {
    rights,
    handleReusability,
    handleSort,
    handleSlider,
    checkboxElement,
    fotothek,
    welle,
    handleWelle,
    handleFotothek,
    mark,
    random,
    score,
  } = useContext(myContext);

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
            control={
              <Checkbox
                ref={checkboxElement}
                color="secondary"
                size="small"
                checked={fotothek}
                value="Deutsche Fotothek"
                onChange={handleFotothek}
                id="fotothek"
              />
            }
            label="Deutsche Fotothek"
          />
          <FormControlLabel
            control={
              <Checkbox
                ref={checkboxElement}
                color="secondary"
                size="small"
                checked={welle}
                value="Deutsche Welle"
                onChange={handleWelle}
                id="welle"
              />
            }
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
            Sortierung
          </Typography>
        </Divider>

        <Box
          mt={1}
          ml={2}
          mb={2}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {" "}
          <Box>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              onChange={handleSort}
            >
              <FormControlLabel
                value="random+desc"
                control={
                  <Radio color="secondary" size="small" checked={random} />
                }
                label="Zufall"
              />
              <FormControlLabel
                value="score"
                control={
                  <Radio color="secondary" size="small" checked={score} />
                }
                label="Relevanz"
              />
            </RadioGroup>
          </Box>{" "}
        </Box>
        <Divider textAlign="left">
          <Typography variant="body2" color="text.secondary">
            Rechte
          </Typography>
        </Divider>
        <Box
          mt={1}
          ml={2}
          mb={2}
          style={{ display: "flex", flexDirection: "column" }}
        >
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
                <MenuItem value="Alle">
                  <em>Alle</em>
                </MenuItem>
                <MenuItem value="open">Open</MenuItem>
                <MenuItem value="restricted">Restricted</MenuItem>
                <MenuItem value="permission">Permission</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Divider textAlign="left">
          <Typography variant="body2" color="text.secondary">
            Anzahl der Resultate
          </Typography>
        </Divider>
        <Box
          mt={1}
          ml={2}
          mb={2}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Box sx={{ width: "18rem" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Slider
                defaultValue={mark}
                /* getAriaValueText={valuetext} */
                valueLabelDisplay="auto"
                step={10}
                marks
                min={10}
                max={100}
                color="secondary"
                onChange={handleSlider}
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
