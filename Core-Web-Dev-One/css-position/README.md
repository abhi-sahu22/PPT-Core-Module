# CSS POSITIONS

Using CSS, an element can be positioned in four different ways: absolute, relative, sticky, and fixed.

Static- The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.

Absolute- An element having {position: absolute} is going to adjust its position with respect to its parent. If there is no parent, then the document is taken as the parent and it will position itself according to the document.

Relative- The element is positioned relative to its normal position. It can be moved left, right, up or down from its normal position.

Fixed- The element is positioned relative to the viewport. It stays in the same place even if the page is scrolled.

Sticky- An element with position: sticky; is positioned based on the user's scroll position. A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it sticks in place like the fixed position.

### The example codes are given in the index.html and style.css files.