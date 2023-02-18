import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Stack} from "@mui/material";
import Accordion from "@mui/material/Accordion";


import project from "../images/project.jpg"
import project2 from "../images/project2.jpg"
import ProjectCard from "../cards/ProjectCard";

const Project = () => {
    return (
        <Box bgcolor="white" style={{boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" padding={1}>Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="column" spacing={1}>
                        <ProjectCard title="Corals Protector" type="Cyber-Physical Systems Projects"
                                     alt="Cyber-Physical Systems Projects" img={project}/>
                        <ProjectCard title="Corals Protector" type="Cyber-Physical Systems Projects"
                                     alt="Cyber-Physical Systems Projects" img={project2}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default Project