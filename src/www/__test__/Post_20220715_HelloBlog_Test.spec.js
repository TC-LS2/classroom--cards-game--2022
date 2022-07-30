import { runBeforeTestStarts, runWhenTestSuccessful } from "./fixtures";
import { Post_20220715_HelloBlog_Context } from "./Post_20220715_HelloBlog_Context";

// !!! IMPORTANT !!!
// This test file is AUTOGENERATED by yarn create-tests
// If you need to update it, run yarn create-tests
// DO NOT MODIFY manually. Keep running yarn create-tests instead,
// while editing your posts.

test("2022-07-15_hello_blog.md", async () => {
  await runBeforeTestStarts(
    "2022-07-15_hello_blog",
    "bdc923639522b08b9df5faf815a6a152"
  );

  const context = new Post_20220715_HelloBlog_Context();
  // # Hello Blog
  // ## How to use the blog
  await context.goToTheBlogSection();
  await context.youShouldSeeAListOfPosts();
  await context.theLastPostTitleShouldBeSThisPost("Hello Blog");
  await context.goToTheSPost("Hello Blog");
  await context.youShouldSeeTheSPost("Hello Blog");
  await context.thePostShouldContainSWhichIsHere("this text");

  await runWhenTestSuccessful();
});
