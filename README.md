
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npm run lint
npx lint-staged
npm test
