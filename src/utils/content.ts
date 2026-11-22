import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { event } from "../config/event";

const publicDir = resolve("public");

export function localImage(path: string | null | undefined) {
  if (
    !path ||
    !/^\/images\/[a-z\d_./-]+$/i.test(path) ||
    path.split("/").includes("..")
  )
    return;
  if (existsSync(resolve(publicDir, path.slice(1)))) return path;
}

export function externalUrl(value: string | null | undefined) {
  if (!value) return;
  try {
    const url = new URL(value);
    if (
      url.protocol === "https:" &&
      url.hostname &&
      !url.username &&
      !url.password
    )
      return url.href;
  } catch {
    return;
  }
}

export function mailLink(value: string | null) {
  if (value && /^[^\s@?#]+@[^\s@?#]+\.[^\s@?#]+$/.test(value))
    return "mailto:" + value;
}

const statusLabels = {
  preparing: "販売準備中",
  selling: "販売中",
  soldout: "完売",
  ended: "販売終了",
};

export const presaleUrl = externalUrl(event.ticket.presale.url);
export const applicationUrl =
  event.circle.status === "open" ? externalUrl(event.circle.url) : undefined;

export const applicationLabel =
  event.circle.status === "closed"
    ? "募集終了"
    : applicationUrl
      ? "募集中"
      : "準備中";

export function saleLabel(
  sale: typeof event.ticket.onsite | typeof event.ticket.presale,
) {
  if (sale.status === "soldout" || sale.status === "ended")
    return statusLabels[sale.status];
  if (
    !sale.enabled ||
    (sale.status === "selling" && "url" in sale && !presaleUrl)
  )
    return statusLabels.preparing;
  return statusLabels[sale.status];
}

export function yen(price: number | null) {
  return price === null
    ? "価格未定"
    : new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
      }).format(price);
}
