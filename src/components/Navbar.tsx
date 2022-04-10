import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

export default function Navbar(): JSX.Element {
    return (
        <DesktopNav>
            <Link href="/post">LOGO</Link>
        </DesktopNav>
    );
}

const DesktopNav = styled.nav`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    transition: all 150ms linear;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 64px;
    padding: 0 60px;
    z-index: 2;
    box-shadow: 0 8px 12px 0 rgb(0 0 0 / 10%);
    background: #fff;
`;
