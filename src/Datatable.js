import MUIDataTable from "mui-datatables";
import { Typography, Autocomplete, Box, TextField } from '@mui/material';

const columns = [
    { name: "Route(s)" },
    {
      name: "Direction",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => (

          <div>
           <Typography style={{ fontSize: 14, fontWeight: 600 }}>{"To:" + value }</Typography>
           {value == "Chai Wan" || value == "Ma On Shan" ?
           <Typography style={{ fontSize: 10}}>NWFB, Express</Typography> :
           <Typography style={{ fontSize: 10}}>NWFB, Express, Peak only, Monday to Friday only</Typography> }
                     
          </div>
        )
      }
    }
  ];

const data = [
    ["682", "Chai Wan"],
    ["682", "Ma On Shan"],
    ["682A", "Chai Wan (East)"],
    ["682A", "Ma On Shan (Wu Kai Sha Station)"],
];

const options = {
    // filterType: 'checkbox',
    pagination: false,
    print: false,
    search: false,
    selectToolbarPlacement: false,
    viewColumns: false,
    download: false,
    filter: false,
    selectableRowsHideCheckboxes: true
};

const Datatable = () => {

    return (
    <MUIDataTable
        title={"Search result for 682 route"}
        data={data}
        columns={columns}
        options={options}
    />)

}

export default Datatable;