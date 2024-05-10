package chat.ua;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.test.context.TestConfiguration;

@TestConfiguration(proxyBeanMethods = false)
public class TestChatYakApplication {

    public static void main(String[] args) {
        SpringApplication.from(ChatYakApplication::main).with(TestChatYakApplication.class).run(args);
    }

}
