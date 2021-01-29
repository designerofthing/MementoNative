/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUploadMediaModel = /* GraphQL */ `
  subscription OnCreateUploadMediaModel {
    onCreateUploadMediaModel {
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
export const onUpdateUploadMediaModel = /* GraphQL */ `
  subscription OnUpdateUploadMediaModel {
    onUpdateUploadMediaModel {
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
export const onDeleteUploadMediaModel = /* GraphQL */ `
  subscription OnDeleteUploadMediaModel {
    onDeleteUploadMediaModel {
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
export const onCreateMementoModel = /* GraphQL */ `
  subscription OnCreateMementoModel {
    onCreateMementoModel {
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
export const onUpdateMementoModel = /* GraphQL */ `
  subscription OnUpdateMementoModel {
    onUpdateMementoModel {
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
export const onDeleteMementoModel = /* GraphQL */ `
  subscription OnDeleteMementoModel {
    onDeleteMementoModel {
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
export const onCreatePicture = /* GraphQL */ `
  subscription OnCreatePicture {
    onCreatePicture {
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
export const onUpdatePicture = /* GraphQL */ `
  subscription OnUpdatePicture {
    onUpdatePicture {
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
export const onDeletePicture = /* GraphQL */ `
  subscription OnDeletePicture {
    onDeletePicture {
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
