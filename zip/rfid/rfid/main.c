#ifndef F_CPU
#define F_CPU 16000000UL
#endif

#define BAUD 9600
#define UBRR_VALUE ((F_CPU/16/BAUD)-1)

#define D4 eS_PORTD4
#define D5 eS_PORTD5
#define D6 eS_PORTD6
#define D7 eS_PORTD7
#define RS eS_PORTB1
#define EN eS_PORTB0


#include <avr/io.h>
#include <util/delay.h>
#include <avr/interrupt.h>
#include "LCD.h"
#include <stdint.h>

void Config_USART(void)
{
	UBRR0L = (unsigned char) UBRR_VALUE;
	UBRR0H = (unsigned char) (UBRR_VALUE>>8);
	
	UCSR0B |= (1<<TXEN0);
	UCSR0B |= (1<<RXEN0);
	UCSR0C |= (1<<UCSZ01) | (1<<UCSZ00);
	
}

unsigned char USART_Receive(void)
{
	while(!(UCSR0A & (1<<RXC0)));
	return UDR0;
}

void USART_Transmit(unsigned char data)
{
	while(!(UCSR0A & (1<<UDRE0)));
	UDR0= data;
}

int main(void)
{
  DDRD = 0xFF;
  DDRB = 0xFF;
  //PORTB |= 0B00100000;
  
  DDRB |= 0B00100000;
  
  int i;
  Lcd4_Init();
  Config_USART();
  
  DDRB |=(1<<PORTB5);
  //PORTB |=(1<<PORTB5);
  unsigned char rx;
  
  int x=0;
  
  while (1)
  {
	  Lcd4_Set_Cursor(1,1);
	  Lcd4_Write_String("Welcome");
	  // _delay_ms(2000);
	 // Lcd4_Clear();
	  
	  rx= USART_Receive();
	  
	  if(rx=='a'){
		   Lcd4_Clear();
		    Lcd4_Set_Cursor(1,1);
			
		   Lcd4_Write_String("Left Bend Ahead");
		   buzzerTone();
		   _delay_ms(2000);
		   
	  }
	  else if(rx=='b'){
		  Lcd4_Clear();
		  Lcd4_Set_Cursor(1,1);
		  
		  Lcd4_Write_String("Right Bend Ahead");
		  buzzerTone();
		  _delay_ms(2000);
	  }
	  else if(rx=='c'){
		  Lcd4_Clear();
		  Lcd4_Set_Cursor(1,1);
		  
		  Lcd4_Write_String("Double Bend to Left Ahead");
		  buzzerTone();
		  _delay_ms(2000);
	  }
	  else{
		   Lcd4_Clear();
		   Lcd4_Set_Cursor(1,1);
		   Lcd4_Write_String(" ");
		   _delay_ms(2000);
		  
	  }
	  USART_Transmit(rx);
	 
  }
}

 void buzzerTone(){
 	
 	//DDRB |= 0B00100000;
 	PORTB |= 0B00100000;
 	 _delay_ms(1000);
 	 PORTB &= 0B11011111;
 	  _delay_ms(1000);
 }

