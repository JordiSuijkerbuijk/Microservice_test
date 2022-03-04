#!/bin/bash

WORKSPACE=$(pwd)

cd $WORKSPACE/cms && npm run develop & cd $WORKSPACE/api/content && npm run start & cd $WORKSPACE/web && npm run webpack && kill $!
