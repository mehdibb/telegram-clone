import {
  IconWrapper,
  StyledInfoItem,
  Text,
  Title,
  TitleAndTextWrapper,
} from './styles';


interface Props {
  className?: string;
  text: string;
  title: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function InfoItemComponent({
  className,
  Icon,
  text,
  title,
}: Props): React.ReactElement {

  return (
    <div className={className}>
      <IconWrapper><Icon /></IconWrapper>
      <TitleAndTextWrapper>
        <Text>{text}</Text>
        <Title>{title}</Title>
      </TitleAndTextWrapper>
    </div>
  )
}

export default StyledInfoItem.withComponent(InfoItemComponent);