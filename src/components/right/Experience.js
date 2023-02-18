import {Box, Stack, Typography} from "@mui/material";
import List from '@mui/material/List';

import ExperienceCard from "../cards/ExperienceCard";

const Experience = () => {
    return (
        <Box bgcolor="white">
            <Typography variant="h6" padding={1}>Experience</Typography>
            <Stack direction="column">
                <List
                    sx={{
                        width: '98%',
                    }}
                >
                    <ExperienceCard/>
                    <ExperienceCard/>
                    <ExperienceCard/>
                </List>

            </Stack>
        </Box>
    )
}

export default Experience;