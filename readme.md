# Leaky Pipelines

Brought to you by www.TinkurLab.com

See [License](license.md)

## Overview
A simple dashboard to help identify unhealthy Jenkins pipelines and jobs.

## Testing

1. `sh test-up.sh`
1. test at `http://localhost:6162/` in your browser

## Building and Pushing

https://hub.docker.com/r/tinkurlab/leaky-pipes/

1. `docker login`
1. `docker build -t tinkurlab/leaky-pipes:latest .`
1. `docker push tinkurlab/leaky-pipes:latest`