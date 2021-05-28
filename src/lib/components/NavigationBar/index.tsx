import {Close, Menu as MenuIcon} from '../../assets/images';
import {
  AvatarImage,
  CurrentChatUserInfo,
  IconWrapper,
  LastSeenWrapper,
  NameWrapper,
  NavBarItem,
  StyledNavigationBar,
  TextWrapper,
} from './styles';
import Menu from './Menu';
import React, {useCallback, useState} from 'react';
import {Item} from './Menu/Item';
import {dateFormat, Image} from '../../utilities';
import {useDialog} from '../../hooks';
import {ContactInfo} from '../../../pages';


interface Props {
  className?: string;
  menuItems: Item[];
  currentChatUser?: {
    id: string;
    lastSeenAt: Date;
    displayName: string;
    image: Image;
  }
}

function NavigationBarComponent({className, menuItems, currentChatUser}: Props): React.ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleOpenMenu = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen(true);
  }, []);
  
  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleShowDialog = useCallback(() => {
    setIsDialogOpen(true);
  }, [])
  const handleCloseDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);
  
  const {dialog} = useDialog(
    {
      easyDismiss: true,
      onClose: handleCloseDialog,
      isShown: isDialogOpen,
    },
    <>
      {currentChatUser
        ? <ContactInfo contactId={currentChatUser?.id} onClose={handleCloseDialog}/>
        : null}
    </>
  );
  
  return (
    <nav className={className}>
      {dialog}
      <NavBarItem onClick={handleOpenMenu}>
        <IconWrapper>{isMenuOpen ? <Close /> : <MenuIcon />}</IconWrapper>
        <TextWrapper>Telegram</TextWrapper>
        {isMenuOpen ? <Menu items={menuItems} onClose={handleCloseMenu}/> : null}
      </NavBarItem>
      {currentChatUser
        ? <CurrentChatUserInfo onClick={handleShowDialog}>
          <AvatarImage src={currentChatUser.image.src} alt={currentChatUser.image.alt} />
          <NameWrapper>{currentChatUser.displayName}</NameWrapper>
          <LastSeenWrapper>{dateFormat(currentChatUser.lastSeenAt)}</LastSeenWrapper>
        </CurrentChatUserInfo>
        : null}
    </nav>
  )
}

export default StyledNavigationBar.withComponent(NavigationBarComponent);