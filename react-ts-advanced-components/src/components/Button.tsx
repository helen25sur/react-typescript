import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  el: 'button';
  text: string;
} & ComponentPropsWithoutRef<'button'>;

type LinkProps = {
  el: 'anchor';
  text: string;
} & ComponentPropsWithoutRef<'a'>;

type ButtonLinkProps = ButtonProps | LinkProps;

export default function Button(props: ButtonLinkProps) {
  const { el } = props;
  if (el === 'button') {
    const { text, ...buttonProps } = props;

    return <button {...buttonProps}>{text}</button>;
  }

  const { text, ...linkProps } = props;

  return <a {...linkProps}>{text}</a>;
}