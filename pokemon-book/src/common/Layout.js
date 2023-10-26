import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom'
import { Link } from '@mui/material';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Layout() {
    const sections = [
        { title: 'Topページ', url: '/' },
        { title: 'ポケモンを検索', url: '/search' },
        { title: '捕まえたポケモン', url: '/geted' },
        
    ];

    return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <AppBar position="relative">
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                ポケモン図鑑
            </Typography>
        </Toolbar>
        <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
        >
        {sections.map((section) => (
            //Linkコンポーネントに直したい
        <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
        >
            {section.title}
        </Link>
        ))}
        </Toolbar>
        </AppBar>
        <main>
            <Outlet />
        </main>
      {/* Footer */}
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                Footer
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Something here to give the footer a purpose!
            </Typography>
        </Box>
      {/* End footer */}
    </ThemeProvider>
    );
}