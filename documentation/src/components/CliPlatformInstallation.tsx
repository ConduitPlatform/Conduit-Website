import React, { useEffect, useState } from "react";
import CodeBlock from '@theme/CodeBlock';

const CliPlatformInstallation = ({ platform }) => {
  const [resObj, setResObj] = useState<{firstLink: string, tag: string}>();
  useEffect(() => {
    fetch("https://api.github.com/repos/ConduitPlatform/CLI/releases/latest")
      .then((res) => res.json())
      .then((data) =>
        setResObj({
          firstLink: data.assets[0].browser_download_url,
          tag: data.tag_name,
        })
      );
  }, []);
  return getReturnValue(platform, resObj?.tag, resObj?.firstLink);
};
export default CliPlatformInstallation;

const getCurlLines = (platform: string, tag?: string, filePrefix?: string) => {
  const baseUrl = `https://github.com/ConduitPlatform/CLI/releases/download/${tag}/${filePrefix}`;
  if (platform === 'Windows') {
    return `curl -Lo conduit-cli.tar.gz ${baseUrl}-win32-x64.tar.gz`;
  } else if (platform === 'Linux') {
    return `# amd64\ncurl -Lo conduit-cli.tar.gz ${baseUrl}-linux-x64.tar.gz\n`
      + `# arm64\ncurl -Lo conduit-cli.tar.gz ${baseUrl}-linux-arm.tar.gz`;
  } else {
    return `# intel\ncurl -Lo conduit-cli.tar.gz ${baseUrl}-darwin-x64.tar.gz\n`
     + `# apple silicon\ncurl -Lo conduit-cli.tar.gz ${baseUrl}-darwin-arm64.tar.gz`;
  }
}

const getReturnValue = (platform: string, tag?: string, firstLink?: string) => {
  if (!firstLink) {
    return null;
  }
  const filePrefix = firstLink.slice(firstLink.indexOf('conduit-')).split('-').slice(0, 3).join('-')
  let installationText = getCurlLines(platform, tag, filePrefix);
  const commonUnix = '\n' +
    'mkdir ~/.conduit\n' +
    'tar xvf conduit-cli.tar.gz --strip-components=1 -C ~/.conduit\n' +
    'chmod a+x ~/.conduit/bin/conduit\n\n' +
    '# Update your $PATH to include the installation directory\n' +
    (platform !== 'Linux' ? '' :
      ('# For Bash Users\n' +
      `echo -e '# Add Conduit CLI to executable PATH\\nexport PATH=$PATH:~/.conduit/bin\\n' >> ~/.bashrc\n` +
      'source ~/.bashrc\n' +
      '# For Zsh Users\n')
    ) +
    `echo -e '\\n# Add Conduit CLI to executable PATH\\nexport PATH=$PATH:~/.conduit/bin\\n' >> ~/.zshrc\n` +
    'source ~/.zshrc';
  if (platform === 'Linux') {
    installationText += '\n' + commonUnix;
  } else if (platform === 'Mac') {
    installationText += '\n' + commonUnix;
  } else if (platform === 'Windows') {
    // TODO: Windows installation instructions
  }
  return <CodeBlock language='bash'>{installationText}</CodeBlock>
}
