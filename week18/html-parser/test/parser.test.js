import { parseHTML } from "../src/parser.js";
let assert = require("assert");

it("parse a single element", () => {
  let doc = parseHTML("<div></div>");
  let div = doc.children[0];
  assert.equal(div.tagName, "div");
  assert.equal(div.children.length, 0);
  assert.equal(div.type, "element");
  assert.equal(div.attributes.length, 2);
  // console.log(div);
});

it("parse a single element with text content", () => {
  let doc = parseHTML("<div>hello</div>");
  let text = doc.children[0].children[0];
  // console.log(doc);
  assert.equal(text.content, "hello");
  assert.equal(text.type, "text");
});

it("tag mismatch", () => {
  try {
    let doc = parseHTML("<div></vid>");
  } catch (error) {
    assert.equal(error.message, "Tag start end doesn't match!");
  }
});

it("text width <", () => {
  let doc = parseHTML("<div>a < b</div>");
  let text = doc.children[0].children[0];
  assert.equal(text.content, "a < b");
  assert.equal(text.type, "text");
});

it("width property", () => {
  let doc = parseHTML("<div id=a class='cls' data=\"abc\" ></div>");
  let div = doc.children[0];

  let count = 0;
  for(let attr of div.attributes) {
    console.log(attr)
    if(attr.name === "id") {
      count ++;
      assert.equal(attr.value, "a")
    }
    if(attr.name === "class") {
      count ++;
      assert.equal(attr.value, "cls")
    }
    if(attr.name === "data") {
      count ++;
      assert.equal(attr.value, "abc")
    }
  }
  assert.ok(count === 3)
});

it('width property 2', () => {
  let doc = parseHTML("<div id=a class='cls' data=\"abc\"></div>");
  let div = doc.children[0];

  let count = 0;
  for(let attr of div.attributes) {
    if(attr.name === "id") {
      count ++;
      assert.equal(attr.value, "a")
    }
    if(attr.name === "class") {
      count ++;
      assert.equal(attr.value, "cls")
    }
    if(attr.name === "data") {
      count ++;
      assert.equal(attr.value, "abc")
    }
  }
  assert.ok(count === 3)
})

it('width property 3', () => {
  let doc = parseHTML("<div id=a class='cls' data=\"abc\" />");
  let div = doc.children[0];

  let count = 0;
  for(let attr of div.attributes) {
    if(attr.name === "id") {
      count ++;
      assert.equal(attr.value, "a")
    }
    if(attr.name === "class") {
      count ++;
      assert.equal(attr.value, "cls")
    }
    if(attr.name === "data") {
      count ++;
      assert.equal(attr.value, "abc")
    }
  }
  assert.ok(count === 3)
})

it('script', () => {
  let content = `<div>abcde</div>
  <span>x</span>
  /script>
  <script
  <
  </s
  </sc
  </scr
  </scri
  </scrip
  </script `
  let doc = parseHTML(`<script>${content}</script>`);
  let text = doc.children[0].children[0];

  assert.equal(text.content, content)
  assert.equal(text.type, "text")
})

it('script2', () => {
  let content = `abl`
  let doc = parseHTML(`<script>${content}</script>`);
  let text = doc.children[0].children[0];

  assert.equal(text.content, content)
  assert.equal(text.type, "text")
})

it('attribute width no value', () => {
  let doc = parseHTML("<div  class />");
  
})

it('attribute width no value2', () => {
  let doc = parseHTML("<div class  id />");
  
})

it('attribute width no value3', () => {
  let doc = parseHTML("<div/>");
  
})

it('upperCase tagName', () => {
  let doc = parseHTML("<DIV></DIV>");
  
})

// XXX
it('before attributes value', () => {
  let doc = parseHTML("<div id=' a'   />");
  
})

// ??
it('235', () => {
  let doc = parseHTML("<div/");
  
})

it('192', () => {
  let doc = parseHTML('<div a="dd"/>');
  
})

it('147', () => {
  let doc = parseHTML('<div a = "dd"/>');
  
})
it('197', () => {
  let doc = parseHTML('<div a = "dd"d/>');
  
})

it('212', () => {
  let doc = parseHTML('<div a = d/>');
  
})

it('215', () => {
  let doc = parseHTML('<div a = d></div>');
  
})

// it('249', () => {
//   let doc = parseHTML('<div></>');
  
// })