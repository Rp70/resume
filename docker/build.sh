#!/usr/bin/env bash
set -ex

docker buildx build --tag rp70/react --file docker/Dockerfile .
