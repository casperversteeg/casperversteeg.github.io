#! /bin/bash

# change stack order of directories to make this live in root
root="$(dirname "$PWD")";
# echo $root
pushd $root;

# start python SimpleHTTPServer
python -m SimpleHTTPServer;

# pop top of stack so directories make sense again
popd;
