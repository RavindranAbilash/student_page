import {Avatar} from "@mui/material";

const Batch = ({alt, src}) => {
    return (
        <Avatar
            alt={alt}
            src={src}
            sx={{width: 60, height: 60}}
        />
    )
}

export default Batch;