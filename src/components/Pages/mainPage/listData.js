import React, { Component, Fragment } from 'react';
import { useStyles } from './../../styles/style';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TablePagination

} from "@material-ui/core";

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export default class ListData extends Component {
    constructor(props) {
        super(props);
        this.getHeader = this.getHeader.bind(this);
        this.getRowsData = this.getRowsData.bind(this);
        this.getKeys = this.getKeys.bind(this);
        this.state = {
            pagination: 0,
            rowsPerPage: 5,
            data:null,
        }

    }

    handleChangePage = (event, newPage) => {
        this.setState({ pagination: newPage })
        
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: parseInt(event.target.value, 10),
            pagination: 0,
            data:[],
        })
    };

    

    getKeys = function () {
            return Object.keys(this.props.data[0]);
        }

    getHeader = function () {
        var keys = this.getKeys();
        
        return keys.map((key, index) => {
            return <TableCell key={key}>{key.toUpperCase()}</TableCell>
        })
    }



    getRowsData = function () {
        const RenderRow = (props) => {
            return props.keys.map((key, index) => {
                return <TableCell key={props.data[key]}>{props.data[key].toString()}</TableCell>

            })
        }
        var items = this.props.data;
        var keys = this.getKeys();
        const { classes } = this.props;

        const { pagination, rowsPerPage } = this.state;
        return items.slice(pagination * rowsPerPage, (pagination + 1) * rowsPerPage).map((row, index) => {
            return <TableRow key={index}><RenderRow key={index} data={row} keys={keys} /><TableCell><EditOutlinedIcon className={classes.btnedit} /><DeleteForeverOutlinedIcon className={classes.btndelete} /></TableCell></TableRow>
        })

    }
    render() {
        const { classes } = this.props;
        const { pagination, rowsPerPage, data } = this.state;
        return (
            <Fragment>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {this.getHeader()}
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.getRowsData()}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 15]}
                        component="div"
                        count={this.props.data.length}
                        rowsPerPage={rowsPerPage}
                        page={pagination}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}

                    />
                </TableContainer>

            </Fragment>
        )
    }
}
