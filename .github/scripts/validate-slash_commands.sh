directory=$1

valid=true

for file in "$directory"/*.json; do
  echo "Validating $file"

  # Validate 'name' fields: No spaces allowed
  name_issues=$(jq -r 'recurse | objects | .name? | select(.) | with_entries(select(.value | test(" "))) | keys[] as $keys | $keys[] | "\($keys) at line \(input_line_number)"' "$file")
  if [ ! -z "$name_issues" ]; then
    echo "Validation failed in $file for 'name' field(s) with spaces:"
    echo "$name_issues"
    valid=false
  fi

  description_issues=$(jq -r 'recurse | objects | .description? | select(.) | to_entries[] | select(.value | type == "string" and length > 100) | "\(.key) at line \(input_line_number)"' "$file")
  if [ ! -z "$description_issues" ]; then
    echo "Validation failed in $file for 'description' field(s) exceeding 100 characters:"
    echo "$description_issues"
    valid=false
  fi

  if [ -z "$name_issues" ] && [ -z "$description_issues" ]; then
    echo "$file validated successfully."
  fi
done

if [ "$valid" = false ]; then
  echo "Validation errors found in some JSON files."
  exit 1
else
  echo "All JSON files validated successfully."
fi
