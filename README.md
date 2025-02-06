## Description
v0.1

Author: Sumeet Singh

Dated: 26/06/2024

Website for Biomedical Engineering company: SABRENETICS PTY LTD @ sabrenetics.com

Source: https://github.com/Sabrenetics/sabrenetics.com.git

IMPORTANT MESSAGE: The code within this react website repo is the only copy of all code/assets/documentation.
Do not delete anything unless you can confirm their is a second backup of this codebase. E.g, the ./public/assets folder
contains the only copy of all rare images used in this website. Take a physical backup before any modifications.

## STACK
MISSING AWS ACCOUNT # DETAILS __________________
* Frontend - HTML5/CSS3/React, assets within ./public/assets
* Backend - AWS Lambda (node.js API's) + AWS API Gateway
* Databases - ./databases/userdatabase.json (NoSQL) (Hidden from GitHub Repo and S3 public reading with restricted Bucket Permissions) 
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sabrenetics.com/*",
            "Condition": {
                "StringNotLike": {
                    "s3:prefix": [
                        "userdatabase.json"
                    ]
                }
            }
        },
        {
            "Effect": "Deny",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::sabrenetics.com/databases/userdatabase.json"
        }
    ]
}
```
* Hosting - AWS S3 region: us-east-1
* Network - AWS Route 53 + AWS Certificate Manager + AWS Cloudfront

## API WORKFLOWS
LoginForm.js (S3) -> DecipherHash.js (s3) -> xxx (Lambda) -> /public/userdatabase.json (s3)
SignUpForm.js (S3) -> HashPassword.js (s3) -> xxx (Lambda) -> /public/userdatabase.json (s3)
AccountForm.js (S3) -> HashPassword.js (s3) -> xxx (Lambda) -> /public/userdatabase.json (s3)
DeleteAccountButton.js (S3) -> xxx (Lambda) -> /public/userdatabase.json (s3)
SubscribeMailingListButton.js (S3) -> xxx (Lambda) -> /public/userdatabase.json (s3)
UnsubscribeMailingListButton.js (S3) -> xxx (Lambda) -> /public/userdatabase.json (s3)
ContactUsForm.js (S3) -> www.formspree.io -> sends email to support@sabrenetis.com gmail

## Building, Testing and Deploying
* Locally (Dev) - To run locally follow these steps
1. Run Server.js in a seperate terminal instance to replicate all the AWS Lambda (node.js)/API Gateway code for logins etc.,
2. In a new terminal run
```js
cd src
npm install
npm start
```
* Online (Prod) - To push to production
1. Make your code changes e.g, edit some HTML code
2. Push this repo to Github e.g, git add ., git push etc., ..
3. Github Actions CI/CD will automaticlaly build react site, test and push to S3 bucket and be live @ www.sabrenetics.com

# TO DO
