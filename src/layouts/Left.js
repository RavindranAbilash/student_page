import {Box, Stack} from "@mui/material";

import ProfilePic from "../components/left/ProfilePic";
import Name from "../components/left/Name";
import About from "../components/left/About";
import Skills from "../components/left/Skills";
import AddNote from "../components/left/AddNote";
import SocialMedia from "../components/left/SocialMedia";
import Batches from "../components/left/Batches";


const Left = () => {
    return (
        <Box bgcolor="white" flex={1} style={{boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>

            <Stack direction="column" spacing={2} padding={3}>
                <ProfilePic/>
                <Name/>
                <SocialMedia/>
                <About/>
                <Skills/>
                <Batches/>
                <AddNote/>
            </Stack>

        </Box>
    )
}

export default Left;