import { HtmlContent } from '../HtmlContent';
import * as Styled from './styles';
import { LogoLinkedin } from '@styled-icons/ionicons-solid/LogoLinkedin';
import { InstagramAlt } from '@styled-icons/boxicons-logos/InstagramAlt';
import { Twitter } from '@styled-icons/icomoon/Twitter';

export type FooterProps = {
  footerHtml: string;
};

export const Footer = ({ footerHtml }: FooterProps) => {
  return (
    <Styled.Container>
      <HtmlContent html={footerHtml} />
      <Styled.SocialMedia href="/">
        <InstagramAlt aria-label="instagram" className="instagram" />
      </Styled.SocialMedia>
      <Styled.SocialMedia href="/">
        <LogoLinkedin aria-label="linkedin" className="linkedin" />
      </Styled.SocialMedia>
      <Styled.SocialMedia href="/">
        <Twitter aria-label="twitter" className="twitter" />
      </Styled.SocialMedia>
    </Styled.Container>
  );
};
