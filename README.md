## Description
v0.1

Author: Sumeet Singh

Dated: 26/06/2024

Website for Biomedical Engineering company: SABRENETICS PTY LTD @ sabrenetics.com

Source: https://github.com/Sabrenetics/sabrenetics.com.git

## STACK
MISSING AWS ACCOUNT # DETAILS __________________
* Frontend - HTML5/CSS3/React
* Backend - AWS Lambda (node.js API's) + AWS API Gateway
* Databases - AWS S3 (bucket 2 region: us-east-1) /public/userdatabase.json (NoSQL)
* Hosting - AWS S3 (bucket 1 region: us-east-1)
* Network - AWS Route 53 + AWS Certificate Manager + AWS Cloudfront

## API WORKFLOWS
LoginForm.js (S3) -> DecipherHash.js (s3) -> xxx (Lambda) -> /public/userdatabase.json (s3 bucket 2)
SignUpForm.js (S3) -> HashPassword.js (s3) -> xxx (Lambda) -> /public/userdatabase.json (s3 bucket 2)
AccountForm.js (S3) -> HashPassword.js (s3) -> xxx (Lambda) -> /public/userdatabase.json (s3 bucket 2)
DeleteAccountButton.js (S3) -> xxx (Lambda) -> /public/userdatabase.json (s3 bucket 2)
SubscribeMailingListButton.js (S3) -> xxx (Lambda) -> /public/userdatabase.json (s3 bucket 2)
UnsubscribeMailingListButton.js (S3) -> xxx (Lambda) -> /public/userdatabase.json (s3 bucket 2)
ContactUsForm.js (S3) -> www.formspree.io -> sends email to support@sabrenetis.com gmail

## Building, Testing and Deploying
* Locally (Dev) - Run Server.js in a seperate terminal instance to replicate all the AWS Lambda (node.js)/API Gateway code for logins etc.,
* Online (Prod) - Push this repo to Github and Github Actions CI/CD will build/test/publish to S3 bucket
