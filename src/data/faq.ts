import { tba } from "../config/event";

export const ticketFaq = [
  "前売り券はどこで購入できますか？",
  "当日券はありますか？",
  "再入場はできますか？",
  "購入後にキャンセルや払い戻しはできますか？",
].map((question) => ({ question, answer: tba }));

export const eventFaq = [
  "いつ開催されますか？",
  "会場はどこですか？",
  "サークル参加はどこから申し込めますか？",
  "会場での注意事項はどこで確認できますか？",
].map((question) => ({ question, answer: tba }));
