#!/bin/bash
ls

# Directory containing JSON files
directory=$1

# Flag to track validation status
valid=true

# Iterate through all JSON files in the directory
for file in "$directory"/*.json; do
  # Use jq to recursively find any 'name' fields that are strings and contain spaces
  results=$(jq -r 'recurse | objects | .name? | select(.) | with_entries(select(.value | test(" "))) | keys[]' "$file")
  
  if [ ! -z "$results" ]; then
    echo "Validation failed in $file."
    valid=false
  else
    echo "$file validated successfully."
  fi
done

# Exit with error if any file failed validation
if [ "$valid" = false ]; then
  echo "Validation errors found in some JSON files."
  exit 1
else
  echo "All JSON files validated successfully."
fi
