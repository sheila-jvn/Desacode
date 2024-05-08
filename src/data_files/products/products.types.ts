interface MainContent {
  id: number;
  content: string;
  imgCard: string;
  imgMain: string;
  imgAlt: string;
}

interface Tab {
  id: string;
  dataTab: string;
  title: string;
}

interface DescriptionListItem {
  title: string;
  subTitle: string;
}

interface Specification {
  title: string;
  subTitle: string;
}

interface FeatureDescription {
  feature: string[];
  description: [string, string][];
}

interface Blueprints {
  first: string;
  second: string;
}

export interface Product {
  title: string;
  description: string;
  main: MainContent;
  tabs: Tab[];
  longDescription: {
    title: string;
    subTitle: string;
    btnTitle: string;
    btnURL: string;
  };
  descriptionList: DescriptionListItem[];
  specificationsLeft: Specification[];
  tableData: FeatureDescription[];
  blueprints: Blueprints;
  slug: string;
}
