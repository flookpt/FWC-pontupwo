#!/bin/bash
if [ "$#" -ne 0 ]
    then
        for var in "$@"; do
            echo "$var"
        done
else
    echo "No arguments supplied"
    exit 1
fi