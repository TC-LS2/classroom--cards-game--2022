import { runBeforeTestStarts, runWhenTestSuccessful } from "./fixtures";
import { Post_20220719_VillagersEatFood_Context } from "./Post_20220719_VillagersEatFood_Context";

// !!! IMPORTANT !!!
// This test file is AUTOGENERATED by yarn create-tests
// If you need to update it, run yarn create-tests
// DO NOT MODIFY manually. Keep running yarn create-tests instead,
// while editing your posts.

test("2022-07-19_villagers_eat_food.md", async () => {
  await runBeforeTestStarts(
    "2022-07-19_villagers_eat_food",
    "bc155c52fa090491dbd1ac36dbacf0bb"
  );

  const context = new Post_20220719_VillagersEatFood_Context();
  // # Villagers Eat Food
  // ## Berries are food
  await context.givenWeHaveEnteredIntoANewGame();
  await context.theSCardHasNInSTag("berry", 1, "food");
  await context.theSCardHasNInSTag("villager", 1, "eats");
  // ## Moons
  await context.endTheCurrentMoon();
  await context.thereShouldBeNCards(2);
  await context.thereShouldBeNoSCard("berry");
  await context.thereShouldBeNSCard(1, "villager");
  await context.thereShouldBeNSCard(1, "bush");
  // ## Starving
  await context.endTheCurrentMoon();
  await context.thereShouldBeNCards(2);
  await context.thereShouldBeNoSCard("berry");
  await context.thereShouldBeNoSCard("villager");
  await context.thereShouldBeNSCard(1, "bush");
  await context.thereShouldBeNSCard(1, "corpse");

  await runWhenTestSuccessful();
});
