import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material"

const ModalFormularioEquipo = (props) => {
    return <Dialog
        open={props.modalOpen}
        onClose={props.onModalClose}>
        <DialogTitle>
            Nuevo Equipo
        </DialogTitle>
        <DialogContent>
            <TextField label="Nombre"
                variant="outlined" />
            <hr />
            <h4>Integrantes</h4>
            <TextField label="Nombre Integrante"
                variant="outlined"
                sx={{ mr: 1 }} />
            <TextField label="Codigo"
                variant="outlined"
                sx={{ mr: 1 }} />
            <Button variant="contained">
                +
            </Button>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Nombre
                            </TableCell>
                            <TableCell>
                                Codigo
                            </TableCell>
                            <TableCell>
                                Acciones
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        No hay Integrantes
                    </TableBody>
                </Table>
            </TableContainer>
        </DialogContent>
        <DialogActions>
            <Button variant="contained">
                Guardar
            </Button>
            <Button variant="contained">
                Cancelar
            </Button>
        </DialogActions>
    </Dialog>
}

export default ModalFormularioEquipo