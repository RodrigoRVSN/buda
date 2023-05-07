import fs from 'fs';
import path from 'path';

const capitalizeFirstLetter = (string) => {
  const sanitizedString = string.replace(/[_-]/g, ' ');
  return sanitizedString.replace(/(?:^|\s)\S/g, (char) => char.toUpperCase());
};

const hasReadme = (directory) => {
  const files = fs.readdirSync(directory);
  return files.includes('README.md');
};

const generateSidebar = (directory, prefix = '', subDirLevel = 0) => {
  let sidebarContent = '';

  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subdirectory = path.join(directory, file);
      const subItems = generateSidebar(subdirectory, `${prefix}/${file}`, subDirLevel + 1);
      const subjectTitle = capitalizeFirstLetter(file);

      if (subItems !== '') {
        sidebarContent += `\t`.repeat(subDirLevel);
        sidebarContent += hasReadme(subdirectory) ? '' : `- ${subjectTitle}\n`;
        sidebarContent += `${subItems}`;
      }
    } else if (file === 'README.md') {
      const fileName = path.basename(prefix);
      const title = prefix === '' ? 'Home' : capitalizeFirstLetter(fileName);

      sidebarContent += `- [${title}](${prefix}/)\n`;
    }
  });

  return sidebarContent;
};

const sidebar = generateSidebar('./');

fs.writeFileSync('_sidebar.md', sidebar);
