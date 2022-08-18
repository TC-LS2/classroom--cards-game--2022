import { runBeforeTestStarts, runWhenTestSuccessful } from "../fixtures";
import { Post_20220723_Ideas_Context } from "./Post_20220723_Ideas_Context";

// !!! IMPORTANT !!!
// This test file is AUTOGENERATED by yarn create-tests
// If you need to update it, run yarn create-tests
// DO NOT MODIFY manually. Keep running yarn create-tests instead,
// while editing your posts.

test("2022-07-23_ideas.md", async () => {
  await runBeforeTestStarts(
    "2022-07-23_ideas",
    "85e1fe7f1c0bbc847e11fb1df6e4d0e6"
  );

  const context = new Post_20220723_Ideas_Context();
  await context.beforeTest();

  // # Ideas                                                                                                                      // # Ideas

  // ## You have ideas                                                                                                            // ## You have ideas
  // ### Looking at your ideas                                                                                                    // ### Looking at your ideas
  await context.enterTheGame(); //                                                                                                // * Enter the game.
  await context.thereShouldBeTheSIdea("Harvest Idea"); //                                                                         // * There should be the "Harvest Idea" idea.
  // ### Ideas are cards                                                                                                          // ### Ideas are cards
  await context.thereShouldBeNSCards(0, "Harvest Idea"); //                                                                       // * There should be 0 "Harvest Idea" cards.
  await context.drawACardFromTheSIdea("Harvest Idea"); //                                                                         // * Draw a card from the "Harvest Idea" idea.
  await context.thereShouldBeNSCards(1, "Harvest Idea"); //                                                                       // * There should be 1 "Harvest Idea" cards.
  // ### Ideas are several cards                                                                                                  // ### Ideas are several cards
  await context.givenThereIsTheSIdea("Harvest Idea"); //                                                                          // * Given there is the "Harvest Idea" idea.
  await context.givenThereAreNSCards(1, "Harvest Idea"); //                                                                       // * Given there are 1 "Harvest Idea" cards.
  await context.drawACardFromTheSIdea("Harvest Idea"); //                                                                         // * Draw a card from the "Harvest Idea" idea.
  await context.thereShouldBeNSCards(2, "Harvest Idea"); //                                                                       // * There should be 2 "Harvest Idea" cards.
  // ### Removing idea cards                                                                                                      // ### Removing idea cards
  await context.givenThereAreNSCards(2, "Harvest Idea"); //                                                                       // * Given there are 2 "Harvest Idea" cards.
  await context.discardNSCards(1, "Harvest Idea"); //                                                                             // * Discard 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(1, "Harvest Idea"); //                                                                       // * There should be 1 "Harvest Idea" cards.

  // ## Using ideas                                                                                                               // ## Using ideas
  // ### Reading the idea                                                                                                         // ### Reading the idea
  await context.givenThereIsTheSIdea("Harvest Idea"); //                                                                          // * Given there is the "Harvest Idea" idea.
  await context.theSIdeaShouldRequireNSCard("Harvest Idea", 1, "Fruit Plant"); //                                                 // * The "Harvest Idea" idea should require 1 "Fruit Plant" card.
  await context.theSIdeaShouldRequireNSCard("Harvest Idea", 1, "Villager"); //                                                    // * The "Harvest Idea" idea should require 1 "Villager" card.
  // ### Stacking cards                                                                                                           // ### Stacking cards
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereIsTheSIdea("Harvest Idea"); //                                                                          // * Given there is the "Harvest Idea" idea.
  await context.givenThereAreNSCards(1, "Villager"); //                                                                           // * Given there are 1 "Villager" cards.
  await context.givenThereAreNSCards(1, "Berry Bush"); //                                                                         // * Given there are 1 "Berry Bush" cards.
  await context.givenThereAreNSCards(0, "Harvest Idea"); //                                                                       // * Given there are 0 "Harvest Idea" cards.
  await context.drawACardFromTheSIdea("Harvest Idea"); //                                                                         // * Draw a card from the "Harvest Idea" idea.
  await context.stackNSCardOnTopOfTheSCard(1, "Villager", "Harvest Idea"); //                                                     // * Stack 1 "Villager" card on top of the "Harvest Idea" card.
  await context.stackNSCardOnTopOfTheSCard(1, "Berry Bush", "Harvest Idea"); //                                                   // * Stack 1 "Berry Bush" card on top of the "Harvest Idea" card.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  // ### Trying ideas                                                                                                             // ### Trying ideas
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 1 stacks of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Berry"); //                                                                              // * Given there are 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Berry"); //                                                                              // * There should be 2 "Berry" cards.
  // ### Order has some importance                                                                                                // ### Order has some importance
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Villager",
    1,
    "Berry Bush",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 1 stacks of 1 "Villager", 1 "Berry Bush", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Berry"); //                                                                              // * Given there are 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Villager",
    1,
    "Berry Bush",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 1 "Villager", 1 "Berry Bush", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Berry"); //                                                                              // * There should be 2 "Berry" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Harvest Idea",
    1,
    "Villager",
    1,
    "Berry Bush"
  ); //                    // * Given there are 1 stacks of 1 "Harvest Idea", 1 "Villager", and 1 "Berry Bush" cards.
  await context.givenThereAreNSCards(1, "Berry"); //                                                                              // * Given there are 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Harvest Idea",
    1,
    "Villager",
    1,
    "Berry Bush"
  ); //                     // * There should be 1 stack of 1 "Harvest Idea", 1 "Villager", and 1 "Berry Bush" cards.
  await context.thereShouldBeNSCards(0, "Berry"); //                                                                              // * There should be 0 "Berry" cards.
  // ### Using ideas multiple times                                                                                               // ### Using ideas multiple times
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 1 stacks of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Berry"); //                                                                              // * Given there are 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(3, "Berry"); //                                                                              // * There should be 3 "Berry" cards.
  // ### Using the same idea twice                                                                                                // ### Using the same idea twice
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    2,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 2 stacks of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(2, "Berry"); //                                                                              // * Given there are 2 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    2,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 2 stack of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(4, "Berry"); //                                                                              // * There should be 4 "Berry" cards.
  // ### Eating comes last                                                                                                        // ### Eating comes last
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 1 stacks of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(0, "Berry"); //                                                                              // * Given there are 0 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(1, "Berry"); //                                                                              // * There should be 1 "Berry" cards.
  // ### Card Substitutes                                                                                                         // ### Card Substitutes
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Militia",
    1,
    "Harvest Idea"
  ); //                     // * Given there are 1 stacks of 1 "Berry Bush", 1 "Militia", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Berry"); //                                                                              // * Given there are 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Militia",
    1,
    "Harvest Idea"
  ); //                      // * There should be 1 stack of 1 "Berry Bush", 1 "Militia", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Berry"); //                                                                              // * There should be 2 "Berry" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Apple Tree",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 1 stacks of 1 "Apple Tree", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Apple"); //                                                                              // * Given there are 1 "Apple" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Apple Tree",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 1 "Apple Tree", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Apple"); //                                                                              // * There should be 2 "Apple" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    1,
    "Apple Tree",
    1,
    "Militia",
    1,
    "Harvest Idea"
  ); //                     // * Given there are 1 stacks of 1 "Apple Tree", 1 "Militia", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Apple"); //                                                                              // * Given there are 1 "Apple" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    1,
    "Apple Tree",
    1,
    "Militia",
    1,
    "Harvest Idea"
  ); //                      // * There should be 1 stack of 1 "Apple Tree", 1 "Militia", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Apple"); //                                                                              // * There should be 2 "Apple" cards.
  // ### More cards than necessary                                                                                                // ### More cards than necessary
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSAndNSCards(
    1,
    2,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                    // * Given there are 1 stacks of 2 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.givenThereAreNSCards(1, "Berry"); //                                                                              // * Given there are 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSAndNSCards(
    1,
    2,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //                     // * There should be 1 stack of 2 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Berry"); //                                                                              // * There should be 2 "Berry" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSNSAndNSCards(
    1,
    1,
    "Corpse",
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //     // * Given there are 1 stacks of 1 "Corpse", 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(1, "Berry"); //                                                                              // * There should be 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSNSAndNSCards(
    1,
    1,
    "Corpse",
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Harvest Idea"
  ); //      // * There should be 1 stack of 1 "Corpse", 1 "Berry Bush", 1 "Villager", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Berry"); //                                                                              // * There should be 2 "Berry" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSNSAndNSCards(
    1,
    1,
    "Villager",
    1,
    "Berry Bush",
    1,
    "Corpse",
    1,
    "Harvest Idea"
  ); //     // * Given there are 1 stacks of 1 "Villager", 1 "Berry Bush", 1 "Corpse", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(1, "Berry"); //                                                                              // * There should be 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSNSAndNSCards(
    1,
    1,
    "Villager",
    1,
    "Berry Bush",
    1,
    "Corpse",
    1,
    "Harvest Idea"
  ); //      // * There should be 1 stack of 1 "Villager", 1 "Berry Bush", 1 "Corpse", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(0, "Berry"); //                                                                              // * There should be 0 "Berry" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSNSAndNSCards(
    1,
    1,
    "Villager",
    1,
    "Berry Bush",
    1,
    "Apple Tree",
    1,
    "Harvest Idea"
  ); // // * Given there are 1 stacks of 1 "Villager", 1 "Berry Bush", 1 "Apple Tree", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(1, "Berry"); //                                                                              // * There should be 1 "Berry" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSNSAndNSCards(
    1,
    1,
    "Villager",
    1,
    "Berry Bush",
    1,
    "Apple Tree",
    1,
    "Harvest Idea"
  ); //  // * There should be 1 stack of 1 "Villager", 1 "Berry Bush", 1 "Apple Tree", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(0, "Berry"); //                                                                              // * There should be 0 "Berry" cards.
  await context.givenANewGame(); //                                                                                               // * Given a new game.
  await context.givenThereAreNStacksOfNSNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Apple Tree",
    1,
    "Harvest Idea"
  ); // // * Given there are 1 stacks of 1 "Berry Bush", 1 "Villager", 1 "Apple Tree", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(1, "Apple"); //                                                                              // * There should be 1 "Apple" cards.
  await context.endTheCurrentMoon(); //                                                                                           // * End the current moon.
  await context.thereShouldBeNStackOfNSNSNSAndNSCards(
    1,
    1,
    "Berry Bush",
    1,
    "Villager",
    1,
    "Apple Tree",
    1,
    "Harvest Idea"
  ); //  // * There should be 1 stack of 1 "Berry Bush", 1 "Villager", 1 "Apple Tree", and 1 "Harvest Idea" cards.
  await context.thereShouldBeNSCards(2, "Apple"); //                                                                              // * There should be 2 "Apple" cards.

  await context.afterTest();
  await runWhenTestSuccessful();
});
