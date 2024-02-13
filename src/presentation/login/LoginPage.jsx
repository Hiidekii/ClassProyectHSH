import { Alert, Box, Button, Container, TextField } from "@mui/material"
import CheckIcon from "@mui/icons-material/Check"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loginIncorrecto, setLoginIncorrecto] = useState(false)
    const [dataUsuarios, setDataUsuarios] = useState([])

    const obtenerUsuariosHTTP = async () => {
        const response = await fetch("http://localhost:3000/usuarios.json")
        const data = await response.json()
        setDataUsuarios(data)
    }

    //Creamos objeto para navegacion programatica
    const navigate = useNavigate()

    const usernameOnChangeHandler = (event) => {
        setUsername(event.target.value)
    }

    const passwordOnChangeHandler = (event) => {
        setPassword(event.target.value)
    }

    const loginOnClick = () => {
        const listaFiltrada = dataUsuarios.filter((elem) => {
            return elem.username === username && elem.password === password
        })

        if (listaFiltrada.length > 0) {
            //Hay por lo menos un usuario
            console.log("Login Correcto")

            //Almacenando en localStorage
            localStorage.setItem("USERNAME", username)

            navigate("/main", {
                state: {
                    username: username
                }
            })
        } else {
            console.log("Login Incorrecto")
            setLoginIncorrecto(true)
        }
    }

    useEffect(() => {
        obtenerUsuariosHTTP()
    }, [])

    return <Container maxWidth="sm">
        <Box component="form"
            noValidate
            autoComplete="off"
            style={{ textAlign: "center" }}>

            <h1>Login</h1>
            <div>
                <TextField required
                    label="Username"
                    margin="normal"
                    value={username}
                    onChange={usernameOnChangeHandler} />
            </div>
            <div>
                <TextField required
                    type="password"
                    label="Password"
                    margin="normal"
                    value={password}
                    onChange={passwordOnChangeHandler} />
            </div>
            <div>
                <Button
                    variant="contained"
                    style={{ marginRight: "8px" }}
                    onClick={loginOnClick}>
                    Login
                </Button>
                <Button variant="contained">Registro</Button>
            </div>
            {
                (() => {
                    if (loginIncorrecto) {
                        return <Alert
                            icon={<CheckIcon fontSize="inherit" />}
                            severity="error"
                            sx={{ mt: 2 }}>
                            Here is a gentle confirmation that your action was successful.
                        </Alert>
                    }
                })() //funcion anonima, devulve una funcion pero le pedimos que se ejecute aqui mismo
            }

        </Box>
    </Container>
}

export default LoginPage