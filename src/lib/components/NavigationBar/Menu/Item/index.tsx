import React, {useCallback} from 'react';
import {IconWrapper, StyledItem, TextWrapper} from './styles';


export interface Item {
  text: string;
  id: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  callback: () => void;
}

interface Props {
  className?: string;
  item: Item;
  onActivate: (item: Item) => void;
}

function ItemComponent({className, item, onActivate}: Props): React.ReactElement {
  const handleClick = useCallback((event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    onActivate(item);
  }, [onActivate, item]);

  return (
    <li className={className} onClick={handleClick}>
      <IconWrapper><item.Icon /></IconWrapper>
      <TextWrapper>{item.text}</TextWrapper>
    </li>
  )
}

export default StyledItem.withComponent(ItemComponent);