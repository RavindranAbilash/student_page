import {Box, Stack} from "@mui/material";

import ProfilePic from "../components/left/ProfilePic";
import Name from "../components/left/Name";
import About from "../components/left/About";
import Skills from "../components/left/Skills";
import AddNote from "../components/left/AddNote";


const Left=()=>{
    return(
        <Box bgcolor="white" flex={1} >
            <Stack  direction="column" spacing={2}  padding={3}>
            <ProfilePic/>
            <Name/>
            <About/>
            <Skills/>
            <AddNote/>
            </Stack>
        </Box>
    )
}

export default Left;