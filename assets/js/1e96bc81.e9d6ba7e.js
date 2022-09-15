"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[96177],{38335:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=n(83117),a=(n(67294),n(3905));n(61839);const r={sidebar_custom_props:{id:"eb0ef584-948f-4087-be07-08305c23f5e5"}},i="Phaser",l={unversionedId:"snippets/python-phaserjs",id:"snippets/python-phaserjs",title:"Phaser",description:"3d-Animation",source:"@site/docs/snippets/python-phaserjs.md",sourceDirName:"snippets",slug:"/snippets/python-phaserjs",permalink:"/snippets/python-phaserjs",draft:!1,editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/snippets/python-phaserjs.md",tags:[],version:"current",lastUpdatedAt:1659530664,formattedLastUpdatedAt:"3. Aug. 2022",frontMatter:{sidebar_custom_props:{id:"eb0ef584-948f-4087-be07-08305c23f5e5"}},sidebar:"sidebar",previous:{title:"Labyrinth",permalink:"/snippets/maze"},next:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"}},o={},p=[{value:"3d-Animation",id:"3d-animation",level:2},{value:"Starter Game: WIP",id:"starter-game-wip",level:2}],d=(f="Comment",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var f;const m={toc:p};function c(e){let{components:s,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,n,{components:s,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h1",{parentName:"div",id:"phaser"},"Phaser"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:0,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"3d-animation"},"3d-Animation"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:1,mdxType:"Comment"})),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("p",{parentName:"div"},"Inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://phaser.io/examples/v3/view/dwitter/5479"},"@dwitter")),(0,a.kt)(d,{parentName:"div",type:"paragraph",nr:0,mdxType:"Comment"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=phaser-demo.py id=1efa38ff-1c08-4422-86b2-2d35fc986105",live_py:!0,title:"phaser-demo.py",id:"1efa38ff-1c08-4422-86b2-2d35fc986105"},"\nfrom browser import window, document, html\nimport javascript\nfrom math import sin, cos, tan\n\nPhaser = window.Phaser\n\nclass Game(object):\n    def __init__(self):\n        self.c = None\n        self.x = None\n        self.texture = None\n        self.time = 0\n        self.frame = 0\n        self.game = window.Phaser.Game.new({\n            'type': Phaser.CANVAS,\n            'parent': RESULT_DIV,\n            'width': 510,\n            'height': 540,\n            'backgroundColor': '#ffffff',\n            'scene': {\n                'create': self.create,\n                'update': self.update\n            }\n        })\n    \n    def destroy(self, *args):\n        self.game.destroy(True)\n\n    def create(self, *args):\n        this = javascript.this()\n        self.texture = this.textures.createCanvas('dwitter', 1920, 1080)\n        self.c = self.texture.getCanvas()\n        self.x = self.c.getContext('2d')\n        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.4)\n        this.input.on('pointerdown', self.destroy, this)\n\n    def update(self, *args):\n        self.time = self.frame / 60\n        self.frame = self.frame + 1\n        if self.frame % 30 ==0:\n            self.frame += 0.001\n        self.c['width'] = 1020\n\n        for i in range(0, 31, 1):\n            for j in range(20, -21, -4):\n                self.x.fillRect(\n                    510+j*i*0.5*cos(i*0.2)+cos(2*self.time+i*0.2)*300,\n                    540+j*i*0.5*sin(i*0.2)+sin(2.2*self.time+i*0.2)*200,\n                    9,\n                    9\n                )\n\n\ngame = Game()\n\n")),(0,a.kt)("div",{className:"commentable"},(0,a.kt)("h2",{parentName:"div",id:"starter-game-wip"},"Starter Game: WIP"),(0,a.kt)(d,{parentName:"div",type:"heading",nr:2,mdxType:"Comment"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py id=79a92e22-6e57-434b-afcb-69f68818a073",live_py:!0,id:"79a92e22-6e57-434b-afcb-69f68818a073"},"from browser import window, document, html\nimport javascript\nfrom math import sin, cos, tan\n\nPhaser = window.Phaser\ndef set_bounce(child):\n    print('hi',child)\n    child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8))\n\nclass Game(object):\n    def __init__(self):\n        self.player = None\n        self.stars = None\n        self.platforms = None\n        self.cursors = None\n        self.score = 0\n        self.scoreText = None\n        self.game = Phaser.Game.new({\n            'type': Phaser.AUTO,\n            'parent': RESULT_DIV,\n            'width': 800,\n            'height': 600,\n            'physics': {\n                'default': 'arcade',\n                'arcade': {\n                    'gravity': { 'y': 300 },\n                    'debug': False\n                }\n            },\n            'scene': {\n                'preload': self.preload,\n                'create': self.create,\n                'update': self.update\n            }\n        })\n    \n\n    def preload(self, *args):\n        this = javascript.this()\n        this.load.setBaseURL('http://labs.phaser.io')\n        this.load.image('sky', 'assets/skies/sky1.png')\n        this.load.image('ground', 'assets/rope/pipe1.png')\n        this.load.image('star', 'assets/particles/gold.png')\n        this.load.image('bomb', 'assets/particles/flame2.png')\n        this.load.spritesheet('dude', 'assets/rope/pikachu.png', { 'frameWidth': 32, 'frameHeight': 48 })\n\n    def create(self, *args):\n        this = javascript.this()\n        this.add.image(400, 300, 'sky')\n        platforms = this.physics.add.staticGroup()\n\n        platforms.create(400, 568, 'ground').setScale(2).refreshBody()\n\n        platforms.create(600, 400, 'ground')\n        platforms.create(50, 250, 'ground')\n        platforms.create(750, 220, 'ground')\n\n        self.player = this.physics.add.sprite(100, 450, 'dude')\n\n        self.player.setBounce(0.2)\n        self.player.setCollideWorldBounds(True)\n\n        this.anims.create({\n            'key': 'left',\n            'frames': this.anims.generateFrameNumbers('dude', { 'start': 0, 'end': 3 }),\n            'frameRate': 10,\n            'repeat': -1\n        })\n\n        this.anims.create({\n            'key': 'turn',\n            'frames': [ { 'key': 'dude', 'frame': 4 } ],\n            'frameRate': 20\n        })\n\n        this.anims.create({\n            'key': 'right',\n            'frames': this.anims.generateFrameNumbers('dude', { 'start': 5, 'end': 8 }),\n            'frameRate': 10,\n            'repeat': -1\n        })\n\n        self.cursors = this.input.keyboard.createCursorKeys()\n\n        self.stars = this.physics.add.group({\n            'key': 'star',\n            'repeat': 11,\n            'setXY': { 'x': 12, 'y': 0, 'stepX': 70 }\n        })\n\n        for i in self.stars['children']:\n            print(i,type(i))\n\n        self.scoreText = this.add.text(16, 16, 'score: 0', { 'fontSize': '32px', 'fill': '#000' })\n\n        this.physics.add.collider(self.player, self.platforms)\n        this.physics.add.collider(self.stars, self.platforms)\n\n        this.physics.add.overlap(self.player, self.stars, self.collectStar, None, this)\n\n    def update(self, *args):\n        if self.cursors.left.isDown:\n            self.player.setVelocityX(-160)\n            self.player.anims.play('left', True)\n        elif self.cursors.right.isDown:\n            self.player.setVelocityX(160)\n            self.player.anims.play('right', True)\n        else:\n            self.player.setVelocityX(0)\n            self.player.anims.play('turn')\n\n        if self.cursors.up.isDown and self.player.body.touching.down:\n            self.player.setVelocityY(-330)\n\n    def collectStar (self, player, star):\n        star.disableBody(True, True)\n        self.score += 10\n        self.scoreText.setText('Score: ' + self.score)\n    \n    def destroy(self, *args):\n        self.game.destroy(True)\n\ngame = Game() \n")))}c.isMDXComponent=!0}}]);