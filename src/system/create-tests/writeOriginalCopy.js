const path = require("node:path");
const { copy } = require("fs-extra");

async function writeOriginalCopy(post) {
  console.log(post);
  if (post.frontmatter.values.coder) return true;

  const sourcePath = post.path;
  const targetPath = path.join(
    "eval",
    "original-posts",
    post.frontmatter.values.writer,

    `${post.id}.md`,
  );

  await copy(sourcePath, targetPath);

  return true;
}
exports.writeOriginalCopy = writeOriginalCopy;
