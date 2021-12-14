import React, { Fragment, useState } from "react";
import { Typography, Autocomplete, Box, TextField, Button, Avatar } from '@mui/material';
import IcClock from "./image/ic-clock.png"
import icInfo from "./image/ic-info.png"
import {
    createStyles,
    fade,
    Theme,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import Event from "@material-ui/icons/Event";

const routeList = [
    { label: "6X", location: "Central (Exchange Square)" },
    { label: "6K", location: "Stanley Market" },
    { label: "6A", location: "Stanley Fort (Gate)" },
    { label: "61R", location: "City One Shatin" },
    { label: "61B", location: "Lam Tin Station" },
    { label: "6B", location: "Sha Tin" },
    { label: "682", location: "Chai Wan (East)" },
    { label: "682A", location: "Nai Chung" }
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

const Destination = ({setIsResultPage}) => {
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div>
            <div style={{ marginTop: 20, display: "flex" }}>
                <div>
                    <div style={{ display: "flex" }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/wpoint_from_en.png" style={{ marginRight: 10 }} />
                        <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 320 }}
                            options={routeList}
                            autoHighlight
                            getOptionLabel={(option) => option.location}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    {option.location}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <CssTextField
                                    {...params}
                                    label="Please select or input the origin"
                                    variant="outlined" size="small"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        /></div>
                    <div style={{ display: "flex", marginTop: 15 }}>
                        <img src="https://mobile.bravobus.com.hk/nwp3/wpoint_to_en.png" style={{ marginRight: 10 }} />
                        <Autocomplete
                            id="country-select-demo"
                            sx={{ width: 320 }}
                            options={routeList}
                            autoHighlight
                            getOptionLabel={(option) => option.location}
                            renderOption={(props, option) => (
                                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                                    {option.location}
                                </Box>
                            )}
                            renderInput={(params) => (
                                <CssTextField
                                    {...params}
                                    label="Please select or input the destination"
                                    variant="outlined" size="small"
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                />
                            )}
                        /></div></div>
                <div style={{ cursor: "pointer" }}>
                    <img src="https://mobile.bravobus.com.hk/nwp3/exchange.png" style={{ marginTop: 32, marginLeft: 10 }} />
                </div>
            </div>

            <div style={{ marginTop: 20, display: "flex", }}>
                <div style={{ marginLeft: 30 }}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DateTimePicker
                            variant="inline"
                            clearable
                            autoOk
                            value={selectedDate}
                            onChange={(date) => handleDateChange(date)}
                            minDate={new Date()}
                            format="MM/dd/yyyy HH:mm "
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <Event />
                                    </InputAdornment>
                                )
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </div>
                <Typography style={{ fontSize: 16, marginLeft: 20 }}>Departure</Typography>
            </div>

            <div style={{marginTop: 20}}>
                <Button variant="contained" style={{ backgroundColor: "#EEE", color: "#000", width: "100%" }}>Preference</Button>
            </div>

            <div style={{marginTop: 20, marginLeft: 10}}>
                <Button variant="contained" endIcon={
                    <Avatar
                        style={{height: 20, width: 20}}
                        src={
                            "https://mobile.bravobus.com.hk/nwp3/w_s_clock.png"
                        }
                    />
                } style={{ backgroundColor: "#6c3f98", color: "#FFF", width: 130 }}>Fastest</Button>
                <Button variant="contained" endIcon={
                    <Avatar
                        style={{height: 20, width: 20}}
                        src={
                            "https://mobile.bravobus.com.hk/nwp3/b_s_price.png"
                        }
                    />
                } style={{ backgroundColor: "#EEE", color: "#000", width: 130 }}>Lowest</Button>
                <Button variant="contained" endIcon={
                    <Avatar
                        style={{height: 20, width: 20}}
                        src={
                            "https://mobile.bravobus.com.hk/nwp3/b_s_work.png"
                        }
                    />
                } style={{ backgroundColor: "#EEE", color: "#000", width: 130 }}>Less</Button>
            </div>

            <div style={{marginTop: 20}}>
            <Button variant="contained" style={{ backgroundColor: "#EEE", color: "#000", width: 100, marginLeft: 10, marginRight: 40 }}>Reset</Button>
            <Button variant="contained" endIcon={
                    <Avatar
                        style={{height: 20, width: 20}}
                        src={
                            "https://mobile.bravobus.com.hk/nwp3/go.png"
                        }
                    />
                } onClick={()=> setIsResultPage(true)}style={{ backgroundColor: "#ffc520", color: "#000", width: 250 }}>Go</Button>

            </div>

            <div>
                <div style={{ display: "flex", marginTop: 20 }}>
                    <Typography style={{ fontSize: 16 }}>User Guide</Typography>
                    <img src={icInfo} style={{ marginRight: 10, marginLeft: 5, height: "20px", width: "20px" }} />
                </div>
                <Typography style={{ fontSize: 12, fontWeight: 600, marginTop: 15 }}>Point-to-Point Search</Typography>
                <Typography style={{ fontSize: 12 }}>
                    <ol>
                        <li>Select or input origin / destination in the input box above
                            <div style={{ display: "flex" }}>
                                <Typography style={{ fontSize: 12, color: "#6c3f98", fontWeight: 700, marginRight: 3 }}>OR </Typography>
                                <Typography style={{ fontSize: 12 }}>Pin on map and click the right mouse button to set as origin / destination</Typography>
                            </div>
                            <div style={{ display: "flex" }}>
                                <Typography style={{ fontSize: 12, color: "#6c3f98", fontWeight: 700, marginRight: 3 }}>OR </Typography>
                                <Typography style={{ fontSize: 12 }}>Click Bookmark <img src="https://mobile.bravobus.com.hk/nwp3/ppbookmapicon.png" style={{ height: 15, width: 15 }} />  Button to select the recorded location</Typography> </div>
                        </li>
                        <li>Click 'Go' Button to process route search  </li>
                    </ol> </Typography>
            </div>
        </div>
    );
}

export default Destination;
