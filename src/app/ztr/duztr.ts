import { e2i } from "./e2i";
import { i2il } from "./i2il";
import { u2i } from "./u2i";

function n2null_output(ioz: { i: string; o: string; z: string  }): void {
	ioz.i = ioz.o = ioz.o.replaceAll(
		/([a-zԃɦńᴛ])aa/ig,"$1a").replaceAll(
		/N$/g,"").replaceAll(
		/N([),\s\.!\?naeiouh\b])/g,"$1").replaceAll(
		/N([bp])/g,"m$1").replaceAll(
		/N([^kg])/g,"n$1");
}

export const duztr = function (ioz: { i: string; o: string; z: string  }): void {
	switch (ioz.z) {
		case "e2i": e2i(ioz); break;
		case "u2i":
			/*ioz.i = ioz.i.replaceAll(
				/([\s\b])क्ष/g, "$1sh").replaceAll(
				/^क्ष/g, 'sh').replaceAll(
				'ज्ञ', 'gy');*/
			u2i(ioz);
			n2null_output(ioz);
			break;
		case "i2il": i2il(ioz); break;
	}
}