/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUploadMediaModel = /* GraphQL */ `
  query GetUploadMediaModel($id: ID!) {
    getUploadMediaModel(id: $id) {
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
export const listUploadMediaModels = /* GraphQL */ `
  query ListUploadMediaModels(
    $filter: ModelUploadMediaModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUploadMediaModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUploadMediaModels = /* GraphQL */ `
  query SyncUploadMediaModels(
    $filter: ModelUploadMediaModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUploadMediaModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMementoModel = /* GraphQL */ `
  query GetMementoModel($id: ID!) {
    getMementoModel(id: $id) {
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
export const listMementoModels = /* GraphQL */ `
  query ListMementoModels(
    $filter: ModelMementoModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMementoModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Title
        Description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncMementoModels = /* GraphQL */ `
  query SyncMementoModels(
    $filter: ModelMementoModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMementoModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        Title
        Description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
