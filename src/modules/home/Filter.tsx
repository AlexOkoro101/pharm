import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import TextField from "@mui/material/TextField";
import { Chip, Stack } from "@mui/material";
import { Drug } from "../../types";
import { useState } from "react";


declare module "@mui/material/AppBar" {
    interface AppBarPropsColorOverrides {
        navColor: true;
    }
    interface TextFieldPropsColorOverrides {
        secondary: true;
    }
    interface TextFieldPropsColorOverrides {
        textSecondary: true;
    }
    
}

const Filter: React.FC<{ drugs: Drug[], searchQuery: string, setsearchQuery: Function, filteredDrugs: Drug[], active: string, setactive: Function}> = ({drugs, searchQuery, setsearchQuery, filteredDrugs, active, setactive}) => {
    const [showFilter, setshowFilter] = useState<Boolean>(false);
    

    const toggleFilter = () => {
        setshowFilter(!showFilter)
    };

    const handleClick = (val: string) => {
        setactive(val);

    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="navColor" sx={{p: 1, border: 0, boxShadow: "none"}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: "none", sm: "block"  }, mr: 5 }}
                    >
                        Pharmacy
                    </Typography>
                    <TextField
                        id="filled-search"
                        label="Search Product"
                        type="search"
                        variant="filled"
                        sx={{backgroundColor: "#F4F6F8", }}
                        value={searchQuery}
                        onChange={(e) => setsearchQuery(e.target.value)}
                        autoComplete="on"
                    />
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        onClick={toggleFilter}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2, background: "#E7F1FF", borderRadius: '10px' }}
                    >
                        <FormatListBulletedIcon color="primary" />
                    </IconButton>
                
                </Toolbar>
            </AppBar>

            {showFilter && (
                <Stack direction="row" sx={{justifyContent: 'center', alignItems: 'center',}} spacing={2}>
                    <Chip color={active === "all" ? "primary" : "secondary"} sx={{color: 'textSecondary', py: '20px', px: '5px', borderRadius: '11px'}} label="All" onClick={() => handleClick('all')} />
                    <Chip color={active === "Pain Killer" ? "primary" : "secondary"} sx={{color: 'textSecondary', py: '20px', px: '5px', borderRadius: '11px'}} label="Pain Killers" onClick={() => handleClick('Pain Killer')} />
                    <Chip color={active === "Vitamins" ? "primary" : "secondary"} sx={{color: 'textSecondary', py: '20px', px: '5px', borderRadius: '11px'}} label="Vitamins" onClick={() => handleClick('Vitamins')} />
                    <Chip color={active === "Anti-malaria" ? "primary" : "secondary"} sx={{color: 'textSecondary', py: '20px', px: '5px', borderRadius: '11px'}} label="Anti-malaria" onClick={() => handleClick('Anti-malaria')} />
                    <Chip color={active === "Headache" ? "primary" : "secondary"} sx={{color: 'textSecondary', py: '20px', px: '5px', borderRadius: '11px'}} label="Headache" onClick={() => handleClick('Headache')} />
                </Stack>

            )}

            
        </Box>
    );
};

export default Filter;
