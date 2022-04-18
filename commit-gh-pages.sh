git checkout gh-pages
git add -f dist
git commit -m "publish gh-pages"
git subtree push --prefix dist origin gh-pages