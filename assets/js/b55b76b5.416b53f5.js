"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[7863],{93863:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return M},default:function(){return g}});var i=a(87462),t=a(63366),m=(a(67294),a(3905)),A=a(26626),r=["components"],s={},o="Uhren",p={unversionedId:"Programmieren-1/Aufgaben/uhren",id:"version-24i/Programmieren-1/Aufgaben/uhren",isDocsHomePage:!1,title:"Uhren",description:"10uhren.zip",source:"@site/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/12_uhren.md",sourceDirName:"04-Programmieren-1/Aufgaben",slug:"/Programmieren-1/Aufgaben/uhren",permalink:"/24i/Programmieren-1/Aufgaben/uhren",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/versioned_docs/version-24i/04-Programmieren-1/Aufgaben/12_uhren.md",tags:[],version:"24i",sidebarPosition:12,frontMatter:{},sidebar:"version-24i/sidebar",previous:{title:"Modulo",permalink:"/24i/Programmieren-1/Aufgaben/modulo"},next:{title:"Game Basics - Sterne Fangen",permalink:"/24i/Programmieren-1/Aufgaben/game_basics"}},M=[{value:"SBB Uhr",id:"sbb-uhr",children:[],level:2}],l={toc:M};function g(e){var n=e.components,s=(0,t.Z)(e,r);return(0,m.kt)("wrapper",(0,i.Z)({},l,s,{components:n,mdxType:"MDXLayout"}),(0,m.kt)("h1",{id:"uhren"},"Uhren"),(0,m.kt)("p",null,(0,m.kt)("a",{target:"_blank",href:a(83841).Z},"10_uhren.zip")),(0,m.kt)("p",null,(0,m.kt)("strong",{parentName:"p"},"Voraussetzung"),": ",(0,m.kt)("a",{parentName:"p",href:"https://jupyter.gbsl.website/user-redirect/lab/tree/shared/07T_Playground.ipynb"},"Theorie: Jupyterhub 7-7.2")),(0,m.kt)("h2",{id:"sbb-uhr"},"SBB Uhr"),(0,m.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,m.kt)(A.Z,{bib:void 0,caption:"sbb uhr",options:{},isInline:!1,src:a(36104).Z,alt:"sbb uhr",mdxType:"Image"})),(0,m.kt)("ol",null,(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("p",{parentName:"li"},"Schreiben Sie ein Programm, welches die abgebildete SBB-Uhr zeichnet inkl. ihrer Uhrzeit zeichnet."),(0,m.kt)("p",{parentName:"li"},"F\xfcr das L\xf6sen dieser Aufgabe k\xf6nnen die Sinus- und Kosinus Funktionen verwendet werden:\n",(0,m.kt)(A.Z,{bib:void 0,caption:"undefined",options:{},isInline:!0,src:a(57130).Z,mdxType:"Image"})),(0,m.kt)("p",{parentName:"li"},"In Python k\xf6nnen diese Funktionen aus der ",(0,m.kt)("inlineCode",{parentName:"p"},"math")," Bibliothek importiert werden."),(0,m.kt)("p",{parentName:"li"},"!!",(0,m.kt)("strong",{parentName:"p"},"Achtung"),": ",(0,m.kt)("inlineCode",{parentName:"p"},"cos")," und ",(0,m.kt)("inlineCode",{parentName:"p"},"sin")," erwarten die Winkel-Angaben im Bogenmass (im Bogenmass entspricht ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mi",{parentName:"mrow"},"\u03c0")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\pi")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"\u03c0")))))," ",(0,m.kt)("inlineCode",{parentName:"p"},"180\xb0"),"). Allf\xe4llige Grad-Angaben m\xfcssen daher zuerst umgerechnet werden. Im foglenden Beispiel werden z.B. der Sinus von 15\xb0 bzw. der Kosinus von 33\xb0 berechnet und in einer Variable gespeichert:"),(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-py"},"from math import cos, sin, pi\n\nsin15 = sin(15 / 180 * pi)\ncos33 = cos(33 / 180 * pi)\n"))),(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("p",{parentName:"li"},"Fragen Sie den Benutzer nach einer Uhrzeit (zuerst die Stunden, dann die Minuten und schliesslich die Sekunden) und stellen Sie dann diese Uhrzeit ein.")),(0,m.kt)("li",{parentName:"ol"},(0,m.kt)("p",{parentName:"li"},"Animieren Sie Ihre Uhr. Die SBB Uhr hat die Eigenheit, dass der Sekunden-Zeiger nur ",(0,m.kt)("inlineCode",{parentName:"p"},"59")," Sekunden f\xfcr eine Umdrehung hat, weil er auf 12 Uhr f\xfcr 1 Sekunde stehen bleibt."),(0,m.kt)("p",{parentName:"li"},(0,m.kt)("strong",{parentName:"p"},"Tipps"),":"),(0,m.kt)("ul",{parentName:"li"},(0,m.kt)("li",{parentName:"ul"},"Mit ",(0,m.kt)("inlineCode",{parentName:"li"},"device.sleep(1.0)")," wird die Ausf\xfchrung des Programms f\xfcr eine Sekunde unterbrochen."),(0,m.kt)("li",{parentName:"ul"},"Mit der Funktion ",(0,m.kt)("inlineCode",{parentName:"li"},"time_ns()")," (aus der Bibliothek ",(0,m.kt)("inlineCode",{parentName:"li"},"time"),") k\xf6nnen Sie die aktuelle Systemzeit in Nanosekunden abfragen. Rechnen Sie zuerst von Nanosekunden zu Sekunden um.",(0,m.kt)("pre",{parentName:"li"},(0,m.kt)("code",{parentName:"pre",className:"language-py"},'from time import time_ns\nprint(f"Aktuelle Systemzeit: {time_ns()}")\n')))))))}g.isMDXComponent=!0},83841:function(e,n,a){n.Z=a.p+"assets/files/10_uhren-cfae5262275afa91038337ff7ea34c7b.zip"},57130:function(e,n){n.Z="data:image/gif;base64,R0lGODlhGQEUAfcGAAAAAIAAAACAAICAAAAAgIAAgP///8DAwMDcwKbK8IiIiOb/5v//7v/m5v//5jw8PMzMzDPMzMwzzDMzzMzMMzPMM8wzMzMzMysrK5GRke7u7k1NTbOzsxEREW9vb9XV1TMzAMwzADPMAMzMADMz/8wz/zPM/8zM/5n/mWb/mZkAmWYAmZn/Zmb/ZpkAZmYAZszMmTPMmcwzmTMzmczMZjPMZswzZjMzZgBmAP9mAACZAP+ZAABm//9m/wCZ//+Z/zMAZswAZjP/Zsz/ZjMAmcwAmTP/mcz/mZnM/2bM/5kz/2Yz/5nMAGbMAJkzAGYzAMyZ/zOZ/8xm/zNm/8yZADOZAMxmADNmAAAzZv8zZgDMZv/MZgAzmf8zmQDMmf/MmTMAM8wAMzP/M8z/MzMAzMwAzDP/zMz/zJnMzGbMzJkzzGYzzJnMM2bMM5kzM2YzM8yZzDOZzMxmzDNmzMyZMzOZM8xmMzNmMwAzM/8zMwDMM//MMwAzzP8zzADMzP/MzDMAAMwAADP/AMz/ADMA/8wA/zP//8z//5nMmWbMmZkzmWYzmZnMZmbMZpkzZmYzZsyZmTOZmcxmmTNmmcyZZjOZZsxmZjNmZgAzAP8zAADMAP/MAAAz//8z/wDM///M/wBmZv9mZgCZZv+ZZgBmmf9mmQCZmf+ZmZmZ/2aZ/5lm/2Zm/5mZAGaZAJlmAGZmAJn//2b//5kA/2YA/5n/AGb/AJkAAGYAAAAAZv8AZgD/Zv//ZgAAmf8AmQD/mf//mQBmM/9mMwCZM/+ZMwBmzP9mzACZzP+ZzJmZzGaZzJlmzGZmzJmZM2aZM5lmM2ZmM5n/zGb/zJkAzGYAzJn/M2b/M5kAM2YAMwAAM/8AMwD/M///MwAAzP8AzAD/zP//zPf390RERCIiIqKiol5eXt3d3bu7uwkJCZmZmWaZmZlmmWZmmZmZZmaZZplmZmZmZnd3d8TExKqqqhoaGubm5lVVVf/78KCgpICAgP8AAAD/AP//AAAA//8A/wD//////yH5BAEAAAYALAAAAAAZARQBRwj+AA0IHEiwoMGDCBMqXMiwocOF5sLVEzgPwsOLGDNq3Mixo8ePIEOK3LCh3MIOAABYFMmypcuXMGPKjPlups2bOHPq3OmwJs+fQIMKHcrQJ9GjSJMKhYAP3jgNLY2yZIoPHVSlWLO+pKcAHbijUofGgxdPq1mk6DKcNRh2rQEO+GDQYEaXEjMabvMyNOdBL0N+/Pwa+JPFAiVXdOk4o4ROnuC15fA9xgj4bKlc2RKuTDiu7OSd+Oh95lj56KdsuY49/IBRQ9/RIjVIhv2x9E7C2Up1vMoRH2/aDcexNntiFaoTxQcWX2W8OCoDqEicILHqRMHiJJ5XJ2hb5uXMU0X+flAL3KDs8i67i0R9auZXl/je056NPn1gj1lyQwDHX8MHCAB+8JtIm7302mT01WcfRqdg9kd//IGjQYQTQtifSQTapIBg8Cgok3oGoVaKhBSWyB9cCmjAgQIWknihYAmahQ6GHr7UXSnZZLFfixW66GOPQJroomgcFSiTBujkNM47TDbp5JNOYgDllFRWaeWVWGap5ZZMvrLPl/tgookOY5ZJ5plmponmmmq2SWYdbsZ55h3/bMDlnU9KiSeU56Tk5wUK0NhRkjXC1BZHZxiESKIDLTrQGYsiUtAZkBoAAaNEEfqSBuOoRQ95GsVYaEiHjvoRqG6V45ippLIqEgf+wwmmAaqualRqrQ9lQCRsHHiG60W3/qoZB4UGK+xAxh4r0Ia/KrCrsshCaxA9okIbzzjQJluoOatK6xA4E7mqLXCBettSPMyiN65e6GhqLk+uGenWukjR48Gz7+qFJDzyEUXvTej4lu/AcMFjDk0yQaCABxz0O/DD/kIssbL/TmzxZxVfrPFRF2SALULpbiwybRzM884G8IjT4cgsj5ZxyzBHHPPMQNGzIj4eZFBVPAAedCuA5qCTc1MZxDMgzReDgw5ZO73cET1Cx4q0Xgpk4HBSTt8El6BTx4QPsRj/c0E88ZhUDtnmiPaBOWR/9QHaAsXDtkUakB0Pa/TIfbf+AW+TLRoEekMFONlxy80aOM4khhgzdCxOSdcMtVsoiFn9wV5B8howFuQZZD75fUrlp9tCVyNEz8oWo+N5rZTr9J1Gqy/ElbdyP9y6Rtm0p9Bpueju0dGwf2xq7W7xY11Bz2FnAHMGnGA8dCQQ5PxAxh8v0O0g4ZgFTFKDZM7B9Tm7MfYMYvYJTrF3BE7Ik7F/MfkKoSaJkBNqAAE94HDtV3yPua8x/ALR3n6CxCP68accpctI+kJSLa3QSmSUa1A2/kDAH/GnY/yBRzgMCCH9YWSBIXlgVtzFssqgxhIctGABV6hCDXhwhG4h4ciyBi0ZYuUDNtQYDRFRB4OcAQf+jfrhQOqACEk1og7tIEgdGiEQHqKley7xwDygiJEGWoyGwrKiVr7HMizWqlewESHEvGgq1JXHjGPUmBbPmMY2Kota5iLjZ0JjsaAJS45ukQfYaHatUeExKfLIIeQKAo534Osxf9xJZA45SJBAAB5UxJpbNACPPTZSKeVQADyAZ5NEOmRWHnjhJX9lDp1pElbAwojNTIkPc3BylLBUiCdjSUuEzLKWkAMAVA6Ey16GRAPveCUHAIBGXxqTI+/wkziOyUyP3LKZo3wmNBspzWlCrprWnBo2s0mzbXLTVTdTgDwY2ROPlCNg8MiAKL85Gg0oAB/ySKBIsMmVr7EzK1z+sUpQvImQeLzDkveMCQfgsc6f8POTAZNnQBvSlbwcdCPluNdCE1KOdyhUKw/tCARokDjGdVQx35hmOTYJHAAiZaMf/agrvnDMcXQLPSYlivb+MBAjmaOYg+SWqWIKFNSEAiM6nZpsXlkfnubkGPmhqWYaAg9yTux0xzLqTE6RI6UuBIQDkQf4nuo/1oFOKFnIxfYuclGQFfRX/DKXVEWC1AlCtCMZHco5B7bWg3wiC6UoRRZ8d5BjVNUjWFWIPAILHK2WBzkeqatB8rqQsI4VJGd1SDmEN6rBuoU5q2jeQFZBHegsL7P/eF50pAe6znLnqy/BjWpaUtaLTLZQc3X+ywmeYxBUoKI5zrGtcXRrveZF5zm3PS1M/JoFq7qEsA6xbH14OTHFIsSxN0HuQ9aYF1VBELUbUe2EABRZsyj3MzMamXOJCwcS1Q8cAIKAgF4i3Yu4c46tfddaHfuP89rXvBJyYUvaW8XH6KplMcXNKe5LYPyet7tIea9ePgDQ8WHXIJbLAiQMTOEC3xfBCuEvRuSB4aAw97oJoa+FzfsAFiGpA0arcH6d6hAN99ctPYOZenBTihEXWAFM+sAH6hEPFdePxUmJ8VniOpnSRHjCNvaxkglMD6JeNSdEdoggLfaMZzzBAtmo75K3nOQLFyknU+4JoDrsEOo+DAKs2Mf+CNgxGg5s4KUywSlGhgmADvyzJWLUIc26mhRzuPhYWMRBESUlkDPooIlMBKJAcHCGRjTCIoRuYg8NwMNIL6XBLYEHBoC8ED5fUaN1wBRBeIiDRiSKh+1ohKRS7WhLG4CIqUZEqomS549ogMdv+fBFvjvDmEEA01ox88CivL/HyHlixM6Lp80i7Di2TNd6EdjGkm2W2dHmPHreWHjR899PJ63Zfjm2t6idFHGXB9ziQnYWnYwrcgvF3KMK6rjzFQ84S8sD8fWQu3NCyYuR9I7QwjfLmtruX/Ubaehi1b5bgo6tNlJy+i5UH435yHybZeEbaSU7O+Uy2IwjzN+MKKf+weKX0zl8og2JqK+UgnGBfAAef0b5tODBoqFQWx74ILPMQzLQbncyJ+AYR1UsvnOhfOCdCjg5MkWSSXzgY+VFl9Z/AomOd3SlXZp+Bzza1a53ZKAxQo56LFsudlORvezFQrs1z652BbG97TDugECeDndfimOgMa+7xsJBDoV0IO96PxYEypEBoiZzmYGvpTn8BO/EzwwlfgK84991FZ/ofPLZxvzYNU/Lt3NeL57//LxEH03SXzL0psdo6geJ+tWz3PUbKwfgsF6VdmVAT19vFz6uzjN2w/4xONRkVQj7L3DEI2CaHOfvtXLO3ZuD6LaMjTzgAU/oL1+jOIunoWT+Epmq+P76D+FAzr7/EX7ypfDgb40CFBDJmRB5HB6AevoHIhuv2Pwo8aB7+jMgPqQsXB7lknoqp3paQUnAVneP1H4ktxbrA3Iy9wHvcHlN4xfgkAHdAgNyAQPGxU7g4AGSdxOtJxAwQBckSIKP800cNxknU2tYMYIl+IInCE2FJIFDkQEXcAOC4YIvaILQpDDWpxTOxROUQAc7SBfNNHEw9WBmkR/FBQOU8IRKhYS1BHEKEoQ44VduNRBQFA/Q1jXHNypWaBPZkDsGkUBf2EhnCIZKiBRMiBAKmIY0E1FeZRZUlQ3n44YMAUk04wHkBxth2BKfgBl8xREd+IPHYg7+lOUqfygSbcgQClgQUmgxhaQsi/gRfpULG5gQj2gQBFdH9jaHRBGIZJgwiZgvAgctlbgRjXgRm4gQp0h56FaFa3gTdZiJDdGKCIEOuFhZShdVsygTNAYUOOQt0qZWv4gRNGWLBaE9HrGLCNGBAWc7x/gQoVAKfzCIBWE5WdgRzpgQjVcfIXgQzNMRf3gKjxViuYEVy7ZcEvOHxaUQzCgeIvGKo7KOQ4EK/BAdmSUQwWVbyoOP1WFaA5Edy4OPBZGKB6GNysgR3bgQ9Ogh3ygUnCWOJCAd0JFZzmMd4ygQEykQAnk909gRoqMXESkYXZgUo1Vb2qEd0ZORn1UQBIn+WcdBPSGpEfH4Eg2ZhzWSVhaDkIMxhgsJEjnJELFoFuPwgUVVkw+BGaPzGcNYHrH1PkrJEDc5E0PJEONAg0dRkpQ4lQmhjcdADx9giKvhNcBhNSD2EaJTIfSQXiO3EWRJOkV5FFH5P165jFUVIQeUXtzlElcZHFoJFFyJincpENp4Cnqpl7KnY334EIG5EHMpFFwkXoWZH6GQmJiJP/zxl884E/FwgGZhj/kiVTgyQZh5mnrZZCzBmQwFfKAJMTz1B5hxDKhZmxTylg2BmxzBAUgpE6I5mjW5lrY5nAf0Szfxm0QxmNICQDNFnM6pAbqpiTcRmTshHDL2i4fpnNr+KSHReRCNuREfUIoOFDPYw4TOOQ4XAJ3w8A7xYZuB2Z0bwYJIgZzypYTN6ZznYDXgYA4d4JxayZpllhdPCWDYJZvZQJvbqQAbkD8mAwHjMJz4oz44YZ1rwWuUWRBM2CPbuaERQoOP2RC/FkMzYxtUhYkceqKKyY1g5hby2Y6BkZ0oGqP5pRctKhQOCJv8YJ4yuqPw6XIr6hE96hAnKTHPACau4BU7uqOXFw/h8IkG8hGLlxJjxhLhyBPMACYjgANnogNb2qVjwqVf6qVcKqZgOqZheqZmmqZlCqZ0sgE4gUXg0Cd+Ymev+RA3OjDoeacDo6e2dGcvwafvUqVAAaj+OzGk6jYzhjoU29YyO7REiMBojaJqOiApsgYBS2QAZxBq7WBpmVpEqjZpckWoDiGWGIAO5JCoBxF2vQZqruZEjQKqRJSpRFQQs0ppOtCbsIOrBDEOiMcR9OlsHVGrBJGpSQQBklKroYYIkJZEA+FoAlEHPeRqP/GrD7E+OYcyyjl3MXNLlDKs3Yqp4HoQ3ypqQZGtO0Gt0iKoPIGuO0EP4nkx6qoTFJoX1AlwMFOv8vqhCgczdalsjHqv7ROXtRKvN7E+n8Guv0KwGjIayicyCst97+qvDjtwtAE1Eysyizoa+pR5F2NtwGGu6bYxIKsUI+tHIushnwKvGoMOQar+FQ7qbRMDRhInf4FqMZHoIZ0hMQ8bEuFZK4TzMDv7ETc7KkObLRDDNseiYDW7pwAqGOBQsrQRtBvBk9JSc/NmLk87MIaVruYCAaJaI1lrtFWrr+gRgPaatFALWwiLSMrCfiyDDjSbdr9ydDFTiAOLK4UksG+0tmshtQehALqKK0VbHn5LEFSIhl97cUQbsZCDiBHnIejAuJfEheCoIONQp7BkL9/5esDRgWQbMwYDG/EKAQ/5TRCotzpRpU8btwGVFoIRguPAt8xUFQ6lF3CButOUATVqUGsxDlTLeQD4ueWXFe60u4lXf7gLV0kRu00Ldx+QM8mLEcS2JIFbdxVziA/V6zM80X2bO38GMCuh637RtX7N670DcVNf070J4UkckAEeoH3mC3Q4t35ps3QdgS679xTxaxbhmU4e8E6qM3ja650A8nE0576qE737ixWFu8DD68AwC8FuJMFAS8E6a8ETjMHAqsFLy8Eb7MFcq3YBAQA7"},36104:function(e,n,a){n.Z=a.p+"assets/images/sbb_uhr-a02cb9782a8c24be322c4d2f7e6bb493.jpeg"}}]);