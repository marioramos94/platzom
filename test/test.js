const expect = require ('chai').expect
const platzom = require('..').default

describe('#platzom',function(){
	it('Si termina con "ar", se le quitan esas dos letras',function(){
		const translation = platzom("Programar")
		expect(translation).to.equal("Program")
	})
	it('Si inicia con "z", se le agrega "pe" al final ',function(){
		const translation =platzom("Zorro")
		const translation2 = platzom("Zarpar")

		expect(translation).to.equal("Zorrope")
		expect(translation2).to.equal("Zarppe")
	})
	it('Si la palabra traducida tiene 10 o mas letras, se parte por la mitad y se une con un guion medio'
		,function(){
		const translation = platzom("abecedario")
		expect (translation).to.equal("abece-dario")
		
	})
	it('Si la palabra es un palindromo (se lee igual en ambos sentidos),ninguna regla cuenta, se devuelve la misma palabra pero intercalando mayusculas y minusculas'
	,function(){
		const translation = platzom("sometemos")
		expect (translation).to.equal("SoMeTeMoS")			
	})
	
})
