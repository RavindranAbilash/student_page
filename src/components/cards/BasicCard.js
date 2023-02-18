import {Grid, Typography} from "@mui/material";

const BasicCard = ({title, detail}) => {
    return (
        <Grid item md={4}>
            <Typography>{title}</Typography>
            <Typography>{detail}</Typography>
        </Grid>
    )
}

export default BasicCard;