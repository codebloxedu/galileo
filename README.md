# galileo
Galileo is a Javascript template to create amazing and unique interactive prototyping course

#### How to run:
1. Clone this repository or download to your local
2. Make sure you already install a live-server extension. In this case, I'm using `Five Server`
3. Run the project by using live-server in the `index.html` or tap the server URL in the footer
4. Your browser will opens and run your project instantly

# Notes and snippets
- **[Layer](#console-log)**
- **[Set Device](#set-device)**
- **[Set Custom Device](#set-custom-device)**
- **[Scroll Component](#scroll-component)**
- **[Page Component](#page-component)**
- **[Flow Component](#flow-component)**
- **[Lottie](#lottie)**
- **[Gotchas](#gotchas)**

## Layer

```javascript
// The basic element in Framer
let layerA = new Layer({
	width: 100,
	height: 100,
	x: 24,
	y: 24,
});
```

#### Available attributes and their default values:

Framer Layers are quite extensible, here are all the Layer attributes you can modify.

```javascript
/**
 * You would set these attributes when creating a new Layer, or also afterwards, like this:
 *
 * layerA.backgroundColor = 'skyblue';
 *
 */
backgroundColor: "rgba(123, 123, 123, 0.5)";
blur: 0;
borderColor: "rgba(123, 123, 123, 0.5)";
borderRadius: 0;
borderWidth: 0;
brightness: 100;
clip: false;
color: "white";
contrast: 100;
flat: false;
force2d: false;
grayscale: 0;
height: 200;
hueRotate: 0;
ignoreEvents: true;
index: 1;
invert: 0;
opacity: 1;
originX: 0.5;
originY: 0.5;
originZ: 0;
perspective: 0;
perspectiveOriginX: 0.5;
perspectiveOriginY: 0.5;
rotationX: 0;
rotationY: 0;
rotationZ: 0;
saturate: 100;
scale: 1;
scaleX: 1;
scaleY: 1;
scaleZ: 1;
sepia: 0;
shadowBlur: 0;
shadowColor: "rgba(123, 123, 123, 0.5)";
shadowSpread: 0;
shadowX: 0;
shadowY: 0;
skew: 0;
skewX: 0;
skewY: 0;
visible: true;
width: 200;
x: 0;
y: 0;
z: 0;
```

#### Available event listeners for Layers:

Framer Layers come with a powerful set of event listeners to detect interactions and animations.

```javascript
/**
 * You would use an event like this:
 *
 * layerA.onSwipeUpStart(()=>{
 *   console.log("Swipe up on layerA");
 * });
 *
 */
onAnimationEnd;
onAnimationStart;
onAnimationStop;

onClick;
onDirectionLockStart; // Useful when draggable is enabled
onDoubleClick;
onDoubleTap;

// Drag events require enabling draggable. Like this:
// layerA.draggable.enabled = true;
onDrag;
onDragAnimationEnd;
onDragAnimationStart;
onDragDidMove;
onDragEnd;
onDragMove;
onDragStart;
onDragWillMove;

onForceTap;
onForceTapChange;
onForceTapEnd;
onForceTapStart;

onImageLoadCancelled;
onImageLoadError;
onImageLoaded;

onLongPress;
onLongPressEnd;
onLongPressStart;

onMouseDown;
onMouseMove;
onMouseOut;
onMouseOver;
onMouseUp;
onMouseWheel;

onMove;

onPan;
onPanDown;
onPanEnd;
onPanLeft;
onPanRight;
onPanStart;
onPanUp;

onPinch;
onPinchEnd;
onPinchStart;

onRotate;
onRotateEnd;
onRotateStart;

onScale;
onScaleEnd;
onScaleStart;

// Scroll events are available on scrollable components, explained further down under the 'Scroll component' section.
onScroll;
onScrollAnimationDidEnd;
onScrollAnimationDidStart;
onScrollEnd;
onScrollStart;

onStateDidSwitch;
onStateSwitchEnd;
onStateSwitchStart;
onStateSwitchStop;
onStateWillSwitch;

onSwipe;
onSwipeDown;
onSwipeDownEnd;
onSwipeDownStart;
onSwipeEnd;
onSwipeLeft;
onSwipeLeftEnd;
onSwipeLeftStart;
onSwipeRight;
onSwipeRightEnd;
onSwipeRightStart;
onSwipeStart;
onSwipeUp;
onSwipeUpEnd;
onSwipeUpStart;

onTap;
onTapEnd;
onTapStart;
onTouchEnd;
onTouchMove;
onTouchStart;
```

[Back to top](#notes-and-snippets)
