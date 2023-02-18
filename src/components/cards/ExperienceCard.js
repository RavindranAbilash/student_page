import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const ExperienceCard = () => {
    return (
        <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014"/>
            </ListItem>
            <Divider variant="inset" component="li"/>
        </div>
    )
}

export default ExperienceCard;