package com.drpicox.game.synthetics;

import com.drpicox.game.card.*;
import com.drpicox.game.card.api.DerivedStackResponse;
import com.drpicox.game.card.api.StackResponseList;
import com.drpicox.game.game.api.GameResponseFactory;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.TreeMap;

@Service
public class CardLetterBoard {

    private static final Map<String, String> letterToCardName = new TreeMap<>();
    private static final Map<String, String> cardNameToLetter = new TreeMap<>();

    static {
        letterToCardName.put("A", "Apple");
        letterToCardName.put("B", "Berry");
        letterToCardName.put("C", "Corpse");
        letterToCardName.put("M", "Militia");
        letterToCardName.put("V", "Villager");
        letterToCardName.put("U", "Berry Bush");

        for (var entry: letterToCardName.entrySet()) {
            cardNameToLetter.put(entry.getValue(), entry.getKey());
        }
    }

    private final CardFactory cardFactory;
    private final CardService cardService;
    private final CardPositionService cardPositionService;
    private final GameResponseFactory gameResponseFactory;

    public CardLetterBoard(CardFactory cardFactory, CardService cardService, CardPositionService cardPositionService, GameResponseFactory gameResponseFactory) {
        this.cardFactory = cardFactory;
        this.cardService = cardService;
        this.cardPositionService = cardPositionService;
        this.gameResponseFactory = gameResponseFactory;
    }


    public void makeBoard(String board) {
        var settings = new CardFactorySettings(null);
        var stacks = board.split(",");
        for (var position = 0; position < stacks.length; position++) {
            var stack = stacks[position];
            makeStackBoard(settings.withPosition(position), stack);
        }
    }

    private void makeStackBoard(CardFactorySettings settings, String stack) {
        for (var i = 0; i < stack.length(); i++) {
            var letter = stack.substring(i, i + 1);
            var cardName = letterToCardName.get(letter);
            settings.withCardName(cardName);
            cardFactory.makeCard(settings);
        }
    }

    public void makeCard(String cardLetter) {
        var cardName = letterToCardName.get(cardLetter);
        cardFactory.makeCard(new CardFactorySettings(cardName));
    }


    public Card getCard(String letter) {
        var cardName = letterToCardName.get(letter);
        var cards = cardService.findAllByName(cardName);
        var card = cards.stream().findAny().orElse(null);
        return card;
    }

    public String getServiceBoard() {
        var highestPosition = cardPositionService.getMaxPosition();

        var board = new StringBuilder();
        for (var position = 0; position <= highestPosition; position++) {
            if (position > 0) board.append(",");
            board.append(getServicePositionBoard(position));
        }

        return board.toString();
    }

    private String getServicePositionBoard(int position) {
        var result = new StringBuilder();

        var stack = cardPositionService.getStackByPosition(position);
        for (var card: stack.getCards()) {
            var letter = cardNameToLetter.get(card.getName());
            result.append(letter);
        }

        return result.toString();
    }

    public String getResponseBoard() {
        var game = gameResponseFactory.makeGameResponse();
        var stacks = StackResponseList.findAllStack(game);

        var result = new StringBuilder();
        var coma = false;
        for (var stack: stacks) {
            if (coma) result.append(","); coma = true;
            result.append(getStackResponseBoard(stack));
        }

        return result.toString();
    }

    private String getStackResponseBoard(DerivedStackResponse stack) {
        var result = new StringBuilder();

        for (var card: stack.getCards()) {
            var letter = cardNameToLetter.get(card.getName());
            result.append(letter);
        }

        return result.toString();
    }
}
