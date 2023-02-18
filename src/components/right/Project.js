import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import {Button, Chip, Grid, Stack} from "@mui/material";
import List from "@mui/material/List";
import ExperienceCard from "../cards/ExperienceCard";
import Accordion from "@mui/material/Accordion";
import Divider from "@mui/material/Divider";

import project from "../images/project.jpg"
import ProjectCard from "../cards/ProjectCard";

const Project = () => {
    return(
        <Box bgcolor="white" style={{boxShadow: " rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant="h6" padding={1}>Projects</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Stack direction="column" spacing={1}>
                        <ProjectCard title="Corals Protector" type="Cyber-Physical Systems Projects" alt="Cyber-Physical Systems Projects" img={project}/>
                        <ProjectCard title="Corals Protector" type="Cyber-Physical Systems Projects" alt="Cyber-Physical Systems Projects" img={project}/>
                    </Stack>
                </AccordionDetails>
            </Accordion>

        </Box>
    )
}

export default Project