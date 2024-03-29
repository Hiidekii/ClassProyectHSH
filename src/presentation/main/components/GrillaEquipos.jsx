import Grid from "@mui/material/Unstable_Grid2/Grid2"
import CardEquipo from "./CardEquipo"

const GrillaEquipos = (props) => {
    return <Grid container spacing={2}>
        {
            props.listaEquipos.map((equipo) => {
                return <Grid xs={4} key={equipo.nombre}>
                    <CardEquipo nombreEquipo={equipo.nombre}
                        listaIntegrantes={equipo.integrantes} />
                </Grid>
            })
        }
    </Grid>
}

export default GrillaEquipos