import store from '@/store/state.js'

// 传入用户名，生成头像数据
export function createAvatar (userName) {
  if (userName == '') {
    return {
      name: '',
      color: ''
    }
  }
  const avatarName = createName(userName)
  const avatarColor = createColor()
  return {
    name: avatarName,
    color: avatarColor
  }
}

// 生成头像文字
export function createName (userName) {
  if (!userName) return
  // 匹配除了 英文和空格 之外的字符
  const reg0 = /[^a-z|A-Z|\s]/g
  const arr0 = userName.match(reg0) || []
  // length为0,匹配不到其他字符,就是纯英文
  if (arr0.length == 0) {
    // 提取首字母或者 空格后的第一个字母
    // let reg1 = /^\w|(?<=\s)\w/g;
    // let arr1 = userName.match(reg1) || [];
    // if (arr1.length >= 2) {
    //   // 有匹配到空格
    //   return (arr1[0] + arr1[1]).toUpperCase();
    // }
    if (userName.split(' ').length >= 2) {
      return (userName.substr(0, 1) + userName.split(' ')[1].substr(0, 1)).toUpperCase()
    } else {
      // 无匹配到空格
      return userName.length > 1 ? userName.substr(0, 2).toUpperCase() : userName.substr(0, 1).toUpperCase()
    }
  } else {
    // 不是纯英文 ,获取第一个开头的字符
    const reg2 = /^./g
    const arr2 = userName.match(reg2) || []
    if (arr2.length != 0) {
      // 非换行符开头
      return arr2[0]
    } else {
      return 'not'
    }
  }
}

// 生成头像颜色
function createColor (name) {
  const colorArr = [
    '#697ad7',
    '#e27765',
    '#6093dc',
    '#df6969',
    '#63c887',
    '#e5a841',
    '#c25ace',
    '#58b7bb'
  ]
  // const randomNum = Math.round(Math.random() * (colorArr.length - 1))
  // return colorArr[randomNum]
  return colorArr[name.charCodeAt(0) % 8]
}

// 防抖
export function debounce (fnName, delay = 500) {
  let timer = null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      this[fnName]()
    }, delay)
  }
}

// 节流
export function throttle (delay = 0) {
  let timer = null
  return function (callback) {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      timer = null
    }, delay)
    callback()
  }
}

// cookie的操作方法
// 取得cookie
export function getCookie (name) {
  var nameEQ = name + '='
  var ca = document.cookie.split(';') // 把cookie分割成组
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i] // 取得字符串
    while (c.charAt(0) == ' ') { // 判断一下字符串有没有前导空格
      c = c.substring(1, c.length) // 有的话，从第二位开始取
    }
    if (c.indexOf(nameEQ) == 0) { // 如果含有我们要的name
      return unescape(c.substring(nameEQ.length, c.length)) // 解码并截取我们要值
    }
  }
  return false
}

// 清除cookie
export function clearCookie (name) {
  setCookie(name, '', -1)
}

// 设置cookie
export function setCookie (name, value, seconds) {
  seconds = seconds || 0 // seconds有值就直接赋值，没有为0，这个根php不一样。
  var expires = ''
  if (seconds != 0) { // 设置cookie生存时间
    var date = new Date()
    date.setTime(date.getTime() + (seconds * 1000))
    expires = '; expires=' + date.toGMTString()
  }
  document.cookie = name + '=' + escape(value) + expires + '; path=/' // 转码并赋值
}

// 处理表情的方法
// 获取img中的alt属性
export function getImgAlt (content) {
  let res = null
  var regex = /(.*?)<img.*?alt="(.*?)".*?>/ig

  res = content.replace(regex, '$1$2').replace(/amp;/gi, '')
  return res
}

// 将标签的显示结果转为实体名称
export function transformTag (content) {
  return content.replace(/</gi, '&lt;').replace(/>/gi, '&gt;')
}

