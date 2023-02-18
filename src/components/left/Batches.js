import {Box, Stack, Typography} from "@mui/material";
import Batch from "../cards/Batch";
import batch1 from '../images/web-consultation-team.png'
import batch2 from '../images/CO-seminar-organisers-badge.png'

const Batches = () => {
    return (
        <Box justifyContent="flex-start" alignItems="flex-start">
            <Stack>
                <Typography variant="h6">Batches</Typography>
            </Stack>
            <Stack justifyContent="flex-start" direction="row" spacing={2}>
                <Batch alt="web-consultation-team.png" src={batch1}/>
                <Batch alt="web-consultation-team.png" src={batch2}/>
                <Batch alt="web-consultation-team.png" src={batch1}/>
            </Stack>
        </Box>
    )
}

export default Batches;