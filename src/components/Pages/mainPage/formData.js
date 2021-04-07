import React, { Fragment, useState } from 'react';
import {
    InputLabel,
    Select,
    MenuItem,
    Button,
    TextField,
    FormControl,
    Grid,
    Input,
    Checkbox,
    ListItemText,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@material-ui/core';
import DateFnsUtils from "@date-io/date-fns";
import {
    DateTimePicker,
    MuiPickersUtilsProvider
} from "@material-ui/pickers"
import { useStyles } from "./../../styles/style";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 200
        }
    }
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium
    };
}

export default function FormData(props) {
    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [language, setLanguage] = useState([]);
    const [enable, setEnable] = useState("true");

    const enhandleChange = (event) => {
        setEnable(event.target.value);
    };

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setLanguage(value);
    };
    return (
        <Fragment>
            <Grid container>
                {props.data.map((element, index) => (

                    (element.type == "text" ?

                        <Grid item md={6}>
                            <TextField className={classes.inputField} width="25" required label={element.name} ></TextField >
                        </Grid> :
                        element.type == "multiselect" ?
                            <Grid item md={6} sm={12}>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-mutiple-checkbox-label">Language</InputLabel>
                                    <Select
                                        labelId="demo-mutiple-checkbox-label"
                                        id="demo-mutiple-checkbox"
                                        multiple
                                        value={language}
                                        onChange={handleChange}
                                        input={<Input />}
                                        renderValue={(selected) => selected.join(", ")}
                                        MenuProps={MenuProps}
                                    >
                                        {element.defaultvalue.map((name, index) => (
                                            <MenuItem key={index} value={name.language}>
                                                <Checkbox checked={language.indexOf(name.language) > -1} />
                                                <ListItemText primary={name.language} />
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            : element.type == "select" ?
                                <Grid item md={6} sm={12}>
                                    <FormControl className={classes.formControl} >
                                        <InputLabel id="demo-simple-select-label">{element.name}</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                        >
                                            {element.defaultvalue ? element.defaultvalue.map((ele, i) => (
                                                <MenuItem key={ele} value={ele.id}>{ele.position}</MenuItem>
                                            )) : null}
                                        </Select>
                                    </FormControl>

                                </Grid>
                                :
                                element.type == "upload" ?
                                    <Grid item md={6} sm={12}>
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
                                    </Grid>

                                    : element.type == "date_time" ?
                                        <Grid item md={6} sm={12}>

                                            {/* <form className={classes.root}>
                                        <input className={`${classes.dateTime} form-control `} type="datetime-local" />
                                    </form> */}
                                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <DateTimePicker label={element.name} className={classes.inputField} value={selectedDate}></DateTimePicker>

                                            </MuiPickersUtilsProvider>
                                        </Grid>


                                        : element.type == "radio" ?
                                            <Grid item md={6} sm={12}>
                                                <FormControl className={classes.formControl}>
                                                    <FormLabel className={classes.lables} component="div" >{element.name}</FormLabel>
                                                    <RadioGroup aria-label="enable" name="enable1" value={enable} onChange={enhandleChange} row>
                                                        {element.values.map((val, i) => (
                                                            <FormControlLabel value={val.value} control={<Radio />} label={val.value} />

                                                        ))
                                                        }
                                                    </RadioGroup>
                                                </FormControl>
                                            </Grid>

                                            : null)))}
            </Grid>
            {
                props.data.map((btn, index) => (
                    btn.type == "button" ?
                        <Button className="m-4" variant="contained" color={btn.color}>{btn.name}</Button> : null
                ))
            }


        </Fragment>
    )
}
