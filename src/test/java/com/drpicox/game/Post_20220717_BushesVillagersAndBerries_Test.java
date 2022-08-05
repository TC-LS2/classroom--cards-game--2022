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
public class Post_20220717_BushesVillagersAndBerries_Test {

    @Autowired Post_20220717_BushesVillagersAndBerries_Context context;
    @Autowired Fixtures fixtures;

    @Test public void testPost() throws Throwable {
        fixtures.runBeforeTestStarts("2022-07-17_bushes_villagers_and_berries", "d6ec337ab57972a7dfeea3004e9318b5");
        context.beforeTest();

        // # Bushes, Villagers and Berries
        // ## The game
        context.enterInTheGame();
        context.thereShouldBeNCards(3);
        context.thereShouldBeNSCard(1, "villager");
        context.thereShouldBeNSCard(1, "bush");
        context.andThereShouldBeNSCard(1, "berry");

        context.afterTest();
        fixtures.runWhenTestSuccessful();
    }

}
