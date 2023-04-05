#!/usr/bin/env sh

set -e

npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

 git push -f git@github.com:danie1net0/laravel-commands-doc.git master:gh-pages

cd -
