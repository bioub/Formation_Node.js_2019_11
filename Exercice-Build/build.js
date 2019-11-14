const fs = require('fs-extra');
const path = require('path');
const md5 = require('md5');
const Terser = require('terser');
const argv = require('minimist')(process.argv.slice(2));

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

/**
 * @param {string} dirPath
 */
async function rmAndMkdir(dirPath) {
  await fs.remove(dirPath);
  await fs.mkdir(dirPath);
}

/**
 *
 * @param {string[]} sources
 * @param {string} dest
 * @param {object} options
 * @param {boolean} options.hash
 * @param {boolean} options.minify
 */
async function buildJs(sources, dest, options) {
  const { hash = false, minify = false } = options;
  const contents = await Promise.all(
    sources.map((source) => fs.readFile(source, { encoding: 'utf-8' })),
  );
  let content = contents.join('');

  if (minify) {
    content = Terser.minify(content).code;
  }

  if (hash) {
    const { dir, name, ext } = path.parse(dest);
    dest = path.resolve(dir, `${name}.${md5(content)}${ext}`);
  }

  await fs.writeFile(dest, content);

  return md5(content);
}

/**
 *
 * @param {string} source
 * @param {string} dest
 * @param {string} scriptPath
 */
async function buildHtml(source, dest, scriptPath) {
  let content = await fs.readFile(source, { encoding: 'utf-8' });

  content = content.replace(
    /<script.*<\/script>/s,
    `<script src="${scriptPath}"></script>`,
  );

  await fs.writeFile(dest, content);
}

(async () => {
  await rmAndMkdir(distPath);
  const hash = await buildJs([horlogeJsPath, indexJsPath], appJsDistPath, {
    hash: argv.hash,
    minify: argv.minify,
  });

  const scriptPath = hash ? `app.${hash}.js` : 'app.js';
  await buildHtml(indexHtmlPath, indexHtmlDistPath, scriptPath);
})();
