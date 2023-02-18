import {Box, Stack, Typography} from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ExperienceCard from "../cards/ExperienceCard";

const Education = () => {
    return (
        <Box bgcolor="white">

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" padding={1}>Education</Typography>
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

export default Education;