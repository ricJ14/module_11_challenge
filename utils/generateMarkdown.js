// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if(license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)` 
  }
  return ''
}

const renderLicenseLink = (license) => {
  if (license !== "None"){
    return `\n* [License](#License)\n`
  }
  return '';
}

function generateMarkdown(data) {
  console.log(data);
  return `#${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description

  ${data.description}

  ### Table of contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseLink(data.license)}
  *[Contributing](#contributing)

  *[Test](#test)

  *[Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following conmand:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Test

  To run tests, run the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).




`;
}

module.exports = generateMarkdown;
