import {Menu as MenuIcon} from '../../assets/images';
import {IconWrapper, NavBarItem, StyledNavigationBar, TextWrapper} from './styles';
import Menu from './Menu';
import React, {useCallback, useState} from 'react';
import {Item} from './Menu/Item';


interface Props {
  className?: string;
  menuItems: Item[];
}

function NavigationBarComponent({className, menuItems}: Props): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen(true);
  }, []);
  
  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);
  
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