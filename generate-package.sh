#! /bin/bash

GENERATOR=$1
if [ -z "$GENERATOR" ]; then
  GENERATOR=openapi-generator.jar
fi
if [ ! -f $GENERATOR ]; then
  >&2 echo "Generator jar not found."; exit 1
fi

INPUT=$2
if [ -z "$INPUT" ]; then
  INPUT=swagger.json
fi
if [ ! -f $INPUT ]; then
  >&2 echo "Swagger file not found."; exit 1
fi

VERSION=$3
if [ -z "$VERSION" ]; then
  VERSION=0.0.1
fi

OUTPUT=./package

rm -rf $OUTPUT/src/runtime.ts $OUTPUT/src/apis $OUTPUT/src/models $OUTPUT/dist $OUTPUT/tsconfig.json

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
npmName=@bimdata/typescript-fetch-api-client,\
useSingleRequestParameter=false,\
npmVersion=$VERSION

exit 0
