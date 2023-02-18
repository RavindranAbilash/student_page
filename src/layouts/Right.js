import {Box, Stack} from "@mui/material";
import Basic from "../components/right/Basic";
import Experience from "../components/right/Experience";
import Education from "../components/right/Education";


const Right=()=>{
    return(
        <Box flex={2} >
            <Stack direction="column" spacing={2} >
                <Basic/>
                <Experience/>
                <Education/>
            </Stack>
        </Box>
    )
}

export default Right;