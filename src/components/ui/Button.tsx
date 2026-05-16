import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { isSectionHref, scrollToSection } from "../../utils/scrollToSection";

type ButtonVariant = "primary" | "secondary" | "dark";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-ces-primary text-ces-on-primary hover:bg-ces-primary-active border-ces-primary",
  secondary: "bg-ces-canvas text-ces-ink hover:bg-ces-surface-card border-ces-hairline",
  dark: "bg-ces-surface-dark-elevated text-ces-on-dark hover:bg-ces-surface-dark-soft border-ces-surface-dark-elevated",
};

export function Button({ children, variant = "primary", href, className = "", ...props }: ButtonProps) {
  const classes = `focus-ring fluid-link inline-flex min-h-10 items-center justify-center rounded-md border px-5 py-3 text-sm font-medium leading-none active:translate-y-px active:scale-[0.99] ${variantClasses[variant]} ${className}`;

  if (href) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement>;

    return (
      <a
        className={classes}
        href={href}
        {...anchorProps}
        onClick={(event) => {
          anchorProps.onClick?.(event);

          if (!event.defaultPrevented && isSectionHref(href)) {
            event.preventDefault();
            scrollToSection(href.slice(1));
          }
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
