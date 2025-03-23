"use client";

import React, { useState } from 'react';
import Select from 'react-select';
import data from './data.json';
import { v_to_f } from './vtof';

interface ScriptOption {
  olabel: string;
  ovalue: string;
  sfonts: Array<{ olabel: string; ovalue: string }>;
}

const FontPicker: React.FC = () => {
  const [script, setScript] = useState<ScriptOption | null>(null);
  const [sfont, setSFont] = useState<{ olabel: string; ovalue: string } | null>(null);
  const [sfontlist, setSFontList] = useState<Array<{ olabel: string; ovalue: string }>>([]);

  const handleScriptChange = (scriptObject: ScriptOption | null) => {
    setScript(scriptObject);
    if (scriptObject) {
      setSFontList(scriptObject.sfonts);
      setSFont(scriptObject.sfonts[0]);
      setBodyFont(scriptObject.ovalue);
    }
  };

  const handleSFontChange = (sfontObject: { olabel: string; ovalue: string } | null) => {
    setSFont(sfontObject);
    if (sfontObject) {
      setBodyFont(sfontObject.ovalue);
    }
  };



  const setBodyFont = (sval: string) => {
    document.body.className = "";
    const sf = v_to_f(sval);
    document.body.classList.add(sf);
    document.body.classList.add("antialiased");
  };

  return (
    <div style={{ width: 400, marginBottom: 20, color: 'black', backgroundColor: 'white' }} >
      <Select
        placeholder="select script"
        value={script}
        options={data}
        onChange={handleScriptChange}
        getOptionLabel={(x) => x.olabel}
        getOptionValue={(x) => x.ovalue}
      />
      <Select
        placeholder="select sfont"
        value={sfont}
        options={sfontlist}
        onChange={handleSFontChange}
        getOptionLabel={(x) => x.olabel}
        getOptionValue={(x) => x.ovalue}
      />
    </div>
  );
};

export default FontPicker;



/*
 * https://learnkorean.in/learn-korean-script-hangeul-for-indian-learners/ (good hindi korean video)
 * youtube.com/shorts/OaN-v8F6oy0
 * https://www.busuu.com/en/korean/pronunciation
 * ㅌㄸㅍㅂㅅㅑㄹlㅁㄴfԃ=tdpbsyrlmnfD
 * five double consonants: ㄲ, ㄸ, ㅃ, ㅆ and ㅉ
 * t	ㅌ
 * d	ㄸ
 * p	ㅍ
 * bpf	ㅂ
 * s/t	ㅅ
 * y	ㅑ
// r/l	ㄹ
// m	ㅁ	good
// n	ㄴ	good
// bpf	 ㅂ
// v (봐)
//ㄷ	d/t
//ㄱ	g/k
//ㅋ	k
//

//ㅇ	ng
//ㅈ	j/ch
//ㅊ	ch(/t)

ㅂsounds like ‘B’ and represents the ‘v’.
ㅗ is pronounced ‘o’.
ㅏ is pronounced ‘a’.
봐 = Bwa = Va

//ㅎ	h

// ㅌ다ㅍ바ㅅy라lㅁㄴfԃ  
as per https://www.busuu.com/en/korean/pronunciation
Consonant	Pronunciation		Consonant	Pronunciation
ㄱ			[g] or [k]				ㅇ			[-]
ㄴ				[n]					ㅈ		[j] or [ch]
ㄷ			[d] or [t]				ㅊ			[ch]
ㄹ			[r] or [l]				ㅋ			[k]
ㅁ				[m]					ㅌ			[t]
ㅂ			[b]or[p]				ㅍ			[p]
ㅅ				[s]					ㅎ			[h]

////////georgian
////// https://www.mondly.com/blog/hangul-korean-alphabet-pronunciation/ ////////
////////////////////////
// 19 conso ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ, ㅆ, ㅇ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
ㅌ	티읕	tieut
ㄸ	디귿	digeut ㄸ ㄷ	쌍디귿	ssangdigeut
// The Hangul syllable for the sound "d" as in "dog" is ㄸ, which is pronounced 쌍디귿 (ssang digeut). ㄸ is a strong "d" sound, similar to "dog" or "day".
ㅍ	피읖	pieup
ㅂ	비읍	bieup ㅃ	쌍비읍	ssangbieup
ㅅ	시옷	siot ㅆ	쌍시옷	ssangsiot ㅉ	쌍지읒	ssangjieut
ㅑ	ya ㅒ	yae ㅕ	yeo ㅖ	ye ㅛ	yo ㅠ	yu
ㄹ	리을	rieul
l	을
// if ㄹ is used at the beginning of a word or as a final consonant, then ㄹ is pronounced as an 'L' sound
ㅁ	미음	mieum
ㄴ	니은	nieun
f
ㄲ	쌍기역	ssangiyeok ,
ㄱ	기역	giyeok
ㅊ	치읓	chieut
ㅋ	키읔	kieuk
/////////giscus font style
.markdown .g-emoji {
  //font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}
.markdown .footnotes .data-footnote-backref .g-emoji {
  //font-family: monospace;
}
const list = document.getElementsByClassName("markdown");
for (var i = 0; i < list.length; ++i) {
  list[i].style.fontFamily = "ing115_font";
}
*/
