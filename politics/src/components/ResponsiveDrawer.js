import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, useTheme } from '@material-ui/core/styles';


import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import MapIcon from '@material-ui/icons/Map';
import BookIcon from '@material-ui/icons/Book';
import AssessmentIcon from '@material-ui/icons/Assessment';
import PieChartIcon from '@material-ui/icons/PieChart';
import FaceIcon from '@material-ui/icons/Face';


import WebIcon from '@material-ui/icons/Web';
import WebAssetIcon from '@material-ui/icons/WebAsset';

import Header from './Header.js';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    zIndex: theme.zIndex.drawer + 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
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
  },
  toggleContainer:{
	  margin:theme.spacing(1),
  },
  nested: {
	    paddingLeft: theme.spacing(4),
	  },
  footer: {
	    ...theme.typography.button,
	    verticalAlign: 'middle',
	    display: 'inline-flex',
	    minHeight:'58px'
	  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState([])
  

  
  
  const handleDrawerToggle = (open) => {
    setMobileOpen(open);
  };
  
  const selectRegion = (continent,region)=>{
	  props.selectRegion(region.id)
	  handleDrawerToggle(false);
  }
  const handleClick = (continent,i)=>{
//	  	props.selectRegion(region.id)
	  	
	  open[i] = !open[i]
	  
	  setOpen(open=>[...open]);
		  

  }
  
  const drawer = (
		 <>
		 
	
        <List component="nav" dense={true}>
	          {
	        	  Object.keys(props.continent).map((key,i)=>{
	        		const continent = props.continent[key];
	        		const name = props.nameService.getName('continent',continent.id);
	        		  return  <>
	        		  		<ListItem button selected={continent.id === props.currentContinent} onClick={()=>handleClick(continent,i)}  key={i}>
	        		  			<ListItemText primary={name.name}  />
	        		  			{open[i] ? <ExpandLess /> : <ExpandMore />}
		                  </ListItem>		               
		                  <Collapse in={open[i]} timeout="auto" unmountOnExit>
		                    <List component="div" disablePadding dense={true}>
		                    	{continent.regions.map((region,i)=>{
		        	        			const name = props.nameService.getName('region',region.id);
		                    		
				                      return <ListItem button className={classes.nested} onClick={()=>selectRegion(continent,region)}
		                    				selected={region.id === props.currentRegion.id} key={'region'+i}>
				                        <ListItemText primary={name.name} />
				                      </ListItem>			                    		
		                    	})}
		                    </List>
		                  </Collapse>
		               </>
	        	  })
	          }

	     </List>
	    
	     
	  </>

  );

  const toggleElections = (open) => {
  

	  setMobileOpen(open);
  }
	

  
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header toggleElections={toggleElections} />
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden mdUp >
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={()=>handleDrawerToggle(false)}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown >
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
      <div className={classes.toolbar} />
        	{props.children}
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;