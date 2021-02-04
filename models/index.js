// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UploadMediaModel, MementoModel, S3Object } = initSchema(schema);

export {
  UploadMediaModel,
  MementoModel,
  S3Object
};