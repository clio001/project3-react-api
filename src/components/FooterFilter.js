import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterListIcon from "@mui/icons-material/FilterList";
import Paper from "@mui/material/Paper";
import {
  Drawer,
  IconButton,
  Typography,
  Divider,
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const handleInstitution = () => {};

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, width: "100%" }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <IconButton onClick={handleShow}>
          <FilterListIcon color="secondary" />
        </IconButton>
      </BottomNavigation>
      <div style={{ height: "80%" }}>
        <Drawer
          anchor="bottom"
          variant="temporary"
          open={show}
          onClose={handleShow}
        >
          <Box>
            <Typography
              variant="h6"
              m={2}
              mt={3}
              style={{ textAlign: "center" }}
            >
              Ergebnisse filtern
            </Typography>
            <Divider textAlign="center">
              <Typography variant="body2" color="text.secondary">
                Parameter
              </Typography>
            </Divider>
            <Box
              mt={2}
              mb={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ width: "18rem" }} size="small">
                <InputLabel id="demo-select-large" color="secondary">
                  Institution
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Institution"
                  color="secondary"
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  <MenuItem value="Deutsche Fotothek">
                    Deutsche Fotothek
                  </MenuItem>
                  <MenuItem value="Deutsche Welle">Deutsche Welle</MenuItem>
                  <MenuItem value="Landesarchiv Berlin">
                    Landesarchiv Berlin
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              mt={2}
              mb={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ width: "18rem" }} size="small">
                <InputLabel id="demo-select-large" color="secondary">
                  Urheber:in
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Urheber:in"
                  color="secondary"
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  <MenuItem value="Deutsche Fotothek">
                    Deutsche Fotothek
                  </MenuItem>
                  <MenuItem value="Deutsche Welle">Deutsche Welle</MenuItem>
                  <MenuItem value="Landesarchiv Berlin">
                    Landesarchiv Berlin
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              mt={2}
              mb={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ width: "18rem" }} size="small">
                <InputLabel id="demo-select-large" color="secondary">
                  Kategorie
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Kategorie"
                  color="secondary"
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  <MenuItem value="Deutsche Fotothek">
                    Deutsche Fotothek
                  </MenuItem>
                  <MenuItem value="Deutsche Welle">Deutsche Welle</MenuItem>
                  <MenuItem value="Landesarchiv Berlin">
                    Landesarchiv Berlin
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box
              mt={2}
              mb={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ width: "18rem" }} size="small">
                <InputLabel id="demo-select-large" color="secondary">
                  Jahr
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Jahr"
                  color="secondary"
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  <MenuItem value="Deutsche Fotothek">
                    Deutsche Fotothek
                  </MenuItem>
                  <MenuItem value="Deutsche Welle">Deutsche Welle</MenuItem>
                  <MenuItem value="Landesarchiv Berlin">
                    Landesarchiv Berlin
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Divider />
            <Box sx={{ textAlign: "end" }} m={2}>
              <Button variant="outlined" color="secondary" onClick={handleShow}>
                <CheckIcon />
              </Button>
            </Box>
          </Box>
        </Drawer>
      </div>
    </Paper>
  );
}
