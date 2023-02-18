import {Avatar, Box, Stack} from "@mui/material";
import {Facebook, GitHub, Language, LinkedIn, Twitter} from "@mui/icons-material";

const SocialMedia = () =>{
    return(
        <Box>
            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
                <Avatar variant="square">
                    <LinkedIn />
                </Avatar>
                <Avatar variant="square">
                    <GitHub />
                </Avatar>
                <Avatar variant="square">
                    <Language />
                </Avatar>
                <Avatar variant="square">
                    <Twitter />
                </Avatar>
                <Avatar variant="square">
                    <Facebook />
                </Avatar>
            </Stack>
        </Box>
    )
}

export default SocialMedia;