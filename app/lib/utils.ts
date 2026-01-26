// Simple cn utility for conditional classNames without clsx dependency
export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// Format phone numbers for display
export function formatPhone(phone: string): string {
  return phone
    .replace(/\s/g, "")
    .replace(/(\+\d{2})(\d{1,2})(\d{3})(\d{2})(\d{2})/, "$1 ($2) $3 $4 $5");
}

// Scroll to element smoothly
export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
