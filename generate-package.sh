#! /bin/bash

GENERATOR=$1
INPUT=$2
VERSION=$3
OUTPUT=./package

if [ -z "$GENERATOR" ]; then
  GENERATOR=openapi-generator.jar
fi
if [ -z "$INPUT" ]; then
  INPUT=swagger.json
fi
if [ -z "$VERSION" ]; then
  VERSION=0.0.1
fi

# See https://openapi-generator.tech/docs/generators/typescript-fetch
# for a list of available additional properties.
java \
  -jar $GENERATOR generate \
  -g typescript-fetch \
  -i $INPUT \
  -o $OUTPUT \
  --additional-properties \
allowUnicodeIdentifiers=true,\
supportsES6=true,\
typescriptThreePlus=true,\
npmName=@bimdata/typescript-fetch-api-client,\
npmVersion=$VERSION

cd $OUTPUT
npm install
npm run build

exit 0
