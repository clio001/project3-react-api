import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
  Typography,
  ListItem,
  Checkbox,
  Divider,
  Button,
} from "@mui/material";
import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function Bookmarks() {
  return (
    <>
      <div
        style={{
          display: "block",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box sx={{ padding: "1.5rem" }}>
          <Typography
            variant="h4"
            component="h2"
            mb={3}
            style={{ fontFamily: "Gloria Hallelujah" }}
          >
            Meine Sammlung
          </Typography>
          <Typography color="text.secondary">
            Bearbeite deine Sammlung und erstelle ein PDF
          </Typography>
        </Box>
      </div>
      <div>
        <Box>
          <Box>
            <List style={{ width: "100%" }}>
              <ListItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                }}
              >
                <Checkbox color="secondary" />

                <ListItemText>
                  Test title for bookmarked item, Test title for bookmarked item
                </ListItemText>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteOutlineIcon color="secondary" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                }}
              >
                <Checkbox color="secondary"></Checkbox>

                <ListItemText>
                  Test title for bookmarked item, Test title for bookmarked item
                </ListItemText>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteOutlineIcon color="secondary" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
              <ListItem
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "start",
                }}
              >
                <Checkbox color="secondary"></Checkbox>

                <ListItemText>
                  Test title for bookmarked item, Test title for bookmarked item
                </ListItemText>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteOutlineIcon color="secondary" />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <Box m={3} style={{ display: "flex", justifyContent: "center" }}>
              <Button variant="contained" color="secondary">
                {" "}
                Erstelle PDF
              </Button>
            </Box>
          </Box>
        </Box>
      </div>
    </>
  );
}
