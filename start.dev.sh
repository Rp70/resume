#!/usr/bin/env bash
set -e

docker run -it --rm --network=host \
    -v $PWD/src:/app:rw \
    -w /app \
    -u node \
    --name resume \
    --hostname resume \
    rp70/react bash
