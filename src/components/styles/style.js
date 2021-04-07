import { makeStyles, useTheme } from '@material-ui/core/styles';
import { CenterFocusStrong } from '@material-ui/icons';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 210,
    },
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth
    }

  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "60%",
    justifyContent:"left"
    
  },
  lables:{
    justifyContent:"left",
    display :"inline",
    width:"10%"
  },
  
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  upload:{
    margin: theme.spacing(3),
    width:"60%"

  },
  table: {
    minWidth: 650,
  },
  btnedit:{
    color:"#eac839",
    marginRight:"10px",
    cursor:"pointer",
    
},
btndelete:{
  color:"#ff7272",
  cursor:"pointer",
  
},
dateTime:{
  justifyContent:"center",  
  width:"18%"
},
inputField:{
  width:"60%",
  margin:theme.spacing(1)
},
btngrp:{
  display :"inline",
  margin:"1%"
}

}));