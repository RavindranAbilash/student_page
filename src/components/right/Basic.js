import {Box, Button, Grid, Stack, Typography} from "@mui/material";
import BasicCard from "../cards/BasicCard";
import {Download, Mail} from "@mui/icons-material";


const Basic = () => {
    return (
        <Box bgcolor="white">
            <Typography variant="h6" padding={1}>Basic</Typography>
            <Grid container spacing={2} padding={2}>
                <BasicCard title="AGE" detail="28 Years old"/>
                <BasicCard title="AGE" detail="28 Years old"/>
                <BasicCard title="AGE" detail="28 Years old"/>
                <BasicCard title="AGE" detail="28 Years old"/>
                <BasicCard title="AGE" detail="28 Years old"/>
                <BasicCard title="AGE" detail="28 Years old"/>
            </Grid>
            <Stack spacing={5} direction="raw" padding={2}>
                <Button variant="contained" startIcon={<Download />} style={{margin:2}}>Download CV</Button>
                <Button variant="outlined" startIcon={<Mail />} style={{margin:2}} >Send Mail</Button>
            </Stack>
        </Box>
    )
}

export default Basic;