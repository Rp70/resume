FROM node:18-slim

USER node
ENV NPM_CONFIG_PREFIX=~/.npm-global
ENV PATH=$PATH:~/.npm-global/bin

RUN set -ex && \
    npm install -g npm@latest

RUN set -ex && \
    npm install -g nx@latest

WORKDIR /app
