import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class UploadMediaModel {
  readonly id: string;
  readonly Uploader?: string;
  readonly Title?: string;
  readonly mementomodelID: string;
  constructor(init: ModelInit<UploadMediaModel>);
  static copyOf(source: UploadMediaModel, mutator: (draft: MutableModel<UploadMediaModel>) => MutableModel<UploadMediaModel> | void): UploadMediaModel;
}

export declare class MementoModel {
  readonly id: string;
  readonly Title?: string;
  readonly Description?: string;
  readonly UploadMediaModels?: (UploadMediaModel | null)[];
  readonly ProfileImage?: string;
  constructor(init: ModelInit<MementoModel>);
  static copyOf(source: MementoModel, mutator: (draft: MutableModel<MementoModel>) => MutableModel<MementoModel> | void): MementoModel;
}