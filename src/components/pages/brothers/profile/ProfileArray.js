import React from 'react'

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


export default function ProfileArray({ data, title, isMobile }) {

    if ((Array.isArray(data) && data.length > 0)) {

        if (isMobile) {
            return (
                <Box align="left">
                    <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="body1.fontSize">
                        <List>
                            {data.map((item, i) => (
                                <ListItem disableGutters={true}>
                                    <ListItemText
                                        primary={item}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Box>
            )
        }

        else {
            return (
                <Box align="left">
                    <Box fontWeight="fontWeightBold" fontSize="h4.fontSize">
                        {title}
                    </Box>
                    <Box fontSize="h6.fontSize">
                        <List>
                            <List>
                                {data.map((item, i) => (
                                    <ListItem disableGutters={true}>
                                        <ListItemText
                                            primary={<Box fontSize="h5.fontSize">{item}</Box>}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </List>
                    </Box>
                </Box>
            )
        }
    }
    
    else {
        return (
            <React.Fragment></React.Fragment>
        )
    }
}
