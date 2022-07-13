#!/usr/bin/env sh

set -e

npm run build

cd dist

PROJECT="D:/Workplace/11/launchbar"
DIST="D:/Workplace/11/launchbar/dist"

cp -f "$DIST/index.html" $PROJECT
cp -f -r "$DIST/js" $PROJECT
cp -f -r "$DIST/css" $PROJECT
cp -f -r "$DIST/images" $PROJECT
cp -f -r "$DIST/videos" $PROJECT

git add index.html
git add css
git add js
git add images
git add videos

git commit -m 'Changes'

git push -f git@github.com:websorokinweb/LaunchBar.git main:gh-pages

cd -