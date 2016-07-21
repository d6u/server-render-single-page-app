#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export PORT=3003
# export NODE_ENV=production

nodemon -w $SCRIPT_DIR/server -w $SCRIPT_DIR/client $SCRIPT_DIR/server/entry.js &
webpack --config $SCRIPT_DIR/webpack.config.js -w &
(node-sass --output $SCRIPT_DIR/public $SCRIPT_DIR/client;
  node-sass --watch --output $SCRIPT_DIR/public $SCRIPT_DIR/client) &

wait
