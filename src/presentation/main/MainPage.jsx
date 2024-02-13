import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button } from "@mui/material"
import { Container } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import GrillaEquipos from "./components/GrillaEquipos";
import ModalFormularioEquipo from "./components/ModalFormularioEquipo";

const MainPage = () => {
    const [dataEquipos, setDataEquipos] = useState([])
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)

    const obtenerEquiposHTTP = () => {
        // const promesa = fetch("http://localhost:3000/equipos.json")
        // const promesaJS = promesa.then((response) => {
        //     return response.json()
        // })
        // promesaJS.then((data) => {
        //     console.log(data)
        // })                                                             Paso por paso y directo

        fetch("http://localhost:3000/equipos.json").then((response) => {
            return response.json()
        }).then((data) => {
            setDataEquipos(data)
        }).catch((error => {
            console.log(error)
        }))
    }

    obtenerEquiposHTTP()

    const onMenuIconClick = () => {
        setDrawerOpen(true)
    }

    const onMenuCLose = () => {
        setDrawerOpen(false)
    }

    const onModalOpenClick = () => {
        setModalOpen(true)
    }

    const onModalClose = () => {
        setModalOpen(false)
    }

    useEffect(() => { //para no entrar en bucle cada vez q se cambie el estado de una variable
        obtenerEquiposHTTP()
    }, [])

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
                <ListItem key={"menu1"}>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
                <ListItem key={"menu2"}>
                    <ListItemText primary={"Menu 1"} />
                </ListItem>
            </List>
        </Drawer>
        <Container sx={{ mt: 2 }}>
            <Button variant="contained"
                sx={{ mb: 2 }}
                onClick={onModalOpenClick}>
                +
            </Button>
            <GrillaEquipos listaEquipos={dataEquipos} />
        </Container>
        <ModalFormularioEquipo
            modalOpen={modalOpen}
            onModalClose={onModalClose} />
    </Box >
}

export default MainPage