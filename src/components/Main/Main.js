import React from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';



export class Main extends React.Component {
    onEdit() {

    }

    render() {
        return (
            <Grid item xs={12} md={12}>
                <div>
                    <List>
                        {this.props.data.map((item) => {
                            const url = 'http://localhost:8000/emp/delete/' + item._id
                            return (
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <PermIdentityIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.empName}
                                        secondary={item.empEmail + " " + item.empMobile}
                                    />
                                    <ListItemSecondaryAction>
                                        <Link to={`/edit/${item._id}`}>
                                            <IconButton
                                                edge="end"
                                                aria-label="edit"
                                            >
                                                <EditIcon />
                                            </IconButton>
                                        </Link>
                                        <IconButton
                                            onClick={() => fetch(url, { method: 'DELETE' })}
                                            edge="end"
                                            aria-label="delete"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })}
                    </List>
                </div>
            </Grid>
        )
    }
}
