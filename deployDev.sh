#!/bin/sh
mkdir ~/Library/"Application Support"/Franz/recipes/dev/recipe-meetup
cp -f ./*.png ./*.svg ./*.json ./*.js ~/Library/"Application Support"/Franz/recipes/dev/recipe-meetup

echo
echo deployed MeetUp recipe for Franz 'dev'
echo Restart Fanz app for new plugin install!
echo
