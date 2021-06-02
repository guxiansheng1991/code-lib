/**
 * 精准判断一个数据的类型
 * --- typeof ---
 * 基本数据中:
 *  typeof 能够识别除了null之外的所有类型, null返回object
 * 引用类型中:
 *  typeof 都返回object,不能有效识别类型
 *
 * --- Object.prototype.toString.call(value) ---
 * 能够识别所有基本数据类型和引用类型
 */

// 测试的obj对象
const obj = {
  // =========== 1.基础数据类型 ===========
  num: 0, // number
  str: "", // string
  bool: true, // boolean
  unf: undefined, // undefined
  nul: null, // null
  sym: Symbol("sym"), // symbol
  bign: BigInt(1n), // bigint

  // =========== 2.Object类型 ===========
  // 普通对象
  obj: {
    name: "我是一个对象",
    id: 1,
  },
  // 数组
  arr: [0, 1, 2],
  // 函数
  func: function () {
    console.log("我是一个函数");
  },
  // 日期
  date: new Date(0),
  // 正则
  reg: new RegExp("/我是一个正则/ig"),
  // Map
  map: new Map().set("mapKey", 1),
  // Set
  set: new Set().add("set"),
  // =========== 3.其他 ===========
  [Symbol("1")]: 1, // Symbol作为key
};

// 4.添加不可枚举属性
Object.defineProperty(obj, "innumerable", {
  enumerable: false,
  value: "不可枚举属性",
});

// 5.设置原型对象
Object.setPrototypeOf(obj, {
  proto: "proto",
});

// 6.设置loop成循环引用的属性
obj.loop = obj;

for (const key in obj) {
  const element = obj[key];
  console.log(Object.prototype.toString.call(element));
}

// for (const key in obj) {
//   const element = obj[key];
//   console.log(typeof element);
// }
