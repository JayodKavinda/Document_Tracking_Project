/*
 * Workshop2_ex.c
 *
 * Created: 11/26/2020 11:10:41
 * Author : Charitha
 */ 
#ifndef F_CPU
#define F_CPU 16000000UL
#endif

#define BAUD 9600
#define UBRR_VALUE ((F_CPU/16/BAUD)-1)

volatile int rx_flag = 0;
volatile char rx_data;

#define  D4 eS_PORTD4
#define  D5 eS_PORTD5
#define  D6 eS_PORTD6
#define  D7 eS_PORTD7
#define  RS eS_PORTB1
#define EN eS_PORTB0


#include <avr/io.h>
#include <util/delay.h>
#include <avr/interrupt.h>
#include <stdint.h>

#include "lcd.h"
#include <stdio.h>


 


void Config_USART(void)
{
UBRR0L = (unsigned char) UBRR_VALUE;
UBRR0H = (unsigned char) (UBRR_VALUE>>8);

UCSR0B |= (1<<RXCIE0)|(1<<TXEN0) |(1<<RXEN0);
UCSR0C |= (1<<UCSZ01) |(1<<UCSZ00);
sei();
}

ISR(USART_RX_vect){
	rx_flag = 1;
	rx_data = UDR0;
}

unsigned char USART_Receive(void)
{
	while (!(UCSR0A & (1<<RXC0) ));
	return UDR0;
}

void USART_Transmit(unsigned char data){
	while (!(UCSR0A & (1<<UDRE0)));
	UDR0 = data;
}


int main(void)
{
   Config_USART();
   DDRB|=(1<<PORTB5);
   PORTB|=(1<<PORTB5);
   
 
  Lcd4_Init();
  Lcd4_Set_Cursor(1,0);
    while (1) 
    {
		if (rx_flag)
		{
			USART_Transmit(rx_data);
			//Lcd4_Write_Char(rx_data);
			rx_flag = 0;
			
		}
	
    }
	return 0;
}



