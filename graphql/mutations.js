/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUploadMediaModel = /* GraphQL */ `
  mutation CreateUploadMediaModel(
    $input: CreateUploadMediaModelInput!
    $condition: ModelUploadMediaModelConditionInput
  ) {
    createUploadMediaModel(input: $input, condition: $condition) {
      id
      Uploader
      Title
      mementomodelID
      Contribution
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUploadMediaModel = /* GraphQL */ `
  mutation UpdateUploadMediaModel(
    $input: UpdateUploadMediaModelInput!
    $condition: ModelUploadMediaModelConditionInput
  ) {
    updateUploadMediaModel(input: $input, condition: $condition) {
      id
      Uploader
      Title
      mementomodelID
      Contribution
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUploadMediaModel = /* GraphQL */ `
  mutation DeleteUploadMediaModel(
    $input: DeleteUploadMediaModelInput!
    $condition: ModelUploadMediaModelConditionInput
  ) {
    deleteUploadMediaModel(input: $input, condition: $condition) {
      id
      Uploader
      Title
      mementomodelID
      Contribution
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createMementoModel = /* GraphQL */ `
  mutation CreateMementoModel(
    $input: CreateMementoModelInput!
    $condition: ModelMementoModelConditionInput
  ) {
    createMementoModel(input: $input, condition: $condition) {
      id
      Title
      Description
      ProfileImage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UploadMediaModels {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateMementoModel = /* GraphQL */ `
  mutation UpdateMementoModel(
    $input: UpdateMementoModelInput!
    $condition: ModelMementoModelConditionInput
  ) {
    updateMementoModel(input: $input, condition: $condition) {
      id
      Title
      Description
      ProfileImage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UploadMediaModels {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteMementoModel = /* GraphQL */ `
  mutation DeleteMementoModel(
    $input: DeleteMementoModelInput!
    $condition: ModelMementoModelConditionInput
  ) {
    deleteMementoModel(input: $input, condition: $condition) {
      id
      Title
      Description
      ProfileImage
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      UploadMediaModels {
        nextToken
        startedAt
      }
    }
  }
`;
export const createPicture = /* GraphQL */ `
  mutation CreatePicture(
    $input: CreatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    createPicture(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updatePicture = /* GraphQL */ `
  mutation UpdatePicture(
    $input: UpdatePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    updatePicture(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deletePicture = /* GraphQL */ `
  mutation DeletePicture(
    $input: DeletePictureInput!
    $condition: ModelPictureConditionInput
  ) {
    deletePicture(input: $input, condition: $condition) {
      id
      name
      owner
      file {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
