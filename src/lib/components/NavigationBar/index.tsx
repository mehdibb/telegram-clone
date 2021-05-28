import {Menu as MenuIcon, User} from '../../assets/images';
import {IconWrapper, NavBarItem, StyledNavigationBar, TextWrapper} from './styles';
import Menu from './Menu';
import React, {useCallback, useMemo, useState} from 'react';
import {Item} from './Menu/Item';


interface Props {
  className?: string;
}

function NavigationBarComponent({className}: Props): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen(true);
  }, []);
  
  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  
  const handleShowContacts = useCallback(() => {

  }, []);
  
  const menuItems = useMemo((): Item[] => [
    {
      Icon: User,
      callback: handleShowContacts,
      id: 'contacts',
      text: 'Contacts',
    }
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [])
  
  return (
    <nav className={className}>
      <NavBarItem onClick={handleOpenMenu}>
        <IconWrapper><MenuIcon /></IconWrapper>
        <TextWrapper>Telegram</TextWrapper>
        {isMenuOpen ? <Menu items={menuItems} onClose={handleCloseMenu}/> : null}
      </NavBarItem>
    </nav>
  )
}

export default StyledNavigationBar.withComponent(NavigationBarComponent);