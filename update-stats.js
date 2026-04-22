const fs = require('fs');

const GITHUB_USERNAME = 'initchu';

fs.readFile('README.md', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading README.md:', err);
    process.exit(1);
  }

  const timestamp = new Date().getTime();

  const updatedContent = data
    .replace(
      /https:\/\/github-readme-stats\.vercel\.app\/api\?[^"')]+/g,
      `https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&icon_color=00b3ff&theme=blue-green&title_color=00b3ff&hide_border=true&include_all_commits=true&v=${timestamp}`
    )
    .replace(
      /https:\/\/github-readme-stats\.vercel\.app\/api\/top-langs\/\?[^"')]+/g,
      `https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=blue-green&title_color=00b3ff&hide_border=true&langs_count=8&v=${timestamp}`
    )
    .replace(
      /https:\/\/streak-stats\.demolab\.com\/\?[^"')]+/g,
      `https://streak-stats.demolab.com/?user=${GITHUB_USERNAME}&theme=blue-green&title_color=00b3ff&hide_border=true&v=${timestamp}`
    );

  fs.writeFile('README.md', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
      process.exit(1);
    }
    console.log('GitHub Stats updated successfully!');
  });
});
