#!/usr/bin/env bash

emulator -avd `emulator -list-avds | grep 'x86' | head -n 1`
