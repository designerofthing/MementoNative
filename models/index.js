// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { UploadMediaModel, MementoModel } = initSchema(schema);

export {
  UploadMediaModel,
  MementoModel
};