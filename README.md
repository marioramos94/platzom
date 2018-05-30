#Sergio

Platzom es un idioma inventado para el [Curso de fundamentos de js](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de educación online

## Descripción del idioma 
-
Reglas 
1. Si termina con "ar", se le quitan esas dos letras
2. Si inicia con "z", se le agrega "pe" al final 
3. Si la palabra traducida tiene 10 o mas letras, se parte por la mitad y 
se une con un guion medio
4. Si la palabra es un palindromo (se lee igual en ambos sentidos),ninguna 
regla cuenta, se devuelve la misma palabra pero intercalando mayusculas y minusculas

##Instalación 

```
npm install platzom 
```

##Uso 
```
import platzom from 'platzom'

platzom("Programar")// Program
platzom("Zorro")// Zorrope
platzom("Zarpar")// Zarppe
platzom("abecedario")// abece-dario
platzom("sometemos")// SoMeTeMoS

```

##Creditos 
-[Sacha Lifszyc](https://twitter.com/@slifszyc)

##Licencia 

[MIT](https://opensource.org/licenses/MIT)