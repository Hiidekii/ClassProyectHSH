import { Box, Button, Container, TextField } from "@mui/material"


const LoginPage = () => {
    return <Container maxWidth="sm">
        <Box component="form"
            noValidate
            autoComplete="off"
            style={{ textAlign: "center" }}>

            <h1>Login</h1>
            <div>
                <TextField required
                    label="Username"
                    margin="normal" />
            </div>
            <div>
                <TextField required
                    type="password"
                    label="Password"
                    margin="normal" />
            </div>
            <div>
                <Button variant="contained" style={{ marginRight: "8px" }}>Login</Button>
                <Button variant="contained">Registro</Button>
            </div>
        </Box>
    </Container>
}

export default LoginPage