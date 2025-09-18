import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const firstBucket = new aws.s3.Bucket("bucket-teste-pos-rocketseat", {
  bucket: 'bucket-teste-pos-rocketseat', // using this the name will not be primeiro-teste-pos-rocketseat-<hash>
  tags: {
    IAC: "true", // boa pratica para mostrar que o recurso eh gerido por iac, entao se alguem tentar mudar no console pode saber que o recurso sera sobrescrito em algum momento pelo iac
  }
})

const ecr = new aws.ecr.Repository('ecr-teste-pos-rocketseat', {
   name: 'ecr-teste-pos-rocketseat',
   imageTagMutability: 'IMMUTABLE',
   tags: {
    IAC: "true",
   }
})

// Export the name of the bucket
export const firstBucketName = firstBucket.id;
export const firstBucketRegion = firstBucket.region;
export const firstBucketArn = firstBucket.arn;

export const ecrName = ecr.name
export const ecrRepositoryUrl = ecr.repositoryUrl
