#!/bin/bash
git push github `git subtree split --prefix storybook-static storybook` --force
