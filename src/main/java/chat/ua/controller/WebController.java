package chat.ua.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/yaq")
public final class WebController {

    @GetMapping("/login")
    public String showLoginPage() {
        return "login_page";
    }

}