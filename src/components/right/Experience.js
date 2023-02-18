import {Box, Stack, Typography} from "@mui/material";
import List from '@mui/material/List';

import ExperienceCard from "../cards/ExperienceCard";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Experience = () => {
    return (
        <Box bgcolor="white">

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" padding={1}>Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
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
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default Experience;