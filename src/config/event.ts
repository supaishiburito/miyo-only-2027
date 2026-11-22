type SaleStatus = "preparing" | "selling" | "soldout" | "ended";

interface Sale {
  enabled: boolean;
  status: SaleStatus;
  price: number | null;
}

interface EventConfig {
  name: string;
  shortName: string;
  subtitle: string;
  homeTitle: string;
  homeSubtitle: string;
  description: string;
  date: string | null;
  dateEstimate: string;
  hours: string | null;
  organizer: string | null;
  venue: {
    name: string | null;
    address: string | null;
    station: string | null;
    directions: string | null;
    entrance: string | null;
    mapUrl: string | null;
    mapEmbedUrl?: string | null;
  };
  contact: {
    email: string | null;
    formUrl: string | null;
    xUrl: string | null;
  };
  images: {
    main: string;
    mainSize?: { width: number; height: number };
    logo: string;
    alt: string;
  };
  ticket: {
    presale: Sale & {
      url: string | null;
      startDate: string | null;
      endDate: string | null;
    };
    onsite: Sale & { paymentMethods: string[] };
    qrInstructions: string | null;
    reentry: string | null;
    refund: string | null;
    rules: string | null;
  };
  circle: {
    status: "preparing" | "open" | "closed";
    url: string | null;
    startDate: string | null;
    deadline: string | null;
    fee: number | null;
    eligibility: string | null;
    cut: string | null;
    works: string | null;
    adultWorks: string | null;
    cancellation: string | null;
    reviewAndPayment: string | null;
  };
  schedule: { time: string; label: string }[];
  privacy: string | null;
}

export const event: EventConfig = {
  name: "Miyo Only 2027",
  shortName: "Miyo Only",
  subtitle: "桜井ミヨ オンリーイベント",
  homeTitle: "キミと綴るプロット",
  homeSubtitle: "A Plot Penned With You",
  description:
    "『ブルーアーカイブ』の桜井ミヨをテーマにした非公式の同人誌即売会。2027年8月に開催予定です。",
  date: null,
  dateEstimate: "2027年8月開催予定",
  hours: null,
  organizer: null,
  venue: {
    name: null,
    address: null,
    station: null,
    directions: null,
    entrance: null,
    mapUrl: null,
    mapEmbedUrl: null,
  },
  contact: {
    email: "supaishiburito@gmail.com",
    formUrl: null,
    xUrl: "https://x.com/supaishiburito",
  },
  images: {
    main: "/images/main-visual.webp",
    mainSize: { width: 1050, height: 1485 },
    logo: "/images/event-logo.svg",
    alt: "桜井ミヨ",
  },
  ticket: {
    presale: {
      enabled: false,
      status: "preparing",
      price: null,
      url: null,
      startDate: null,
      endDate: null,
    },
    onsite: {
      enabled: true,
      status: "preparing",
      price: null,
      paymentMethods: [],
    },
    qrInstructions: null,
    reentry: null,
    refund: null,
    rules: null,
  },
  circle: {
    status: "preparing",
    url: null,
    startDate: null,
    deadline: null,
    fee: null,
    eligibility: null,
    cut: null,
    works: null,
    adultWorks: null,
    cancellation: null,
    reviewAndPayment: null,
  },
  schedule: [],
  privacy: null,
};

export const tba = "詳細は後日公開予定です。";
export const disclaimer =
  "本イベントは有志による非公式のファン企画です。ゲーム公式および関係各社とは一切関係ありません。";
