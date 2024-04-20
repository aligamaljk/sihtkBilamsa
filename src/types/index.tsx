import { ReactNode } from "react";

export interface ITranslation {
  t: {
    imageBefore: ReactNode;
    imageAfter: ReactNode;
    LogIn?: string;
    onError?: string;
    requiredName?: string;
    requiredPassword?: string;
    successLog?: string;
    LogOut?: string;
    LogOutMessage?: string;
    Language?: string;
    homeTab?: string;
    profileTab?: string;
    logInTitle?: string;
    logo?: string;
    username?: string;
    password?: string;
    email?: string;
    forget?: string;
    click?: string;
    sinUp?: string;
    sinUpTitle?: string;
    greeting?: string;
    OwnNotFound?: string;
    product?: string;
    cart?: string;
    Footer?: string;
    requiredEmail?: string;
    requiredPhone?: string;
    requiredCode?: string;
    requiredAddress?: string;
    requiredCity?: string;
    requiredCountry?: string;
    requiredZip?: string;
    requiredState?: string;
    requiredCardNumber?: string;
    requiredCvv?: string;
    requiredExpiry?: string;
    requiredMessage?: string;
    phone?: string;
    ButForget?: string;
    contactUs?: string;
    desForgot?: string;
    sin?: string;
    for?: string;
    senUpMes?: string;
    articles?: string;
    blogs?: string;
    aboutUs?: string;
    profile?: string;
    contactTitle?: string;
    contactDesc?: string;
    contactName?: string;
    contactEmail?: string;
    contactMessage?: string;
    contactSubmit?: string;
    name?: string;
    age?: string;
    inputAge?: string;
    requiredAge?: string;
    gender?: string;
    requiredGender?: string;
    male?: string;
    female?: string;
    weight?: string;
    requiredWeight?: string;
    height?: string;
    requiredHeight?: string;
    save?: string;
    profileTitle?: string;
    profileDesc?: string;
    uploadImage?: string;
    requiredUpload?: string;
    requiredCategory?: string;
    sports?: string;
    running?: string;
    swimming?: string;
    basketball?: string;
    football?: string;
    tennis?: string;
    gym?: string;
    calories?: string;
    services?: string;
    caloriesTitle?: string;
    burn?: string;
    requiredBurn?: string;
    burn1?: string;
    burn2?: string;
    burn3?: string;
    exercise?: string;
    requiredExercise?: string;
    days?: string;
    calculate?: string;
    carbs?: string;
    protein?: string;
    fat?: string;
    totalCalories?: string;
    caloriesMore?: string;
    caloriesLess?: string;
    bodyShape?: string;
    skinny?: string;
    normal?: string;
    overweight?: string;
    firstDegree?: string;
    secondDegree?: string;
    dangerousObesity?: string;
    des1?: string;
    des2?: string;
    des3?: string;
    des4?: string;
    des5?: string;
    des6?: string;
    foodCalories?: string;
    selectFood?: string;
    LogOutMessageModal?: string;
    okText?: string;
    cancelText?: string;
    footer?: string;
    websiteName?: string;
    homePage?: {
      hero?: {
        h1_1: string;
        h1_2: string;
        p: string;
        btn: string;
      };
      about?: {
        advice: string;
        p1: string;
        p2: string;
        btn: string;
      };
      services?: {
        titleH2: string;
        titleH3: string;
        titleH4Box1: string;
        box1Text: string;
        titleH4Box2: string;
        box2Text: string;
        titleH4Box3: string;
        box3Text: string;
        titleH4Box4: string;
        box4Text: string;
      };
      videoSection?: {
        h2: string;
        btn: string;
      };
      joinUsSection?: {
        h2: string;
        p: string;
        btn: string;
      };
      articlesSection?: {
        h2: string;
        h3: string;
        link: string;
        article1: {
          title: string;
        };
        article2: {
          title: string;
        };
        article3: {
          title: string;
        };
      };
    };
    aboutPage?: {
      about?: string;
      aboutDescriptionP1?: string;
      aboutDescriptionP2?: string;
      teamSectionTitlePart1?: string;
      teamSectionTitlePart2?: string;
    };
    goal?: string;
    moreCal?: string;
    lessCal?: string;
    stability?: string;
    caloriesStability?: string;
    popupCanceledMessage?: string;
    requiredGoal?: string;
    quantityMess?: string;
    update?: string;
    profileRegistered?: string;
    myProfile?: string;
    titleLogo?: string;
    CopyrightsReservedFor?: string;
    needHelp?: string;
    help?: string;
    addSuccess?: string;
    activities?: string;
    date?: string;
    author?: string;
    titphone?: string;
    requiredProtein?: string;
    weightTarget?: string;
    errorSin?: string;
    errorSin2?: string;
    checkEmail?: string;
    addArticleSuccess?: string;
    image?: string;
    pleaseUpload?: string;
    titleEn?: string;
    titleEnRequired?: string;
    titleAr?: string;
    titleArRequired?: string;
    authorEn?: string;
    authorEnRequired?: string;
    authorAr?: string;
    authorArRequired?: string;
    addArticleEn?: string;
    addArticleAr?: string;
    requiredAddArticleEn?: string;
    addArticleEnRequired?: string;
    addArticleArRequired?: string;
    addArticle?: string;
    requiredImage?: string;
    placeGoal?: string;
    delete?: string;
    deleteConfirm?: string;
    deleteConfirmText?: string;
    deleteSuccess?: string;
    actions?: string;
    sportsSid?: string;
    exercises?: string;
    day?: string;
    pleaseEnterDay?: string;
    firstSport?: string;
    requireSport?: string;
    secondSport?: string;
    exerciseTime?: string;
    requireTime?: string;
    addSports?: string;
    deleteMessage?: string;
    deleteMessageConfirm?: string;
    addArticles?: string;
    AddSport?: string;
    requiredAddSport?: string;
    emty?: string;
    emtDesc?: string;
    exercisesDetails?: string;
  };
}

