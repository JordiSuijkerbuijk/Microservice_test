#!/bin/bash

WORKSPACE=$(pwd)

cd $WORKSPACE/cms && strapi develop cd $WORKSPACE/web && npm run dev & cd $WORKSPACE/web && npm run webpack && kill $!
