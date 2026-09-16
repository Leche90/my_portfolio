#!/usr/bin/env bash
set -euo pipefail
cd /home/lleche/my_portfolio

echo "PROJECT ROOT: $(pwd)"
echo

# Folders first
echo "======== FOLDERS ========"
find . \
  -type d \
  \( -name node_modules -o -name .git -o -name .next -o -name dist -o -name .turbo \) -prune \
  -o -type d -print \
  | sed 's|^\./||' \
  | sort

echo
echo "======== FILES BY FOLDER ========"
find . \
  \( -name node_modules -o -name .git -o -name .next -o -name dist -o -name .turbo \) -prune \
  -o -type f -print \
  | sed 's|^\./||' \
  | sort \
  | awk -F/ '
    {
      file=$NF
      path=$0
      nf=NF
      if (nf==1) { dir="(root)" }
      else {
        dir=$1
        for (i=2;i<nf;i++) dir=dir "/" $i
      }
      if (dir != last) {
        printf "\n[%s]\n", dir
        last=dir
      }
      print "  " file
    }
  '

echo
echo "======== CONTENT HOTSPOTS ========"
echo "These are the files that likely hold navbar, hero, and section copy:"
find . \
  \( -name node_modules -o -name .git -o -name .next \) -prune \
  -o -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js' -o -name '*.mdx' \) -print \
  | sed 's|^\./||' \
  | sort \
  | grep -Ei 'data|nav|header|hero|layout|page|contact|timeline|stack|footer|home' || true