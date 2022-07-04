/**
 * Interface for the 'Food' data
 */
export interface FoodEntity {
  id: string;
  name: string;
  attributes: Attribute[];
  category: {
    name: string;
  };
  imageSet: ImageSet[];
  liked: boolean;
  description: string;
  shortDescription: string;
}

export interface ImageSet {
  fileName: string;
  id: string;
  imageHeight: number;
  imageType: number;
  imageWidth: number;
  targetDevices: number[];
  title: string;
  url: string;
}

export interface Attribute {
  category: string;
  name: string;
  order: number;
  requirement: number;
  type: number;
  value: string;
  value_i18n: string;
}
