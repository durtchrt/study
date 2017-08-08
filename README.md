# study

1. AWS 가입
  
2. IAM 생성
3. AWS CLI
  - [MSI 다운로드](http://docs.aws.amazon.com/ko_kr/cli/latest/userguide/awscli-install-windows.html)
http://docs.aws.amazon.com/ko_kr/cli/latest/userguide/installing.html
http://docs.aws.amazon.com/ko_kr/lambda/latest/dg/setup.html
http://docs.aws.amazon.com/ko_kr/lambda/latest/dg/setup-awscli.html

[cli tip](https://aws.amazon.com/ko/blogs/korea/tips-aws-cli/)

http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

```
C:\Users\boojo>aws configure
AWS Access Key ID [****************VOUA]: AKIAJNBFFM5N5TL5VOUA
AWS Secret Access Key [****************t8V+]: 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
Default region name [None]: ap-northeast-2
Default output format [None]: json


aws configure list --profile default

## profile을 넣고 싶으면
$ aws configure --profile user2
```

  
4. AWS LAMBDA
 - [시작](https://aws.amazon.com/ko/blogs/korea/aws-lambda-update-run-java-code-in-response-to-events/)
 - [AWS MAVEN](http://docs.aws.amazon.com/lambda/latest/dg/java-create-jar-pkg-maven-no-ide.html)

mvn package하고 s3에 저장
https://aws.amazon.com/ko/cli/

```
aws s3 ls s3://lambda-function-bucket-ap-northeast-2-1502201126069

aws s3 cp c:\Users\boojo\dev\github\study\example\lambda1\target\java-example-1.0-SNAPSHOT.jar s3://lambda-function-bucket-ap-northeast-2-1502201126069/java-example-1.0-SNAPSHOT.jar
```

  - [guide](http://docs.aws.amazon.com/ko_kr/lambda/latest/dg/welcome.html)

[python sample](http://docs.aws.amazon.com/ko_kr/lambda/latest/dg/get-started-create-function.html)

 - [java ](http://docs.aws.amazon.com/ko_kr/lambda/latest/dg/get-started-step4-optional.html)

$ aws lambda update-function-configuration  --function-name your function name  --region region where your function resides --memory-size memory amount --profile adminuser

https://northeast-2.signin.aws.amazon.com/oauth?SignatureVersion=4&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJMOATPLHVSJ563XQ&X-Amz-Date=2017-08-08T13%3A33%3A44.529Z&X-Amz-Signature=35f1988b9af3b1d09a1b98ee755fb4b18e0677d9c441fdc75dfcf03a5b208673&X-Amz-SignedHeaders=host&client_id=arn%3Aaws%3Aiam%3A%3A015428540659%3Auser%2Fhomepage&redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Fstate%3DhashArgs%2523%26isauthcode%3Dtrue&response_type=code&state=hashArgs%23

[resion code](http://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/using-regions-availability-zones.html)

seoul: ap-northeast-2

aws lambda update-function-configuration  --function-name LambdaJavaExample --region ap-northeast-2
 --memory-size 256  --profile adminuser


arn:aws:iam::971747625546:user/boojongmin

aws lambda create-function \ --region us-west-2 \
--function-name getting-started-lambda-function-in-java \
--zip-file fileb://deployment-package (zip or jar) path \
--role arn:aws:iam::account-id:role/lambda_basic_execution  \
--handler example.Hello \
--runtime java8 \
--timeout 15 \
--memory-size 512

--------------------------
aws lambda create-function \
--region ap-northeast-2 \
--function-name getting-started-lambda-function-in-java \
--zip-file fileb://deployment-package (zip or jar)
        path \
--role arn:aws:iam::account-id:role/lambda_basic_execution  \
--handler example.Hello \
--runtime java8 \
--timeout 15 \
--memory-size 512

[aws java 개발자](https://aws.amazon.com/ko/java/)
[aws eclipse plugin](https://aws.amazon.com/ko/java://aws.amazon.com/ko/eclipse/)
[java sdk](https://aws.amazon.com/ko/sdk-for-java/)
https://aws.amazon.com/ko/blogs/developer/testing-lambda-functions-using-the-aws-toolkit-for-eclipse/

















