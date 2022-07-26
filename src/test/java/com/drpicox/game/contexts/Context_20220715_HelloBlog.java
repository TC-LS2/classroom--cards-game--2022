package com.drpicox.game.contexts;

import com.drpicox.game.blog.api.ListPostsResponse;
import com.drpicox.game.blog.api.ListPostsResponseEntry;
import com.drpicox.game.blog.api.PostResponse;
import org.springframework.stereotype.Component;
import static com.google.common.truth.Truth.assertThat;
import static com.google.common.truth.Truth8.assertThat;
import com.drpicox.game.fixtures.FrontendSimulator;

import java.util.Optional;

@Component
public class Context_20220715_HelloBlog {

    private final FrontendSimulator frontendSimulator;

    private ListPostsResponse postsList;
    private PostResponse post;

    Context_20220715_HelloBlog(FrontendSimulator frontendSimulator) {
        this.frontendSimulator = frontendSimulator;
    }

    public void goToTheBlogSection() {
        postsList = frontendSimulator.get("/api/v1/posts", ListPostsResponse.class);
    }

    public void youShouldSeeAListOfPosts() {
        assertThat(postsList.getPosts()).isNotEmpty();
    }

    public void theLastPostTitleShouldBeXThisPost(String expected) {
        // expected = "Hello Blog"
        var query = findPostEntry(expected);
        assertThat(query).isPresent();
    }

    public void goToTheXPost(String the) {
        // the = "Hello Blog"
        var entry = findPostEntry(the);
        var id = entry.get().getId();
        post = frontendSimulator.get("/api/v1/posts/" + id, PostResponse.class);
    }

    public void youShouldSeeTheXPost(String the) {
        assertThat(post.getTitle()).isEqualTo(the);
    }

    public void thePostShouldContainXWhichIsHere(String contain) {
        assertThat(post.getBody()).contains(contain);
    }

    private Optional<ListPostsResponseEntry> findPostEntry(String expectedTitle) {
        return postsList.getPosts().stream().filter(p -> p.getTitle().equals(expectedTitle)).findAny();
    }

}