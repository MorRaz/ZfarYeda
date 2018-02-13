(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"zfarYeda_atlas_", frames: [[0,0,3508,2480],[3510,933,229,177],[0,2482,661,522],[3874,0,166,166],[2767,2788,740,332],[3890,636,65,76],[3510,459,378,235],[3510,696,378,235],[3890,432,100,100],[3890,534,100,100],[3992,534,100,100],[3992,432,100,100],[0,3094,1271,79],[3874,300,100,130],[3976,300,100,130],[3874,168,100,130],[3976,168,100,130],[3510,0,362,457],[2767,2482,1050,304],[663,2482,1050,304],[1715,2482,1050,304],[1715,2788,1050,304],[663,2788,1050,304]]}
];


// symbols:



(lib.backgroundnofrog = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.correct2 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HitLogo = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.incorrect2 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lashonpngcopy3 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.mesiah = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.odot = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.p1 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.p2 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.p3 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.p4 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pas = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pic1 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.pic2 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.pic3 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pic4 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.זבוב2 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.כפתורים02 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.כפתורים03 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.כפתורים04 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.כפתורים05 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.כפתורים06 = function() {
	this.spriteSheet = ss["zfarYeda_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.lashonpngcopy3();
	this.instance.parent = this;
	this.instance.setTransform(-38.8,7.3,0.088,0.135,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.8,-38.8,77.7,77.7);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.זבוב2();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,10.8,0.059,0.059,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-10.7,27.1,21.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.זבוב2();
	this.instance.parent = this;
	this.instance.setTransform(-13.5,10.8,0.059,0.059,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.5,-10.7,27.1,21.5);


(lib.pic4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.pic4();
	this.instance.parent = this;

	this.instance_1 = new lib.p1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-19,1.38,1.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,130);


(lib.pic3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.pic3();
	this.instance.parent = this;

	this.instance_1 = new lib.p1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-19,1.38,1.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,130);


(lib.pic2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.pic2();
	this.instance.parent = this;

	this.instance_1 = new lib.p1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-19,1.38,1.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,130);


(lib.pic1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.pic1();
	this.instance.parent = this;
	this.instance.setTransform(119,181,0.407,0.407);

	this.instance_1 = new lib.p1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-19,-19,1.38,1.38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(119,181,40.8,52.9);


(lib.PlayAgainBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כפתורים05();
	this.instance.parent = this;
	this.instance.setTransform(-72,-36,0.185,0.186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-36,194.8,56.4);


(lib.p4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p4_1, new cjs.Rectangle(0,0,100,100), null);


(lib.p3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p3();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p3_1, new cjs.Rectangle(0,0,100,100), null);


(lib.p2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.p2_1, new cjs.Rectangle(0,0,100,100), null);


(lib.p1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.instance = new lib.p1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.38,scaleY:1.38,x:-19,y:-19},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.odot_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.odot();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.439,0.434);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.odot_1, new cjs.Rectangle(0,0,165.8,102), null);


(lib.NQbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כפתורים06();
	this.instance.parent = this;
	this.instance.setTransform(-68,-28,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68,-28,125.7,36.4);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כפתורים02();
	this.instance.parent = this;
	this.instance.setTransform(-46,-3,0.12,0.12);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46,-3,125.7,36.4);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.backgroundnofrog();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.886,0.886);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background, new cjs.Rectangle(0,0,3109.4,2198.2), null);


(lib.odotBG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(102,102,102,0.047)").s().p("AjlBHIAAiNIHLAAIAACNg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.odotBG, new cjs.Rectangle(-23,-7.1,46,14.3), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.background_1, null, null);


(lib.logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.logo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.692,0.632);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_1, new cjs.Rectangle(0,0,45,48), null);


(lib.inCorrectA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.incorrect2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.181,0.181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.inCorrectA, new cjs.Rectangle(0,0,30,30), null);


(lib.hitLogoC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("מכון טכנולוגי חולון", "bold 20px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 237;
	this.text.parent = this;
	this.text.setTransform(60.3,17.9,0.364,0.364);

	this.text_1 = new cjs.Text("הפקולטה לטכנולוגיות למידה", "bold 20px 'Arial'", "#008285");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 237;
	this.text_1.parent = this;
	this.text_1.setTransform(60.3,2.2,0.364,0.364);

	this.instance = new lib.HitLogo();
	this.instance.parent = this;
	this.instance.setTransform(64,-2,0.057,0.057);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#008285").ss(2,1,1).p("Am0AAINpAA");
	this.shape.setTransform(17,13.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.7,-2,129.5,30);


(lib.Path_37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AhCAdQAQgjAVgMQAdgSAZAFQAYAFAPAfIAFAMIgHgIQgLgKgSABIggAEQgTgBgLACQgOABgLALQgIAHgGAJg");
	this.shape.setTransform(6.9,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_37, new cjs.Rectangle(0,0,13.8,6.6), null);


(lib.Path_30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AAMAQIgCgBIgCgDIgBgCIgCgFIAAgDIgBAAIgBACQgCgFgLgIQgLgHgHABQAJgDAMAIIASAMQAOAIADgJQACAIgFAFQgEADgEAAIgFgBg");
	this.shape.setTransform(2.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_30, new cjs.Rectangle(0,0,5.8,3.4), null);


(lib.Path_29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgHAHIgFgIQAKAEAIgGQAEgDABgEQAEAIgEAFQgEAGgFACIgCAAQgEAAgDgEg");
	this.shape.setTransform(1.3,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_29, new cjs.Rectangle(0,0,2.6,2.3), null);


(lib.Path_28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgbA4IAEgHIAAAAIAAgBIAXgxQAOgrAKgTIAAAAQgGAFgIAVQgGAJgGAUQAAgJgCgGIgGgOQgDgIABgGQAFgHAFgFIgBACQgFALADAGQABADAEAAQADAAACgDIALgLQAIgJAEgDQgGASgQAkIgKAdIAAABIgJASQgMAYABAJQgDgHAAgFg");
	this.shape.setTransform(2.8,6.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_28, new cjs.Rectangle(0,0,5.6,13.7), null);


(lib.Path_27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AAJAlQgEgDgDgGIgCgKQgCgHgGgIIgJgMQgIgMgBgIQABgIADgCQAFgDADACIAAABQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABQgBAHAGAMQAHAUAHALIAGAKQABADAGADQAFAEAGABQgFAEgEAAQgFAAgEgEg");
	this.shape.setTransform(2.7,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_27, new cjs.Rectangle(0,0,5.3,8.3), null);


(lib.Path_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AgBAAQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAAAAAIACABIgBABIAAAAIgBABIgBgCg");
	this.shape.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,0.4,0.4), null);


(lib.Path_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAwQgHgJgHgNIgJgZQgFgMgBgMIgBgNIAAgLQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQACAGABAQQACANAEAKQAHAUAQAcIgBACIgBAAIgBAAg");
	this.shape.setTransform(1.8,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0.1,0,3.4,9.7), null);


(lib.Path_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPApIgBgDQAQgdAGgSQAEgJADgOIABgEIACgDIABgBIgBAJQgCAMgFAOQgLAggMAOIAAAAIgBAAg");
	this.shape.setTransform(1.7,4.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0.1,0,3.4,8.2), null);


(lib.Path_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AABAEQgCAAgCgDQgBgBAAAAQAAAAAAAAQgBAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIACAAIAEADIAAAAIABABQgBABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgBAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,1.1,0.8), null);


(lib.Path_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAGQgFgEABgFQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBIACACIAAAAIAAAAIABABQADAEAAADQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgCABIgBgCg");
	this.shape.setTransform(0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,1.1,1.5), null);


(lib.Path_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgDACQAAgBAAAAQgBAAAAgBQAAAAABAAQAAAAAAgBIAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAIACACIABABIAAABIAAABIgBACIgDAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,0.9,0.9), null);


(lib.Path_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEABQAAgBAAAAQAAAAAAAAQABgBAAAAQABgBABAAQAAAAABgBQAAAAAAAAQAAAAAAAAQABAAAAgBQAEABAAADQgBADgEABQgEAAAAgDg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,1,0.9), null);


(lib.Path_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBACQgBAAAAgBQAAAAAAgBQgBAAABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABABIACABQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAIgCABIgCgBg");
	this.shape.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,0.7,0.6), null);


(lib.Path_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBACQgBAAAAgBQAAAAAAgBQgBAAABAAQAAAAAAgBIACgBIADACQAAAAAAAAQABAAAAAAQAAABgBAAQAAABAAAAIgDABIgBgBg");
	this.shape.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,0.7,0.6), null);


(lib.Path_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEABQAAgCADgBQABgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAEAAAAADQgBADgEABIAAAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0,1,0.9), null);


(lib.Path_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBACQgBAAAAgBQAAAAAAgBQgBAAABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQAAAAABABIACABQAAAAAAAAQABAAAAABQAAAAgBAAQAAABAAAAIgCABIgCgBg");
	this.shape.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,0.7,0.6), null);


(lib.Path_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBAAIABgBIACAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIgCAAIgBgBg");
	this.shape.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,0.4,0.3), null);


(lib.Path_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACA+QgGgYABgoIADghIAAAAIABgLIADgQIAAAAIAAAHIgBAOIgDAhQgBAhAFAkIgBACIgBgBg");
	this.shape.setTransform(0.4,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,0.9,12.6), null);


