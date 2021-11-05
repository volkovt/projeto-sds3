package com.devsuperior.dsvendas.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.dto.SalesSucessDTO;
import com.devsuperior.dsvendas.dto.SalesSumDTO;
import com.devsuperior.dsvendas.services.SaleService;

@RestController
@RequestMapping("/sales")
public class SaleController {
	@Autowired
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<SaleDTO>> findAll(Pageable pageable) {
		return ResponseEntity.ok(service.findAll(pageable));
	}
	
	@GetMapping("/amount-by-seller")
	ResponseEntity<List<SalesSumDTO>> amountGroupedBySeller(Pageable pageable) {
		return ResponseEntity.ok(service.amountGroupedBySeller(pageable));
	}
	
	@GetMapping("/success-by-seller")
	ResponseEntity<List<SalesSucessDTO>> sucessGroupedBySeller(Pageable pageable) {
		return ResponseEntity.ok(service.sucessGroupedBySeller(pageable));
	}
}