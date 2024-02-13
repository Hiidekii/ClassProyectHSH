import { Box, AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Button, MenuList, MenuItem, Divider, TextField, Select, InputLabel } from "@mui/material"
import { Container } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from "react";
import GrillaEquipos from "./components/GrillaEquipos";
import ModalFormularioEquipo from "./components/ModalFormularioEquipo";
import { useNavigate } from "react-router-dom";
import { SentimentSatisfiedAltRounded } from "@mui/icons-material";
//import { useLocation } from "react-router-dom";

const MainPage = () => {
    const [dataEquipos, setDataEquipos] = useState([])
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [modalOpen, setModalOpen] = useState(false)
    const [filtro, setFiltro] = useState("")
    const [filtroAnho, setFiltroAnho] = useState("-")

    const navigate = useNavigate()

    //const location = useLocation()

    const obtenerEquiposHTTP = async () => {
        // const promesa = fetch("http://localhost:3000/equipos.json")
        // const promesaJS = promesa.then((response) => {
        //     return response.json()
        // })
        // promesaJS.then((data) => {
        //     console.log(data)
        // })                                                             Paso por paso y directo

        // fetch("http://localhost:3000/equipos.json").then((response) => {
        //     return response.json()
        // }).then((data) => {
        //     setDataEquipos(data)
        // }).catch((error => {
        //     console.log(error)
        // }))                                                            Mejor hacerlo con async await mas limpio

        const response = await fetch(
            `http://localhost:8000/proyectos/ver-equipos?nombre=${filtro}&anho=${filtroAnho}`
        ) //pregunta? cosultar solo la primera vez y luego almacenar en cache
        const data = await response.json()

        const listaEquiposStr = JSON.stringify(data) //convertismos de js a string
        sessionStorage.setItem("EQUIPOS", listaEquiposStr) //guardamos en el local storage

        setDataEquipos(data)
    }

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

    const logoutOnClick = () => {
        sessionStorage.clear() //se borra todo lo que este guardado en el sessionStorage
        navigate("/")
    }

    useEffect(() => { //para no entrar en bucle cada vez q se cambie el estado de una variable
        if (sessionStorage.getItem("USERNAME") == null) {
            navigate("/")
        }

        const equiposStr = sessionStorage.getItem("EQUIPOS") //validamos que solo se llama la primera vez
        if (equiposStr == null) {
            obtenerEquiposHTTP()
        } else {
            const equipos = JSON.parse(equiposStr) //parseamos de string a lista objetos js
            setDataEquipos(equipos)
        }

    }, [])

    useEffect(() => {
        obtenerEquiposHTTP()
    }, [filtro, filtroAnho])

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
                    {`Equipos (${sessionStorage.getItem("USERNAME")})`}
                </Typography>

            </Toolbar>
        </AppBar>
        <Drawer variant="temporary"
            anchor="left"
            onClose={onMenuCLose}
            open={drawerOpen}>
            <MenuList>
                <MenuItem key={"menu1"}>
                    Menu 1
                </MenuItem>
                <MenuItem key={"menu2"}>
                    Menu 2
                </MenuItem>
                <Divider />
                <MenuItem key={"logout"}
                    onClick={logoutOnClick}>
                    Logout
                </MenuItem>
            </MenuList>
        </Drawer>
        <Container sx={{ mt: 2 }}>
            <Button variant="contained"
                sx={{ mb: 2 }}
                onClick={onModalOpenClick}>
                +
            </Button>
            <TextField type="text"
                placeholder="Filtro"
                sx={{ mb: 2, ml: 2, mr: 2 }}
                value={filtro}
                onChange={(event) => {
                    setFiltro(event.target.value)
                }} />
            <Select label={"Año"}
                value={filtroAnho}
                onChange={(event) => { setFiltroAnho(event.target.value) }}>
                <MenuItem value={"-"}>Todos</MenuItem>
                <MenuItem value={"2023"}>2023</MenuItem>
                <MenuItem value={"2024"}>2024</MenuItem>
            </Select>
            <GrillaEquipos listaEquipos={dataEquipos} />
        </Container>
        <ModalFormularioEquipo
            modalOpen={modalOpen}
            onModalClose={onModalClose} />
    </Box >
}

export default MainPage