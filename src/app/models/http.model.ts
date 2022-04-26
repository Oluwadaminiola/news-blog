export interface RESPONSE {
  articles: POST[];
  status: string;
  totalResults: string;
}

export interface POST {
  author: string;
  bookmark: boolean;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    id: string;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}
