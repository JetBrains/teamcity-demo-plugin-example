package jetbrains.teamcity.demoplugin.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class DemoTests {

    @Test
    void testEquals() {
        Assertions.assertEquals(4, 2 + 2);
    }

    @Test
    void testFail() {
        Assertions.fail("This test is failing");
    }
}
