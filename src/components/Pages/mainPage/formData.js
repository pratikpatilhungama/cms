import React, { Fragment } from 'react';
import {
    InputLabel,
    Select,
    MenuItem,
    Button,
    TextField,
    FormControl
} from '@material-ui/core';
import {useStyles} from "./../../styles/style"

export default function FormData(props) {
    const classes = useStyles()
    return (
        <Fragment>
            {props.data.map((element, index) => (

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
                                    <Button className="m-2" variant="contained" color={element.color}>{element.name}</Button> : null)))}

        </Fragment>
    )
}
