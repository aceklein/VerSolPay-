// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BNPL {
    struct PaymentPlan {
        address buyer;
        uint256 totalAmount;
        uint256 paidAmount;
        uint256 installments;
        uint256 installmentAmount;
        uint256 dueDate;
    }

    mapping(uint256 => PaymentPlan) public paymentPlans;
    uint256 public planCount;

    function createPaymentPlan(address buyer, uint256 totalAmount, uint256 installments) public {
        planCount++;
        uint256 installmentAmount = totalAmount / installments;
        paymentPlans[planCount] = PaymentPlan(buyer, totalAmount, 0, installments, installmentAmount, block.timestamp + 30 days);
    }

    function makePayment(uint256 planId) public payable {
        PaymentPlan storage plan = paymentPlans[planId];
        require(msg.value == plan.installmentAmount, "Incorrect installment amount");
        require(plan.paidAmount + msg.value <= plan.totalAmount, "Payment exceeds total amount");

        plan.paidAmount += msg.value;
        plan.dueDate = block.timestamp + 30 days;
    }
}