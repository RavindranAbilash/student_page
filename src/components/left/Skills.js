import {Box, Stack, Typography} from "@mui/material";
import Skill from "../cards/Skill";

const Skills = () => {
    return (
        <Box justifyContent="flex-start" alignItems="flex-start">
            <Stack>
                <Typography variant="h6">Skills</Typography>
            </Stack>
            <div display="flex">
                <Skill label="Python"/>
                <Skill label="CSS"/>
                <Skill label="Java"/>
                <Skill label="ReactJS"/>
                <Skill label="Node.js"/>
                <Skill label="MongoDB"/>
            </div>
        </Box>
    )
}

export default Skills;