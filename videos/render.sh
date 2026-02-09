#!/bin/bash
# Render helper for Manim videos
# Usage: ./render.sh [script.py] [SceneName] [-ql|-qh]
#   -ql = low quality preview (480p, 15fps) — fast
#   -qh = high quality final (1080p, 60fps) — slow
#
# Examples:
#   ./render.sh section_5_1_concept.py -ql          # render all scenes, low quality
#   ./render.sh section_5_1_concept.py WhatIsAFunction -qh  # render one scene, 1080p
#   ./render.sh all -ql                              # render ALL videos, low quality

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MAMBA_ROOT_PREFIX="/tmp/manim_env"
MICROMAMBA="$SCRIPT_DIR/../bin/micromamba"
QUALITY="${@: -1}"  # last argument

if [ "$QUALITY" != "-ql" ] && [ "$QUALITY" != "-qh" ]; then
    QUALITY="-ql"
fi

export PATH="/Users/veenakrishnamurthy/Library/TinyTeX/bin/universal-darwin:$PATH"

run_manim() {
    local script="$1"
    local scene="$2"
    local qual="$3"
    echo "=== Rendering $script $scene ($qual) ==="
    MAMBA_ROOT_PREFIX="$MAMBA_ROOT_PREFIX" "$MICROMAMBA" run -n manim bash -c \
        "export PATH='/Users/veenakrishnamurthy/Library/TinyTeX/bin/universal-darwin:\$PATH' && cd '$SCRIPT_DIR' && manim $qual '$script' $scene 2>&1"
}

if [ "$1" = "all" ]; then
    for script in section_5_1_concept.py section_5_2_domain.py section_5_3_inverse.py section_5_4_graphs.py section_5_5_exam.py; do
        run_manim "$script" "" "$QUALITY"
    done
elif [ -n "$2" ] && [ "$2" != "-ql" ] && [ "$2" != "-qh" ]; then
    run_manim "$1" "$2" "$QUALITY"
else
    run_manim "$1" "" "$QUALITY"
fi
