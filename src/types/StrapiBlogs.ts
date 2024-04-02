export interface TextType {
  type: 'text';
  text: string;
  code?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  italic?: boolean;
  bold?: boolean;
}

export interface LinkType {
  type: 'link';
  url: string;
  children: TextType[];
}

type H1ToH6Nums = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingType {
  type: 'heading';
  children: (TextType | LinkType)[];
  level: H1ToH6Nums;
}

export interface ImgType {
  type: 'image';
  image: {
    name: string;
    alternativeText: string;
    url: string;
  };
}

export interface ParagraphType {
  type: 'paragraph';
  children: (TextType | LinkType)[];
}

export interface QuoteType {
  type: 'quote';
  children: (TextType | LinkType)[];
}

export interface CodeType {
  type: 'code';
  children: [
    {
      type: 'text';
      text: string;
    }
  ];
}

export interface ListItemType {
  type: 'list-item';
  children: (TextType | LinkType)[];
}

export interface ListType {
  type: 'list';
  format: 'unordered' | 'ordered';
  children: ListItemType[];
}

type ContentType =
  | ParagraphType
  | HeadingType
  | ImgType
  | ListType
  | QuoteType
  | CodeType;

export interface StrapiBlogsResponseType {
  id: number;
  attributes: {
    title: null | string;
    createdAt: string;
    updatedAt: string;
    publishedAt: null | string;
    author: null | string;
    introduction: null | string;
    content: null | ContentType[];
  };
}
