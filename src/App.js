import googlemap from "./image/googlemap.jpg"
import { Typography, Autocomplete, Box, TextField } from '@mui/material';
import Route from "./Route"
import Destination from "./Destination";
import React, { Fragment, useState } from "react";
import Datatable from "./Datatable"
import IcBack from "./image/ic-back.png"
import { CallMerge } from "@material-ui/icons";

function App() {
  const [isRoutePage, setIsRoutePage] = useState(true);
  const [isResultPage, setIsResultPage] = useState(false)


  console.log("isResultPage", isResultPage)
  return (
    <div>
      {/* topbar */}
      <div style={{ backgroundColor: "#6c3f98", color: "#fff", height: "30px", width: "100%", display: "flex" }}>
        <div style={{ marginLeft: "10px", backgroundColor: "#fff", color: "#6c3f98", paddingLeft: "10px", paddingRight: "10px" }}>ENGLISH</div>
        <div style={{ marginLeft: "10px" }}>繁體</div>
        <div style={{ marginLeft: "10px" }}>简体</div>
      </div>

      <div style={{ display: "flex" }}>
        {/* logo */}
        <div style={{ width: "500px", marginLeft: "10px" }}>
          <div style={{ paddingLeft: 60, alignItems: "center", alignSelf: "center" }}>
            <img src="https://mobile.bravobus.com.hk/nwp3/nwstlogopc3.png" style={{ alignSelf: "center" }} />
          </div>

          {/* menu */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginRight: "10px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: 'pointer' }} onClick={() => setIsRoutePage(true)}>
              <img src="https://mobile.bravobus.com.hk/nwp3/search_p2p.png" style={{ height: "43px", width: "76px" }} />
              <Typography style={{ fontSize: 12 }}>Destination</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", cursor: 'pointer' }} onClick={() => setIsRoutePage(false)}>
              <img src="https://mobile.bravobus.com.hk/nwp3/search_num.png" style={{ height: "43px", width: "76px" }} />
              <Typography style={{ fontSize: 12 }}>Route</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="https://mobile.bravobus.com.hk/nwp3/search_nearby.png" style={{ height: "43px", width: "76px" }} />
              <Typography style={{ fontSize: 12 }}>Nearby Routes</Typography>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="https://mobile.bravobus.com.hk/nwp3/search_bookmark.png" style={{ height: "43px", width: "76px" }} />
              <Typography style={{ fontSize: 12 }}>Bookmarks</Typography>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            {
              isResultPage == false ? (
                isRoutePage ?
                  <Destination setIsResultPage={setIsResultPage} /> : 
                  <Route /> ) : null}


            {isResultPage &&
              <div style={{ width: 400 }}>
                <div style={{ display: "flex", marginBottom: 10, cursor: "pointer" }} onClick={()=> setIsResultPage(false)}>
                  <img src={IcBack} style={{ height: "18px", width: "18px", marginTop: 3, marginRight: 3 }} />
                  <Typography style={{ fontSize: 18, fontWeight: 600 }}>Back</Typography>
                </div>
                <div style={{ marginRight: 10 }}>
                  <Datatable />
                </div>
              </div>}

          </div>

        </div>

        {/* googlemap */}
        <div>
          <img src={googlemap} style={{ width: "100%", height: "90vh" }} />
        </div>
      </div>
    </div>
  );
}

export default App;
