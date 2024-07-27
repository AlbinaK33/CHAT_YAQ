package chat.ua.controller;

import chat.ua.database.dto.SupportRequestDTO;
import chat.ua.database.service.SupportRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/support")
public class SupportRequestController {

    private final SupportRequestService supportRequestService;

    @Autowired
    public SupportRequestController(SupportRequestService supportRequestService) {
        this.supportRequestService = supportRequestService;
    }

    @PostMapping("/request")
    public ResponseEntity<SupportRequestDTO> createSupportRequest(@RequestBody SupportRequestDTO supportRequestDTO, @RequestParam String email) {
        SupportRequestDTO createdRequest = supportRequestService.createSupportRequest(supportRequestDTO, email);
        return ResponseEntity.status(201).body(createdRequest);
    }

}