// 通过[&index]解析对应的表情
export function getEmojiByAlt (content, fromList = false) {
  // safari不支持断言
  // let reg = /(?<=\[&).*?(?=\])/gi;
  const reg = /\[&(\d+)\]/gi

  return content.replace(reg, (res, $1) => {
    const emoji = `<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII="  style="background:url(${require('@/assets/emojiLib/emoji.png')}) 0 0 no-repeat; width:22px; height:22px; background-position:0 ${-22 * $1}px; ${fromList == true ? 'margin-bottom:2px;' : 'margin:0 2px;'} vertical-align: middle; transform: scale(${fromList == true ? 0.8 : 1})" alt="[&${$1}]">`
    return emoji
  })
}

// 处理@的方法
// 将@标签转为特殊标识
export function transformCallTag (content) {
  // const reg = /<i[^>]+data-serviceid=['"]([^'"]+)['"]+[^>]+data-sid=['"]([^'"]+)['"]+.+?<\/i>/g
  const reg = /<i[^>]+data-cid=['"]([^'"]+)['"]+[^>]+.+?<\/i>/g
  return content.replace(reg, (res, $1) => {
    return `[&@${$1}]`
  })
}

// 将@标识转为标签
export function getCallTag (content, fromList = false) {
  const reg = /\[&@(\d+)\]/gi

  return content.replace(reg, (res, $1) => {
    // 根据id获取用户信息
    const serviceInfo = store.serviceInfoList.find(item => item.id == $1)
    if (!serviceInfo) return content

    const callTag = fromList == false ? `<i contentEditable=false style='padding:2px 8px; margin:2px 4px; font-style: normal; background-color:#ffd16b; color:#292929; display:inline-block; border-radius:8px;'>@${serviceInfo.name}</i>` : `<i contentEditable=false style='width: 203px; height: 14px; font-size: 12px; font-family: Inter-Regular, Inter; font-weight: 400; color: #585858; line-height: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;'>@${serviceInfo.name}</i>`
    return callTag
  })
}

// 识别@特殊标识并获取对应的用户信息数组
export function idCallTag (content) {
  const reg = /\[&@(\d+)\]/gi
  const arr = []
  let temp

  while ((temp = reg.exec(content)) !== null) {
    const serviceId = temp[1]
    const serviceInfo = store.serviceInfoList.find(item => item.id == serviceId)
    arr.push(serviceInfo)
  }

  return arr
}

export function textToImg (name, size = 36, fontsize = 16, color) {
  if (!name) return
  name = createName(name)
  color = color || createColor(name)
  const canvas = document.createElement('canvas')
  // 图像大小
  canvas.width = size
  canvas.height = size
  const context = canvas.getContext('2d')
  // 图像背景颜色
  context.fillStyle = color
  context.fillRect(0, 0, canvas.width, canvas.height)
  // 字体大小
  context.font = fontsize + "px 'Inter'"
  context.textAlign = 'center'
  // 字体颜色
  context.fillStyle = '#FFF'
  // 绘制位置
  context.fillText(name, size / 2, size / 1.5)
  // 显示图像
  return canvas.toDataURL('image/png')
}

export function fileToImg(name) {
  if(!CanvasRenderingContext2D.prototype.roundRect){
    CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
      if (w < 2 * r) r = w / 2;
      if (h < 2 * r) r = h / 2;
      this.beginPath();
      this.moveTo(x+r, y);
      this.arcTo(x+w, y, x+w, y+h, r);
      this.arcTo(x+w, y+h, x, y+h, r);
      this.arcTo(x, y+h, x, y, r);
      this.arcTo(x, y, x+w, y, r);
      this.closePath();
      return this;
    }
  }

  // 如果名字过长，则从中间截取部分字符
  name = name.length <= 15 ? name : name.substr(0, 5) + '...' + name.substr(-10, 10)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  ctx.font = 'bold 14px Inter'
  let textWidth = ctx.measureText(name).width
  ctx.fillText(name, 10, 27)
  ctx.lineWidth = 1
  ctx.strokeStyle = '#d0d0d0'
  ctx.roundRect(0, 0, textWidth + 20, 44, 5).stroke()
  // let img = new Image()
  // img.src = './attachment.png'
  // img.onload = function () {
  //   ctx.drawImage(img, 10, 27)
  // }
  let oImgData = ctx.getImageData(0, 0, textWidth + 42, 44)
  let oCanvas = document.createElement('canvas')
  oCanvas.width = textWidth + 22
  oCanvas.height = 44
  let oCtx = oCanvas.getContext('2d')
  oCtx.putImageData(oImgData, 0, 0)
  return oCanvas.toDataURL('image/png')
}

