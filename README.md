# Typescript Fetch Generator

This repository contains a script to generate a _typescript-fetch_ API client for [BIMData API](https://api.bimdata.io/doc#/) using [openapi-generator](https://github.com/OpenAPITools/openapi-generator).

You can generate the API client package with the `generate-package.sh` shell script as follow:
```
$ ./generate-package.sh <path-to-openapi-generator-jar> <path-to-swagger-json> <path-to-output-directory> <package-version>
```

It will create and build the API client in the `package/` directory.

### Script parameters

| Param | Description              | Mandatory | Default value           |
|:-----:| ------------------------ |:---------:| ----------------------- |
| $1    | Generator jar            | false     | ./openapi-generator.jar |
| $2    | Swagger definition file  | false     | ./swagger.json          |
| $3    | Output directory         | false     | ./package               |
| $4    | Package version          | false     | 0.0.1                   |
