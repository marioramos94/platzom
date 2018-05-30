'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = platzom;
function platzom(str) {

	var translation = str;
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2);
	}
	if (str.toLowerCase().startsWith('z')) {
		translation += 'pe';
	}
	if (translation.length >= 10) {
		var letras = parseInt(translation.length / 2);
		translation = translation.slice(0, -letras) + '-' + translation.slice(letras);
	}

	var reversa = function reversa(str) {
		//regresa la cadena en reversa
		let arreglo = str.split('');
		arreglo.reverse();
		return arreglo.join('');
	};

	var mayMin = function mayMin(str) {
		//Regresa la cadena intercalando la mayusculas y minusculas usando arreglo
		var arr = str.toLowerCase().split('');
		for (var i = 0; i < arr.length; i += 2) {

			arr[i] = arr[i].toUpperCase();
		}
		return arr.join('');
	};

	if (str == reversa(str)) {
		translation = mayMin(str);
	}
	return translation;
}