import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
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
import { useState, useContext } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { myContext } from "../context/MyContext";

export default function Footer() {
  const [show, setShow] = useState(false);
  const { myData, getData, filteredData, setFilteredData } =
    useContext(myContext);

  const handleShow = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  const navigate = useNavigate();
  const redirectToLogin = () => {
    navigate("/login");
  };

  // * FORMAT TIMESTAMP JSON ENTRY

  const messageDate = (time) => {
    return new Date(time * 1000).toLocaleTimeString("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // * POPULATE FILTER DROPDOWNS WITH UNIQUE ITEMS

  const selectUniqueCreators = (array) => {
    let items = [];
    array.map((element) => {
      if (typeof element.dcCreator == "undefined") {
        items.push("Kein Eintrag");
      } else {
        items.push(element.dcCreator[0]);
      }
    });
    let uniqueItems = [...new Set(items)];
    return uniqueItems;
  };

  const selectUniqueInstitutions = (array) => {
    let items = [];
    array.map((element) => {
      if (typeof element.dataProvider == "undefined") {
        items.push("Kein Eintrag");
      } else {
        items.push(element.dataProvider[0]);
      }
    });
    let uniqueItems = [...new Set(items)];
    return uniqueItems;
  };

  // * FILTER SEARCH RESULT in LIST

  const handleChangeInstitutions = (event) => {
    let filteredItems = [{ items: [] }];
    filteredItems.items = filteredData.items.filter((item) => {
      return item.dataProvider.includes(event.target.value);
    });
    console.log("Filtered item: ", filteredItems);
    setFilteredData(filteredItems);
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
                  onChange={handleChangeInstitutions}
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  {myData &&
                    selectUniqueInstitutions(myData.items).map((element) => {
                      return <MenuItem value={element}>{element}</MenuItem>;
                    })}
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
                  {myData &&
                    selectUniqueCreators(myData.items).map((element) => {
                      return <MenuItem value={element}>{element}</MenuItem>;
                    })}
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
                  {myData &&
                    myData.items.map((element) => {
                      return (
                        <MenuItem value={messageDate(element.timestamp)}>
                          {messageDate(element.timestamp)}
                        </MenuItem>
                      );
                    })}
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
