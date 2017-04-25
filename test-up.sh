#!/bin/bash
docker-compose build --no-cache
docker-compose -f docker-compose.dev.yml up