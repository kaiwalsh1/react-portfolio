import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

export const Footer = () => {
    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Box
                    component="footer"
                    sx={{
                        py: 3,
                        px: 2,
                        mt: 'auto',
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.primary[200]
                                : theme.palette.grey[800],
                    }}
                    style=""
                >
                    <Container maxWidth="sm">
                        <Typography>
                            <GitHubIcon sx={{ fontSize: 50 }}  />
                            <LinkedInIcon sx={{ fontSize: 50 }} color="primary" />
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </div>
    );
};

export default Footer;