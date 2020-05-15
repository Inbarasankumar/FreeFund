import React from 'react';
import {Paper, withStyles, Grid, TextField, Button} from '@material-ui/core';
import { Facebook} from '@material-ui/icons'
import './loginPage.scss'
import Images from "../../assets/images";
import {Col} from "antd";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: theme.spacing.unit
    }
});

class LoginTab extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <Paper className="login">
                <div className={classes.margin}>
                    <Grid container justify="center" style={{marginTop: '10px', marginBottom: '20px'}}>
                        <Col span={3}>
                            <img src={Images.freefundLogo} alt="freefundLogo"/>
                        </Col>
                    </Grid>
                    <Grid container justify="center" style={{marginTop: '10px', marginBottom: '20px'}}>
                        <Col span={3}>
                            <h3 className="content-2-heading">Join now</h3>
                        </Col>
                    </Grid>
                    <Grid className="facebook" container  style={{textTransform: "none", backgroundColor: ' #3c5a9a',
                        width: '250px', marginTop: '20px', alignContent: 'center', justify: "center"}}>
                        <Col span={3} justify="center">
                            <img src={Images.facebook} alt="facebook"/>
                        </Col>
                        <Button color="white" style={{textTransform: "none"}}>Continue with facebook</Button>
                    </Grid>
                    <Grid className="google" container justify="center" style={{textTransform: "none", backgroundColor: ' #ffffff',
                        width: '250px', marginTop: '20px'}}>
                        <Col span={3} justify="center">
                            <img src={Images.google} alt="google"/>
                        </Col>
                        <Button color="grey" style={{textTransform: "none"}}>Continue with Google</Button>
                    </Grid>
                    <Grid classname="continue" container justify="center" style={{marginTop: '10px'}}>
                        <Col span={3}>
                            <h3 className="content-2-heading">OR</h3>
                        </Col>
                    </Grid>

                    <Grid container justify="center">
                        <Grid item >
                            <TextField id="username" label="Enter your email" type="email" autoFocus required/>
                        </Grid>
                    </Grid>
                    <Grid classname="continue" container justify="center" style={{marginTop: '10px'}}>
                        <Button variant="outlined" color=" #28bc78"
                                style={{textTransform: "none", backgroundColor: ' #28bc78',
                                    width: '200px', marginTop: '20px'}}>Continue</Button>
                    </Grid>
                    <Grid classname="continue" container justify="center" style={{marginTop: '10px'}}>
                        <Col span={3}>
                            <h3 style={{width: '300px', alignItems: 'flex-start'}}>By joining you agree to our Terms and Conditions
                                and Privacy Policy.</h3>
                        </Col>
                    </Grid>
                </div>
            </Paper>
        );
    }
}

export default withStyles(styles)(LoginTab);
