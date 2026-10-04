const fs = require('fs');

const GITHUB_USERNAME = 'initchu';
const STATS_URL = `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&icon_color=00b3ff&theme=blue-green&title_color=00b3ff&hide_border=true&include_all_commits=true`;
const STREAK_URL = `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&count_private=true&theme=blue-green&title_color=00b3ff&hide_border=true`;

const replacements = [
  {
    pattern: /https:\/\/github-readme-stats(?:-sigma-five)?\.vercel\.app\/api\?[^"')]+/g,
    url: STATS_URL,
  },
  {
    pattern: /https:\/\/(?:github-readme-streak-stats\.herokuapp\.com|streak-stats\.demolab\.com)\/\?[^"')]+/g,
    url: STREAK_URL,
  },
];

let content = fs.readFileSync('README.md', 'utf8');
const timestamp = Date.now();
let replaced = 0;

for (const { pattern, url } of replacements) {
  content = content.replace(pattern, () => {
    replaced++;
    return `${url}&v=${timestamp}`;
  });
}

if (replaced === 0) {
  console.error('No stats URLs found in README.md — nothing to update.');
  process.exit(1);
}

fs.writeFileSync('README.md', content, 'utf8');
console.log(`Updated ${replaced} stats URL(s).`);
