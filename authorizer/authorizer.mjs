export const lambdaHandler = async (event) => {
  const api_id = event.requestContext.apiId;

  const policy = {
    Version: "2012-10-17",
    Statement: [
      {
        Action: "execute-api:Invoke",
        Effect: "Allow",
        Resource: `arn:aws:execute-api:${process.env.REGION}:${process.env.AWS_ACCOUNT_ID}:${api_id}/*/*/*`,
      },
    ],
  };

  return {
    principalId: "user",
    policyDocument: policy,
    context: {
      foo: "bar",
      bar: "foo",
    },
  };
};
