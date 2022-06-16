import { DogMedia } from "./DogMedia";

export default class RandomDogService {
  private baseUrl: string = 'https://random.dog';
  private woofPath: string = '/woof.json';

  public getRandomDogImages = async (amount: number): Promise<string[]> => {
    const SUPPORTED_TYPES = ['png', 'jpg', 'jpeg', 'gif'];
    const images: string[] = [];

    while (images.length < amount) {
      const media = await fetch(`${this.baseUrl}${this.woofPath}`);
      const dogMedia = (await media.json()) as DogMedia;

      const mediaType = this.getUrlExtension(dogMedia.url).toLowerCase();
      if (SUPPORTED_TYPES.includes(mediaType)) {
        images.push(dogMedia.url);
      }
    }

    return images;
  };

  private getUrlExtension (value: string): string {
    const lastIndex = value.lastIndexOf('.');

    return value.slice(lastIndex + 1);
  }
};