export enum LangsType {
  ar = 'ar',
  en = 'en'
}
export interface StoreType {
  user: {
    currentUser: null;
    currentLang: LangsType;
  };
}

export interface ProfileGoal {
  imageBefore?: any;
  imageAfter?: any;
  goal?: string;
  weight?: number;
  weightTarget?: number;
}

export interface AddSportType {
  label: string;
  value: number;
}
export interface fileType {
  fileList: any;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  originFileObj: {
    uid: string;
  };
  percent: number;
  response?: string;
  size: number;
  status: string;
  thumbUrl?: string;
  type: string;
  uid: string;
}

export interface fileUploadType {
  originFileObj: Blob | Uint8Array | ArrayBuffer;
  fileList: fileUploadType[];
  uid: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

export interface ProductImagesType {
  file: fileType;
  fileList: fileType[];
}

export interface userProfileType {
  id: string;
  image?: ProductImagesType | undefined;
  // image?:UploadFile ;
  ProductImages?: ProductImagesType;
  userImages?: ProductImagesType | undefined;
  age?: string;
  categoryProduct?: number[];
  description?: string | null;
  gender?: number;
  height?: string;
  name?: string;
  weight?: string;
  activity?: {
    key: number;
    label: string;
  }[];

}

export interface ArticleType {
  // id: number;
  id?: string | number;
  title?: string;
  author?: string;
  date?: string;
  desShow?: string;
  image?: string;
  content?: string[];
  titleEn?: string;
  titleAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  authorEn?: string;
  authorAr?: string;
}


export interface UserInput {
  email?: string;
  password?: string;
  name?: string;
  // add other properties as needed
}
export interface TypesArticle {
  image: fileUploadType;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  authorEn: string;
  authorAr: string;
}

export interface ArticleTypeTwo {
  id?: string;
  titleEn?: string;
  titleAr?: string;
  descriptionEn?: string;
  descriptionAr?: string;
  image?: string;
  authorEn?: string;
  authorAr?: string;
}

export interface DataType {
  key?: React.Key;
  // id?: number;
  id?: string;
  day?: string;
  token?: string;
  firstSport?: string;
  secondSport?: string;
  exerciseTime?: string;
  action?: string;
  sports: any;
}

export interface User {
  user: any;
  name?: string;
  email?: string;
  password?: string;
  accessToken?: string | null;
  uid?: string;
}
  export type Calories = {
    pro: number;
    carbs: number;
    fat: number;
    nameSelect?: string;
  };