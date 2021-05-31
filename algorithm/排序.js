/**
 * 生成随机的数字
 */
function createRandomNumberArray(len) {
  const arr = [];
  while (len > 0) {
    arr.push(Math.round(Math.random() * 100));
    len--;
  }
  console.log('随机生成的数组', arr);
  console.log('---------------------------------------');
  return arr;
}
const arr = createRandomNumberArray(10);

/**
 * 选择排序
 * 每次循环,都找到最小的项,依次放到前面,使得数组前面的部分都是依次变大的排序
 * */
function MySort(arr) {
  // write code here
  let tmp = 0;
  for (let i = 0, lenI = arr.length; i < lenI - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1, lenJ = arr.length; j < lenJ; j++) {
      const item = arr[j];
      if (item < min) {
        min = item;
        minIndex = j;
      }
    }
    // 交换元素
    tmp = arr[i];
    arr[i] = min;
    arr[minIndex] = tmp;
  }
  return arr;
}

/**
 * 冒泡排序
 * 比较相邻两项大小,大数向后排,不间断的比较前后两项,直到没有可交换的元素,即认为冒泡结束
 * */
function MySort2(arr) {
  let flag = 1;
  let tmp = 0;
  while (flag > 0) {
    flag = 0;
    for (let j = 0, len = arr.length; j < len - 1; j++) {
      const item = arr[j];
      const itemNext = arr[j + 1];
      if (itemNext < item) {
        tmp = arr[j];
        arr[j] = itemNext;
        arr[j + 1] = tmp;
        flag++;
      }
    }
    console.log(`交换:${arr}`);
  }
  return arr;
}
//MySort2(arr);

/**
 * 插入排序
 * 认为数组分为两部分,前面部分是已经排序好的,后面的部分是乱序,每次循环则找到乱序部分的第一个,将这个元素插入到前面部分的有序元素中
 */
function MySort3(arr) {
  let tmp = 0;
  for (let i = 0, lenI = arr.length; i < lenI - 1; i++) {
    for (let j = i + 1; j > 0; j--) {
      let item = arr[j];
      let itemBefore = arr[j - 1];
      if (item < itemBefore) {
        tmp = itemBefore;
        arr[j - 1] = item;
        arr[j] = tmp;
        console.log(`交换`, arr.toString());
      }
    }
  }
  return arr;
}
//MySort3(arr);

/**
 * 希尔排序(增量递减排序)
 * 希尔排序是插入排序的一种优化
 * 先将数组按下标分成n个增量分组,每个序列内执行插入排序,知道这个n变成1,即认为排序已经完成
 * 增量n一般取数组长度的1/2,每次增量变小都取原来增量的1/2,直到n为1
 */
function MySort4(arr) {
  function getFloorInteger(num) {
    return Math.floor(num);
  }
  let tmp = '';
  // 增量值生成
  for (
    let increment = getFloorInteger(arr.length / 2);
    increment >= 1;
    increment = getFloorInteger(increment / 2)
  ) {
    for (let i = increment; i < arr.length; i++) {
      // 取出增量分组
      for (let j = i; j < arr.length; j = j + increment) {
        // 增量分组内进行插入排序
      }
    }
  }
}

/**
 * 归并算法
 * 是一种分而治之的思想,
 */
