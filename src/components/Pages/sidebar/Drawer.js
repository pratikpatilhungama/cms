import React, { Component } from 'react'
import Data from './../../../JsonData/leftPannel.json';
import {
    List,
    ListItem,
    ListItemText,
    Collapse,
} from "@material-ui/core";
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';


export default class Drawer_ extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    handleClick = (e) => {
        this.setState({ [e]: !this.state[e] });
    };
    render() {
        const { classes } = this.props;
        return (
            <div>
                {Data.Pages.map((text, index) => (
                    <List>
                        <ListItem button key={index} onClick={this.handleClick.bind(this, text.pagename)}>
                            <ListItemText>{text.pagename}</ListItemText>
                            {this.state[text.pagename] ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={this.state[text.pagename]} component="li" timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>

                                {text.subpages.map((element, j) => (
                                    <ListItem button key={j} component={Link} to={{
                                        pathname:`/mainpage/${element.type}`,
                                        state:{
                                            name:element.template
                                        }
                                    }} className={classes.nested}>

                                        <ListItemText template={element.template}>{element.pagename}</ListItemText>
                                    </ListItem>))}
                            </List>
                        </Collapse>
                    </List>
                ))}

            </div>
        )
    }
}
