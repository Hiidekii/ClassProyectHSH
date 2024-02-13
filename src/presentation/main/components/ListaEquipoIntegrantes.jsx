import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

const ListaEquipoIntegrantes = (props) => {
    return <List>
        {
            props.integrantes.map((elem) => {
                return <ListItem key={elem.codigo}>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary={elem.nombre} />
                </ListItem>
            })
        }
    </List>
}

export default ListaEquipoIntegrantes