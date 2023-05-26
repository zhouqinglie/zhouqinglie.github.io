(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{517:function(t,s,v){"use strict";v.r(s);var _=v(2),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("div",{staticClass:"custom-block tip"},[v("p",[t._v("网络结构解析"),v("br")])]),t._v(" "),v("h2",{attrs:{id:"常用函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用函数"}},[t._v("#")]),t._v(" 常用函数：")]),t._v(" "),v("p",[t._v("tf.where（条件语句，真A，假B）   进行条件判断，若条件判断为真，则输出A，判断为假则输出B。")]),t._v(" "),v("p",[t._v("tf.greater（a，b）   比较a，b的大小，谁大输出谁")]),t._v(" "),v("p",[t._v("np.random.randomstate.rand（维度）   返回一个0-1之间的随机数，括号中表示返回的是几维的")]),t._v(" "),v("p",[t._v("np.vstack（数组1，数组2）   将两个数组按照垂直方向叠加")]),t._v(" "),v("p",[t._v("np.mgrid [起始坐标：终点坐标：步长]   生成一个多维结构，如2D、3D图形。步长可以是 ni或者nj，表示该多维结构按照行或者列进行排列。")]),t._v(" "),v("p",[t._v(".ravel与flatten   二者的功能都是使多维数组变为一维数组。")]),t._v(" "),v("p",[t._v("ravel(散开，解开)，flatten（变平）。两者的区别在于返回拷贝（copy）还是返回视图（view），numpy.flatten()返回一份拷贝，对拷贝所做的修改不会影响（reflects）原始矩阵，而numpy.ravel()返回的是视图（view，也颇有几分C/C++引用reference的意味），会影响（reflects）原始矩阵。")]),t._v(" "),v("p",[t._v("np.c_[数组1，数组2]   将数组1和数组2配对后输出，要求二者的行数相等。")]),t._v(" "),v("h2",{attrs:{id:"神经网络"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#神经网络"}},[t._v("#")]),t._v(" 神经网络")]),t._v(" "),v("h3",{attrs:{id:"复杂度"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复杂度"}},[t._v("#")]),t._v(" 复杂度：")]),t._v(" "),v("p",[t._v("1、空间复杂度：层数=隐藏层+输出层      参数=w的个数+b的个数")]),t._v(" "),v("p",[t._v("2、时间复杂度：乘加的运算次数")]),t._v(" "),v("p",[t._v("权重更新表达式：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/PSmVAuuv.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"指数衰减学习率"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#指数衰减学习率"}},[t._v("#")]),t._v(" 指数衰减学习率：")]),t._v(" "),v("p",[t._v("可以先用较大的学习率，快速得到最优解，然后逐步减小学习率，使模型在训练后期稳定。")]),t._v(" "),v("p",[t._v("指数衰减学习率=初始学习率*学习率衰减率（当前轮数/多少轮衰减一次）")]),t._v(" "),v("h3",{attrs:{id:"常见的激活函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常见的激活函数"}},[t._v("#")]),t._v(" 常见的激活函数：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/fchTQBPM.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/lPGHv4av.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/QyHvsN9j.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/dcXfdH3U.png",alt:""}})]),t._v(" "),v("h3",{attrs:{id:"激活函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#激活函数"}},[t._v("#")]),t._v(" 激活函数：")]),t._v(" "),v("p",[t._v("1、首选relu函数；")]),t._v(" "),v("p",[t._v("2、学习率设置较小")]),t._v(" "),v("p",[t._v("3、输入特征标准化，即输入特征满足以0为均值，1为标准差的正态分布；")]),t._v(" "),v("p",[t._v("4、初始参数中心化，随机生成的参数满足以0为均值，根号下（2/当前层输入特征个数）为标准的分布。")]),t._v(" "),v("h3",{attrs:{id:"损失函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#损失函数"}},[t._v("#")]),t._v(" 损失函数：")]),t._v(" "),v("p",[t._v("损失函数是一个用来衡量期望值与实际值差值的函数（y与y_）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/qrVdJYy2.png",alt:""}})]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/TKyW8mna.png",alt:""}})]),t._v(" "),v("p",[t._v("交叉熵函数常与softmax函数结合，即输出先经过softmax函数（将多个神经元的输出，映射到（0,1）区间内）转化为0-1之间的概率值，再去计算y与y_之间的损失函数。")]),t._v(" "),v("p",[t._v("在模型拟合的过程中，往往会产生：过拟合、正确拟合和欠拟合三种情况。")]),t._v(" "),v("h3",{attrs:{id:"拟合"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#拟合"}},[t._v("#")]),t._v(" 拟合：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/BFhtVFK2.png",alt:""}})]),t._v(" "),v("p",[t._v("1、欠拟合：拟合效果差，不能有效表征特征")]),t._v(" "),v("p",[t._v("解决办法：增加输入特征、增加网络参数、减少正则化参数")]),t._v(" "),v("p",[t._v("2、正确拟合：符合预期的拟合")]),t._v(" "),v("p",[t._v("3、过拟合：模型缺乏泛化力")]),t._v(" "),v("p",[t._v("解决办法：①数据清洗，减小数据集中的噪声；②增大训练集，模型见到更多数据；③采用正则化；④增大正则化参数")]),t._v(" "),v("p",[t._v("在模型训练中，与欠拟合相比过拟合出现的更为频繁。常用正则化去缓解过拟合：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/DmQ2DWmP.png",alt:""}})]),t._v(" "),v("p",[t._v("L1：减少复杂度引起的过拟合      L2：减少噪声引起的过拟合")]),t._v(" "),v("p",[t._v("优化目标：使损失函数最小，损失函数越小，意味着二者的差值越小，即预测值越来越靠近真实值。")]),t._v(" "),v("h3",{attrs:{id:"优化步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优化步骤"}},[t._v("#")]),t._v(" 优化步骤：")]),t._v(" "),v("p",[t._v("待优化参数W，损失函数loss，学习率Lr，每次迭代一个batch，t表示当前batch迭代的总次数：")]),t._v(" "),v("p",[t._v("1、计算t时刻损失函数关于当前参数的梯度gt=δloss=δloss/δ(Wt)")]),t._v(" "),v("p",[t._v("2、计算t时刻一阶动量Mt和二阶动量Vt")]),t._v(" "),v("p",[t._v("3、计算t时刻下降梯度：ηt=lr*mt/sqrt（Vt）")]),t._v(" "),v("p",[t._v("4、计算t+1时刻参数：")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/hA7ESnkg.png",alt:""}})]),t._v(" "),v("p",[t._v("一阶动量：与梯度相关的函数")]),t._v(" "),v("p",[t._v("二阶动量：与梯度的平方相关的函数")]),t._v(" "),v("p",[t._v("常见优化方法：")]),t._v(" "),v("p",[t._v("1、SGD（无动量）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/xs3BXPKv.png",alt:""}})]),t._v(" "),v("p",[t._v("2、SGDM（增加一阶动量）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/P2zkInmv.png",alt:""}})]),t._v(" "),v("p",[t._v("3、Adagrad（增加二阶动量）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/8slYR1NB.png",alt:""}})]),t._v(" "),v("p",[t._v("4、RMSprop（增加二阶动量）")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/sSn0zAsf.png",alt:""}})]),t._v(" "),v("p",[t._v("5、Adam")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://img1.imgtp.com/2023/05/26/r1LzgBPf.png",alt:""}})]),t._v(" "),v("p",[t._v("补充：比较loss和val_loss（test_loss）的变化")]),t._v(" "),v("p",[t._v("通常回调显示的 loss 有很多种，一个总 loss 是多个子 loss 的加权求和。此处主要讲解最基础的训练情况（只有一个训练 loss，和一个验证 loss）。下文用 loss 代表训练集的损失值，在网络中用于更新网络参数；val_loss 代表验证集的损失值（有时也写成测试集损失test_loss）不对网络参数做修改，只做测试。")]),t._v(" "),v("h3",{attrs:{id:"一般训练规律"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一般训练规律"}},[t._v("#")]),t._v(" 一般训练规律：")]),t._v(" "),v("p",[t._v("loss 下降，val_loss 下降：训练网络正常，最理想情况情况。")]),t._v(" "),v("p",[t._v("loss 下降，val_loss 稳定或上升：网络过拟合。解决办法：①数据集没问题：可以向网络“中间深度”的位置添加 Dropout 层；或者逐渐减少网络的深度（靠经验删除部分模块）。②数据集有问题：可将所有数据集混洗重新分配，通常开源数据集不容易出现这种情况。")]),t._v(" "),v("p",[t._v("loss 稳定，val_loss 下降：数据集有严重问题，建议重新选择。一般不会出现这种情况。")]),t._v(" "),v("p",[t._v("loss 快速稳定，val_loss 快速稳定：如果数据集规模不小的情况下，代表学习过程遇到瓶颈，需要减小学习率（自适应动量优化器小范围修改的效果不明显）。其次考虑修改batchsize数量，如果数据集规模很小的话代表训练稳定。")]),t._v(" "),v("p",[t._v("loss 上升，val_loss 上升：可能是网络结构设计问题、训练超参数设置不当、数据集需要清洗等问题。属于训练过程中最差情况，得一个一个排除问题。")])])}),[],!1,null,null,null);s.default=a.exports}}]);