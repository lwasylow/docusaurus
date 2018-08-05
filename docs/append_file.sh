#!/bin/bash

echo "{" > sidebars.json
echo '"docs" : {' >> sidebars.json

for f in *.md
do
  filename="${f%.*}"
  echo '  "'$filename'" : ["'$f'"],' >> sidebars.json
  #echo -e "---\nid: $filename\ntitle: $filename\n---\n\n$(cat $f)" > $f
  #cat $f
done
echo "}" >> sidebars.json
echo "}" >> sidebars.json