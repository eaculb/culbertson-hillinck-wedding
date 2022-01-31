import React, { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

// import RsvpButton from "./RsvpButton";
import NavLink from "@/components/NavLink";
import { theme } from "@/src/theme";

export default function Menu() {
  const isSmall = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const toggleDrawer = useCallback(
    () => setDrawerOpen(!drawerOpen),
    [drawerOpen, setDrawerOpen]
  );

  const router = useRouter();

  const handleRouteChange = () => setDrawerOpen(false);

  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  if (isSmall) {
    return (
      <Box sx={{ display: "flex" }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ height: theme.appBarHeight, px: 3, py: "auto" }}
        >
          <IconButton aria-label="menu" size="medium" onClick={toggleDrawer}>
            <MenuIcon fontSize="medium" />
          </IconButton>
        </Stack>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          sx={{
            [`& .MuiDrawer-paper`]: {
              backgroundColor: theme.palette.background.default,
              top: theme.appBarHeight,
            },
          }}
        >
          <List>
            <ListItem key="home">
              <NavLink mobile path="/home" label="Home" />
            </ListItem>
            <ListItem key="venue">
              <NavLink mobile path="/venue" label="Venue" />
            </ListItem>
            <ListItem key="travel">
              <NavLink mobile path="/travel" label="Travel" />
            </ListItem>
            <ListItem key="registry">
              <NavLink mobile path="/registry" label="Registry" />
            </ListItem>
            <ListItem key="faq">
              <NavLink mobile path="/faq" label="FAQ" />
            </ListItem>
            {/* <ListItem key="rsvp">
              <RsvpButton size="medium" fullWidth />
            </ListItem> */}
          </List>
        </Drawer>
      </Box>
    );
  }

  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      sx={{ height: theme.appBarHeight, px: 3, py: "auto" }}
    >
      <NavLink path="/home" label="Home" />
      <NavLink path="/venue" label="Venue" />
      <NavLink path="/travel" label="Travel" />
      <NavLink path="/registry" label="Registry" />
      <NavLink path="/faq" label="FAQ" />
      <Box sx={{ ml: 7 }}>{/* <RsvpButton size="medium" /> */}</Box>
    </Stack>
  );
}
