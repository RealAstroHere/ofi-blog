"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[49989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,i=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),c=s(a),h=n,k=c["".concat(i,".").concat(h)]||c[h]||d[h]||p;return a?r.createElement(k,o(o({ref:t},l),{},{components:a})):r.createElement(k,o({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,o=new Array(p);o[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:n,o[1]=m;for(var s=2;s<p;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},54010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var r=a(83117),n=(a(67294),a(3905));const p={sidebar_custom_props:{id:"5daf3b90-6b51-4224-9073-e090d6b3d309",source:{name:"Micro Devices",ref:"http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/"}}},o="\u2b50 Building Micro Python",m={unversionedId:"IoT-Workshop/micropython/modules/README",id:"version-24ef/IoT-Workshop/micropython/modules/README",title:"\u2b50 Building Micro Python",description:"Dieser Schritt wurde bereits gemacht und muss nicht wiederholt werden. Sollte Ihr ESP8266 einmal aus unerkl\xe4rlichen Gr\xfcnden nicht mehr funktionieren, so k\xf6nnte das neue Aufspielen (flashen) der Firmware allenfalls helfen.",source:"@site/versioned_docs/version-24ef/10-IoT-Workshop/05-micropython/modules/README.md",sourceDirName:"10-IoT-Workshop/05-micropython/modules",slug:"/IoT-Workshop/micropython/modules/",permalink:"/24ef/IoT-Workshop/micropython/modules/",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/tree/main/docs",tags:[],version:"24ef",frontMatter:{sidebar_custom_props:{id:"5daf3b90-6b51-4224-9073-e090d6b3d309",source:{name:"Micro Devices",ref:"http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/"}}},sidebar:"version-24ef/sidebar",previous:{title:"4. Sensorbox",permalink:"/24ef/IoT-Workshop/micropython/sensorbox/"}},i={},s=[{value:"Add modules",id:"add-modules",level:2},{value:"Flash the firmware",id:"flash-the-firmware",level:2}],l=(d="Comment",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",e)});var d;const c={toc:s};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h1",{parentName:"div",id:"-building-micro-python"},"\u2b50 Building Micro Python"),(0,n.kt)(l,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,n.kt)("admonition",{title:"IoT Workshop",type:"info"},(0,n.kt)("div",{parentName:"admonition",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Dieser Schritt wurde bereits gemacht und muss nicht wiederholt werden. Sollte Ihr ESP8266 einmal aus unerkl\xe4rlichen Gr\xfcnden nicht mehr funktionieren, so k\xf6nnte das neue Aufspielen (flashen) der Firmware allenfalls helfen."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"}))),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"This article describes how to generate and flash the MicroPython firmware for the ESP8266 board. The steps are similar for other boards, but the firmware must be generated for the specific board."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"This manual is based on the ",(0,n.kt)("a",{parentName:"p",href:"http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/"},"\ud83d\udc49 Compiling MicroPython for esp8266")," article."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"The operating system used for this task is Ubuntu 22 on WSL."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Create the Micropython folder and inside this folder the esp8266 folder"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:4,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir Micropython\ncd Micropython\nmkdir esp8266\ncd esp8266\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"The MicroPython source code is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/micropython/micropython"},"\ud83d\udc49 Github Micropython"),". Instructions to build the firmware for the ESP8266 are available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/micropython/micropython/tree/master/ports/esp8266"},"\ud83d\udc49 MicroPython esp8266"),"."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:5,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Clone the repository"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:6,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/micropython/micropython\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Download the cross compiler, as described in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/pfalcon/esp-open-sdk"},"\ud83d\udc49 Cross compiler")),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:7,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"As indicated in the link above, download the source of the cross compiler always from the folder esp8266"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:8,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive  https://github.com/pfalcon/esp-open-sdk\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Install the prerequisites for building"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:9,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install make unrar-free autoconf automake libtool gcc g++ gperf flex bison texinfo gawk ncurses-dev libexpat-dev python-dev python python3-serial sed git unzip bash help2man wget bzip2 libtool-bin\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Now we must download some tarballs which are not available anymore through the mirrors used by the compiler"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:10,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# some tarballs (binaries) are not available anymore on the preconfigured mirror - download them manually\ncd crosstool-NG/.build/tarballs/\nwget https://libisl.sourceforge.io/isl-0.14.tar.gz\nwget https://github.com/libexpat/libexpat/releases/download/R_2_1_0/expat-2.1.0.tar.gz\n\n# compiler needs Python v2.7 - new ubuntu versions have Python v3 as default\nmkdir /tmp/tmpbin && ln -s /usr/bin/python2.7 /tmp/tmpbin/python && export PATH=/tmp/tmpbin:${PATH}\n\n# ensure serial module is found - get current version from https://pypi.org/project/pyserial/#files\ncd /tmp/tmpbin\nwget https://files.pythonhosted.org/packages/1e/7d/ae3f0a63f41e4d2f6cb66a5b57197850f919f59e558159a4dd3a818f5082/pyserial-3.5.tar.gz\ntar -xzf pyserial-3.5.tar.gz\ncd pyserial-3.5\npython setup.py install\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Proceed to the build of the cross compiler with the following commands"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:11,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd esp-open-sdk\nmake STANDALONE=y |& tee make0.log\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"At the end of the build add the binary folder of the cross compiler to the PATH envinronment variable"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:12,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=~/Micropython/esp8266/esp-open-sdk/xtensa-lx106-elf/bin:$PATH\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Go into the micropython folder available under ~/Micropython/esp8266"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:13,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Micropython/esp8266/micropython\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Run"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:14,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git submodule update --init\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"to add external dependencies."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:15,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Next step is the MicroPython cross compiler build"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:16,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make -C mpy-cross\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Finally we can build the ESP8266 firmware with the following commands"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:17,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ports/esp8266\nmake axtls\nmake\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"add-modules"},"Add modules"),(0,n.kt)(l,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Now you can place all the modules you want to add to the firmware in the ",(0,n.kt)("strong",{parentName:"p",className:"underline"},"Micropython\\esp8266\\micropython\\ports\\esp8266")," folder."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:18,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"AHT21 Sensor Module"),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'reference title="aht.py"',reference:!0,title:'"aht.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/05-micropython/modules/aht.py\n")))),(0,n.kt)(l,{parentName:"div",type:"detailsWrapper",nr:0,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"ENS160 Sensor Module"),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'reference title="ENS.py"',reference:!0,title:'"ENS.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/05-micropython/modules/ens.py\n")))),(0,n.kt)(l,{parentName:"div",type:"detailsWrapper",nr:1,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"PiicoDev_Unified Module"),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-python",metastring:'reference title="PiicoDev_Unified.py"',reference:!0,title:'"PiicoDev_Unified.py"'},"https://github.com/lebalz/ofi-blog/blob/main/docs/EF-IOT-Workshop/05-micropython/modules/PiicoDev_Unified.py\n")))),(0,n.kt)(l,{parentName:"div",type:"detailsWrapper",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"then recompile the firmware from the folder ",(0,n.kt)("strong",{parentName:"p",className:"underline"},"Micropython\\esp8266\\micropython\\ports\\esp8266")," with the command"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:19,mdxType:"Comment"})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make clean\nmake\n")),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("h2",{parentName:"div",id:"flash-the-firmware"},"Flash the firmware"),(0,n.kt)(l,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"The firmware is generated under ",(0,n.kt)("strong",{parentName:"p",className:"underline"},"ports/esp8266/build-GENERIC")," folder with the name ",(0,n.kt)("strong",{parentName:"p",className:"underline"},"firmware_combined.bin"),"."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:20,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Proceed to flash the firmware..."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:21,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"WSL / Windows"),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Sadly, WSL 2 does not support yet USB devices by default. Becaus of that we use PowerShell to flash the firmware."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:22,mdxType:"Comment"})),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"Open the Folder ",(0,n.kt)("strong",{parentName:"p",className:"underline"},"\\Micropython\\esp8266\\micropython\\ports\\esp8266")," in PowerShell"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:23,mdxType:"Comment"})),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"esptool.py --port COMXX erase_flash\n")),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"where  COMXX is repalced with the actual serial port to which we connect the ESP8266 board."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:24,mdxType:"Comment"})),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"In my case, the command looked like this"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:25,mdxType:"Comment"})),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"esptool.py --port COM3 erase_flash\n")),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"And then upload the firmware with the command"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:26,mdxType:"Comment"})),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-powershell"},"esptool.py --port COM3 --baud 460800 write_flash --flash_size=detect 0 .\\build-GENERIC\\firmware-combined.bin\n")))),(0,n.kt)(l,{parentName:"div",type:"detailsWrapper",nr:3,mdxType:"Comment"})),(0,n.kt)("div",{className:"commentable"},(0,n.kt)("div",{parentName:"div"},(0,n.kt)("details",{parentName:"div"},(0,n.kt)("summary",{parentName:"details"},"UNIX"),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"esptool.py --port /dev/ttyXXX erase_flash\n")),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"where  /dev/ttyXXX is repalced with the actual serial port to which we connect the ESP8266 board."),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:27,mdxType:"Comment"})),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"In our case, the firmware upload was successful with the command"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:28,mdxType:"Comment"})),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make PORT=/dev/ttyUSB0 deploy\n")),(0,n.kt)("div",{parentName:"details",className:"commentable"},(0,n.kt)("p",{parentName:"div"},"It is also possible to load the firmware_combined.bin image with the command"),(0,n.kt)(l,{parentName:"div",type:"paragraph",nr:29,mdxType:"Comment"})),(0,n.kt)("pre",{parentName:"details"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"esptool.py --port /dev/ttyUSBX --baud 460800 write_flash --flash_size=detect 0 firmware-combined.bin\n")))),(0,n.kt)(l,{parentName:"div",type:"detailsWrapper",nr:4,mdxType:"Comment"})))}h.isMDXComponent=!0}}]);