package com.drpicox.game;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;

import com.drpicox.game.fixtures.Fixtures;

// !!! IMPORTANT !!!
// This test file is AUTOGENERATED by yarn create-tests
// If you need to update it, run yarn create-tests
// DO NOT MODIFY manually. Keep running yarn create-tests instead,
// while editing your posts.

@SpringBootTest
@AutoConfigureMockMvc
public class Post_20220715_HelloBlog_Test {

    @Autowired Post_20220715_HelloBlog_Context context;
    @Autowired Fixtures fixtures;

    @Test public void testPost() {
        fixtures.runBeforeTestStarts("2022-07-15_hello_blog", "bdc923639522b08b9df5faf815a6a152");

        // # Hello Blog
        // ## How to use the blog
        context.goToTheBlogSection();
        context.youShouldSeeAListOfPosts();
        context.theLastPostTitleShouldBeSThisPost("Hello Blog");
        context.goToTheSPost("Hello Blog");
        context.youShouldSeeTheSPost("Hello Blog");
        context.thePostShouldContainSWhichIsHere("this text");

        fixtures.runWhenTestSuccessful();
    }

}
