import Box from "@mui/material/Box";
import {Button, Card, Chip, Grid, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CardMedia from "@mui/material/CardMedia";


const ProjectCard = ({title, type, technologies, img, alt}) => {
    return (
        <Card sx={{display: 'flex'}}
              style={{boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"}}>
            <CardMedia
                component="img"
                sx={{width: 370}}
                image={img}
                alt={alt}
            />
            <Box sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <Box sx={{my: 3, mx: 2}}>
                    <Grid container alignItems="center">
                        <Grid item xs>
                            <Typography gutterBottom variant="h6" component="div">
                                {title}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                        {type}
                    </Typography>
                </Box>
                <Divider variant="middle"/>
                <Box sx={{m: 2}}>
                    <Typography gutterBottom variant="body1">
                        Technologies
                    </Typography>
                    <Stack direction="row" spacing={1}>
                        <Chip label="Extra Soft"/>
                        <Chip label="Medium"/>
                        <Chip label="Hard"/>
                    </Stack>
                </Box>
                <Box sx={{mt: 3, ml: 1, mb: 1}}>
                    <Button>View</Button>
                </Box>
            </Box>

        </Card>
    )
}

export default ProjectCard;