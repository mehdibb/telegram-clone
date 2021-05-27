import {StyledNavigationBar} from './styles';


interface Props {
  className?: string;
}

function NavigationBarComponent({className}: Props): React.ReactElement {

  return (
    <nav className={className}>
      Telegram
    </nav>
  )
}

export default StyledNavigationBar.withComponent(NavigationBarComponent);