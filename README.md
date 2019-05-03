# jquery.anisview.js
## Animate.css + Viewport Checker
[Animate.css](https://github.com/daneden/animate.css) 기반으로 뷰포트에 엘리먼트가 나타나면 애니메이션이 구현되도록 도와주는 제이쿼리 플러그인입니다.

## Installation

#### Step 1: Jquery Library와 jquery.anisview, 그리고 Animate.css를 첨부하세요.

```html
<!-- jQuery Library -->
<script src="jquery.js"></script>
<!-- jquery.anisview -->
<script src="jquery.anisview.js"></script>
<!-- Animate.css (https://github.com/daneden/animate.css) -->
<link rel="stylesheet" href="animate.css">
```

#### Step 2: 타겟 엘리먼트를 준비하세요.

```html
<div class="target">Animation 1</div>
<div class="target">Animation 2</div>
<div class="target">Animation 3</div>
...
```

#### Step 3: anisview를 불러오세요.

Load, Scroll, Resize 시 애니메이션 구현하고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview();
	});
});
```

'slideInLeft' 애니메이션 구현하고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			animation: 'slideInLeft'
		});
	});
});
```

스크롤을 올리고 내릴 때마다 애니메이션 구현하고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			direction: 'both'
		});
	});
});

```

스크롤 시 한 번만 애니메이션 구현하고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			repeat: false
		});
	});
});
```

스크롤 시 애니메이션을 지연시키고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			delay: 'delay-2s'
		});
	});
});
```

스크롤 시 애니메이션의 스피를 더 빠르게 하고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target').anisview({
			speed: 'faster'
		});
	});
});
```

여러 개의 타겟에 애니메이션 구현하고 싶을 때
```javascript
$(function() {
	$(window).on('load scroll resize', function() {
		$('.target1').anisview({animation:'slideInLeft'});
		$('.target2').anisview({animation:'bounce'});
		$('.target3').anisview({animation:'zoomInLeft'});
	});
});
```

## Options

**animation**

Animate.css [https://github.com/daneden/animate.css](https://github.com/daneden/animate.css) 모든 클래스명 그대로 사용
```
DEFAULT: 'fadeInLeft'
OPTIONS: 'fadeInLeft', 'slideInUp', 'flipInX', 'jello', ...
```

**direction**

스크롤을 내릴 때만, 올릴 때만, 올리고 내릴 때만 애니메이션이 일어나게 할지 선택  
('up' : 스크롤이 웹페이지 최하단에 닿았을 때 발생)
```
DEFAULT: 'down'
OPTIONS: 'down', 'up', 'both'
```

**repeat**

스크롤을 내리거나 올릴 때마다 반복적으로 애니메이션이 일어나게 할지 선택
```
DEFAULT: true
OPTIONS: true, false
```

**delay**

애니메이션 지연 시간 선택(Animate.css delay 옵션과 동일하게 사용)
```
DEFAULT: null
OPTIONS: delay-2s, delay-3s, delay-4s, delay-5s
```

**speed**

애니메이션 스피드 선택(Animate.css speed 옵션과 동일하게 사용)
```
DEFAULT: null
OPTIONS: slow, slower, fast, faster
```