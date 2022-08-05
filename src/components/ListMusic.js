import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useContext, useEffect, useState} from "react";
import {Songs} from "../Context";
import "../myCss.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function CustomizedTables() {
    const [song1, setSong] = useState();
    const {DataSongs, handleSetSong} = useContext(Songs);
    const [textColor, setTextColor] = useState("black");

    const handlePlaySong = (idSong) => {
        handleSetSong(idSong);
        setSong(idSong);
        setTextColor("blue");
    }


    return (
        <div className="container">
            <TableContainer component={Paper} sx={{
                height: 680,
                "&::-webkit-scrollbar": {
                    width: 10
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "black"
                },
                "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "gray",
                    borderRadius: 2
                }
            }}>
                <Table sx={{
                    height: "max-content"
                }} aria-label="customized table" >
                    <TableHead>
                        <TableRow >
                            <StyledTableCell align="center">#</StyledTableCell>
                            <StyledTableCell align="left">Name</StyledTableCell>
                            <StyledTableCell align="center">Author</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {DataSongs.map((row, index) => (
                            <StyledTableRow key={row.name} className="customMusic" onClick={() => handlePlaySong(row.id)}
                                            style={{color: textColor}}

                            >
                                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                                <StyledTableCell align="left">{row.name}</StyledTableCell>
                                <StyledTableCell align="center">{row.author}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    );
}

