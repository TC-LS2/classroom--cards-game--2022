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

    @Test public void testPost() throws Throwable {
        fixtures.runBeforeTestStarts("2022-07-21_more_details_about_how_villagers_eat_food", "3ff95f7d41896ee24493e0b344769778");
        context.beforeTest();

        // # More Details About How Villagers Eat Food
        // ## More kinds of villagers
        context.givenThereAreNSAndNSCards(1, "Villager", 1, "Militia");
        context.theSCardShouldHaveNInSTag("Villager", 1, "eats");
        context.theSCardShouldHaveNInSTag("Militia", 2, "eats");
        context.theSumOfAllSTagsValueShouldBeN("eats", 3);
        // ## More kinds of food
        context.givenThereAreNSAndNSCards(1, "Berry", 1, "Apple");
        context.theSCardShouldHaveNInSTag("Berry", 1, "food");
        context.theSCardShouldHaveNInSTag("Apple", 2, "food");
        context.theSumOfAllSTagsValueShouldBeN("food", 3);
        // ## Eating
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 3);
        context.theSumOfAllSTagsValueShouldBeN("food", 0);
        // ## Too much food
        context.givenThereAreNSAndNSCards(4, "Berry", 0, "Apple");
        context.theSumOfAllSTagsValueShouldBeN("eats", 3);
        context.theSumOfAllSTagsValueShouldBeN("food", 4);
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 3);
        context.theSumOfAllSTagsValueShouldBeN("food", 1);
        context.thereShouldBeNSCards(1, "Berry");
        context.givenThereAreNSAndNSCards(0, "Berry", 2, "Apple");
        context.theSumOfAllSTagsValueShouldBeN("eats", 3);
        context.theSumOfAllSTagsValueShouldBeN("food", 4);
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 3);
        context.theSumOfAllSTagsValueShouldBeN("food", 0);
        context.thereShouldBeNSCards(0, "Apple");
        // ## Too few food
        context.givenThereAreNSAndNSCards(0, "Villager", 2, "Militia");
        context.givenThereAreNSAndNSCards(3, "Berry", 0, "Apple");
        context.theSumOfAllSTagsValueShouldBeN("eats", 4);
        context.theSumOfAllSTagsValueShouldBeN("food", 3);
        context.endTheCurrentMoon();
        context.theSumOfAllSTagsValueShouldBeN("eats", 2);
        context.theSumOfAllSTagsValueShouldBeN("food", 1);
        context.thereShouldBeNSCards(1, "Militia");
        context.thereShouldBeNSCards(1, "Berry");

        context.afterTest();
        fixtures.runWhenTestSuccessful();
    }

}
