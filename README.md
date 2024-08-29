# apigateway-auth-example

Correctly configuring IAM resource policies and/or roles for custom Lambda Authorizers is, in my experience, error prone and painful to debug -- particularly when using lambda resource policies to control access to the authorizer.

There are subtle differences in accepted property values for API gateway lambda integrations and lambda authorizers and output acceptable when testing locally with `sam local start-api` fails
silently when testing in the cloud with `sam sync`. In addition, the access logs for API gateway are frequently unhelpful. 

For example, while the body of a lambda integration must be stringified before it is returned to API gateway, stringifying the policy document included in the response from a custom lambda authorizer appears to result 
in a generic 500 error being returned with absolutely no additional information provided in the API gateway access logs. 

This repo is intended to provide a minimal working example of an API gateway providing a HTTP api backed by a trivial lambda integration and a dummy custom lambda authorizer.  

- hello-world - Code for the SAM lambda function.
- authorizer - Code for a toy custom lambda authorizer (no authorization logic)
- template.yaml - A template that defines the application's AWS resources.

## Deploy the sample application

The Serverless Application Model Command Line Interface (SAM CLI) is an extension of the AWS CLI that adds functionality for building and testing Lambda applications. It uses Docker to run your functions in an Amazon Linux environment that matches Lambda. It can also emulate your application's build environment and API.

To use the SAM CLI, you need the following tools.

* SAM CLI - [Install the SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html)
* Node.js - [Install Node.js 20](https://nodejs.org/en/), including the NPM package management tool.
* Docker - [Install Docker community edition](https://hub.docker.com/search/?type=edition&offering=community)

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
sam delete --stack-name apigateway-auth-example
```

## Resources

See the [AWS SAM developer guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html) for an introduction to SAM specification, the SAM CLI, and serverless application concepts.

Next, you can use AWS Serverless Application Repository to deploy ready to use Apps that go beyond hello world samples and learn how authors developed their applications: [AWS Serverless Application Repository main page](https://aws.amazon.com/serverless/serverlessrepo/)
