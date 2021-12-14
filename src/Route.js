import { Typography, Autocomplete, Box, TextField } from '@mui/material';
import icInfo from "./image/ic-info.png"
import {
    createStyles,
    fade,
    Theme,
    withStyles,
    makeStyles,
    createMuiTheme,
  } from '@material-ui/core/styles';

const routeList = [
    { label: "6X", location: "Central (Exchange Square)" },
    { label: "6K", location: "Stanley Market" },
    { label: "6A", location: "Stanley Fort (Gate)" },
    { label: "61R", location: "City One Shatin" },
    { label: "61B", location: "Lam Tin Station" },
    { label: "6B", location: "Sha Tin" },
    { label: "682", location: "Chai Wan (East)"},
    { label: "682A", location: "Nai Chung"}
]

const CssTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#6c3f98',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#6c3f98',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#6c3f98',
        },
        '&:hover fieldset': {
          borderColor: '#6c3f98',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#6c3f98',
        },
      },
    },
  })(TextField);

const Route = () => {
    return (
        <div>
            <div style={{ marginTop: 20, display: "flex" }}>
                <Autocomplete
                    id="country-select-demo"
                    sx={{ width: 230 }}
                    options={routeList}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(props, option) => (
                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                            {option.label} To: {option.location}
                        </Box>
                    )}
                    renderInput={(params) => (
                        <CssTextField
                            {...params}
                            label="Input route No."
                            inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                        />
                    )}
                />
                <div style={{cursor: "pointer"}}>
                    <img src="https://mobile.bravobus.com.hk/nwp3/searchshadow.png" style={{ marginTop: 15, marginLeft: 10 }} />
                </div>
                <Typography style={{ fontSize: 14, marginLeft: 10, marginTop: 18 }}>Recent search</Typography>
            </div>

            <div style={{marginTop: 20}}>
                <Typography style={{ fontSize: 16 }}>Route List</Typography>
                <div style={{ display: "flex", justifyContent: "space-between", marginRight: 30, marginLeft:20}}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/rs_air.png" style={{ height: "50px", width: "50px" }} />
                        <Typography style={{ fontSize: 12 }}>Airport</Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/rs_tourist.png" style={{ height: "50px", width: "50px" }} />
                        <Typography style={{ fontSize: 12 }}>Tourist</Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/rs_eta.png" style={{ height: "50px", width: "50px" }} />
                        <Typography style={{ fontSize: 12 }}>Next Bus</Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/rs_overnight.png" style={{ height: "50px", width: "50px" }} />
                        <Typography style={{ fontSize: 12 }}>Overnight</Typography>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/rs_all.png" style={{ height: "50px", width: "50px" }} />
                        <Typography style={{ fontSize: 12 }}>All</Typography>
                    </div>
                </div>
            </div>

<div>


</div>

            <div>
                <div style={{ display: "flex",marginTop: 60 }}>
                    <Typography style={{ fontSize: 16 }}>User Guide</Typography>
                    <img src={icInfo} style={{ marginRight: 10, marginLeft: 5, height: "20px", width: "20px" }} />
                </div>
                <Typography style={{ fontSize: 12, fontWeight: 600, marginTop: 15 }}>Search by input route No.</Typography>
                <Typography style={{ fontSize: 12 }}>
                    <ol>
                        <li>Input the bus route no. in the input box above</li>
                        <li>Click search button   <img src="https://mobile.bravobus.com.hk/nwp3/searchshadow-s.png"/> </li>
                        <li>Show the related bus route information</li>
                    </ol> </Typography>
                <Typography style={{ fontSize: 12, fontWeight: 600, marginTop: 20 }}>Search by click route list</Typography>
                <Typography style={{ fontSize: 12 }}>
                    <ol>
                        <li> Click the bus route category button under route list</li>
                        <li> Show the related bus route information</li>
                    </ol>
                </Typography>
            </div>
        </div>
    );
}

export default Route;
