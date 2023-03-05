import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import * as React from 'react';
import CloseButton from './CloseButton';

const Layout = styled(Box)({
    height: '100%',

    display: 'flex',
    flexDirection: 'column',
});

const Header = styled(Box)({
    height: 'var(--ifm-navbar-height)',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderTopLeftRadius: 'inherit',
    boxShadow: 'var(--ifm-navbar-shadow)',
    padding: `
        var(--ifm-navbar-padding-vertical)
        var(--ifm-navbar-padding-horizontal)`,
});

interface Props {
    readonly displayName: string;
    readonly children: React.ReactNode;
};

export default function Tab(
    {
        displayName,
        children,
    }: Props,
): JSX.Element {
    return (
        <Layout>
            <Header>
                <span>{displayName}</span>
                <CloseButton />
            </Header>
            <Box sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Layout >
    );
};
