import {Grid, Typography} from "@mui/material";

const BasicCard = ({title, detail}) => {
    return (
        <Grid item md={4}>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="subtitle2">{detail}</Typography>
        </Grid>
    )
}

export default BasicCard;