// 根据src获取size大小
export function getImgSizeFromSrc (src) {
  const reg = /size=(\w+)&*/

  const res = reg.exec(src)
  if (res === null) return false

  const arr = res[1].split('x')
  return { width: arr[0] * 1, height: arr[1] * 1 }
}

// 计算占位图的宽高
export function calcImgSize (width, height, maxWidth = 200, minWidth = 50, maxHeight = 200, minHeight = 50) {
  if (width > maxWidth) {
    height *= maxWidth / width
    width = maxWidth
  }

  if (height > maxHeight) {
    width *= maxHeight / height
    height = maxHeight
  }

  if (width < minWidth) {
    height *= minWidth / width
    width = minWidth
    height = height > maxHeight ? maxHeight : height
  }

  if (height < minHeight) {
    width *= minHeight / height
    height = minHeight
    width = width > maxWidth ? maxWidth : width
  }

  // return `?size=${Math.ceil(width)}x${Math.ceil(height)}`
  return { width: Math.ceil(width), height: Math.ceil(height) }
}

// 转换时区时间
export function transformTimeZone (shopTimeZone, customerTimeZone, workTime) {
  const timeMinus = Number(shopTimeZone) - Number(customerTimeZone)

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  const daysObj = {
    Monday: 0,
    Tuesday: 1,
    Wednesday: 2,
    Thursday: 3,
    Friday: 4,
    Saturday: 5,
    Sunday: 6
  }

  let workDay = daysObj[workTime.timerange]
  const time = workTime.Timestart.split(':')

  let hour = Number(time[0]) - timeMinus

  switch (hour) {
    case hour < 0:
      workDay = workDay - 1 < 0 ? 6 : workDay - 1
      hour = 24 + hour
      break
    case hour > 0:
      workDay = workDay + 1 > 6 ? 0 : workDay + 1
      hour = hour - 24
      break
  }

  return {
    Timestart: `${hour < 10 ? '0' + hour : hour}:${time[1]}`,
    Timerange: days[workDay]
  }
}

// 根据id查找对应的客服信息
export function findServiceInfo (id) {
  const arr = JSON.parse(JSON.stringify(store.serviceInfoList))
  const res = arr.find(item => item.id == id)
  if (!res) return { tips: 'not found' }
  return res
}

// 识别超链接的方法
export function idLink (content) {
    const reg = /(http|ftp|https):\/\/[\w]+(.[\w]+)([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])/g

  return content.replace(reg, (res) => {
    return `<a href="${res}" style="color:#3b59fe;" target="_blank">${res}</a>`
  })
}

// 生成uuid
export function guid () {
  function S4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
  }
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

// 通过[&*uuid]解析对应的文件
export function getFileByAlt(content, fileList) {
  const reg = /\[&\*((\w|-)+)\]/gi
  
  return content.replace(reg, (res, $1)=>{
    if(fileList === undefined || fileList[$1] === undefined ) return `[*${$1}]`
    let file = fileList[$1]
    
    const fileTag = `<img src="${file.fileSrc}" alt="[&*${$1}]" style"${file.fileType === 'attachment' ? 'height:44px;' : 'max-height:100px; max-width:100px;'} vertical-align:bottom; border-radius:10px; margin:0 2px;">`
    return fileTag
  })
}

// 通过[&?content]解析对应的订单信息
export function getOrderByAlt(content) {
  const reg = /\[&\?(.+)\]/gi
  
  return JSON.parse(content.replace(reg, `$1`))
}

// 列表展示订单号信息
export function displayOrder(content){
  const reg = /\[&\?(.+)\]/gi
  
  return '[Order details for #' + JSON.parse(content.replace(reg, `$1`)).orderNumber + ']' 
}
