import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class UploadMediaModel {
  readonly id: string;
  readonly Uploader?: string;
  readonly Title?: string;
  readonly mementomodelID: string;
  readonly Contribution?: S3Object;
  constructor(init: ModelInit<UploadMediaModel>);
  static copyOf(source: UploadMediaModel, mutator: (draft: MutableModel<UploadMediaModel>) => MutableModel<UploadMediaModel> | void): UploadMediaModel;
}

export declare class MementoModel {
  readonly id: string;
  readonly Title?: string;
  readonly Description?: string;
  readonly UploadMediaModels?: (UploadMediaModel | null)[];
  readonly ProfileImage?: S3Object;
  constructor(init: ModelInit<MementoModel>);
  static copyOf(source: MementoModel, mutator: (draft: MutableModel<MementoModel>) => MutableModel<MementoModel> | void): MementoModel;
}

export declare class Picture {
  readonly id: string;
  readonly name?: string;
  readonly owner?: string;
  readonly file?: S3Object;
  constructor(init: ModelInit<Picture>);
  static copyOf(source: Picture, mutator: (draft: MutableModel<Picture>) => MutableModel<Picture> | void): Picture;
}