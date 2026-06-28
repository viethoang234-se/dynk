/** Nối className, lọc bỏ giá trị falsy. Tránh phải cài thêm clsx/tailwind-merge. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
