package main

import "fmt"

var balance int64 = 0

func main() {
	var input int64
	fmt.Printf("enter a number to deposit: ")
	fmt.Scan(&input)

	if input == 0 || input > 1000 {
		fmt.Println("Invalid input")
		return 
	}

	balance += input
	fmt.Printf("Balance: %d\n", balance)
}