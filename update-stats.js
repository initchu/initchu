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
      /!\[Chuchengzhi's github stats\].*?\)/g,
      `![Chuchengzhi's github stats](https://github-readme-stats-sigma-five.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&count_private=true&line_height=20&icon_color=00b3ff&theme=blue-green&title_color=00b3ff&hide_border=false&include_all_commits=true&v=${timestamp})`
    )

    .replace(
      /!\[Chuchengzhi's current streak\].*?\)/g,
      `![Chuchengzhi's current streak](https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&count_private=true&theme=blue-green&title_color=00b3ff&hide_border=false&v=${timestamp})`
    );

  fs.writeFile('README.md', updatedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
      process.exit(1);
    }
    console.log('GitHub Stats updated successfully!');
    console.log('To preview changes, open README.md in a markdown viewer.');
  });
});