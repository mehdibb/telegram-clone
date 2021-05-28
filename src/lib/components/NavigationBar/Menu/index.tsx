import {StyledMenu} from './styles';
import Item, {Item as ItemType} from './Item';
import React, {useCallback, useEffect, useRef} from 'react';


interface Props {
  className?: string;
  items: ItemType[];
  onClose: () => void;
}

function MenuComponent({className, items, onClose}: Props): React.ReactElement {
  const ref = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent): void {
      if (event.target instanceof HTMLElement && !ref.current?.contains(event.target)) {
        onClose();
      }
    }

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    }
  }, [onClose]);

  const handleItemActivate = useCallback((item: ItemType) => {
    item.callback();
    onClose();
  }, [onClose]);
  
  return (
    <ul className={className} ref={ref}>
      {items.map((item) => (
        <Item
          key={item.id}
          onActivate={handleItemActivate}
          item={item}
        />
      ))}
    </ul>
  )
}

export default StyledMenu.withComponent(MenuComponent);