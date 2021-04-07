
import React, { Fragment, useEffect, useState } from 'react';
import {
    Button,
    TextField,
    Paper,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Toolbar,
    Box
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from './../../styles/style';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ListData from "./listData";
import FormData from './formData'


export default function MainPage(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [page, setPage] = useState("");


    useEffect(async () => {
        var importPromises = await import(`./../../../JsonData/${props.location.state.name}`)

        setData(importPromises.default)
        setPage(props.match.params.type);
    }, [props.location.state])



    if (page === "create") {
        return (
            <Paper component={Box} p={4}>
                <div className="text-center">
                    {data ? <h1>{data.pagetitle}</h1> : <h1>no data</h1>}

                    {
                        data.components ?
                            <FormData data={data.components}></FormData>
                            : <h1>no data</h1>
                    }

                </div>
            </Paper>
        )
    }
    else if (page === "list") {
        return (
            <Fragment>
                <Paper className="pt-2">
                    <Toolbar>
                        {data ? <h1>{data.pagetitle}</h1> : <h1>no data</h1>}
                    </Toolbar>
                    {data.rowData ?
                        <ListData data={data.rowData} classes={classes}></ListData> : <h1>no data</h1>}
                </Paper>

            </Fragment>
        )
    }
    else {
        return (
            <Paper className="p-4">'

                <h1>no data</h1>
            </Paper>
        )
    }
}
