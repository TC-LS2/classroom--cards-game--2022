package com.drpicox.game.tags;

import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

public class TagId implements Serializable {
    private String cardId;
    private String tagName;

    protected TagId() {}
}
