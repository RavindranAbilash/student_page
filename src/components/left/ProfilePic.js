import {Avatar, Stack} from "@mui/material";

import profilePic from '../images/profile.jpg'


const ProfilePic = () => {
    return (
        <Stack justifyContent="center" alignItems="center">
            <Avatar
                alt="jenna welch"
                src={profilePic}
                sx={{width: 100, height: 100}}
            />
        </Stack>
    )
}

export default ProfilePic;