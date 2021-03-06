import React, { useState, useCallback } from 'react';
import Admin_menu from './Admin_menu'
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from './Admin_order_title';
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
    return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(0, '16 Mar, 2020', '강민준', '서울 아이동', '010-1234-1234', 512.44),
    createData(1, '26 Mar, 2019', '김상돈', '광주 오이동', '010-1234-1234', 866.99),
    createData(2, '08 Mar, 2017', '김태환', '부산 우이동', '010-1234-1234', 400.81),
    createData(3, '16 Mar, 2012', '방준영', '대구 오에동', '010-1234-1234', 654.39),
    createData(4, '15 Mar, 2010', '김창수', '대전 이아동', '010-1234-1234', 512.79),
];

function preventDefault(event) {
    event.preventDefault();
}

const useStyles = makeStyles(theme => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));


export default function Orders() {
    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = useCallback(() => {
        setMenuOpen(true);
    }, [menuOpen]);
    const closeMenu = useCallback(() => {
        setMenuOpen(false);
    }, [menuOpen]);

    return (
        <div>
            <br></br>
            <CheeseburgerMenu
                isOpen={menuOpen}
                closeCallback={closeMenu}>
                <Admin_menu />
            </CheeseburgerMenu>

            <HamburgerMenu
                isOpen={menuOpen}
                menuClicked={openMenu}
                width={70}
                height={70}
                strokeWidth={15}
                rotate={0}
                color='#444444'
                borderRadius={0}
                animationDuration={0.5}
            />
            <div align="center">
                <Grid item xs={7} align="center">
                    <Paper className={classes.paper} align="center">
                        <React.Fragment>
                            <br></br>
                            <Title>매장 관리</Title>
                            <Table size="small" align="center">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>등록 날짜</TableCell>
                                        <TableCell>점장명</TableCell>
                                        <TableCell>위치</TableCell>
                                        <TableCell>번호</TableCell>
                                        <TableCell align="right">총매출</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map(row => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.date}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.shipTo}</TableCell>
                                            <TableCell>{row.paymentMethod}</TableCell>
                                            <TableCell align="right">{row.amount}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <div className={classes.seeMore}>
                                <Link color="primary" href="#" onClick={preventDefault}>
                                    목록 더 보기
                                </Link>
                            </div>
                        </React.Fragment>
                    </Paper>
                </Grid>
            </div>
        </div>
    );
}