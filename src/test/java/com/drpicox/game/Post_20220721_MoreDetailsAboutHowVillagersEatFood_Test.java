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
public class Post_20220721_MoreDetailsAboutHowVillagersEatFood_Test {

    @Autowired Post_20220721_MoreDetailsAboutHowVillagersEatFood_Context context;
    @Autowired Fixtures fixtures;

    @Test public void testPost() {
        fixtures.runBeforeTestStarts("2022-07-21_more_details_about_how_villagers_eat_food", "13cb246411b97b3aca344f906f5bbf14");

        // # More Details About How Villagers Eat Food
        // ## More kinds of villagers
        context.givenThereAreNSNSAndNSCards(2, "villager", 2, "militia", 2, "trader");
        context.theSCardShouldHaveNInSTag("villager", 1, "eats");
        context.theSCardShouldHaveNInSTag("militia", 2, "eats");
        context.theSCardShouldHaveNInSTag("trader", 3, "eats");
        context.theSumOfAllSTagsValueShouldBeN("eats", 12);
        // ## More kinds of food
        context.givenThereAreNSNSAndNSCards(2, "berry", 2, "apple", 2, "fruit salad");
        context.theSCardShouldHaveNInSTag("berry", 1, "food");
        context.theSCardShouldHaveNInSTag("apple", 2, "food");
        context.theSCardShouldHaveNInSTag("fruit salad", 3, "food");
        context.theSumOfAllSTagsValueShouldBeN("food", 12);
        // ## Eating
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 12);
        context.theSumOfAllSTagsValueShouldBeN("food", 0);
        // ## Too much food
        context.givenThereAreNSNSAndNSCards(2, "berry", 2, "apple", 3, "fruit salad");
        context.theSumOfAllSTagsValueShouldBeN("eats", 12);
        context.theSumOfAllSTagsValueShouldBeN("food", 15);
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 12);
        context.theSumOfAllSTagsValueShouldBeN("food", 2);
        context.thereShouldBeNSCards(2, "berry");
        context.thereShouldBeNSCards(0, "apple");
        // ## Too few food
        context.givenThereAreNSNSAndNSCards(3, "berry", 0, "apple", 0, "fruit salad");
        context.theSumOfAllSTagsValueShouldBeN("eats", 12);
        context.theSumOfAllSTagsValueShouldBeN("food", 3);
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 2);
        context.theSumOfAllSTagsValueShouldBeN("food", 1);
        context.thereShouldBeNSCards(1, "berry");
        context.thereShouldBeNSCards(2, "villager");
        context.thereShouldBeNSCards(0, "militia");
        context.thereShouldBeNSCards(0, "trader");

        fixtures.runWhenTestSuccessful();
    }

}
