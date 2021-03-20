
/**
 * 在node里面 每个模块内部都有一个自己的module对象
 * 在module对象里 有一个成员叫做exports对象
 * exports是module.exports的引用
 * 导出单个成员的时候不能直接用 exports='hello' 相当于直接赋值 指向了另一个引用
 * 最后一句 return module.exports 导出的是module.exports 而不是exports
 */

//module.exports.config = {}
//把config挂载到exports接口对象里
exports.config={
    name:'drj',
    age:'22',
    height:'180'
}
