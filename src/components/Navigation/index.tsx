// Dependencies
import React from 'react'
import NextLink from 'next/link'
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme, Navbar, Text, Button, Link, Switch } from '@nextui-org/react'

const Navigation = () => {

    const { setTheme } = useNextTheme()
    const { isDark } = useTheme()

    return (
        <Navbar
            variant={'sticky'}
            isBordered={isDark}
        >
            <Navbar.Toggle showIn={'xs'} />
            <Navbar.Brand>
                <Text b color='inherit' hideIn='xs'>NEXT-UI</Text>
            </Navbar.Brand>

            <Navbar.Content
                activeColor={'default'}
                variant={'highlight'}
                hideIn={'xs'}
                enableCursorHighlight
            >
                <NextLink href='/features'>
                    <Navbar.Link isActive={true}>Features</Navbar.Link>
                </NextLink>
                <NextLink href='/customers'>
                    <Navbar.Link isActive={false}>Customers</Navbar.Link>
                </NextLink>
                <NextLink href='/pricing'>
                    <Navbar.Link isActive={false}>Pricing</Navbar.Link>
                </NextLink>
                <NextLink href='/features'>
                    <Navbar.Link isActive={false}>Company</Navbar.Link>
                </NextLink>
            </Navbar.Content>

            <Navbar.Content>
                <Switch
                    checked={isDark}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                />
                <Navbar.Link color='inherit'>Login</Navbar.Link>
                <Navbar.Item>
                    <Button
                        auto
                        flat
                        as={Link}
                        color={'default'}
                    >
                        Sign Up
                    </Button>
                </Navbar.Item>
            </Navbar.Content>

            <Navbar.Collapse disableAnimation>
                <NextLink href='/features'>
                    <Navbar.CollapseItem isActive={true}>Features</Navbar.CollapseItem >
                </NextLink>
                <NextLink href='/customers'>
                    <Navbar.CollapseItem isActive={false}>Customers</Navbar.CollapseItem >
                </NextLink>
                <NextLink href='/pricing'>
                    <Navbar.CollapseItem isActive={false}>Pricing</Navbar.CollapseItem >
                </NextLink>
                <NextLink href='/features'>
                    <Navbar.CollapseItem isActive={false}>Company</Navbar.CollapseItem >
                </NextLink>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation