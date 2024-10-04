import React, {useState} from 'react';
import {Link as ReactRouterLink} from 'react-router-dom';
import {Background, ButtonLink, Search, SearchIcon, SearchInput, PlayButton, Dropdown, Container, Logo, LogoImage, Feature, Picture, Text, LogoText, FeatureCallOut, Link, Group, Profile} from './styles/header';
import logo from '../../logo.svg'

function Header({bg = true, children, ...restProps}){
    return(
        bg ? <Background {...restProps}>{children}</Background> : children
    );
}

Header.Feature = function HeaderFeature({children, ...restProps}){
    return(
        <Feature>{children}</Feature>
    )
}

Header.Search = function HeaderSearch({searchTerm, setSearchTerm, ...restProps}){
    const [searchActive, setSearchActive] = useState(false);
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
                <img src='../../../images/search.png' alt='search icon'></img>
            </SearchIcon>
            <SearchInput value={searchTerm} onChange={({target}) => setSearchTerm(target.value)} placeholder='Search books' active={searchActive}>

            </SearchInput>
        </Search>
    )
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}){
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Text = function HeaderText({children, ...restProps}){
    return(
        <Text {...restProps}>{children}</Text>
    )
}

Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return(
        <Link {...restProps}>{children}</Link>
    )
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return(
        <Dropdown {...restProps}>{children}</Dropdown>
    )
}

Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return(
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return(
        <Container {...restProps}>{children}</Container>
    )
}

Header.Group = function HeaderGroup({children, ...restProps}){
    return(
        <Group {...restProps}>{children}</Group>
    )
}

Header.Profile = function HeaderProfile({children, ...restProps}){
    return(
        <Profile {...restProps}>{children}</Profile>
    )
}

Header.Picture = function HeaderPicture({src, ...restProps}){
    return(
        <Picture {...restProps} src={'../../../images/profilereader.png'}></Picture>
    )
}

Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return(
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}

Header.Logo = function HeaderLogo({to,src, ...restProps}){
    return(
        <Logo {...restProps}>
            <LogoText>BookBanter</LogoText>
            <ReactRouterLink to={to}>
                <LogoImage {...restProps} src={logo}></LogoImage>
            </ReactRouterLink>
        </Logo>
    )
}
export default Header;