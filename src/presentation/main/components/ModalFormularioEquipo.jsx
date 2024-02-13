import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import TablaIntegrantes from "./TablaIntegrantes";
import { useState } from "react";

const ModalFormularioEquipo = (props) => {
    const [nombreEquipo, setNombreEquipo] = useState("")
    const [nombreIntegrante, setNombreIntegrante] = useState("")
    const [codigoIntegrante, setCodigoIntegrante] = useState("")
    const [listaIntegrantes, setListaIntegrantes] = useState([])

    const onNombreIntegranteChangeHandler = (event) => {
        setNombreIntegrante(event.target.value)
    }

    const onCodigoIntegranteChangeHandler = (event) => {
        setCodigoIntegrante(event.target.value)
    }

    const onNombreEquipoChangeHandler = (event) => {
        setNombreEquipo(event.target.value)
    }

    const agregarIntegranteOnClick = () => {
        if (nombreIntegrante == "" || codigoIntegrante == "") {
            return
        }
        const listaClonada = [...listaIntegrantes] //se debe clonar la lista para agregar
        listaClonada.push({
            nombre: nombreIntegrante,
            codigo: codigoIntegrante
        })
        setListaIntegrantes(listaClonada)
        setNombreIntegrante("")
        setCodigoIntegrante("")
    }

    const eliminarIntegranteOnClick = (indiceAEliminar) => {
        const listaClonada = [...listaIntegrantes]
        listaClonada.splice(indiceAEliminar, 1)
        setListaIntegrantes(listaClonada)
    }

    return <Dialog
        open={props.modalOpen}
        onClose={props.onModalClose}>
        <DialogTitle>
            Nuevo Equipo
        </DialogTitle>
        <DialogContent>
            <TextField label="Nombre Equipo"
                variant="outlined"
                value={nombreEquipo}
                onChange={onNombreEquipoChangeHandler} />
            <hr />
            <h4>Integrantes</h4>
            <TextField label="Nombre Integrante"
                variant="outlined"
                sx={{ mr: 1 }}
                value={nombreIntegrante}
                onChange={onNombreIntegranteChangeHandler} />
            <TextField label="Codigo"
                variant="outlined"
                sx={{ mr: 1 }}
                value={codigoIntegrante}
                onChange={onCodigoIntegranteChangeHandler} />
            <Button variant="contained"
                onClick={agregarIntegranteOnClick}>
                +
            </Button>
            <TablaIntegrantes integrantes={listaIntegrantes}
                eliminarIntegranteOnClick={eliminarIntegranteOnClick} />
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