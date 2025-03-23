import {
	ing15,ing15m, binaryv15, // ing4, ihindi15, iing15, ing25,
	bangla15, guzrati15, kannada15, malayalam15, sinhala15, telugu15, 
	gurmukhi15, hindi15, korean15, oriya15, tamil15,
	//bangla25, guzrati25, kannada25, malayalam25, sinhala25, telugu25, 
	// gurmukhi25, hindi25, korean25, oriya25, tamil25,
} from "./localfonts";

export const v_to_f = (sval: string): string => {
    switch (sval) {
      case "ing15": return ing15.className;
      case "ing15m": return ing15m.className;
      //case "iing15": return iing15.className;
      //case "ihindi15": return ihindi15.className;
      //case "ing4": return ing4.className;
      //case "ing25": return ing25.className;
      case "binaryv15": return binaryv15.className;
      case "hindi15": return hindi15.className;
      //case "hindi25": return hindi25.className;
      case "bangla15": return bangla15.className;
      //case "bangla25": return bangla25.className;
      case "korean15": return korean15.className;
      //case "korean25": return korean25.className;
      case "sinhala15": return sinhala15.className;
      //case "sinhala25": return sinhala25.className;
      case "tamil15": return tamil15.className;
      //case "tamil25": return tamil25.className;
      case "kannada15": return kannada15.className;
      //case "kannada25": return kannada25.className;
      case "malayalam15": return malayalam15.className;
      //case "malayalam25": return malayalam25.className;
      case "telugu15": return telugu15.className;
      //case "telugu25": return telugu25.className;
      case "oriya15": return oriya15.className;
      //case "oriya25": return oriya25.className;
      case "gurmukhi15": return gurmukhi15.className;
      //case "gurmukhi25": return gurmukhi25.className;
      case "guzrati15": return guzrati15.className;
      //case "guzrati25": return guzrati25.className;
      default: return hindi15.className;
    }
};
