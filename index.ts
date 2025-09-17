import * as aws from "@pulumi/aws";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("primeiro-teste-pos-rocketseat", {
  bucket: 'primeiro-teste-pos-rocketseat-bkt', // using this the name will not be primeiro-teste-pos-rocketseat-<hash>
  tags: {
    IAC: "true", // boa pratica para mostrar que o recurso eh gerido por iac, entao se alguem tentar mudar no console pode saber que o recurso sera sobrescrito em algum momento pelo iac
  }
})

// Export the name of the bucket
export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;
