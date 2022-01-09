"use strict";(self.webpackChunkofi_blog_versioned=self.webpackChunkofi_blog_versioned||[]).push([[98980],{99717:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return f},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var s=n(83117),r=n(80102),i=(n(67294),n(3905)),a=["components"],f={},o="Phaser",l={unversionedId:"snippets/turtle-phaser",id:"snippets/turtle-phaser",title:"Phaser",description:"",source:"@site/docs/snippets/turtle-phaser.md",sourceDirName:"snippets",slug:"/snippets/turtle-phaser",permalink:"/snippets/turtle-phaser",editUrl:"https://github.com/lebalz/ofi-blog/edit/main/docs/snippets/turtle-phaser.md",tags:[],version:"current",lastUpdatedAt:1641751653,formattedLastUpdatedAt:"1/9/2022",frontMatter:{},sidebar:"sidebar",previous:{title:"VueJS",permalink:"/notes/vuejs"},next:{title:"Planeten mit Monden",permalink:"/snippets/turtle-planets"}},p=[],d={toc:p};function c(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"phaser"},"Phaser"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py",metastring:"live_py title=phaser-demo.py id=1efa38ff-1c08-4422-86b2-2d35fc986105",live_py:!0,title:"phaser-demo.py",id:"1efa38ff-1c08-4422-86b2-2d35fc986105"},"\nfrom browser import window, document, html\nimport javascript\nfrom math import sin, cos, tan\n\nPhaser = window.Phaser\n\nclass Game(object):\n    def __init__(self):\n        self.c = None\n        self.x = None\n        self.texture = None\n        self.time = 0\n        self.frame = 0\n        self.game = window.Phaser.Game.new({\n            'type': Phaser.CANVAS,\n            'parent': RESULT_DIV,\n            'width': 510,\n            'height': 540,\n            'backgroundColor': '#ffffff',\n            'scene': {\n                'create': self.create,\n                'update': self.update\n            }\n        })\n    \n    def destroy(self, *args):\n        self.game.destroy(True);\n\n    def create(self, *args):\n        this = javascript.this()\n        self.texture = this.textures.createCanvas('dwitter', 1920, 1080)\n        self.c = self.texture.getCanvas()\n        self.x = self.c.getContext('2d')\n        this.add.image(0, 0, 'dwitter').setOrigin(0).setScale(0.4)\n        this.input.on('pointerdown', self.destroy, this);\n\n    def update(self, *args):\n        self.time = self.frame / 60\n        self.frame = self.frame + 1\n        if self.frame % 30 ==0:\n            self.frame += 0.001\n        self.c['width'] = 1020\n\n        for i in range(0, 31, 1):\n            for j in range(20, -21, -4):\n                self.x.fillRect(\n                    510+j*i*0.5*cos(i*0.2)+cos(2*self.time+i*0.2)*300,\n                    540+j*i*0.5*sin(i*0.2)+sin(2.2*self.time+i*0.2)*200,\n                    9,\n                    9\n                )\n\n\ngame = Game()\n\n")))}c.isMDXComponent=!0}}]);