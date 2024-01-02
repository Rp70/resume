#!/usr/bin/env bash
set -e

docker exec -it \
    -u node \
    $@ \
    resume bash
