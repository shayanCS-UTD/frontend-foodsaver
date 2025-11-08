export interface ImagePickerAsset {
  uri: string;
  width: number;
  height: number;
  type?: string;
  fileName?: string;
  fileSize?: number;
}

export function pickImage(): Promise<ImagePickerAsset | undefined>;