(lib.Path_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBBBIACgiIAAggIgBgeIgCgiQACABAAAHIABAPQACASAAASQACAygFAVIAAABIgBgBg");
	this.shape.setTransform(0.3,6.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_9, new cjs.Rectangle(0,0,0.7,13.2), null);


(lib.Path_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgBADQgBABgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAgBAAAAQABgBAAAAQAAAAAAAAQABAAAAgBIACgBIAEgBIAAABIACAAQACACgEACIgDACIgBgBg");
	this.shape.setTransform(0.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0.1,1.1,0.8), null);


(lib.Path_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAHQgFgFABgFQAAgBABgBQAAAAAAgBQABAAAAAAQAAgBABAAIACACIAAAAIAAABIABAAQADAEAAADQAAABAAAAQAAABAAABQgBAAAAAAQAAABgBAAIgBABIgCgBg");
	this.shape.setTransform(0.5,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,1.1,1.6), null);


(lib.Path_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAAAEQAAAAAAAAQgBAAgBgBQAAAAAAAAQgBgBAAgBIAAgCIAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAAAAAAAIABAAIACABIABACIAAABIAAABIgBABIgCABIgBAAg");
	this.shape.setTransform(0.5,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,0.9,0.9), null);


(lib.Path_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAACIgBgBIAAgBIABgBQABAAAAAAQABAAAAABQAAAAAAAAQAAAAgBAAIgBACIAAAAIAAAAg");
	this.shape.setTransform(0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,0.4,0.4), null);


(lib.Path_4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AgBAHQgDgCABgFQABgGADAAIABAAIACABQABADgBAFQgCAEgCAAIgBAAg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_1, new cjs.Rectangle(0,0,0.9,1.5), null);


(lib.Path_4_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AgDADQgCgEADgEIABgBIABAAQADAAABAGQAAAGgCABIgBAAQgCAAgCgEg");
	this.shape.setTransform(0.4,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4_0, new cjs.Rectangle(0,0,0.9,1.5), null);


(lib.Path_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgPAHQgBgEACgCIADABQAHACAHgGQAJgHAFgBIgCACIgKAFQgFADgBADIgBABIAAABQgHAGgDAAQgDAAAAgEg");
	this.shape.setTransform(1.6,1.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,3.3,2.2), null);


(lib.Path_3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAABIAAgBIAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAAABIgBABIAAAAIAAgBg");
	this.shape.setTransform(0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_2, new cjs.Rectangle(0,0,0.3,0.4), null);


(lib.Path_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAABIAAgBIAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABABIAAAAIAAABIgBABg");
	this.shape.setTransform(0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_1, new cjs.Rectangle(0,0,0.3,0.4), null);


(lib.Path_3_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgDBMQAFgGABgEIACABIABgCIgHgpQgCgTAAgXIABgrQAAgJACgKIAAAMIAAA1QAAAWAGAgIADAPQACAJgDAFQgDAEgFAEQgEAEgFABg");
	this.shape.setTransform(1,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3_0, new cjs.Rectangle(0,0,1.9,16.3), null);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgEADQgJgRgDgEQANAJADgFQADgFgFgKIgBgDIADAEQAKAHAGAMQACAGgDAHIgGAOQgCAFgBAKQgGgUgEgKg");
	this.shape.setTransform(1.7,3.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,3.4,6.6), null);


(lib.Path_2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAAEIgBgCIgBgBQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgBAAAAIABAAQABgBAAAAQABAAAAAAQAAABAAAAQAAAAAAABIABABQAAABAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAIAAAAg");
	this.shape.setTransform(0.3,0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_3, new cjs.Rectangle(0,0,0.7,0.8), null);


(lib.Path_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAAEQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgBQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAAAABQAAgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgCACIgBABIAAAAg");
	this.shape.setTransform(0.3,0.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_2, new cjs.Rectangle(0,0,0.6,0.8), null);


(lib.Path_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgIBDQgDgFABgIIACgOIAEgdIABg9IAAgiQADAMAAAJIABArQAAAXgBAUIgIAoIABACIABAAQABADAFAHIAKAJIABABQgKgDgJgPg");
	this.shape.setTransform(1.2,8.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_1, new cjs.Rectangle(0.1,0,2.3,16.9), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgEADQgFgDAFgFIABAEQACACACABQAEAAADgCQgCAFgEABIgBAAQgCAAgDgDg");
	this.shape.setTransform(0.8,0.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,1.6,1.2), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgJBjQgFgBgEgGQgFgIAGgKIADgCQgCAEABAHQACAGADADQAJAHAJgUQAGgNAEgOQAFgPgEgKIgVgnIgJgWIgYhAIAIAGQALATAOAqIAbA8IAAgBIgDgJIABAAQADgEAHAEQADACAAAIQAAAHgIANQgPAWgCAFIgDALQgDAGgEADQgDADgFAAIgCAAg");
	this.shape.setTransform(3.6,9.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,7.3,19.9), null);


(lib.Path_1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAABIAAgBIAAAAIABAAIAAAAIAAABg");
	this.shape.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,0.2,0.3), null);


(lib.Path_1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#336119").s().p("AAAABIAAgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAAAIABAAIgBABIAAAAIAAAAg");
	this.shape.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0,0.2,0.2), null);


(lib.Path_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgGAOQAFAAACgEQAEgDgBgHIgBgLIAAgDIABgBIAAANIACAGQACAFgCACIgFAEIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBg");
	this.shape.setTransform(0.7,1.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,1.4,3.2), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgCAGIgEgDQgDgCABgCQADACAFAAQAGgBABgHIACAHQgDAIgFAAIgDgCg");
	this.shape.setTransform(0.9,0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,1.8,1.5), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgZASQgGgFAEgLQABgCADgDIgBAEQACAFADABQAHADAJgJQAOgOAEgDQAGgDAFgBQAEAAAAADQAAADgCADQgGgCgMAIQgLAHgCAGIgBgCIgBAAIAAADIgCAFIgBACIgCADIgCABIgGABQgEAAgDgDg");
	this.shape.setTransform(3,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,6,4.2), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgEADIADgCQACgBAAgEQAEACAAAEQAAABgBAAQAAABAAAAQgBABAAAAQgBAAgBAAQgBAAgEgCg");
	this.shape.setTransform(0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,1,1.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgDAMQgFgBgEgGQgCgEAAgEQABgFADgDIABgBIABAFQADAHAHAAQAEAAAJgFIgBACIgBABIAAAAIgHALQgDAEgDAAIgDgBg");
	this.shape.setTransform(1.5,1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,3,2.6), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7FA22C").s().p("AgwBeQgvgHgZgXQgRgOgEgXQgDgWAJgUQAPghAngYIARgIIgBABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAHgFAVgGQAMgEAYgDQAlgEAbAEQAeAFAXASQAZAVABAdQACAyhFAsQgVANgmAJQgPAEgPAAQgRAAgSgEgAhxgnQgQAKgCAgQgCApAkAbQAfAWA4gCQAogCAWgQQANgHANgMQATgRAJgZQAIgagLgMQgGgIgVAGQglALgTgLIgOgKQgHgFgIADQgHACgJAIQgLAJgFACQgLAFgPgDQgPgDgHgJIgFgIQgDgGgEgBIgCAAQgEAAgGAFg");
	this.shape.setTransform(14.3,9.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,28.6,19.6), null);


(lib.finishBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כפתורים04();
	this.instance.parent = this;
	this.instance.setTransform(-96,-28,0.185,0.186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96,-28,194.8,56.4);


(lib.correctA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.correct2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.146,0.169);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.correctA, new cjs.Rectangle(0,0,33.4,30), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.ChooseGamebtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.כפתורים03();
	this.instance.parent = this;
	this.instance.setTransform(-105,-24,0.185,0.185);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105,-24,194.8,56.4);


(lib.myAla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mesiah();
	this.instance.parent = this;
	this.instance.setTransform(0,-7,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-7,140,86.9);


(lib.frog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_80 = function() {
		stage.showContinueBtn();
		this.gotoAndStop(0);
	}
	this.frame_82 = function() {
		this.gotoAndStop(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80).call(this.frame_80).wait(2).call(this.frame_82).wait(47));

	// Layer 6
	this.instance = new lib.זבוב2();
	this.instance.parent = this;
	this.instance.setTransform(257,-14.5,0.059,0.059,-90);

	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(270.6,-25.2);
	this.instance_1._off = true;

	this.instance_2 = new lib.Tween4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(78.6,-25.2);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},53).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},24).to({state:[]},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({_off:true,x:78.6},53).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},53).to({scaleX:0.98,scaleY:0.98,x:77.3,y:-24},1).to({regY:-0.1,scaleX:0.52,scaleY:0.52,x:45.8,y:5.9},24).to({_off:true},1).wait(48));

	// לשון
	this.instance_3 = new lib.Tween25("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(41,8.3,0.545,0.803,-15,0,0,-0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({regX:0,scaleX:0.92,scaleY:1.11,rotation:-26.5,x:49.1,y:-1.9},53).to({startPosition:0},1).to({regX:-0.1,scaleX:0.55,scaleY:0.8,rotation:-15,x:41,y:8.3},24).to({_off:true},2).wait(47));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#231F20").s().p("AAMAIQgDgJgEgCQgDgDgEABIgKACIAAgBIAKgDQAGgBADADQAEAEACAIIAAABIgBAAIAAAAg");
	this.shape.setTransform(32,11.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("AgIAMQgEgIABgFQABgIAIgCQAHgBAFACQABAAAAABQABAAAAABQAAAAAAAAQgBABAAABIgBgBIgNAAQgFACAAAFIACALIgCABIAAAAg");
	this.shape_1.setTransform(7.5,16);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhTAYQgKgCgJgFIAHgCIACACIABgBIgBgCQAHgBAMABIASADIAJAAIABADIABgBIgBgCQAbACAagGIAJgCIAAAAIABABIABgBIgBgBQAbgHAWgLIAIgGQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBQATgNAJgBQghAlg6APQgbAHgZAAQgWAAgVgGg");
	this.shape_2.setTransform(21.2,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F1F2").s().p("AgKgEIgEgEIACAAQAJAFAOADIAEAGQgEABgEACQgJgFgIgIg");
	this.shape_3.setTransform(10,20.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F1F1F2").s().p("AAEACQgTgBgGABIgDgFQAMACAZABIAKABIACADg");
	this.shape_4.setTransform(13.8,21.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F1F2").s().p("AgVAQIAEgDQAQgLAJgKQAHgJACgFIAFABIAAAAQAAANgKALIgEAGQgKAAgPALIgEADg");
	this.shape_5.setTransform(30.9,15.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F1F1F2").s().p("AgeAGIgBgEQAgABAegIIACAFIgCAAQgXAGgeAAIgIAAg");
	this.shape_6.setTransform(19.5,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F1F1F2").s().p("AgcALIADgBQARgFAOgGQAJgFAOgJIAAAHQgVANgjALg");
	this.shape_7.setTransform(25.7,19.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhPApQgZgGgOgQIgEgFIABABQAKAFAPADQADAHAEAEIABgBIgGgJQAMACAaACIAKABIAEAIIABgBIgDgHQAhABAdgJIACAHIABABIAAgBIgBgIIACAAQASgGAPgGQAJgFANgIIABAHQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBgIIAFgDQAQgLAKgMQAHgJACgEIAFAAIAAABQAAAMgKANQghAqhBARQgaAGgZAAQgXAAgUgFg");
	this.shape_8.setTransform(20.8,18.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F1F2").s().p("Ag5AjIgXgEIgRgFQgLgDgHACQgFABgDAFIgBgDQgCgGACgGQADgGAGABIAKAEQAEADAJADQAXAIAfgBQAugDA7gjIAVgOQANgIAKgCQAKgCAFAHQgBAFgCAEQgKAAgZALIgmAUQgRAIgZAIQgVAHgUABIgJABIgPgBg");
	this.shape_9.setTransform(20.1,15.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhPAqQgZgGgOgQIgEgFIABABQAKAFAPADQADAHAEAEIABgBIgGgJQAMACAaACIAKABIAEAIIABgBIgDgHQAhABAdgJIACAHIABABIAAgBIgBgIIACAAQASgGAPgGQAJgFANgIIABAHQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIgBgIIAFgDQAQgLAKgMQAHgKADgGIACACIACACQAAAMgKANQghAqhBARQgaAHgZAAQgXAAgUgGg");
	this.shape_10.setTransform(20.8,18.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgnAsIgEgMIAAABIADALIgLAAQgSgCgUgEIgEgKIAAAAIACAKQgOgDgNgGIgGgKQgCgGACgGQADgGAGABIAKAEQAEADAJADQAXAIAfgBQAugDA7gjIAVgOQANgIAKgCQAKgCAFAHQAAAEgGAKIgLAPQgIAIgQAKIgBgFQgCgKgDgDQAAgBAAABQABADACAJIACAHIgCABQgZAQgfAKQgDgMgEgIQAAAAAAABIAFATIgCABQgXAGgeAAIgIAAg");
	this.shape_11.setTransform(20.1,16.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CE4C4A").s().p("AgBABIABgDIACAFg");
	this.shape_12.setTransform(33,13.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#231F20").s().p("AhVAzQgcgMgLgTQgLgUAKgHQADgDADAAQADgBALAFIATAHQAVAEATAAQArgCAogUIAlgVIAcgQQAJgEAIACQAJABACAKQAFATgSAUQgjAog1APQgcAIgcABIgIAAQgfAAgTgHg");
	this.shape_13.setTransform(20.3,17.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCAAQgBgEADAAQAEAAAAAEQAAAFgEAAQgDgBABgEg");
	this.shape_14.setTransform(24,7.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAAAOQgDAAgDgEQgDgEAAgGQAAgFADgEQADgEADAAQAEABADAEQADAEAAAEQAAAGgDAEQgDAEgDAAIgBAAg");
	this.shape_15.setTransform(23.6,4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#322723").s().p("AgKAPQgFgGABgJQgBgIAFgGQAFgGAFAAQAHAAAEAGQAEAGAAAIQAAAJgEAGQgFAGgGAAQgGAAgEgGg");
	this.shape_16.setTransform(24.7,6.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4F413C").s().p("AgSAaQgJgLABgPQAAgPAIgLQAIgKAKAAQAMAAAHALQAJALgBAOQAAAPgIALQgJALgKAAQgLgBgHgKg");
	this.shape_17.setTransform(24.7,6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAAAEQgDgBABgDQABgEACAAQAEABgBAEQgCAEgCAAIAAgBg");
	this.shape_18.setTransform(14.5,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgCANQgEgBgCgEQgCgFABgFQABgFAFgDQADgDADAAQAEABACAFQACAFgBAEQgBAGgEADQgDADgCAAIgCgBg");
	this.shape_19.setTransform(14.7,4.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#322723").s().p("AgEAVQgGgCgDgHQgDgHACgIQACgIAGgFQAGgFAFABQAGACADAHQADAHgCAHQgCAJgGAFQgEAEgEAAIgDAAg");
	this.shape_20.setTransform(15.4,6.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4F413C").s().p("AgHAkQgMgDgEgMQgGgMAEgOQAEgPAJgJQALgIAKACQAKADAFAMQAGAMgDAOQgEAPgLAJQgHAGgIAAIgEAAg");
	this.shape_21.setTransform(15.5,6.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAAA3QgNgBgKgKIgHgIQgJgTABgTQABgVAMgQQAJgKAOgEQANgDALAIQASAMAAAkQAAAbgRATQgJAJgMAAIgCAAg");
	this.shape_22.setTransform(24.5,5.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AggAuQgOgMADgbQACgUAPgSQAXgYAfADIAEACQAHADAFAQQAFAUgMAbQgJAUgVALQgLAGgKAAQgKAAgIgHg");
	this.shape_23.setTransform(15.3,6.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231F20").s().p("AhIA4QgQgGgHgSQAAAAABAAQAAgBAAAAQAAAAAAAAQAAAAAAABQAFAJAIAFQgIgMABgRQABgYAPgTQAKgMAPgIQAQgIAPABIAAAAQAKAAAKAHIgBABIgEgCQADAEADAIQAEAJgBANIADgMQAGgOAJgHIAMgIIABAAQgLADgJAIIgBAAIAAgBQAPgRAVACQAPgBAKAIQAQARAAAeQABAagOAUQgGAIgFADIARgGQABAAAAAAQAAAAAAAAQABABAAAAQAAAAgBABQgOAJgSABQgEABgGgBQgMgBgPgGIABAAIAPADQgJgEgFgHIgBAAIgDgFIgGgKQgHgSACgPQgCAKgFAMQgKAYgUAMQgNAHgLAAQgJAAgJgEg");
	this.shape_24.setTransform(19.4,6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(127,162,44,0.498)").s().p("AgwBfQgwgJgYgVQgQgPgEgXQgEgWAJgUQAPghAogYIAQgIIgBABIgBACQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAEgEAJgDIAOgFQAOgEAWgDQAlgEAbAEQAfAFAWASQAZAVABAdQACAyhEAsQgWAOglAJQgOADgQAAQgQAAgUgDgAhxgnQgRALgBAgQgCApAkAaQASANAYAFQASADAbgBQApgCAVgQQAPgIALgKQAUgTAIgYQAJgagLgMQgFgFgJAAIgOADQgkALgUgKIgOgKQgHgGgIADQgGACgKAIQgLAJgFADQgLAFgOgEQgPgDgIgJIgFgIQgDgFgEgBIgBAAQgEAAgHAEg");
	this.shape_25.setTransform(19.7,14.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7CC142").s().p("AgwBfQgwgJgYgVQgQgPgEgXQgEgWAJgUQAPghAogYIAQgIIgBABIgBACQAAABABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAEgEAJgDIAOgFQAOgEAWgDQAlgEAbAEQAfAFAWASQAZAVABAdQACAyhEAsQgWAOglAJQgOADgQAAQgQAAgUgDg");
	this.shape_26.setTransform(19.7,14.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231F20").s().p("AgRBmQgdgBgfgJQgbgIgSgQQgUgSgDgaQgDgYAOgYQAMgVAWgRQAXgRAXgHIAOgEQAMgEAPgCQAegGAdACQAcABAWAKQAaALAOAVQAMATgCAZQgDAWgOATQgPAWgYARQgZASgYAHQgiAKgVAAIgDAAg");
	this.shape_27.setTransform(19.8,14.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(127,162,44,0.498)").s().p("AhCAdQAQgjAVgMQAdgSAaAFQAWAEAQAgIAFALIgHgHQgLgKgSABIggADQgEABgKAAIgQAAQgNACgMALQgIAGgGAKg");
	this.shape_28.setTransform(18.3,25.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(51,97,25,0.498)").s().p("AAAACIgBgCQAAAAAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAIABABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIAAABIgBAAIAAAAg");
	this.shape_29.setTransform(10.9,38.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(51,97,25,0.498)").s().p("AAAABIAAgBIAAAAIAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAABg");
	this.shape_30.setTransform(10.1,38);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(51,97,25,0.498)").s().p("AAAADIgCgCQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIACgBQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABABQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgBAAIAAgBg");
	this.shape_31.setTransform(9.8,36.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(51,97,25,0.498)").s().p("AAAABIAAgBIAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAAAIAAABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIAAgBg");
	this.shape_32.setTransform(9.2,35.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(51,97,25,0.498)").s().p("AgBAGQgCgBAAgFQABgGACAAIACAAIABABQADAEgCAEQgCAEgCAAIgBgBg");
	this.shape_33.setTransform(9.9,34);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(51,97,25,0.498)").s().p("AAAABIAAAAIgBgBIABgBQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAIgCACIAAgBg");
	this.shape_34.setTransform(26,37.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(51,97,25,0.498)").s().p("AAAAAIAAAAIAAAAIABAAIAAABIgBAAg");
	this.shape_35.setTransform(26.7,37.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(51,97,25,0.498)").s().p("AgCAAIABgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIACABQAAAAABABQAAAAAAABQAAAAAAAAQAAAAAAABIgBAAIgBACIgBABQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_36.setTransform(27,36);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(51,97,25,0.498)").s().p("AAAACIAAgBIAAgBIAAgBIAAAAIABABIAAABIgBABIAAAAg");
	this.shape_37.setTransform(27.7,35);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(51,97,25,0.498)").s().p("AgDADQgBgFABgDQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAIABAAQADAAABAGQABAFgDACIgCAAQgBAAgCgEg");
	this.shape_38.setTransform(27,33.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,255,255,0.4)").s().p("AgDACIAAgDIAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIACABIABACIAAAAIABABIgBABIgBACIgDAAg");
	this.shape_39.setTransform(33.4,46.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(255,255,255,0.4)").s().p("AAAAGQgFgEABgFQAAgBABgBQAAAAAAgBQABAAAAAAQABgBAAAAIABABIABAAIAAABIABABQADAEAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgCABIgBgCg");
	this.shape_40.setTransform(30.2,47.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,255,255,0.4)").s().p("AgFACQAAAAAAgBQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAABAAQAAgBAAAAQACgCACABIABABIABAAQACACgDACIgFACQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_41.setTransform(35.7,45.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(255,255,255,0.498)").s().p("AABA+QgGgbACgkQAAgPACgSIAAgBIABgLIAEgQQABADgBAEIgCAPIgCAgQgBAhAEAkIgBACIgBgBg");
	this.shape_42.setTransform(13.3,34.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,255,255,0.4)").s().p("AgBACQgBgBAAAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAAAAAQAAAAAAAAIADABQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAgBABIgCABIgBgBg");
	this.shape_43.setTransform(17,46.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(255,255,255,0.4)").s().p("AgBACQgBgBAAAAQAAgBAAAAQgBAAABAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAAAAAIADABQAAABAAAAQABAAgBAAQAAABAAAAQAAABgBAAIgCABIgBgBg");
	this.shape_44.setTransform(10.4,46.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,255,255,0.4)").s().p("AgEABQAAgCADgBIADgBQAEAAgBADQAAADgFABIgBAAQAAAAgBAAQgBAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_45.setTransform(13.6,47.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(255,255,255,0.4)").s().p("AAAAEQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBIAAgCIAAAAQAAgBABAAQAAgBABAAQAAAAABAAQAAAAABAAIAAAAIACABIABACIAAAAIABABIgBABIgBABIgCABIgBAAg");
	this.shape_46.setTransform(4.3,46.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,255,255,0.4)").s().p("AAAAHQgFgFABgFQAAgBABgBQAAAAAAgBQABAAAAAAQABAAAAAAIABAAIABABIAAAAIABABQADAEAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAIgCABIgBgBg");
	this.shape_47.setTransform(7.6,47.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.4)").s().p("AABAEIgEgDQgBgBAAAAQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIACAAQADABABACIAAAAIAAABQAAABAAABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCAAg");
	this.shape_48.setTransform(1.7,45.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.498)").s().p("AgPAoIgBgCQANgXAKgYQADgIADgPIABgDIACgFIABAAIgBAJQgDAQgEAKQgMAhgKAMIgBABIgBgBg");
	this.shape_49.setTransform(31.2,35.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.498)").s().p("AAPAwQgLgNgMghQgEgKgDgPIgBgNIAAgLIABAAQADAHAAAPQADAQAEAHQAHAUAPAcIgBACIgBAAg");
	this.shape_50.setTransform(5.6,33.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(127,162,44,0.698)").s().p("AgEADIADgCQACgBgBgFQAGACgCAFQAAABAAABQAAAAgBABQAAAAAAAAQgBABgBAAQgBAAgEgDg");
	this.shape_51.setTransform(17.4,46.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(127,162,44,0.698)").s().p("AgCAHIgFgEQgCgCABgCQACACAGAAQAFAAACgIIACAHQgDAIgFAAIgDgBg");
	this.shape_52.setTransform(13.8,47.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(127,162,44,0.698)").s().p("AgFADQgFgDAGgFIAAAEQAEAHAIgFQgCAEgEABIgCAAQgBAAgEgDg");
	this.shape_53.setTransform(10.4,46.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(127,162,44,0.498)").s().p("AgDBMQAFgHABgDQAAAAABAAQAAAAAAAAQAAAAABAAQAAgBAAAAIgGgpQgDgSAAgYIAEg+IAAAMQgBAaABAbQABAdAFAZIADAOQABAJgDAGQgBADgFAEQgFAFgEABg");
	this.shape_54.setTransform(12.4,37.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7CC142").s().p("AgCBsIgEgEQgDgCACgFIADgHIgBgOQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgDgCgHAGIgGAJIgCAEQgBAFgEABQgEACgEgEQgEgEADgEQADgFAFABQABAAABAAQABgBAAAAQABAAAAAAQABgBAAAAIAKgKQAGgGABgEQAAABABAAQAAAAAAAAQAAAAABgBQAAAAAAgBIgHgpQgDgRAAgYIACgsQABgNADgKIADgMQADgIAEgBQADABAAAOIgCAXIgCAuQgBATADAYQACAZAFAOIgBAAIACACIAAABQAMAPAJAFIAIADQAFADgBAFQgBAGgMgIIAAgBIAAgBQgCgEgGgDIgJgGQgDgCgDABQAAAAgBAAQgBAAAAABQAAAAAAABQAAABAAABIADAMIADAKQgDAJgFAAIgDgBg");
	this.shape_55.setTransform(13.7,37.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#B2D235").s().p("AgFADIgBgFQgBgBAAgBQAAgBAAgBQAAAAAAgBQAAAAABAAIAOAIIgGABQgDACgCAEg");
	this.shape_56.setTransform(15.1,45.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#B2D235").s().p("AgBABQgCAAgDACQAHgOAFAFQACAMgCACQgDgHgEAAg");
	this.shape_57.setTransform(12.3,46);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#231F20").s().p("AgDBtQgFgCgDgGQgBgDADgDIgEgGQgEgDgFAFIgCAHQgDAEgGAAQgFgBgDgFQgEgFADgFQADgFAGAAQAEAAALgJQAKgKgDgFQgGgTgCgdQgCgZACgeQACgjAHgRQADgIADgDIgBAEIgEAKIgCAGIAAABIgBAIIAAABIABADQAAAAABAAQAAAAABAAQAAAAAAAAQAAAAAAgBQAAgJADgJIAFgNIAAABIABANIAAAGIAAABQAAAGgBAFQAAABAAAAQAAAAAAAAQAAABABAAQAAAAAAAAIABgBQADgWgDgLIABABIAAAAQADAFgCARIgDAxQgBAdACARQAAAIAJAoIAAABIAJALQAGAGAFACIAKADQAEACAAAGQAAAIgHgBQgIgBgDgFIAAgBQgGgEgEACQgDABgCAGQADALgHADIgGACIgEgBg");
	this.shape_58.setTransform(13.7,37.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(127,162,44,0.498)").s().p("AAJAlQgEgDgDgGIgCgKQgDgJgOgSQgIgNgBgGQAAgIAEgCQAGgEADADIgBAAIgCAFQgBAFAGAOQAIAUAGALIAGAKQADAHAPAEQgFAEgEAAQgEAAgFgEg");
	this.shape_59.setTransform(27.9,45.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(127,162,44,0.498)").s().p("AgbA4IACgDIACgDIAAgCIAAAAIAUgqIADgHQAQgvAIgPQABAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIAEgEQgFASgRAjIgTAxQgMAWABALgAgEgXIgGgNQgDgJABgGIAKgMIgBACQgEAMACAFQADAHAHgHIAMgLIAGgIIgHAMIgGAOQgFAJgGAUQAAgIgDgHg");
	this.shape_60.setTransform(29.3,36.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(127,162,44,0.498)").s().p("AgHAHIgFgJQAKAFAIgHQADgDACgDQAEAHgEAGQgEAGgFABIgCABQgEAAgDgEg");
	this.shape_61.setTransform(35.8,46.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(127,162,44,0.498)").s().p("AAMAQIgEgDIgCgDQAAgBAAAAQAAgBgBAAQAAgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBABAAQAAgBAAAAIgBAAIgBACQgDgGgLgHQgLgHgGABQAJgDAMAIIASAMQAOAIADgJQACAJgGAEQgDADgEAAIgFgBg");
	this.shape_62.setTransform(31.4,46.8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#7CC142").s().p("AACAPQgFgDgCgFIgGgJQgDgKAAgEIACgBIADAGIAHALIgCAFIAAAAQABgDADgCIABgCQAEgDADACIAEADQAGAJgFAIIgBABg");
	this.shape_63.setTransform(29.5,47.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7CC142").s().p("AgQAYIAJgYIAKgaQAHgQADgKIAAgBIgCAAQgIAEgIAMQgPASgCgJQgBgEACgFIAEgJIACgEIACgBQANgMAJgDQATgFgBAWIgHAiQgHAZgPAcIgRAYIgEAGQgIgKAPgig");
	this.shape_64.setTransform(31.2,34.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7CC142").s().p("AgXBoQgEgDgCgGIgEgLQgDgIgOgTQgIgOAAgGQAAgHAEgDQAGgFADAFIABABIgDAJIADgGIAXgvIACgHQARgvAIgPQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQgEAFgDAIIgGANIgMAeQAAgIgCgHIgGgOQgDgIABgGQAHgMAKgHQANgLAJgDQATgGgBAXIgHAhQgHAbgPAbIgRAXIgPAVIAGgFQAEAGAbALQATAHAPAEIAAADIgBABIADgCIABAAIAAgBIADgCQAHgCAFAEQADAEABAFQAAAFgCAEQgEAGgFABQgGADgEgGIgHgMIAAAAIgBgBIAAAAQgEgGgJgBIADABIACACQAFACADAGQAEAJgHAGQgFAFgIgDIgDgDIgCgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAIgBACQgCgHgLgHQgNgIgHACIgBgEIgBACIAEAJIAHAMIgBAFIAAAAQAAgDADgCIADgCQAEgDACABIAEADQAFAKgEAIQgDAHgGABIgCAAQgEAAgFgEg");
	this.shape_65.setTransform(31.2,38.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7CC142").s().p("AgXBoQgEgDgCgGIgEgLQgDgIgOgTQgIgOAAgGQAAgHAEgDQAGgFADAFIABABIgDAJIADgGIAXgvIACgHQARgvAIgPQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQgEAFgDAIIgGANIgMAeQAAgIgCgHIgGgOQgDgIABgGQAHgMAKgHQANgLAJgDQATgGgBAXIgHAhQgHAbgPAbIgRAXIgPAVIAGgFQAEAGAbALQATAHAPAEIAAADIgBABIADgCIABAAIAAgBIADgCQAHgCAFAEQADAEABAFQAAAFgCAEQgEAGgFABQgGADgEgGIgHgMIAAAAIgBgBIAAAAQgEgGgJgBIADABIACACQAFACADAGQAEAJgHAGQgFAFgIgDIgDgDIgCgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAIgBACQgCgHgLgHQgNgIgHACIgBgEIgBACIAEAJIAHAMIgBAFIAAAAQAAgDADgCIADgCQAEgDACABIAEADQAFAKgEAIQgDAHgGABIgCAAQgEAAgFgEg");
	this.shape_66.setTransform(31.2,38.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(127,162,44,0.498)").s().p("AgDAMQgFgBgEgGQgCgEAAgEQABgFADgEIABAAIABAGQAEAGAGgBQAEAAAJgEIgBACIAAAAIgBABIAAAAIgHALQgDAEgDAAIgDgBg");
	this.shape_67.setTransform(1.7,46.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(127,162,44,0.498)").s().p("AgZASQgHgGAEgKIAFgFIgBAEQADAFACABQAGADAKgJIAIgJQAFgFAFgDQAGgEAFAAQABAAABAAQABAAAAABQABAAAAABQAAAAAAABQAAADgCACQgIgBgKAIQgKAGgDAHIgBgCIgBgBQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABIgCAEIgCADIgDAEIgFABQgFAAgDgDg");
	this.shape_68.setTransform(6,46.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(127,162,44,0.498)").s().p("AgJBjQgFgBgEgGQgFgIAGgKIADgDQgCAFABAGQACAHAEADQAMALAPgzQAFgQgEgJIgKgSIgLgVIgQgtIgSgpIAJAFQAHAMAHASIALAfIACAIIAWAvIAEAFIgDgJIAAAAQADgFAHAFQADACAAAIQAAAGgIANQgOAUgDAIIgDAKQgCAGgFADQgDAEgFAAIgCAAg");
	this.shape_69.setTransform(8.4,39.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(127,162,44,0.498)").s().p("AgEADIgMgVQANAJADgFQABgDgBgFIgCgIIgBgCIADAEQAKAHAHAMQABAFgDAIIgGAOQgDAHAAAHIgKgdg");
	this.shape_70.setTransform(7.6,32.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7CC142").s().p("AANBsQgGgBgDgHQgEgIAFgKIAEgDQACgBAEADIADACQADACAAADIAAAAIgBgFIAHgMIAEgJIgBgCIgBAEQgHgCgNAIQgKAHgDAHIgBgCIgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIgCAFIgCADIgDADQgIADgFgFQgHgGAEgJQADgGAFgCIACgCIADgBQgIABgFAGIAAAAIgBABIAAAAIgHAMQgEAGgGgDQgFgBgEgGQgCgEAAgFQABgFADgEQAFgEAHACIADACIAAABIABAAIADACIgBgBIAAgDQAPgEATgHQAbgLAEgGIAGAFIgPgVIgRgXQgPgbgHgbQgGgbgBgGQAAgXASAGQAJADANALQAKAHAHAMQACAGgEAIIgGAOQgCAHAAAIQgHgUgFgKIgGgNQgDgIgEgFQgBAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAIAPARAvIACAHIAXAvIADAGIgDgJIABgBQADgFAGAFQAEADAAAHQAAAGgIAOQgPAUgCAHIgEALQgCAGgEADQgFAEgEAAIgCAAg");
	this.shape_71.setTransform(6.1,38.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#231F20").s().p("AAGBuQgIgHACgNQABgLAIgCQAGgBADAFIACgCIAHgNQgIgBgKAHQgJAGgFAIQAAAIgHAEIgFACQgGACgEgEQgHgGABgIQgFAKgGABQgHAAgEgFQgFgFgBgGQgBgMALgFQAGgDAEADIADABIArgPIAMgFQAJgEABgDIgBgCIgLgNQgNgQgGgNQgPgbgJgoQgEgRAFgKQAGgKAKACQALACAPAOQAJAIAEAGIAFAEQABAAABABQAAAAAAAAQABABAAAAQgBABAAAAIgCADIAAAAQABAGgDAGIgHASQgCAIACAMIAUAuQACgDAEgBQAEAAADACQAIAIgGANQgCAGgFAIIgKANQgFAHgEAOIgGAMQgEAEgFACIgFABQgEAAgDgCg");
	this.shape_72.setTransform(6.2,38.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7CC142").s().p("AgXBoQgEgDgCgGIgEgLQgDgIgOgTQgIgOAAgGQAAgHAEgDQAGgFADAFIABABIgDAJIADgGIAXgvIACgHQARgvAIgPQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAQgEAFgDAIIgGANIgMAeQAAgIgCgHIgGgOQgDgIABgGQAHgMAKgHQANgLAJgDQATgGgBAXIgHAhQgHAbgPAbIgRAXIgPAVIAGgFQAEAGAbALQATAHAPAEIAAADIgBABIADgCIABAAIAAgBIADgCQAHgCAFAEQADAEABAFQAAAFgCAEQgEAGgFABQgGADgEgGIgHgMIAAAAIgBgBIAAAAQgEgGgJgBIADABIACACQAFACADAGQAEAJgHAGQgFAFgIgDIgDgDIgCgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIgBAAIgBACQgCgHgLgHQgNgIgHACIgBgEIgBACIAEAJIAHAMIgBAFIAAAAQAAgDADgCIADgCQAEgDACABIAEADQAFAKgEAIQgDAHgGABIgCAAQgEAAgFgEg");
	this.shape_73.setTransform(31.2,38.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#231F20").s().p("AgQBvQgGgCgEgEQgDgEgDgIQgEgOgFgHIgJgNQgGgIgCgGQgGgNAIgIQADgCAEAAQAEABACADIAUguQACgMgCgIIgHgSQgGgHABgEQABgDAGgIQAJgKAFgEQAOgOAMgCQAKgCAGAKQAFAKgEARQgJAogPAbQgGANgNAQIgLANIgBACQABADAJAEIAMAFIArAPIADgBQAEgDAGADQALAFgBAMQgBAGgEAFQgFAFgHAAQgFgBgGgKQABAIgHAGQgEAEgGgCIgFgCQgHgEAAgIQgFgIgIgGQgLgHgIABIAHANIACACQADgFAGABQAIACABALQACANgIAHQgDACgEAAIgEgBg");
	this.shape_74.setTransform(31.1,38.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#7CC142").s().p("AhEBdQgQgMgIgNQgGgKABgPIAEgZIALgTIAOgdQAIgSAHgJQAJgOANgHQAdgSAaAFQAWAEAQAhIAVA0IAKATQAJAWgIAPQgEAJgIAIIgDACQgKAIgKAGQAPgagDgjQgDghgSgYQgMgQgXgCQgSgBgUAIQgoAQgLA1QgFAZAHAZIAGAQg");
	this.shape_75.setTransform(18.5,31.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFF7A9").s().p("AgNBjQgjgCgUgLQgQgLgIgNQgGgLABgOIAEgZIALgUIAOgcQAIgTAHgJQAJgNANgIQAdgRAaAFQAWADAQAhIAVA1IAKASQAJAWgIAQQgEAJgIAHIgDACQgOAMgMAGQgaAPgfAAIgJAAg");
	this.shape_76.setTransform(18.5,32);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#231F20").s().p("Ag2BhQgcgHgOgXQgOgWAMgeQASggAGgQQAKgcAQgPQAKgKAOgHIAGgCIABAAIADgBQAYgKASAFQAUAGANAWIAQAqIALAaQADAHAJAOQAJAVgLAQQgJAOgWAOIgGAEIgBAAQgdAQgcACIgMABQgXAAgWgHg");
	this.shape_77.setTransform(18.5,31.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("rgba(255,255,255,0.498)").s().p("AglATIABgBQAEABAGgDIAKgDQAJgDAKgGIAVgLIANgLQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQgGAIgLAHIgUAKQgJAFgMADIgIACIgGABIgDAAg");
	this.shape_78.setTransform(30.7,23.4);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(255,255,255,0.498)").s().p("AgCAFIgBAAQgDgDABgCQABgEAEgBIAAAAQADgBACACQADAEgDADQgDADgCAAIgCgBg");
	this.shape_79.setTransform(36.7,10.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("rgba(255,255,255,0.498)").s().p("AgGADQgBgDADgEQADgCABABQABAAAAAAQABgBAAAAQABAAAAABQABAAAAAAQAEABgCAEQgBAFgFABIgBABQgEAAgBgEg");
	this.shape_80.setTransform(37.1,18.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("rgba(127,162,44,0.498)").s().p("AABAAIgBgJIgCgIQAEACACAGQACAHgCAFQgEAMgEADQAFgJAAgJg");
	this.shape_81.setTransform(39.7,16.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7CC142").s().p("AgDASIAAgCQADgCgCgGQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAIABgCQADgLgFgBIgBAAIgBgJIACAAQAAAEADAFQAFANgKANg");
	this.shape_82.setTransform(39,16.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("rgba(127,162,44,0.498)").s().p("AhJAqIgHgHQAFADAIABQAWADAZgIQAUgJAUgQQAKgIAIgJIAFgIIAFgJQAIAFAIgIQAFgEAAgFQAFAEAHgMIAAABIgBADQABAJgIAGQgIAIgLgBIgIgBIAAABIACACIgBAAQgMAfgxAXQgQAJgYgBQgLAAgIgDg");
	this.shape_83.setTransform(31.7,22.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#7CC142").s().p("AhHAuQgDgHAHACQAGAFAPgBQASgBATgIQAngRAQgaIAGABIAAgBQgDAAgEgEIgEgFQgIgJgCgPIABgGQAGgHAHAEQAFADAGALIAEAHIAEABQAFAAADADQADAEgDAEIAAABQgFAEgGgCIAAAAIgBAAQgGgDADgJQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgDgEQgFgGgGgCIgBAAIAAABIAHAFIAFAGQACACAAAEIgCAFIACAGIACABQgCACgBADQgEAHgHAIQgQASgWAMQgXANgZABQgVAAgHgGg");
	this.shape_84.setTransform(30.6,20.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("rgba(127,162,44,0.498)").s().p("AAKAFQgIgLgFgBQgFgBgFADQAEgJAJAEIACABQADACAEAHIAFALIgBABIgDgHg");
	this.shape_85.setTransform(35.4,16.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("rgba(127,162,44,0.498)").s().p("AACgBQgBgCgDAAQgBAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQADgDAEABQAEAAACADIABABQADADgEAGQAAgFgEgDg");
	this.shape_86.setTransform(37.6,17.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(127,162,44,0.498)").s().p("AAHARQgFgEgFACQAAgBAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIACgDIABgIQgCgLgHADIABgHIABgCIACgBIACADIAGAGQACAEgBAFIgCAIIABABIAAACQADADAAADQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_87.setTransform(37.7,15.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("rgba(127,162,44,0.498)").s().p("AgHALQAAgFAHgKQAEgIgEgJQAFACADAGQACAFgEAFIgFAGQgDADgBADIgEANg");
	this.shape_88.setTransform(37.4,11.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#7CC142").s().p("AgGAYIAEgPQACgIgDgHQgDgLAAgDQACgHAJgBIAAAAQAEAHgCAGQgCAEgFAHQgDAJADAPQgBAGABADIgBAAQgCAAgDgFg");
	this.shape_89.setTransform(36.5,12.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#7CC142").s().p("AADAAIgHgHQAFgBADAHQABAFAAAFQAAgGgCgDg");
	this.shape_90.setTransform(38.1,14.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#7CC142").s().p("AgCAEQACgEAAgGQAFADgCAHIgDADg");
	this.shape_91.setTransform(38.8,16);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#7CC142").s().p("AgGASIgBgCQADgDgCgFQAAgBABAAQAAgBABAAQAAAAABAAQAAgBABAAIACgBQACgLgGgCIgBAAIAAgJQAHgBAEAHQAEAIgDAGQgGARgFAAIgCgBg");
	this.shape_92.setTransform(39.4,16.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#7CC142").s().p("AhIA3IgGgGQgCgDgBgDQAAgFAEACQAGAFAQgBQARgBATgIQAngRARgaIAFABIAAgBQgDAAgEgEIgDgFQgIgJgCgPQgBgIAFgFQAEgFAHACIADABQADADAEAHIAFAMIgCACIAAACQAEgFAGABQAEAAACADIABABQADAEgFAIQgGAHgHgDQgIgCAEgKQAAgBAAAAQAAgBAAAAQAAgBAAgBQgBAAAAgBIgEgEQgEgGgHgCIAAAAIgBABIAHAFIAGAGQACACgBAEIgBAFIACAGQADAFAGgBQAGgBAEgEQAFgEAAgFQAFAEAHgLIAAAAIgBADQABAJgIAHQgIAIgLgCIgIgBIAAABIACACIgBABQgMAegxAYQgQAIgYAAQgLAAgIgEg");
	this.shape_93.setTransform(31.6,20.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#7CC142").s().p("AANAoQgEgFgHACQAAgBAAgBQAAgBABAAQAAgBAAAAQABgBAAAAIAEgDIAAgIQgCgMgHAEIAAABQAGgCABAKIAAAHQgGAFAAADIAAABIgGgNQgDgIgFgCQAEgEADgOQABgHgCgIQgEgLABgDQABgHAKgBQAHgBAEAGQAEAGgFAGIgGAHQgDADgBADIgEAQQgDAHACAEIABAAQgBgGACgDIABgDIADgBQAEgDAEABQADABACAFQADAKgFAMIAAACQACADAAAEQABAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABg");
	this.shape_94.setTransform(37.1,13.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#7CC142").s().p("AgCAEQACgEAAgGQAFADgCAHIgDADg");
	this.shape_95.setTransform(38.8,16);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#231F20").s().p("AhTBRIgBgCQADADALAEQABAAAAAAQABgBAAAAQAAAAAAAAQAAAAgBgBIgHgGQABAAAAAAQAAAAAAAAQAAAAAAgBQAAAAgBAAIgDgEIAEADIABgBIACAAIgBgBIAAgBQAHADAGAAIABgBIgBgBQAAAAgBgBQAAAAgBAAQAAAAgBAAQAAAAgBAAIgBAAQgIgBgHgGIAAAAIAAAAQAFAEAHAAIANgBQASgCASgJQAkgRANgXQgGgFgEgIQgHgOADgNQACgFAFgDQAEgDAFABIADABQADgEACgMQACgKgDgGIgDgKQgBgHAGgFQAFgFAHABQAIABADAGQAEAGgEAHQgCADgDADQgFAEgDAIIgCAKIAGgEIAFgBQAGABABAHIABACQAJgEAFAJQAFAIgEAJIgEAJQAAAAAAAAQABABAAAAQAAAAAAAAQAAAAgBAAIAAAHIgCAHQgDAGgGAEQgKAEgHAAIgEgBIAAABQgHAVgdAUQgbAUgYAEIgPABQgTAAgJgJg");
	this.shape_96.setTransform(32,17.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#231F20").s().p("AgTAHQACgFAMgFQAJgEAPgBQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAAAQgJgBgKAEQgLACgFAHIgCABIAAgCg");
	this.shape_97.setTransform(20.6,21.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#231F20").s().p("AhjAUQAAgFAIgFQAIgFACAFIgBAAQgCgEgJAIQgJAHAKADQAHACARgHIA4gTQAjgNAVgFQARgDANgBIAVABIAAgFQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAABIABAAIAAABIACAMQgBABAAAAQgBABAAAAQgBAAAAAAQAAAAAAgBIgBgFIgPgBIgYACQgTADgTAGQgcAHguASIgYAJIgJABQgKAAgBgIg");
	this.shape_98.setTransform(20.1,20.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#231F20").s().p("AAAACIAAgBIAAgBIAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQABABAAAAIgBABIgBABIAAAAg");
	this.shape_99.setTransform(19.6,17.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#231F20").s().p("AAAACIAAgCIAAAAIAAgBIABABIAAABIgBABIAAAAg");
	this.shape_100.setTransform(18.4,17.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#231F20").s().p("AgiAdIgBgCQgBgGAFgKQAEgLADgGQAEgGAFgFQAJgIAIgCQATgGALASQAEAGAAAKIAAAEQgCADgEgCQgFgIgKgEQgLgDgIAEQgKAEgHAKIgLAUIgBABIgBgBg");
	this.shape_101.setTransform(24.4,3.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#231F20").s().p("AAgAeIgKgVQgHgKgJgEQgJgFgKAEQgLADgFAIQgEACgCgDIAAgEQAAgJAFgHQAFgIAIgEQAJgDAIADQAJAEAIAHIAIAMIAHARQAEAJAAAHIgBACIgCAAIgBAAg");
	this.shape_102.setTransform(16.5,3.1);

	this.instance_4 = new lib.Path_22();
	this.instance_4.parent = this;
	this.instance_4.setTransform(10.8,41.5,1,1,0,0,0,0.1,0.2);
	this.instance_4.alpha = 0.301;

	this.instance_5 = new lib.Path_1_3();
	this.instance_5.parent = this;
	this.instance_5.setTransform(10.1,41,1,1,0,0,0,0.1,0.1);
	this.instance_5.alpha = 0.301;

	this.instance_6 = new lib.Path_2_3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(9.8,39.6,1,1,0,0,0,0.3,0.3);
	this.instance_6.alpha = 0.301;

	this.instance_7 = new lib.Path_3_2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(9.1,38.6,1,1,0,0,0,0.1,0.2);
	this.instance_7.alpha = 0.301;

	this.instance_8 = new lib.Path_4_1();
	this.instance_8.parent = this;
	this.instance_8.setTransform(9.9,37.1,1,1,0,0,0,0.4,0.7);
	this.instance_8.alpha = 0.301;

	this.instance_9 = new lib.Path_5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(26,41,1,1,0,0,0,0.2,0.2);
	this.instance_9.alpha = 0.301;

	this.instance_10 = new lib.Path_1_2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(26.7,40.5,1,1,0,0,0,0.1,0.1);
	this.instance_10.alpha = 0.301;

	this.instance_11 = new lib.Path_2_2();
	this.instance_11.parent = this;
	this.instance_11.setTransform(27,39.1,1,1,0,0,0,0.3,0.4);
	this.instance_11.alpha = 0.301;

	this.instance_12 = new lib.Path_3_1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(27.6,38.1,1,1,0,0,0,0.1,0.2);
	this.instance_12.alpha = 0.301;

	this.instance_13 = new lib.Path_4_0();
	this.instance_13.parent = this;
	this.instance_13.setTransform(26.9,36.6,1,1,0,0,0,0.4,0.7);
	this.instance_13.alpha = 0.301;

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgDAAQAAgEAEAAQACAAAAAEQAAAFgDAAQgCAAgBgFg");
	this.shape_103.setTransform(24,10.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgGAKQgDgEAAgGQAAgFADgEQADgEADAAQAEAAADAEQADAFAAAEQAAAGgDAEQgDAEgEAAQgEAAgCgEg");
	this.shape_104.setTransform(23.6,7.9);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#322723").s().p("AAAAVQgGAAgEgGQgFgHAAgIQABgIAEgGQAFgGAFAAQAHAAAEAGQAFAGAAAIQgBAJgEAGQgEAGgGAAIgBAAg");
	this.shape_105.setTransform(24.6,9.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#4F413C").s().p("AAAAlQgKAAgJgLQgHgLAAgPQABgPAHgKQAJgLAJAAQAMAAAIALQAHALAAAOQAAAQgIAKQgIALgLAAIAAAAg");
	this.shape_106.setTransform(24.7,9.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAAAFQgDgBAAgEQACgFACABQADABgBAEQAAAEgDAAIAAAAg");
	this.shape_107.setTransform(14.5,10.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgCANQgEAAgCgFQgCgFABgEQABgGAEgDQAEgDADABQAEABACAEQACAFgBAEQgBAGgEADQgDADgCAAIgCgBg");
	this.shape_108.setTransform(14.6,8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#322723").s().p("AgEAVQgGgCgDgHQgDgHACgIQACgIAGgFQAFgFAGABQAGACADAHQADAHgCAIQgCAIgGAFQgEAEgEAAIgDAAg");
	this.shape_109.setTransform(15.4,9.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#4F413C").s().p("AgIAkQgLgCgFgNQgFgNAEgOQADgOAKgJQALgJAKADQALADAFAMQAFAMgEAPQgDAOgKAJQgIAHgIAAIgFgBg");
	this.shape_110.setTransform(15.5,9.4);

	this.instance_14 = new lib.Path_6();
	this.instance_14.parent = this;
	this.instance_14.setTransform(33.5,49.7,1,1,0,0,0,0.5,0.4);
	this.instance_14.alpha = 0.398;

	this.instance_15 = new lib.Path_7();
	this.instance_15.parent = this;
	this.instance_15.setTransform(30.2,50.8,1,1,0,0,0,0.5,0.8);
	this.instance_15.alpha = 0.398;

	this.instance_16 = new lib.Path_8();
	this.instance_16.parent = this;
	this.instance_16.setTransform(35.8,49,1,1,0,0,0,0.6,0.4);
	this.instance_16.alpha = 0.398;

	this.instance_17 = new lib.Path_9();
	this.instance_17.parent = this;
	this.instance_17.setTransform(23.3,37.6,1,1,0,0,0,0.3,6.6);
	this.instance_17.alpha = 0.398;

	this.instance_18 = new lib.Path_10();
	this.instance_18.parent = this;
	this.instance_18.setTransform(13.2,37.5,1,1,0,0,0,0.4,6.3);
	this.instance_18.alpha = 0.398;

	this.instance_19 = new lib.Path_11();
	this.instance_19.parent = this;
	this.instance_19.setTransform(19.4,49,1,1,0,0,0,0.2,0.1);
	this.instance_19.alpha = 0.398;

	this.instance_20 = new lib.Path_12();
	this.instance_20.parent = this;
	this.instance_20.setTransform(22.8,50.3,1,1,0,0,0,0.4,0.3);
	this.instance_20.alpha = 0.398;

	this.instance_21 = new lib.Path_13();
	this.instance_21.parent = this;
	this.instance_21.setTransform(26.2,49.7,1,1,0,0,0,0.5,0.4);
	this.instance_21.alpha = 0.398;

	this.instance_22 = new lib.Path_14();
	this.instance_22.parent = this;
	this.instance_22.setTransform(17.1,49.3,1,1,0,0,0,0.4,0.3);
	this.instance_22.alpha = 0.398;

	this.instance_23 = new lib.Path_15();
	this.instance_23.parent = this;
	this.instance_23.setTransform(10.5,49.4,1,1,0,0,0,0.4,0.3);
	this.instance_23.alpha = 0.398;

	this.instance_24 = new lib.Path_16();
	this.instance_24.parent = this;
	this.instance_24.setTransform(13.7,50.3,1,1,0,0,0,0.5,0.5);
	this.instance_24.alpha = 0.398;

	this.instance_25 = new lib.Path_17();
	this.instance_25.parent = this;
	this.instance_25.setTransform(4.4,49.6,1,1,0,0,0,0.5,0.4);
	this.instance_25.alpha = 0.398;

	this.instance_26 = new lib.Path_18();
	this.instance_26.parent = this;
	this.instance_26.setTransform(7.6,50.9,1,1,0,0,0,0.5,0.8);
	this.instance_26.alpha = 0.398;

	this.instance_27 = new lib.Path_19();
	this.instance_27.parent = this;
	this.instance_27.setTransform(1.8,48.9,1,1,0,0,0,0.6,0.4);
	this.instance_27.alpha = 0.398;

	this.instance_28 = new lib.Path_20();
	this.instance_28.parent = this;
	this.instance_28.setTransform(31.2,38.6,1,1,0,0,0,1.7,4.1);
	this.instance_28.alpha = 0.398;

	this.instance_29 = new lib.Path_21();
	this.instance_29.parent = this;
	this.instance_29.setTransform(5.6,37.1,1,1,0,0,0,1.8,4.9);
	this.instance_29.alpha = 0.398;

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAAA2QgNgBgKgJQgEgEgDgFQgKgTABgSQABgVANgQQAJgLAOgDQANgDALAIQASAMAAAkQgBAcgQARQgJAKgLAAIgDgBg");
	this.shape_111.setTransform(24.5,9);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AghAuQgOgMADgbQADgVAPgRQAWgYAgADIAEACQAIADADAPQAGAWgNAaQgIAUgWALQgKAGgKAAQgLAAgIgHg");
	this.shape_112.setTransform(15.3,9.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#231F20").s().p("AhIA4IAAAAQgQgGgHgSIABAAQAEAHAIAHQgIgMABgRQACgZAPgSQAKgMAOgIQAQgIAPABIABAAQAMABAIAGIgBABIgEgCQADADADAJQAEAIgBANIADgMQAHgOAIgGQADgEAEgBIAEgDIABAAQgKADgJAHQAAABAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAOgRAWACQAPgBAJAIQAQAPABAgQABAagOATQgEAHgIAFIASgGQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAABQgOAIgSACIgKAAQgPgCgMgFIAAgBIAQAEQgHgDgHgIIgBAAIgDgFIgGgKQgGgRAAgQQgCALgEALQgJAYgVALQgOAIgLAAQgJAAgIgEg");
	this.shape_113.setTransform(19.4,9.1);

	this.instance_30 = new lib.CompoundPath();
	this.instance_30.parent = this;
	this.instance_30.setTransform(19.8,17.8,1,1,0,0,0,14.3,9.8);
	this.instance_30.alpha = 0.398;

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7CC142").s().p("AgwBeQgvgHgZgXQgRgOgEgXQgDgWAJgUQAPghAngYIARgIIgBABQgBAAAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAgBQAHgFAVgGQAMgEAYgDQAlgEAbAEQAeAFAXASQAZAVABAdQACAyhFAsQgVANgmAJQgPAEgPAAQgRAAgSgEg");
	this.shape_114.setTransform(19.7,17.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#231F20").s().p("AgRBmQgdAAgegKQgcgIgRgPQgVgTgDgaQgCgYAOgYQALgVAWgRQAYgRAXgHIAOgEQAQgFAKgBQAfgFAcABQAcABAXAKQAaALANAVQANATgDAZQgCAWgOAUQgNASgbAUQgaATgXAGQgiAKgWAAIgCAAg");
	this.shape_115.setTransform(19.7,17.8);

	this.instance_31 = new lib.Path_4();
	this.instance_31.parent = this;
	this.instance_31.setTransform(20.4,49,1,1,0,0,0,1.7,1.1);
	this.instance_31.alpha = 0.398;

	this.instance_32 = new lib.Path_1_1();
	this.instance_32.parent = this;
	this.instance_32.setTransform(23.1,49.8,1,1,0,0,0,0.7,1.6);
	this.instance_32.alpha = 0.398;

	this.instance_33 = new lib.Path_2_1();
	this.instance_33.parent = this;
	this.instance_33.setTransform(24.6,40.4,1,1,0,0,0,1.2,8.4);
	this.instance_33.alpha = 0.398;

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#7CC142").s().p("AgIBlQABgHACgEQAEgJAAgDQAAgEgDAAQgDAAgCACIgKAFQgFADgCAEIgBABIAAABQgMAKgBgIQgBgFAFgCIAIgDQAKgGALgPIABAAIAAgBIABgBIAAgBQAEgOACgYQADgUgBgYIgDgtIAAgYQAAgNACgBIAAgBQAEABADAJIAEAMQADAOAAAIIACAsQAAAWgCAUIgIApIABABIABAAQABAEAGAGIAKAJQACACADAAQAFAAADAEQAEAFgFADQgEAEgEgBQgEgCgBgFIgCgEIgGgIQgGgHgEADQAAgBgBAAQAAgBAAAAQAAAAAAABQAAAAAAABQgCAJABAEIACAHQACAFgCACIgFAEIgDABQgFAAgDgIg");
	this.shape_116.setTransform(22.8,40.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#B2D235").s().p("AgBACIgGgBIAOgIQABAAAAAAQAAABAAAAQAAABAAABQAAABgBABIgBAEIgCAGQgCgEgDgCg");
	this.shape_117.setTransform(21.5,48.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B2D235").s().p("AgGgGQAGgFAHAOQgCgCgEAAQgFABgCAGQgBgCABgMg");
	this.shape_118.setTransform(24.4,49);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#231F20").s().p("AgGBtQgHgEADgLQgDgGgCgBQgEgCgGAEIAAABQgEAGgHAAQgHABAAgIQAAgGAEgCIAJgDQAGgCAFgGIAKgLIAAgBQAIgmABgJQACgVgCgZIgDgxIAAgLQAAgIACgDQgCAIAEAXQABAAAAABQABAAAAAAQAAAAAAAAQAAgBAAAAIgCgJQABAAABABQAAAAABAAQAAgBAAAAQAAAAgBgBQgDgMABgKIAAgBIAHAMQAEANAAANQAAAAAAABQABAAAAAAQAAAAABgBQAAAAABAAQAAgIgDgPQgCgGgGgKQAEADADAJQAHAQACAjQACAigCAVQgDAggGAQIAAABQgBAFAJAJQAIAKAGAAQAHgBADAFQADAGgEAFQgDAEgFABQgGABgDgFIgCgHQgEgFgFADIgEAGQADAEgCADQgCAFgFACIgEABIgGgBg");
	this.shape_119.setTransform(22.9,40.6);

	this.instance_34 = new lib.Path_0();
	this.instance_34.parent = this;
	this.instance_34.setTransform(17.4,49.5,1,1,0,0,0,0.5,0.5);
	this.instance_34.alpha = 0.398;

	this.instance_35 = new lib.Path_1_0();
	this.instance_35.parent = this;
	this.instance_35.setTransform(13.7,50.7,1,1,0,0,0,0.8,0.8);
	this.instance_35.alpha = 0.398;

	this.instance_36 = new lib.Path_2_0();
	this.instance_36.parent = this;
	this.instance_36.setTransform(10.4,49.9,1,1,0,0,0,0.8,0.6);
	this.instance_36.alpha = 0.398;

	this.instance_37 = new lib.Path_3_0();
	this.instance_37.parent = this;
	this.instance_37.setTransform(12.5,40.2,1,1,0,0,0,1,8.1);
	this.instance_37.alpha = 0.398;

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#7CC142").s().p("AgCBsIgEgEQgDgCACgFIACgHQABgEgCgJQAAgBAAAAQAAgBAAAAQAAAAAAABQgBAAAAABQgEgDgGAHIgGAIIgCAEQgBAFgEACQgEABgEgEQgFgDAEgFQADgEAFAAQADAAACgCIAKgJQAGgGABgEIABAAIABgBIgIgpQgCgUAAgWIACgsQAAgIADgOIAEgMQADgJAEgBIAAABQACABAAANIgBAYIgCAtQgBASADAaQACAYAEAOIAAABIABABIABABQAKAPALAGIAIADQAFACgBAFQgBAIgMgKIAAgBIgBgBQgCgEgFgDIgJgFQgJgGAAAIQAAADAEAJQACAEABAHQgDAIgFAAIgDgBg");
	this.shape_120.setTransform(13.7,40.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#B2D235").s().p("AgFACIgBgEQgBgBAAgBQAAgBAAgBQAAAAAAgBQAAAAABAAIAOAIIgGABQgDABgCAFg");
	this.shape_121.setTransform(15.1,48.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#B2D235").s().p("AgBABIgFABQACgCADgEQAEgFADADIABAHQAAAEgBADQgCgGgFgBg");
	this.shape_122.setTransform(12.3,49.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#231F20").s().p("AgDBtQgFgCgCgGQgCgDADgEQgCgEgCgCQgFgCgEAFIgCAHQgDAEgGgBQgFgBgDgEQgEgFADgFQADgFAHAAQAGAAAIgJQAJgKgBgFIAAAAQgGgRgDgfQgCgVACgjQACgjAHgQQADgHAEgEIgCADIgGAVIgBAFIABABIAAADQAAAAABAAQABAAAAAAQAAAAAAgBQAAAAAAAAQAAgGADgMIAFgNIABABIAAANIAAAGIAAABIgBALQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAgBQADgWgDgLIABACQACADAAAJIAAAKIgEAxQgBAaACAUQABAKAIAmIAAABIAKAKQAFAGAGADIAJADQAEACAAAFQAAAIgHAAQgHgBgEgGIAAAAQgGgEgEACQgDABgCAFQADAMgHADIgGACIgEgBg");
	this.shape_123.setTransform(13.7,40.6);

	this.instance_38 = new lib.Path_27();
	this.instance_38.parent = this;
	this.instance_38.setTransform(27.9,48.6,1,1,0,0,0,2.6,4.1);
	this.instance_38.alpha = 0.398;

	this.instance_39 = new lib.Path_28();
	this.instance_39.parent = this;
	this.instance_39.setTransform(29.3,39.7,1,1,0,0,0,2.8,6.8);
	this.instance_39.alpha = 0.398;

	this.instance_40 = new lib.Path_29();
	this.instance_40.parent = this;
	this.instance_40.setTransform(35.7,50,1,1,0,0,0,1.3,1.1);
	this.instance_40.alpha = 0.398;

	this.instance_41 = new lib.Path_30();
	this.instance_41.parent = this;
	this.instance_41.setTransform(31.4,49.9,1,1,0,0,0,2.9,1.7);
	this.instance_41.alpha = 0.398;

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#7CC142").s().p("AACAOQgFgCgDgFQgJgSABgFIACgBIACAGIAIALIgCAEIAAABQABgDACgCIACgBQADgDADABIAFADQAGAJgFAIIgBABQgGgBgEgDg");
	this.shape_124.setTransform(29.5,50.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#7CC142").s().p("AgRAYIAKgYQAPghAFgSQAAgBAAgBQAAAAgBAAQAAgBAAAAQgBAAAAABQgHAEgJAMQgPASgCgJQgBgEAGgOIACgEIABgBQARgNAFgCQATgFAAAXQgBAJgGAYQgIAdgOAYQgJAPgIAJIgFAGQgGgIANgkg");
	this.shape_125.setTransform(31.2,37.8);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#7CC142").s().p("AgXBoQgEgDgDgGIgDgKQgCgHgGgIIgJgNQgIgMAAgIQAAgIADgCQAHgDADADIABABIgDAJIAAAAIAcg8QAPgrAKgTIgBAAQgFAFgIAVQgFAJgHAUQAAgJgDgGIgGgOQgDgIACgGQAHgLAJgIQARgNAFgBQATgGAAAXQgBAKgGAYQgIAdgOAYQgJAOgIAKIgQAUQAFgDACgCQADAHAbAKQAVAIAOAEIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgCIAAAAIAEgCQAHgCAEAEQAIAIgGAJQgDAGgFACQgGACgEgGIgHgMIgBAAIAAgBQgFgGgIgBIADABIACACQAFADACAFQAEAKgGAGQgGAEgHgDIgCgBIgCgCIgBgDIgCgEIAAgEIgBAAIgBACQgCgFgLgJQgNgIgHADIAAAAIgBgFIgBACIAEAKIAHALIgCAFIABABQABgEACgBIACgDQADgDAEACIAEADQAFAJgEAIQgDAHgGABIgCAAQgFAAgEgEg");
	this.shape_126.setTransform(31.2,41.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7CC142").s().p("AgXBoQgEgDgDgGIgDgKQgCgHgGgIIgJgNQgIgMAAgIQAAgIADgCQAHgDADADIABABIgDAJIAAAAIAcg8QAPgrAKgTIgBAAQgFAFgIAVQgFAJgHAUQAAgJgDgGIgGgOQgDgIACgGQAHgLAJgIQARgNAFgBQATgGAAAXQgBAKgGAYQgIAdgOAYQgJAOgIAKIgQAUQAFgDACgCQADAHAbAKQAVAIAOAEIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgCIAAAAIAEgCQAHgCAEAEQAIAIgGAJQgDAGgFACQgGACgEgGIgHgMIgBAAIAAgBQgFgGgIgBIADABIACACQAFADACAFQAEAKgGAGQgGAEgHgDIgCgBIgCgCIgBgDIgCgEIAAgEIgBAAIgBACQgCgFgLgJQgNgIgHADIAAAAIgBgFIgBACIAEAKIAHALIgCAFIABABQABgEACgBIACgDQADgDAEACIAEADQAFAJgEAIQgDAHgGABIgCAAQgFAAgEgEg");
	this.shape_127.setTransform(31.2,41.9);

	this.instance_42 = new lib.Path();
	this.instance_42.parent = this;
	this.instance_42.setTransform(1.8,49.8,1,1,0,0,0,1.5,1.3);
	this.instance_42.alpha = 0.398;

	this.instance_43 = new lib.Path_1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(6,49.5,1,1,0,0,0,3,2);
	this.instance_43.alpha = 0.398;

	this.instance_44 = new lib.Path_2();
	this.instance_44.parent = this;
	this.instance_44.setTransform(8.4,42.7,1,1,0,0,0,3.6,9.9);
	this.instance_44.alpha = 0.398;

	this.instance_45 = new lib.Path_3();
	this.instance_45.parent = this;
	this.instance_45.setTransform(7.6,35.6,1,1,0,0,0,1.7,3.3);
	this.instance_45.alpha = 0.398;

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7CC142").s().p("AANBsQgGgBgEgHQgDgIAEgJIAFgDQADgCADADIADADQACABABAEIAAgBIgCgFQAGgHACgEIAEgKIgBgCIgBAFQgHgDgNAIQgLAJgDAFIAAgCIgBAAIAAAEIgCAEIgCADIgCACIgCABQgHADgFgEQgHgGAEgKQADgFAFgDIACgCIACgBQgHABgFAGIgBABIAAAAIgHAMQgEAGgGgCQgFgCgEgGQgCgEAAgFQABgFADgDQAEgEAIACIADACIABAAIACACQABAAAAAAQAAAAAAAAQAAAAAAAAQAAgBgBAAIgBgCQAOgEAVgIQAbgKAEgHQABACAFADIgPgUQgIgKgJgOQgOgYgIgdQgHgYAAgKQgBgXATAGQAFABARANQAKAIAHALQABAGgDAIIgGAOQgCAGAAAJQgHgUgFgJQgJgVgFgFIAAAAQAKATAOArIAdA8IAAAAIgDgJIAAgBQADgDAHADQAEACAAAIQAAAIgJAMQgOAWgCAGIgEAKQgCAGgEADQgFAEgEAAIgCAAg");
	this.shape_128.setTransform(6.1,41.9);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#231F20").s().p("AAGBuQgIgIACgMQABgLAIgCQAFgBAEAFIABgCQADgDACgEIADgGQgIgCgKAHQgJAGgFAIQAAAIgHAFIgFABQgGACgEgDQgHgGABgJQgFALgGAAQgHABgFgFQgEgFgBgHQgBgMAKgEQAGgDAFACIACACIArgQQAUgFADgGIgBgCIgLgNQgLgOgIgPQgPgbgJgoQgEgTAFgIQAFgKALACQAKACAQAOQAIAHAEAHIAGAEQABAAABABQAAAAAAABQAAAAAAAAQAAABgBAAIgBADIAAAAQAAAGgCAGQgHAOAAADQgCALACAKIAUAuQACgDAEgBQAEAAADACQAIAIgGANQgEAKgNARQgFAHgEAOQgDAHgDAEQgEAFgGACIgFABQgDAAgDgCg");
	this.shape_129.setTransform(6.2,41.9);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#7CC142").s().p("AgXBoQgEgDgDgGIgDgKQgCgHgGgIIgJgNQgIgMAAgIQAAgIADgCQAHgDADADIABABIgDAJIAAAAIAcg8QAPgrAKgTIgBAAQgFAFgIAVQgFAJgHAUQAAgJgDgGIgGgOQgDgIACgGQAHgLAJgIQARgNAFgBQATgGAAAXQgBAKgGAYQgIAdgOAYQgJAOgIAKIgQAUQAFgDACgCQADAHAbAKQAVAIAOAEIgBACQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIADgCIAAAAIAEgCQAHgCAEAEQAIAIgGAJQgDAGgFACQgGACgEgGIgHgMIgBAAIAAgBQgFgGgIgBIADABIACACQAFADACAFQAEAKgGAGQgGAEgHgDIgCgBIgCgCIgBgDIgCgEIAAgEIgBAAIgBACQgCgFgLgJQgNgIgHADIAAAAIgBgFIgBACIAEAKIAHALIgCAFIABABQABgEACgBIACgDQADgDAEACIAEADQAFAJgEAIQgDAHgGABIgCAAQgFAAgEgEg");
	this.shape_130.setTransform(31.2,41.9);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#231F20").s().p("AgRBvQgGgCgDgFQgEgEgCgHQgFgOgFgHQgNgRgEgKQgFgNAIgIQADgCAEAAQAEABACADIATguQACgKgBgLQgBgDgGgOIgEgGQgBgDAAgDQABgEAGgGIANgOQAQgOALgCQAKgCAGAKQAEAIgDATQgKAogOAbQgJAPgLAOIgLANIgBACQAEAGATAFIArAQIADgCQAFgCAFADQALAEgCAMQgBAHgEAFQgFAFgGgBQgGAAgFgLQABAJgHAGQgEADgHgCIgFgBQgHgFAAgIQgEgIgJgGQgLgHgIACIAEAGQABAEADADIACACQADgFAFABQAIACABALQADAMgIAIQgDACgDAAIgGgBg");
	this.shape_131.setTransform(31.1,41.9);

	this.instance_46 = new lib.Path_37();
	this.instance_46.parent = this;
	this.instance_46.setTransform(18.3,28.4,1,1,0,0,0,6.9,3.3);
	this.instance_46.alpha = 0.398;

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#7CC142").s().p("AhEBcQgRgLgHgNQgGgLABgOIAEgZIALgTIANgdQARgkAUgNQAegRAZAFQAYAEAPAhIAVA0IAKASQAJAVgIARQgEAIgIAJIgXAQQAPgagDgjQgDgigSgYQgMgPgXgCQgSgBgUAIQgoAQgLA0QgFAcAHAXIAFAQg");
	this.shape_132.setTransform(18.5,34.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#7CC142").s().p("AhEBcQgRgLgHgNQgGgLABgOIAEgZIALgTIANgdQARgkAUgNQAegRAZAFQAYAEAPAhIAVA0IAKASQAJAVgIARQgEAIgIAJIgXAQQAPgagDgjQgDgigSgYQgMgPgXgCQgSgBgUAIQgoAQgLA0QgFAcAHAXIAFAQg");
	this.shape_133.setTransform(18.5,34.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFF7A9").s().p("AgNBjQgjgCgUgLQgRgLgHgNQgGgLABgOIAEgZIALgTIANgdQARgkAUgNQAegRAZAFQAYAEAPAhIAVA0IAKASQAJAVgIARQgEAIgIAJIgDACQgOALgMAHQgcAOgfAAIgHAAg");
	this.shape_134.setTransform(18.5,35);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#231F20").s().p("Ag2BhQgcgIgOgWQgOgWAMgeQASggAGgRQAMgdAOgNQAJgKAQgHIAEgCIABAAIABgBIADgBQAagJAQAFQAUAFANAXIARApIAKAbIAGAKIAGALQAJAUgLARQgJAOgWAOIgGAEIgBAAQgbAQgeACIgKABQgXAAgYgHg");
	this.shape_135.setTransform(18.4,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.instance_46},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.shape_115},{t:this.shape_114},{t:this.instance_30},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97}]},82).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,50);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("צפר-ידע\nבחר בתשובה הנכונה ועזור לצפרדע לאכול את הזבוב ולגדול", "bold 18px 'Arial'", "#EB1262");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 436;
	this.text.parent = this;
	this.text.setTransform(0,-77.5);

	this.startbtn = new lib.ChooseGamebtn();
	this.startbtn.parent = this;
	this.startbtn.setTransform(44.3,46.9,0.737,0.605,0,0,0,52.5,17.1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, מדינות וערי בירה, 1, מלחמות ישראל, 2, , ', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(0,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-220.2,-79.5,440.5,135.7), null);


// stage content:
(lib.zfarYeda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var qnum = 0; //משתנה לספירת שאלות
		var score = 0; //משתנה לספירת תשובות נכונות
		var mychoice = 0; //משתנה שאליו מתייחסים במשחק בקומבובוקס
		var countDown = 30; // הגדרת כמות השניות לשאלה
		var forcombo; //משתנה עבור המוביקליפ של הקומבו
		var countTime = 0; //משתנה לספירת הזמן שלקח לשחקן לענות על כל השאלות במשחק
		var temp = []; // מערך ריק לשמירת כל השאלות שנענו נכון
		var names= ["מדינות וערי בירה","מלחמות ישראל"];//מערך שמכיל את שמות המשחקים
		
		
		var secondsLeft = new createjs.Text(); // הצבת השעון על הבמה
		secondsLeft.x = 118;
		secondsLeft.y = 61;
		secondsLeft.color = "#000000";
		secondsLeft.font = "18px Arial";
		secondsLeft.name = "secondsLeft";
		stage.addChild(secondsLeft);
		
		
		var counterCorrect = new createjs.Text(); // מד השחקן ביחס למטרה
		counterCorrect.x = 50;
		counterCorrect.y = 61;
		counterCorrect.color = "#000000";
		counterCorrect.font = "18px Arial";
		counterCorrect.name = "secondsLeft";
		stage.addChild(counterCorrect);
		
		var gameName = new createjs.Text();
		gameName.x = 750;// הוספת תיבת טקסט שתכיל אצ שם המשחק שנבחר
		gameName.y = 61;
		gameName.color = "#EB1262";
		gameName.font = "18px Arial";
		gameName.name = "gameName";
		stage.addChild(gameName);
		
		
		var frog = new lib.frog();
		frog.x =20;
		frog.y = 460;
		stage.addChild(frog);
		
		
		combo();
		function combo() {
		gameName.visible=false;
			//הוספת הקומבו לבמה
			forcombo = new lib.forcomb();
			forcombo.x = 480;
			forcombo.y = 200;
			stage.addChild(forcombo);
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.3;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", myChange);
		}
		//בעת שינוי ערך בקומבו
		function myChange(evt) {
			//שימרת הערך שנבחר בקומבו
			console.log(evt.currentTarget.value);
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.3;
				forcombo.startbtn.removeEventListener("click", ChooseGame);
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", ChooseGame);
			}
		}
		
		//לחיצה על בחר
		function ChooseGame() {
			mychoice = mychoice - 1;
			startGame();
			
			gameName.text=names[mychoice];//הוספת שם המשחק לבמה
			gameName.visible=true;
			stage.removeChild(forcombo);
		}
		
		
		
		//מערך שמכיל את 2 המשחקים
		//משחק אחד- ארצות וערי בירה
		var questions = [
			[
				["?מהי המדינה הגדולה בעולם", ["ארצות הברית", false],
					["סין", false],
					["רוסיה", true],
					["הודו", false], 1
				],
		
				["?מהי המדינה הקטנה בעולם", ["שוודיה", false],
					["ותיקן", true],
					["ישראל", false],
					["יוון", false], 1
				],
				["?מהי בירת איטליה", ["רומא", true],
					["מילאנו", false],
					["נאפולי", false],
					["לטינה", false], 1
				],
				["?מהי בירת רוסיה", ["ברלין", false],
					["פריז", false],
					["מוסקבה", true],
					["סנט פטרבורג", false], 1
				],
				["?מהי בירת ספרד", ["מדריד", true],
					["ליסבון", false],
					["פראג", false],
					["ברצלונה", false], 1
		
				],
				["?באיזו יבשת נמצאת ברזיל", ["אוסטרליה", false],
					["דרום אמריקה", true],
					["אירופה", false],
					["אפריקה", false], 1
		
				],
				["?באיזו מדינה מספר האוכלוסייה הוא הגדול ביותר", ["יפן", false],
					["איראן", false],
					["סין", true],
					["הודו", false], 1
		
				],
		
				["?כמה מדינות יש בארצות הברית", ["51", false],
					["41", false],
					["49", false],
					["50", true], 1
		
				],
				["?מהי בירת קנדה", ["אוטווה", true],
					["טורונטו", false],
					["מונטריאול", false],
					["בנגקוק", false], 1
		
				],
				["?איזה מהמבנים הבאים נמצא בצרפת", [lib.pic1, true],
					[lib.pic2, false],
					[lib.pic3, false],
					[lib.pic4, false], 1
				]
			],
		
		
			//מערך שני- מלחמות ישראל
			[
				["?מה הייתה מטרת מבצע נגשון במלחמת השחרור", ["שחרור רמלה לוד", false],
					["פתיחת הדרך לירושלים הנצורה", true],
					["שחרור הנגב", false],
					["פינוי אוכלוסיה יהודית מגוש עציון", false], 1
				],
				["?איזה אזור כבשה ישראל לראשונה במלחמת ששת הימים",
					["חצי האי סיני", false],
					["דרום לבנון", false],
					["רצועת עזה", false],
					["יהודה ושומרון", true],1
				],
				["?באיזה שנה נחתם הסכם השלום עם ממלכת ירדן", 
					["1993 באוסלו", false],
					["1994 בוושינגטון", false],
					["1994 בערבה", true],
					["1993 בבית גבריאל", false], 1
				],
				["?בין איזה ראשי מדינות נחתם חוזה השלום בין ישראל למצרים בשנת 1979", ["מנחם בגין, אנואר סאדאת וג'ימי קרטר", true],
					["מנחם בגין, חוסני מובארק וג'ורג' בוש", false],
					["מנחם בגין ויאסר ערפאת", false],
					["יצחק רבין ויאסר ערפאת", false], 1
				],
				["?איזה מן הסמלים הבאים מסמל אות הערכה במלחמות ישראל", [lib.p4, true],
					[lib.p1, false],
					[lib.p2, false],
					[lib.p3, false], 1
				],
				["?באיזה מלחמה צהל לא השתתף", 
					["מלחמת יום כיפור", false],
					["מלחמת לבנון הראשונה", false],
					["מלחמת המפרץ הראשונה", true],
					["מלחמת לבנון השנייה", false], 1
				],
				["?אילו מדינות השתתפו במלחמת יום כיפור",
					["ישראל, ירדן וסוריה", false],
					["ישראל, מצרים וירדן", false],
					["ישראל וירדן", false],
					["ישראל, סוריה ומצרים", true],1
				],
				["?כמה ימים נמשכה מלחמת לבנון השנייה", 
					["43", false],
					["34", true],
					["23", false],
					["40", false], 1
				],
				["?מי היה ראש ממשלת ישראל במלחמת לבנון הראשונה", 
					["יצחק רבין", false],
					["מנחם בגין", true],
					["גולדה מאיר", false],
					["אריאל שרון", false], 1
				],
				["?מי ניצח במלחמת ההתשה", ["אף אחד לא ניצח", true],
					["ישראל", false],
					["מצרים", false],
					["ירדן", false], 1
				]
			]
		];
		
		
		var arrayLength = questions[mychoice].length; //משתנה ששומר את אורך המערך
		var continueBtn = new lib.btn //יצירת כפתור המשך
		continueBtn.x = 450;
		continueBtn.y = 295;
		continueBtn.visible = false;
		stage.addChild(continueBtn);
		continueBtn.cursor = "pointer";
		continueBtn.addEventListener("click", nextQ); //יצירת אירוע לחיצה לכפתור שבהמשך יקשר לםונקציה המכילה אלמנטים במעבר בין השאלות
		
		
		var rnd = 0;
		
		//פונקציה להתחלת המשחק
		function startGame() {
			
			counterCorrect.text = qnum + "/" + arrayLength;
			
			continueBtn.visible = false;
			stage.removeChild(stage.getChildByName("NextQ"));
			stage.removeChild(stage.getChildByName("header2"));
			var header2 = new createjs.Text(); // הוספת הוראות למשחק
			header2.x = 670;
			header2.y = 81;
			header2.color = "#EB1262";
			header2.font = "18px Arial";
			stage.addChild(header2);
			header2.text = "בחרו בריבוע המציין את התשובה הנכונה";
			header2.name = "header2";
		
		
			//יצירת טיימר לכל שאלה
			timer = setInterval(timerFunc, 1000);
		
			secondsLeft.text = "00:" + countDown;
			//יצירת הופעה רנדומלית של שאלות
			rnd = Math.floor(Math.random() * (questions[mychoice].length - 1));
			console.log(rnd);
			//יצירת השאלות
			var question = new createjs.Text();
			question.x = 495;
			question.y = 100.5;
			question.color = "black";
			question.font = "22px Arial";
			question.text = questions[mychoice][rnd][0];
			question.name = "q";
			question.textAlign="center";
			stage.addChild(question);
			console.log(question.name);
		
		
			for (i = 1; i < questions[mychoice][rnd].length - 1; i++) { //לולאה שמציבה את ארבעת העלים אחד לייד השני
				var ale = new lib.myAla();
				ale.x = (i * 150) + 40;
				ale.y = 200;
				ale.name = "ale" + i;
				ale.cursor = "pointer"; //מראה שהעלה לחיץ 
				stage.addChild(ale);
				ale.addEventListener("click", check); //הפעלת פונקציה לבדיקת תשובה
		
				var xxx = questions[mychoice][rnd][i][0];
				console.log(xxx)
				if (typeof xxx === 'string') {
					var distractions = new createjs.Text(); //מסיחים 
					distractions.color = "black";
					distractions.font = "22px Arial";
					distractions.text = questions[mychoice][rnd][i][0];
					distractions.lineWidth = 130; //רוחב תיבת הטקסט של התשובה
					distractions.textAlign = "center";
					distractions.x = 75;
					ale.addChild(distractions);
				} else {
					var distractions = new(questions[mychoice][rnd][i][0])();
					distractions.x = 16.45;
					distractions.y = -25.6;
					distractions.name = "distractions";
					ale.addChild(distractions);
				}
			}
		}
		
		
		//פונצקיה לבדיקת תשובה
		function check(evt) {
			clearInterval(timer);
			var answerNum = parseInt(evt.currentTarget.name.slice(3));
			var myAns = stage.getChildByName(evt.currentTarget.name);
			
			
			for (i = 1; i < questions[mychoice][rnd].length - 1; i++) {
				var ale = stage.getChildByName("ale"+i);
				ale.removeEventListener("click", check);
			
			}
		
			var ICA = new lib.inCorrectA(); //הצבת האייקונים לתשובה נכונה ולא נכונה
			ICA.visible = false;
			ICA.name = "incorrect";
			var CA = new lib.correctA();
			CA.visible = false;
			CA.name = "correct";
			var answer = questions[mychoice][rnd][answerNum][1];
		
			if (answer == true) {
				console.log("הצלחה");
				temp[qnum] = questions[mychoice][rnd];
				score = score + (100 / (10 * questions[mychoice][rnd][5]));
		
				questions[mychoice].splice(rnd, 1);
				//יצירת אייקון של וי לחיווי חיובי		
				CA.x = (myAns.x)+120;
				CA.y = 190;
				stage.addChild(CA);
				CA.visible = true;
				stage.setChildIndex( frog, stage.getNumChildren()-1);
				frog.scaleX += 0.35;		
				frog.scaleY += 0.35;	
				frog.y -=15;
				frog.gotoAndPlay(1);
				qnum++;
		
		
			} else {
				console.log("אי הצלחה");
				questions[mychoice][rnd][5] += 1;
				//יצירת אייקון של איקס לחיווי שלילי
				ICA.x = (myAns.x)+120;
				ICA.y = 190;
				stage.addChild(ICA);
				ICA.visible = true;
				frog.gotoAndPlay(83);
				continueBtn.visible = true; //המשך לשאלה הבאה
			}
		
		
			
		
		}
		
		//פונקציה שמציגה את הכפתור המשך רק בתום האנימציה של הצפרדע והזבוב
		stage.showContinueBtn = function(){
			continueBtn.visible = true; //המשך לשאלה הבאה
		}
		
		function nextQ() { //פונקציה שאחראית על כל התרחישים בזמן מעבר לשאלה הבאה 
			var myQ = stage.getChildByName("q");
			stage.removeChild(myQ);
			
			var Etime = stage.getChildByName("Etime");
			stage.removeChild(Etime);
			
			//הסרת האייקונים של הוי ואיקס
			var iconCorrect = stage.getChildByName("correct");
			var iconInCorrect = stage.getChildByName("incorrect");
			stage.removeChild(iconCorrect);
			stage.removeChild(iconInCorrect);
		
		
			if (qnum == arrayLength) { //ברגע שאורך המערך שווה לכצות התשובות-מכין למסך סיום
				console.log("סיום משחק");
				alert(score);
				//stage.removeAllChildren();
				for (i = 1; i <= qnum; i++) {
					var myAleAns = stage.getChildByName("ale" + i);
					stage.removeChild(myAleAns);
				}
				EndScreen(); //קריאה לפונקציה שתפעיל א מסך הסיום 
		
			} else {
		
				countDown = 30;
				for (i = 1; i <= 4; i++) {
					var myAleAns = stage.getChildByName("ale" + i);
					stage.removeChild(myAleAns);
				}
		
				startGame();
			}
		}
		
		
		
		
		function timerFunc() { // הגדרת הטיימר והצבה בתוכו של אינטרוול שפועל בכל שנייה. בתוכו פונקציה פנימית המפחיתה את השניות במשחק.
			if (countDown == 0) { // תנאי שבמידה ומשתנה שווה לאפס, יש לאפס את האינטרוול, לגשת לפונקציה המנקה את האובייקטים מהבמה והצבת כפתור לשאלה הבאה
				// clear all 
				clearInterval(timer);
				
				var NextQ = new lib.NQbtn; // הוספת כפתור לשאלה הבאה
				NextQ.x = 452;
				NextQ.y = 135;
				NextQ.name = "NextQ";
				stage.addChild(NextQ);
				
			var Etime = new createjs.Text();
			Etime.x = 400;
			Etime.y = 80;
			Etime.color = "#000000";
			Etime.font = "22px Arial";
			Etime.name = "Etime";
			Etime.text = "תם הזמן";
			stage.addChild(Etime);
			NextQ.addEventListener('click', nextQ);
				
			frog.gotoAndPlay(83);
				
				for (i = 1; i <= 4; i++) {
					var myAleAns = stage.getChildByName("ale" + i);
					stage.removeChild(myAleAns);
				}
				
						var myQ = stage.getChildByName("q");
				stage.removeChild(myQ);
		
			} else {
				countTime++;
				countDown--; // הורדת הספירה לאחור (שעון)
				if(countDown<10){
					secondsLeft.text = "00:0" + countDown;
				}else{
					secondsLeft.text = "00:" + countDown;
				}
			}
		
		}
		
		//פונקציה למסך סיום 
		
		function EndScreen() {
			stage.removeChild(stage.getChildByName("header2"));
			var Ebackground = new lib.background();
			Ebackground.x = -8;
			Ebackground.y = -416;
			Ebackground.name = "Ebackground";
			stage.addChild(Ebackground);
		
			var title = new createjs.Text();
			title.x=300;
			title.y = 80;
			title.color = "#000000";
			title.font = "22px Arial";
			title.name = "title";
			title.text = "סיימת את משחק" +" " + names[mychoice];
			stage.addChild(title);
		
		
			var playerScore = new createjs.Text(); // הצבת הזמן הכולל שהשחקן שיחק
			playerScore.x = 270;
			playerScore.y = 150;
			playerScore.color = "#000000";
			playerScore.font = "20px Arial";
			playerScore.name = "playerScore";
			stage.addChild(playerScore);
			playerScore.text = "ציון" + " " + Math.round(score);
		
			//פונצקיית לסכימת הזמן שלקח לשחקן לענות על שאלות המשחק
			var finalTime = new createjs.Text(); // הצבת הזמן הכולל שהשחקן שיחק
			finalTime.x = 530;
			finalTime.y = 150;
			finalTime.color = "#000000";
			finalTime.font = "20px Arial";
			finalTime.name = "finalTime";
			stage.addChild(finalTime);
		
			var min = parseInt(countTime / 60);
			var sec = countTime % 60;
		
			if (min < 10) {
				min = "0" + min.toString();
			}
		
			if (sec < 10) {
				sec = "0" + sec.toString();
			}
		
			finalTime.text = "זמן ממוצע"+ " " + min + ":" + sec;
		
		
			var Ebtn = new lib.finishBtn(); // הוספת כפתור סיום
			Ebtn.x = 292;
			Ebtn.y = 196;
			Ebtn.name = "Ebtn";
			stage.addChild(Ebtn);
		
			var PAbtn = new lib.PlayAgainBtn(); // הוספת כפתור שחק שוב
			PAbtn.x = 581;
			PAbtn.y = 204;
			PAbtn.name = "PAbtn";
			stage.addChild(PAbtn);
		
			PAbtn.addEventListener('click', playAgain);
			Ebtn.addEventListener('click', finish);
		}
		
		
		function playAgain() { // במידה והשחקן מסיים את המשחק, ולאחר הגעה ללוח תוצאות הוא רוצה לשחק שוב באותו הנושא
			score = 0;
			qnum = 0;
			countTime = 0;
			countDown = 30;
		
			questions[mychoice] = temp;
			console.log(questions[mychoice]);
			temp = [];
			console.log(questions[mychoice]);
			/*for (i=0; i<questions[mychoice].length;i++){
				questions[mychoice][i][5] = 1 ;
			}*/
			//console.log(questions[mychoice])	;
		
			stage.removeChild(stage.getChildByName("Ebackground"));
			stage.removeChild(stage.getChildByName("PAbtn"));
			stage.removeChild(stage.getChildByName("Ebtn"));
			stage.removeChild(stage.getChildByName("finalTime"));
			stage.removeChild(stage.getChildByName("playerScore"));
			stage.removeChild(stage.getChildByName("title"));
			
			stage.removeChild(frog);
			frog = new lib.frog();
			frog.x =20;
			frog.y = 460;
			stage.addChild(frog);
		
			startGame(); // הפנייה לפונקציית התחלת משחק
		
		}
		
		//בשתי הפונקציות האלה לאפס את המשתנים:
		//ציון, אינטרוול להחזיר את האינטרול שווה לשלושים מיי צוייס לאפס חזרה לאפס 
		//לאפס את התא שכתוב בו אחד עבור המשחק שעכשיו שוחק
		
		
		
		function finish() { // המידה והשחקן מסיים את המשחק, ולאחר הגעה ללוח תוצאות הוא רוצה לחזור למשחק הראשי ולבחור נושא אחר למשחק
			score = 0;
			qnum = 0;
			countTime = 0;
			countDown = 30;
			continueBtn.visible = false;
			secondsLeft.text = "";
		
			questions[mychoice] = temp;
			console.log(questions[mychoice]);
			temp = [];
			console.log(questions[mychoice]);
			/*for (i=0; i<questions[mychoice].length;i++){
				questions[mychoice][i][5] = 1 ;
			}*/
			//console.log(questions[mychoice])	;
		
			stage.removeChild(stage.getChildByName("Ebackground"));
			stage.removeChild(stage.getChildByName("PAbtn"));
			stage.removeChild(stage.getChildByName("Ebtn"));
			stage.removeChild(stage.getChildByName("finalTime"));
			stage.removeChild(stage.getChildByName("playerScore"));
			stage.removeChild(stage.getChildByName("title"));
			
			stage.removeChild(frog);
			frog = new lib.frog();
			frog.x =20;
			frog.y = 460;
			stage.addChild(frog);
			combo();
		}
		
		
		this.odotBackground.addEventListener('click', aboutFunc);
		this.odotBackground.cursor = "pointer"; // סמן מצביע על האודות
		
		
		function aboutFunc() {
		
			var odotWindow = new lib.odot;
			odotWindow.x = 280;
			odotWindow.y = 180;
			odotWindow.name = "odotWindow";
			stage.addChild(odotWindow);
			odotWindow.addEventListener('click', closeOdot);
		
			var hitLogo = new lib.hitLogoC;
			hitLogo.x = 420;
			hitLogo.y = 350;
			hitLogo.name = "hitLogo";
			stage.addChild(hitLogo);
			hitLogo.addEventListener('click', hitURL);
			hitLogo.cursor = "pointer"; // סמן מצביע על הלוגו
		
		}
		
		
		function hitURL() {
			window.open("http://www.hit.ac.il/telem/overview");
		}
		
		function closeOdot() {
			stage.removeChild(stage.getChildByName("odotWindow"));
			stage.removeChild(stage.getChildByName("hitLogo"));
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.text = new cjs.Text("צפר-ידע", "bold 20px 'Arial'", "#003300");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 156;
	this.text.parent = this;
	this.text.setTransform(876.8,17.6);

	this.odotBackground = new lib.odotBG();
	this.odotBackground.parent = this;
	this.odotBackground.setTransform(44.7,27.1);

	this.backgroundClick = new lib.background_1();
	this.backgroundClick.parent = this;
	this.backgroundClick.setTransform(47,24.4);

	this.text_1 = new cjs.Text("איך משחקים", "bold 15px 'Arial'", "#EB1262");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 19;
	this.text_1.lineWidth = 112;
	this.text_1.parent = this;
	this.text_1.setTransform(154.6,16.4);

	this.text_2 = new cjs.Text("אודות", "bold 15px 'Arial'", "#EB1262");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 19;
	this.text_2.lineWidth = 52;
	this.text_2.parent = this;
	this.text_2.setTransform(48.1,16);

	this.instance = new lib.logo_1();
	this.instance.parent = this;
	this.instance.setTransform(935,26,0.889,1,0,0,0,22.5,24);

	this.instance_1 = new lib.pas();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-4,1,0.76,0.625);

	this.instance_2 = new lib.background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(177.8,35.3,0.31,0.31,0,0,0,572.5,407.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("Ap+jNIT9AAIAAGaIz9AA");
	this.shape.setTransform(315.4,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ap+DNIAAmZIT9AAIAAGZg");
	this.shape_1.setTransform(315.4,22.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.backgroundClick},{t:this.odotBackground},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(476,204.1,968.3,681.6);
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/zfarYeda_atlas_.png?1518553778958", id:"zfarYeda_atlas_"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js?1518553779053", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1518553779053", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js?1518553779053", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;