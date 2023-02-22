---
sidebar_custom_props:
  id: 5daf3b90-6b51-4224-9073-e090d6b3d309
  source:
    name: Micro Devices
    ref: http://www.microdev.it/wp/en/2018/06/25/micropython-micropython-compiling-for-esp8266/
---

# Building Micro Python

This article shows how to generate the MicroPython firmware for the ESP8266 board.

The operating system used for this task is Ubuntu 22 on WSL.

create the Micropython folder and inside this folder the esp8266 folder

```bash
mkdir Micropython
cd Micropython
mkdir esp8266
cd esp8266
```

The MicroPython source code is available at [👉 Github Micropython](https://github.com/micropython/micropython). Instructions to build the firmware for the ESP8266 are available at [👉 MicroPython esp8266](https://github.com/micropython/micropython/tree/master/ports/esp8266).

Clone the repository

```bash
git clone https://github.com/micropython/micropython
```

Download the cross compiler, as described in [👉 Cross compiler](https://github.com/pfalcon/esp-open-sdk)

As indicated in the link above, download the source of the cross compiler always from the folder esp8266

```bash
git clone --recursive  https://github.com/pfalcon/esp-open-sdk
```

Install the prerequisites for building

```bash
sudo apt-get install make unrar-free autoconf automake libtool gcc g++ gperf flex bison texinfo gawk ncurses-dev libexpat-dev python-dev python python3-serial sed git unzip bash help2man wget bzip2 libtool-bin
```

Now we must download some tarballs which are not available anymore through the mirrors used by the compiler

```bash
# some tarballs (binaries) are not available anymore on the preconfigured mirror - download them manually
cd crosstool-NG/.build/tarballs/
wget https://libisl.sourceforge.io/isl-0.14.tar.gz
wget https://github.com/libexpat/libexpat/releases/download/R_2_1_0/expat-2.1.0.tar.gz

# compiler needs Python v2.7 - new ubuntu versions have Python v3 as default
mkdir /tmp/tmpbin && ln -s /usr/bin/python2.7 /tmp/tmpbin/python && export PATH=/tmp/tmpbin:${PATH}

# ensure serial module is found - get current version from https://pypi.org/project/pyserial/#files
cd /tmp/tmpbin
wget https://files.pythonhosted.org/packages/1e/7d/ae3f0a63f41e4d2f6cb66a5b57197850f919f59e558159a4dd3a818f5082/pyserial-3.5.tar.gz
tar -xzf pyserial-3.5.tar.gz
cd pyserial-3.5
python setup.py install
```

Proceed to the build of the cross compiler with the following commands

```bash
cd esp-open-sdk
make STANDALONE=y |& tee make0.log
```
At the end of the build add the binary folder of the cross compiler to the PATH envinronment variable

```bash
export PATH=~/Micropython/esp8266/esp-open-sdk/xtensa-lx106-elf/bin:$PATH
```

Go into the micropython folder available under ~/Micropython/esp8266

```bash
cd ~/Micropython/esp8266/micropython
```
Run

```bash
git submodule update --init
```

to add external dependencies.

Next step is the MicroPython cross compiler build

```bash
make -C mpy-cross
```

Finally we can build the ESP8266 firmware with the following commands

```bash
cd ports/esp8266
make axtls
make
```

## Add modules
Now you can place all the modules you want to add to the firmware in the __Micropython\esp8266\micropython\ports\esp8266__ folder.

then recompile the firmware from the folder __Micropython\esp8266\micropython\ports\esp8266__ with the command

```bash
make clean
make
```

## Flash the firmware

The firmware is generated under __ports/esp8266/build-GENERIC__ folder with the name __firmware_combined.bin__.

Proceed to flash the firmware...

:::details WSL / Windows

Sadly, WSL 2 does not support yet USB devices by default. Becaus of that we use PowerShell to flash the firmware.

Open the Folder __\Micropython\esp8266\micropython\ports\esp8266__ in PowerShell

```bash
esptool.py --port COMXX erase_flash
```

where  COMXX is repalced with the actual serial port to which we connect the ESP8266 board.

In my case, the command looked like this

```powershell
esptool.py --port COM3 erase_flash
```

And then upload the firmware with the command
```powershell
esptool.py --port COM3 --baud 460800 write_flash --flash_size=detect 0 .\build-GENERIC\firmware-combined.bin
```

:::


:::details UNIX

```bash
esptool.py --port /dev/ttyXXX erase_flash
```

where  /dev/ttyXXX is repalced with the actual serial port to which we connect the ESP8266 board.

In our case, the firmware upload was successful with the command

```bash
make PORT=/dev/ttyUSB0 deploy
```

It is also possible to load the firmware_combined.bin image with the command

```bash
esptool.py --port /dev/ttyUSBX --baud 460800 write_flash --flash_size=detect 0 firmware-combined.bin
```

:::

