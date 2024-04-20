directory=$1

valid=true

for file in "$directory"/*.json; do
  results=$(jq -r 'recurse | objects | .name? | select(.) | with_entries(select(.value | test(" "))) | keys[]' "$file")
  
  if [ ! -z "$results" ]; then
    echo "Validation failed in $file."
    valid=false
  else
    echo "$file validated successfully."
  fi
done

if [ "$valid" = false ]; then
  echo "Validation errors found in some JSON files."
  exit 1
else
  echo "All JSON files validated successfully."
fi
