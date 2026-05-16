export function scrollToSection(targetId: string) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const header = document.querySelector("header");
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 64;
  const offset = headerHeight + 16;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - offset;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.history.pushState(null, "", `#${targetId}`);
  window.scrollTo({
    top: Math.max(targetTop, 0),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}

export function isSectionHref(href: string) {
  return href.startsWith("#") && href.length > 1;
}
