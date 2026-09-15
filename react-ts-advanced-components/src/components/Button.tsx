import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & { href?: never };

type LinkProps = ComponentPropsWithoutRef<'a'> & { href: string };


type ButtonLinkProps = ButtonProps | LinkProps;

function isAnchorProps(props: ButtonLinkProps): props is LinkProps {
  return 'href' in props;
}

export default function Button(props: ButtonLinkProps) {
  if (isAnchorProps(props)) {
    return <a {...props}></a>;
  }

  return <button {...props}></button>;

}