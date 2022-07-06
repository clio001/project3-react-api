import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationAction } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ForumIcon from "@mui/icons-material/Forum";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
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
import { AuthContext } from "../context/AuthContext";
//TODO the filter function needs to be fixed

export default function Footer() {
  const [show, setShow] = useState(false);
  const { myData, getData, filteredData, setFilteredData } =
    useContext(myContext);
  const { status } = useContext(AuthContext);

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
    return new Date(time).toLocaleDateString("de-DE", {
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

  const selectUniqueYears = (array) => {
    messageDate(array);
    let items = [];
    array.map((element) => {
      if (typeof element.timestamp == "undefined") {
        items.push("Kein Eintrag");
      } else {
        items.push(element.timestamp);
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
    setFilteredData(filteredItems);
  };

  const handleChangeCreators = (event) => {
    let filteredItems = [{ items: [] }];
    filteredItems.items = filteredData.items.filter((item) => {
      return item.dcCreator.includes(event.target.value);
    });
    setFilteredData(filteredItems);
  };

  const handleChangeDates = (event) => {
    console.log("Click event: ", event.target.value);
    let filteredItems = [{ items: [] }];
    filteredItems.items = filteredData.items.filter((item) => {
      console.log("Item: ", item.timestamp);
      return item.timestamp.includes(event.target.value);
    });
    console.log("Filtered dates: ", filteredItems.items);
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
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {status && (
          <BottomNavigationAction
            label="Recents"
            icon={
              <Link to="/chat">
                <ForumIcon color="secondary" />
              </Link>
            }
          />
        )}
        <BottomNavigationAction
          onClick={handleShow}
          label="Recents"
          icon={<FilterListIcon color="secondary" />}
        />
        {status && (
          <BottomNavigationAction
            label="Recents"
            icon={
              <Link to="/bookmarks">
                <CollectionsBookmarkIcon color="secondary" />
              </Link>
            }
          />
        )}
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
                  defaultValue=""
                  onChange={handleChangeInstitutions}
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  {myData &&
                    selectUniqueInstitutions(myData.items).map(
                      (element, index) => {
                        return (
                          <MenuItem value={element} key={index}>
                            {element}
                          </MenuItem>
                        );
                      }
                    )}
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
                  defaultValue=""
                  onChange={handleChangeCreators}
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  {myData &&
                    selectUniqueCreators(myData.items).map((element, index) => {
                      return (
                        <MenuItem value={element} key={index}>
                          {element}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box>

            {/*  <Box
              mt={2}
              mb={2}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <FormControl sx={{ width: "18rem" }} size="small">
                <InputLabel id="demo-select-large" color="secondary">
                  Datum
                </InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  label="Datum"
                  color="secondary"
                  defaultValue=""
                  onChange={handleChangeDates}
                >
                  <MenuItem value="">
                    <em>Alle</em>
                  </MenuItem>
                  {myData &&
                    selectUniqueYears(myData.items).map((element, index) => {
                      return (
                        <MenuItem value={element} key={index}>
                          {messageDate(element)} Uhr
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            </Box> */}

            <Divider />
            <Box sx={{ textAlign: "center" }} m={2}>
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
