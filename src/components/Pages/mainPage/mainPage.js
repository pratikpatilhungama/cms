
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
            <Paper className="pt-2 pb-5">
                <div className="text-center">
                    {data ? <h1>{data.pagetitle}</h1> : <h1>no data</h1>}

                    {data.components ?

                        data.components.map((element, index) => (

                            (element.type == "text" ?
                                <div className="m-2"><form className={classes.root}><TextField width="25" required label={element.name} ></TextField ></form></div> :
                                element.type == "multiselect" ?
                                    <div className="m-2 ">
                                        <FormControl className={classes.formControl} >
                                            <InputLabel id="demo-simple-select-label">{element.name}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                            >
                                                {element.defaultvalue ? element.defaultvalue.map((ele, i) => (
                                                    <MenuItem key={ele} value={ele.id}>{ele.language}</MenuItem>
                                                )) : null}
                                            </Select>
                                        </FormControl> </div>
                                    :
                                    element.type == "upload" ?
                                        <div className="m-2">
                                            <Button
                                                className={classes.upload}
                                                variant="outlined"
                                                component="label"
                                            >
                                                {element.name}
                                                <input
                                                    type="file"
                                                    hidden
                                                />
                                            </Button>
                                        </div>

                                        : element.type == "date_time" ?
                                            <div className="m-4">
                                                <form className={classes.root}>
                                                    <input className={`${classes.dateTime} form-control `} type="datetime-local" />
                                                </form>
                                            </div>
                                            :
                                            element.type == "button" ?
                                                <Button className="m-2" variant="contained" color={element.color}>{element.name}</Button> :
                                                null
                            )
                        ))

                        : <h1>no data</h1>

                    }

                </div>
            </Paper>
        )
    }
    else if (page === "list") {
        return (
            <Fragment>
                <Paper>
                    <Toolbar>
                        {data ? <h1>{data.pagetitle}</h1> : <h1>no data</h1>}
                    </Toolbar>
                    <ListData data={data.stories} classes={classes}></ListData>
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
