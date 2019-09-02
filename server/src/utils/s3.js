import aws from 'aws-sdk';
import uuidv4 from 'uuid/v4';

// eslint-disable-next-line import/no-unresolved
import { prisma } from './prisma-client';

const defaultOptions = {
  region: 'us-east-1',
  signatureVersion: 'v4',
  ACL: 'public-read',
};

const getKeys = bucket => {
  const API_KEYS = {
    accessKeyId: process.env.API_ACCESS_KEY_ID,
    secretAccessKey: process.env.API_SECRET_ACCESS_KEY,
  };
  if (bucket === 'portal-newlaw') {
    return API_KEYS;
  }
  return {};
};

const getSignedUrl = ({ s3Options, fileName = '', key, operation, download = false }) => {
  const { bucket } = s3Options;
  const options = {
    bucket,
    ...defaultOptions,
    ...(s3Options !== null ? s3Options : {}),
    ...getKeys(bucket),
  };
  const params = {
    Bucket: options.bucket,
    Key: key,
    Expires: 60,
    ResponseContentDisposition: `${download ? 'attachment' : 'inline'}; filename="${encodeURIComponent(fileName)}"`,
  };
  const s3 = new aws.S3(options);
  return s3.getSignedUrl(operation, params);
};

const getResourceSignedUrl = async ({ resourceId, s3Options = {}, download }) => {
  const resource = await prisma.resource({ id: resourceId });
  const signedUrl = await getSignedUrl({
    key: resource.key,
    fileName: resource.name,
    s3Options: { ...s3Options, bucket: 'portal-newlaw' },
    operation: 'getObject',
    download,
  });
  return signedUrl;
};

const getPutSignedUrl = ({ name, type, folder = '', s3Options }) => {
  const bucket = s3Options && s3Options.bucket ? s3Options.bucket : 'portal-user-avatar';
  const options = {
    bucket,
    ...defaultOptions,
    ...(s3Options !== null ? s3Options : {}),
    ...getKeys(bucket),
  };

  const s3 = new aws.S3(options);
  const originalFilename = name;

  const fileExtension = originalFilename.split('.').pop();

  const filename = `${folder}${uuidv4()}.${fileExtension}`;
  const params = {
    Bucket: options.bucket,
    Key: filename,
    Expires: 60,
    ContentType: type,
    ACL: options.ACL,
  };

  const signedUrl = s3.getSignedUrl('putObject', params);

  if (signedUrl) {
    return {
      signedUrl,
      filename,
      path: signedUrl.split('?').shift(),
    };
  }
  return {};
};

const deleteObject = (key, bucket) => {
  const options = {
    bucket,
    ...defaultOptions,
    ...getKeys(bucket),
  };

  const s3 = new aws.S3(options);
  const params = {
    Bucket: options.bucket,
    Delete: {
      Objects: [{ Key: key }],
    },
  };
  return s3.deleteObjects(params, () => {});
};

export { deleteObject, getSignedUrl, getPutSignedUrl, getResourceSignedUrl };
