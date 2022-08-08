package com.drpicox.game;

import com.drpicox.game.cards.CardsService;
import com.drpicox.game.game.GameService;
import com.drpicox.game.game.api.GameResponse;
import org.springframework.stereotype.Component;
import static com.google.common.truth.Truth.assertThat;
import static com.google.common.truth.Truth8.assertThat;
import com.drpicox.game.fixtures.FrontendSimulator;

import java.io.IOException;
import java.net.URISyntaxException;

@Component
public class Post_20220721_MoreDetailsAboutHowVillagersEatFood_Context {

    private final FrontendSimulator frontendSimulator;
    private final GameService gameService;
    private final CardsService cardsService;

    private GameResponse game;

    public Post_20220721_MoreDetailsAboutHowVillagersEatFood_Context(FrontendSimulator frontendSimulator, GameService gameService, CardsService cardsService) {
        this.frontendSimulator = frontendSimulator;
        this.gameService = gameService;
        this.cardsService = cardsService;
    }

    public void beforeTest() throws IOException, URISyntaxException {
        gameService.create("empty");
    }

    public void givenThereAreNSAndNSCards(int count1, String name1, int count2, String name2) {
        // example:  * Given there are 2 "villager" and 2 "trader" cards.
        cardsService.deleteAllByName(name1);
        cardsService.createMany(count1, name1);

        cardsService.deleteAllByName(name2);
        cardsService.createMany(count2, name2);

        game = frontendSimulator.get("/api/v1/game", GameResponse.class);
    }

    public void theSCardShouldHaveNInSTag(String cardName, int count, String tagName) {
        // example:  * The "villager" card should have 1 in "eats" tag.
        var matchingCard = game.streamCardsByName(cardName).findAny().get();
        assertThat(matchingCard.getTag(tagName)).isEqualTo(count);
    }

    public void theSumOfAllSTagsValueShouldBeN(String tagName, int expected) {
        // example:  * The sum of all "eats" tags value should be 12.
        var sum = game.streamCards().mapToInt(c -> c.getTag(tagName)).sum();
        assertThat(sum).isEqualTo(expected);
    }

    public void endTheCurrentMoon() {
        // example:  * End the current moon.
        game = frontendSimulator.post("/api/v1/game/moon", null, GameResponse.class);
    }

    public void thereShouldBeNSCards(int expected, String cardName) {
        // example:  * There should be 2 "berry" cards.
        var actual = game.streamCardsByName(cardName).count();
        assertThat(actual).isEqualTo(expected);
    }

    public void afterTest() {
    }
}