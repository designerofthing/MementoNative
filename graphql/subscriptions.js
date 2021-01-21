/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUploadMediaModel = /* GraphQL */ `
  subscription OnCreateUploadMediaModel {
    onCreateUploadMediaModel {
      id
      Uploader
      Title
      mementomodelID
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
