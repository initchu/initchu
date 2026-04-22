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
      /https:\/\/github-readme-stats-sigma-five\.vercel\.app\/api\?[^"')]+/g,
      `https://github-readme-stats-sigma-five.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&icon_color=00b3ff&theme=blue-green&title_color=00b3ff&hide_border=true&include_all_commits=true&v=${timestamp}`
    )
    .replace(
      /https:\/\/github-readme-streak-stats\.herokuapp\.com\/\?[^"')]+/g,
      `https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&count_private=true&theme=blue-green&title_color=00b3ff&hide_border=true&v=${timestamp}`
    );

  fs.writeFile('README.md', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
      process.exit(1);
    }
    console.log('GitHub Stats updated successfully!');
  });
});
