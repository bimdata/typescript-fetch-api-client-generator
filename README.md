# Typescript Fetch Generator

This repository contains what is needed to generate a _typescript-fetch_ API client for [BIMData API](https://api.bimdata.io/doc#/) using [openapi-generator](https://github.com/OpenAPITools/openapi-generator).

You can generate the API client package with the `generate-package.sh` shell script as follow:
```
$ ./generate-package.sh <path-to-openapi-generator-jar> <path-to-swagger-json> <package-version>
```

It will create and build the API client in the `package/` directory.
Additionally it will set a [custom README](./package_readme.md) with basic usage info about the package.
