#!/bin/bash
# Static server for Atomy site — isolated, read-only, port 8090
cd /home/archi/Projects/atomy-site
exec npx serve dist -l 8090 --no-clipboard --single
