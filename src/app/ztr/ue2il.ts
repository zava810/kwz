import { duztr } from "./duztr";

export function ue2il(ioz: { i: string; o: string; z: string  }): void {
	ioz.z = "e2i"; duztr(ioz); ioz.i = ioz.o;
	let all_text = ("Eng:52:a-z+A-Z ing:31:a-z+àԃɦńᴛ (ᴀ=à=A≠a ԃ=D≠d H≠h ṅ=N=ń≠n ᴛ≠t c=ꞇ=ć=च  ch=छ) font -> ing115.ttf\n") ;
	ioz.z = "u2i"; duztr(ioz);
	all_text += (ioz.o + "\n") ;
	ioz.z = "i2il"; duztr(ioz);
	all_text += (ioz.o + "\n") ;
	ioz.o = all_text;
}