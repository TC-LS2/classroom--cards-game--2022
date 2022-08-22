package com.drpicox.game.blog;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import com.drpicox.game.util.TestUtils;

// !!! IMPORTANT !!!
// This test file is AUTOGENERATED by yarn create-tests
// If you need to update it, run yarn create-tests
// DO NOT MODIFY manually. Keep running yarn create-tests instead,
// while editing your posts.

@SpringBootTest
@AutoConfigureMockMvc
public class Post_20220715_HelloBlog_Test {

    @Autowired Post_20220715_HelloBlog_Context context;
    @Autowired TestUtils testUtils;

    @Test public void testPost() throws Throwable {
        testUtils.runBeforeTestStarts("2022-07-15_hello_blog", "51b19208fbda586e1c68931c488111bf");
        context.beforeTest();

        // # Hello Blog                                          // # Hello Blog

        // ## How to use the blog                                // ## How to use the blog
        context.goToTheBlogSection();                            // * Go to the blog section,
        context.youShouldSeeAListOfPosts();                      // * You should see a list of posts,
        context.theLastPostTitleShouldBeSThisPost("Hello Blog"); // * The last post title should be "Hello Blog", this post
        context.goToTheSPost("Hello Blog");                      // * Go to the "Hello Blog" post,
        context.youShouldSeeTheSPost("Hello Blog");              // * You should see the "Hello Blog" post
        context.thePostShouldContainSWhichIsHere("this text");   // * The post should contain "this text", which is here.

        context.afterTest();
        testUtils.runWhenTestSuccessful();
    }

}
