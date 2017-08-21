#!/bin/bash

docker run \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:/mindcrunch" \
    -w "/mindcrunch" \
    docker/compose:1.15.0 build --force-rm

docker run \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:/mindcrunch" \
    -w "/mindcrunch" \
    docker/compose:1.15.0 up
