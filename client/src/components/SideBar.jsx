
import {Drawer , styled} from '@mui/material';
import SideBarcontent from './SideBarcontent';

const SideBar = ({ openDrawer }) =>{

    return (
        
        <Drawer
 // drawer
        anchor ="left"
        open={openDrawer}
        hideBackdrop={true}
        ModalProps={{
            keepMounted: true
        }}
        variant="persistent"
        sx={{
            '& .MuiDrawer-paper':{
                marginTop: '64px',
                width: 250,
                background : '#F5F5F5',
                borderRight: 'noun',
                height: 'calc(100vh -64px)'
            },
        }}

        > 

        <SideBarcontent/>
        
        </Drawer>
        
        
    )
}
export default SideBar;