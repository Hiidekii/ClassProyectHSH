import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, MenuList, MenuItem, Divider, TextField, Select, InputLabel, ListItemIcon } from "@mui/material"
import { CardContent, Grid } from "@mui/material"
import { Container, Card } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import StarIcon from '@mui/icons-material/Star';

const MainPage = () => {
    const [drawerOpen, setDrawerOpen] = useState(false)

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onMenuCLose = () => {
        setDrawerOpen(false)
    }

    return <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={onMenuIconClick}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Equipos
                </Typography>

            </Toolbar>
        </AppBar>
        <Drawer variant="temporary"
            anchor="left"
            onClose={onMenuCLose}
            open={drawerOpen}>
            <List>
                <ListItem>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
                <ListItem>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
            </List>
        </Drawer>
        <Container sx={{ mt: 2 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Equipo 1
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Cristiano Ronaldo"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Lionel Messi"} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Equipo 2
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Cristiano Ronaldo"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Lionel Messi"} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Equipo 3
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Cristiano Ronaldo"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Lionel Messi"} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={4}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Equipo 4
                            </Typography>
                            <List>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Cristiano Ronaldo"} />
                                </ListItem>
                                <ListItem>
                                    <ListItemIcon>
                                        <StarIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={"Lionel Messi"} />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    </Box>
}

export default MainPage