#!/usr/bin/env bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export PORT=3000

nodemon -w $SCRIPT_DIR/server $SCRIPT_DIR/server/index.js &
webpack --config $SCRIPT_DIR/webpack.config.js -w &
(node-sass --output $SCRIPT_DIR/public $SCRIPT_DIR/client;
  node-sass --watch --output $SCRIPT_DIR/public $SCRIPT_DIR/client) &

wait
