#!/bin/bash
# Batch render all 49 per-question solution videos.
# Usage:
#   ./render_questions.sh          # render all, low quality (480p15)
#   ./render_questions.sh Q5_1_1   # render just one
#   ./render_questions.sh -qh      # render all, high quality (1080p60)

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
MAMBA_ROOT_PREFIX="/tmp/manim_env"
MICROMAMBA="$SCRIPT_DIR/../bin/micromamba"
QUALITY="-ql"

# Parse arguments
SINGLE_SCENE=""
for arg in "$@"; do
    if [ "$arg" = "-qh" ]; then
        QUALITY="-qh"
    elif [ "$arg" = "-ql" ]; then
        QUALITY="-ql"
    elif [[ "$arg" == Q5_* ]]; then
        SINGLE_SCENE="$arg"
    fi
done

# All 49 scene names
ALL_SCENES=(
    Q5_1_1 Q5_1_2 Q5_1_3 Q5_1_4 Q5_1_5
    Q5_2_1 Q5_2_2 Q5_2_3 Q5_2_4 Q5_2_5 Q5_2_6 Q5_2_7
    Q5_2_8 Q5_2_9 Q5_2_10 Q5_2_11 Q5_2_12 Q5_2_13 Q5_2_14
    Q5_3_1 Q5_3_2 Q5_3_3 Q5_3_4 Q5_3_5 Q5_3_6 Q5_3_7 Q5_3_8 Q5_3_9 Q5_3_10
    Q5_4_1 Q5_4_2 Q5_4_3 Q5_4_4 Q5_4_5 Q5_4_6 Q5_4_7
    Q5_4_8 Q5_4_9 Q5_4_10 Q5_4_11 Q5_4_12
    Q5_5_1 Q5_5_2 Q5_5_3 Q5_5_4 Q5_5_5 Q5_5_6 Q5_5_7 Q5_5_8
)

render_one() {
    local scene="$1"
    echo "=== [$scene] Rendering ($QUALITY) ==="
    MAMBA_ROOT_PREFIX="$MAMBA_ROOT_PREFIX" "$MICROMAMBA" run -n manim bash -c \
        'export PATH="$HOME/Library/TinyTeX/bin/universal-darwin:$PATH" && cd "'"$SCRIPT_DIR"'" && manim '"$QUALITY"' question_videos.py '"$scene"' 2>&1' \
        | tail -5

    # Determine output directory based on quality
    if [ "$QUALITY" = "-qh" ]; then
        OUT_DIR="$SCRIPT_DIR/media/videos/question_videos/1080p60"
    else
        OUT_DIR="$SCRIPT_DIR/media/videos/question_videos/480p15"
    fi

    # Convert .srt to .vtt
    local srt="$OUT_DIR/$scene.srt"
    local vtt="$OUT_DIR/$scene.vtt"
    if [ -f "$srt" ]; then
        echo "WEBVTT" > "$vtt"
        echo "" >> "$vtt"
        # Convert SRT timestamps (comma) to VTT timestamps (period)
        sed 's/,/./g' "$srt" >> "$vtt"
        echo "    ✓ $vtt created"
    fi

    if [ -f "$OUT_DIR/$scene.mp4" ]; then
        echo "    ✓ $scene.mp4 OK"
    else
        echo "    ✗ $scene.mp4 MISSING!"
    fi
}

# Render
if [ -n "$SINGLE_SCENE" ]; then
    render_one "$SINGLE_SCENE"
else
    TOTAL=${#ALL_SCENES[@]}
    COUNT=0
    FAILED=0
    for scene in "${ALL_SCENES[@]}"; do
        COUNT=$((COUNT + 1))
        echo ""
        echo "────────── [$COUNT/$TOTAL] ──────────"
        render_one "$scene"
        if [ "$QUALITY" = "-ql" ]; then
            OUT_DIR="$SCRIPT_DIR/media/videos/question_videos/480p15"
        else
            OUT_DIR="$SCRIPT_DIR/media/videos/question_videos/1080p60"
        fi
        [ ! -f "$OUT_DIR/$scene.mp4" ] && FAILED=$((FAILED + 1))
    done

    echo ""
    echo "=========================================="
    echo "Batch render complete: $((TOTAL - FAILED))/$TOTAL succeeded"
    [ $FAILED -gt 0 ] && echo "FAILED: $FAILED videos"
    echo "=========================================="
fi
