package com.devsuperior.dsvendas.dto;

import java.io.Serializable;

import com.devsuperior.dsvendas.entities.Seller;

public class SalesSumDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private String sellerName;
	private Double sum;
	
	
	public SalesSumDTO(Seller seller, Double sum) {
		super();
		this.sellerName = seller.getName();
		this.sum = sum;
	}
	
	public SalesSumDTO() {
		super();
	}

	public String getSellerName() {
		return sellerName;
	}

	public void setSellerName(String sellerName) {
		this.sellerName = sellerName;
	}

	public Double getSum() {
		return sum;
	}

	public void setSum(Double sum) {
		this.sum = sum;
	}
	
	
}
