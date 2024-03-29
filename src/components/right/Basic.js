import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import BasicCard from "../cards/BasicCard";
import {Download, Mail} from "@mui/icons-material";


const Basic = () => {
    return (
        <Box bgcolor="white" style={{boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>

            <Typography variant="h6" padding={1}>Basic</Typography>
            <Grid container spacing={2} padding={2}>
                <BasicCard title="Preferred Name" detail="Jenna"/>
                <BasicCard title="Registration Number" detail="E/18/000"/>
                <BasicCard title="Department" detail="Computer Engineering"/>
                <BasicCard title="Email" detail="e18000@eng.pdn.ac.lk"/>
                <BasicCard title="Residence" detail="New York,USA"/>
                <BasicCard title="Current Affiliation" detail="Computer Engineering"/>
            </Grid>
            <Stack spacing={5} direction="raw" padding={2}>
                <Button variant="contained" startIcon={<Download/>} style={{margin: 2}}>Download CV</Button>
                <Button variant="outlined" startIcon={<Mail/>} style={{margin: 2}}>Send Mail</Button>
            </Stack>

        </Box>
    )
}

export default Basic;