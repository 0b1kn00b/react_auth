#!/bin/bash
#git push github `git subtree split --prefix storybook-static storybook`:storybook --force
pnpm run storybook::build && git add storybook-static && git commit -m "publish" && git push && git subtree push --prefix storybook-static github storybook