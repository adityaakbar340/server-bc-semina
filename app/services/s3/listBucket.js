import { ListBucketsCommand, S3Client, UploadPartCommand } from '@aws-sdk/client-s3';
import moment from 'moment';
import configEnv from '../../utils/config.js';

let s3Client = new S3Client({
  region: 'ID',
  endpoint: 'https://nos.wjv-1.neo.id',
  // forcePathStyle: true,
  credentials: {
    accessKeyId: configEnv.awsAccess,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  }
});

const listBucket = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));

    const buckets = data.Buckets.map((bucket) => {
      return {
        bucketName: bucket.Name,
        dateCreation: moment(bucket.CreationDate).format('YYYY-MM-DD')
      };
    });


    return buckets;
  } catch (error) {
    console.info(error);
  }
};

const uploadObject = async (bucketName, objectKey, filePath) => {
  try {
    const input = {
      Body: "Coba",
      Bucket: bucketName,
      UploadId: "file_coba_1",
    };
    const command = new UploadPartCommand(input);
    const response = await s3Client.send(command);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default listBucket;