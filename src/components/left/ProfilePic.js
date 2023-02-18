import {Avatar, Stack} from "@mui/material";


const ProfilePic = () => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{width: 60, height: 60}}
            />
        </Stack>
    )
}

export default ProfilePic;