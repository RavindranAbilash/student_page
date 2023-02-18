import {Avatar, Box, Stack, Typography} from "@mui/material";
import Skill from "../cards/Skill";
import Batch from "../cards/Batch";

const Batches = () => {
    return (
        <Box justifyContent="flex-start" alignItems="flex-start">
            <Stack>
                <Typography variant="h6">Batches</Typography>
            </Stack>
            <Stack justifyContent="flex-start" direction="row" spacing={2}>
                <Batch alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <Batch alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                <Batch alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            </Stack>
        </Box>
    )
}

export default Batches;