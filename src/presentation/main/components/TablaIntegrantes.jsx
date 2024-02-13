import { IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import StarIcon from '@mui/icons-material/Star';

const TablaIntegrantes = () => {
    return <TableContainer>
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
                <TableRow>
                    <TableCell>
                        Edgard
                    </TableCell>
                    <TableCell>
                        20132323
                    </TableCell>
                    <TableCell>
                        <IconButton>
                            <StarIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
}

export default TablaIntegrantes